// Vendor
import * as React from 'react';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';

// Internal
import { ChatMessages } from '@root/components/ChatMessages';
import { ChatUserList } from '@root/components/ChatUserList';
import { useFormInput } from '@root/hooks/useFormInput';
import { useFormValidation } from '@root/hooks/useFormValidation';
import { userAtom } from '@root/atoms/user';

export interface ChatRoomProps {
  className?: string;
  messages: any[];
  onSend: (data: any) => void;
  users: string[];
}

/**
 * @name ChatRoom
 * @description Broken out by room which would make it pretty easy
 * to create multiple rooms as needed
 */
const ChatRoom: React.FC<ChatRoomProps> = (props) => {
  const { className, messages, onSend, users } = props;

  // Hooks
  const inputMessage = useFormInput('');
  const refMessage = React.useRef<HTMLTextAreaElement>(null);
  const refForm = React.useRef<HTMLFormElement>(null);
  const isValid = useFormValidation(refForm, [inputMessage]);
  const user = useRecoilValue(userAtom);

  // Styles
  const classes = classnames(className);
  const classesBtn = classnames('btn m-0', {
    disabled: inputMessage.value === ''
  });

  // Handlers
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) return;

    onSend({
      email: user.email,
      message: inputMessage.value
    });

    inputMessage.setValue(() => '');
    refMessage.current?.focus();
  };

  return (
    <div className={classes}>
      <div
        className="flex flex-1 flex-col md:flex-row"
        style={{ height: '50vh' }}
      >
        <ChatUserList users={users} />
        <span style={{ flexBasis: 20 }} />
        <ChatMessages messages={messages} />
      </div>

      <form className="mt-4" onSubmit={onSubmit} ref={refForm}>
        <textarea
          className="border border-gray-300"
          id="message"
          name="message"
          onChange={inputMessage.onChange}
          placeholder="Type your message already ;)"
          ref={refMessage}
          required
          rows={3}
          value={inputMessage.value}
        />
        <button className={classesBtn} type="submit">
          Send
        </button>
      </form>

      <hr className="my-10" />

      <h2 className="font-bold mb-4 text-lg">Link Population</h2>
      <p>
        So I didn't go all the way down this rabbit hole due to time, I just
        don't have enough of it. However I've got tons of ideas on how this
        would/could improve. It was fun, haven't really used NextJS much so that
        was fun. Also it's been <b>years</b> since having played with SocketIO
        so that was entertaining. All in all, good code challenge.
      </p>

      <p>
        So I didn't complete the link feature you noted. However I did start the
        API endpoint for scraping the info which you can see at the link below,
        it's not perfect but a great start.
      </p>
      <a
        className="font-bold pl-4"
        href="http://localhost:3000/api/scrapper?url=https://www.mattscholta.com/"
      >
        * Scrapper link
      </a>
    </div>
  );
};

export { ChatRoom, ChatRoom as default };
