import Link from 'next/link';

export interface NavigationProps {
  onClickLogout: () => void;
  visitor: boolean;
}

/**
 * @name Navigation
 * @description Very simple navigation bar we want across the application
 */
const Navigation: React.FC<NavigationProps> = (props) => {
  const { onClickLogout, visitor } = props;

  // Markup
  const renderLogout = () => (
    <button onClick={onClickLogout}>
      <a className="text-red-700 font-bold p-2">Logout</a>
    </button>
  );

  return (
    <nav className="flex w-full h-10 justify-center bg-gray-50 border-b">
      <Link href="/">
        <a className="p-2">Home</a>
      </Link>

      <Link href="/chat">
        <a className="p-2">Chat</a>
      </Link>

      {!visitor && renderLogout()}
    </nav>
  );
};

export { Navigation, Navigation as default };
