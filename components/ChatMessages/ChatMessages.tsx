// Vendor
import * as React from 'react';
import classnames from 'classnames';

// Internal
import { ChatMessage } from '@root/components/ChatMessage';
import { Message } from '@root/types';
import { scrollDivToBottom } from '@root/common/utils';

export interface ChatMessagesProps {
  className?: string;
  messages: Message[];
}

/**
 * @name ChatMessages
 * @description Lists out the chat messages with the sender which we
 * group blocks of messages to 1 author field when sequential
 */
const ChatMessages: React.FC<ChatMessagesProps> = (props) => {
  const { className, messages } = props;

  // Hooks
  const messagesRef = React.useRef<HTMLDivElement>(null);

  // Styles
  const css = `border border-gray-300 flex-1 p-4 overflow-scroll`;
  const classes = classnames(className, css);

  // Markup
  const renderMessage = (data: Message, index: number) => {
    const prevMessage = messages[index - 1];
    const showAuthor = prevMessage && prevMessage.email !== data.email;

    return (
      <ChatMessage author={showAuthor} data={data} key={`message-${index}`} />
    );
  };

  // Life Cycle
  React.useEffect(() => {
    if (messagesRef.current) scrollDivToBottom(messagesRef.current);
  }, [messages]);

  return (
    <div className={classes} ref={messagesRef}>
      {messages.map(renderMessage)}
    </div>
  );
};

export { ChatMessages, ChatMessages as default };
