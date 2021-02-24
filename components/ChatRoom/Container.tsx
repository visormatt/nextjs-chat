// Vendor
import * as React from 'react';
import { useRecoilValue } from 'recoil';

// Internal
import { ChatRoom } from '@root/components/ChatRoom';
import { useSockets } from '@root/hooks/useSockets';
import { Message, SocketEvents } from '@root/types';
import { userAtom } from '@root/atoms/user';
import { useChatLifeCycle } from '@root/hooks/useChatLifeCycle';
import { useChatMessages } from '@root/hooks/useChatMessages';
import { useChatUsers } from '@root/hooks/useChatUsers';

export interface ContainerProps {
  className?: string;
}

/**
 * @name Container
 * @description This container really holds the majority of the information
 * we need for a very simple implementation
 */
const Container: React.FC<ContainerProps> = (props) => {
  // Hooks
  const socket = useSockets();
  const user = useRecoilValue(userAtom);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [users, setUsers] = React.useState<string[]>([]);

  // Handlers
  const onSend = (data: Message) => {
    // TODO: Rollbar or similar. The web-sockets should be supported here
    if (!socket) return;

    socket.emit(SocketEvents.messagesSend, { ...data, id: user.email });
  };

  // Life Cycle
  useChatMessages(messages, setMessages);
  useChatUsers(setUsers);
  useChatLifeCycle();

  return (
    <ChatRoom {...props} messages={messages} onSend={onSend} users={users} />
  );
};

export { Container, Container as default };
