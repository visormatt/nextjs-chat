// Vendor
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';

// Internal
import { Message } from '@root/types';
import { userAtom } from '@root/atoms/user';

export interface ChatMessageProps {
  author: boolean;
  data: Message;
}

/**
 * @name ChatMessage
 * @description A single chat message
 */
const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  const { author, data } = props;

  // Hooks
  const { email: userEmail } = useRecoilValue(userAtom);

  // Setup
  const { email, message } = data;
  const isSender = userEmail === email;
  const showAuthor = !isSender && author;

  // Styles
  const type = isSender ? 'sender' : 'receiver';
  const classes = classnames('message rounded-lg', type);
  const classesAuthor = 'text-xs text-gray-500 italic pb-2 pl-2';

  return (
    <div className={type} style={{ maxWidth: 300 }}>
      {showAuthor && <h3 className={classesAuthor}>{data.email}</h3>}
      <div className={classes}>{message}</div>
    </div>
  );
};

export { ChatMessage, ChatMessage as default };
