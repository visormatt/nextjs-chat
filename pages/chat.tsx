// Vendor
import Head from 'next/head';
import { useRecoilValue } from 'recoil';

// Internal
import { Container as ChatRoom } from '@root/components/ChatRoom/Container';
import { FormLogin } from '@root/components/FormLogin';
import { SITE_TITLE } from '@root/common/settings';
import { userAtom } from '@root/atoms/user';

/**
 * @name Chat
 * @description Page view for our chat application which requires a user
 * to login before they can chat. None of the data is persistent any longer
 * than the servers lifetime, and users die when they close the tab.
 */
const Chat: React.FC = (_props) => {
  // Hooks
  const { visitor } = useRecoilValue(userAtom);

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Head>
        <title>Chat List | {SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <h1 className="text-3xl font-bold">💬 Chat</h1>
        {!visitor && <ChatRoom className="flex flex-col flex-1" />}
        {visitor && <FormLogin />}
      </main>
    </div>
  );
};

export { Chat, Chat as default };
