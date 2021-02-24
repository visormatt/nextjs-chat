// Vendor
import * as React from 'react';

// Internal
import { Message, SocketEvents } from '@root/types';
import { useSockets } from '@root/hooks/useSockets';

/**
 * @name useChatMessages
 * @description Grab a truncated list of messages as we enter into the chat
 * room, ideally we'd implement pagination here
 */
const useChatMessages = (
  messages: Message[],
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  // Hooks
  const socket = useSockets();

  /**
   * We get any existing messages "once" to prevent updating as other
   * users join the chat, rather we listen for "new" messages
   */
  socket?.once(SocketEvents.messagesInit, (data: Message[]) => {
    socket?.off(SocketEvents.messagesInit);
    setMessages(() => data);
  });

  socket?.once(SocketEvents.messagesNew, (data: Message) => {
    setMessages(() => [...messages, data]);
  });

  // Mount
  React.useEffect(() => {
    socket?.emit(SocketEvents.messagesInit);
  }, [socket]);
};

export { useChatMessages };
