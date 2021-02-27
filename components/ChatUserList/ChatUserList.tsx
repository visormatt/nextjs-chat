// Vendor
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';

// Internal
import { userAtom } from '@root/atoms/user';

export interface ChatUserListProps {
  className?: string;
  users: string[];
}

/**
 * @name ChatUserList
 * @description View that lists out all the active users
 */
const ChatUserList: React.FC<ChatUserListProps> = (props) => {
  const { className, users } = props;

  // Hooks
  const user = useRecoilValue(userAtom);

  // Styles
  const css = `border border-gray-300 overflow-scroll min-h-full`;
  const classes = classnames(className, css);

  // Markup
  const renderUser = (email: string) => {
    const isMatch = email === user.email;
    const classesUser = classnames('border-b px-4 py-2 text-sm', {
      'bg-green-300': isMatch
    });

    return (
      <li className={classesUser} key={email}>
        {email}
      </li>
    );
  };

  return (
    <ul className={classes} style={{ flexBasis: 200 }}>
      {users.map(renderUser)}
    </ul>
  );
};

export { ChatUserList, ChatUserList as default };
