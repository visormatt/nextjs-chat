// Vendor
import Head from 'next/head';

// Internal
import { SITE_TITLE } from '@root/common/settings';

/**
 * @name Home
 * @description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 */
const Home: React.FC = (_props) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Head>
        <title>Welcome | {SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">👋 Welcome</h1>
        <hr className="my-4" />

        <h2 className="text-2xl font-medium mb-4 mt-8">
          TruckMap Web JS Engineering Challenge
        </h2>
        <p>
          This project is intended to touch a few key technologies that TruckMap
          uses for its web applications to help us understand how you think
          about trade-offs between time, usefulness, and simplicity in a
          realistic setting.
        </p>
        <p>
          We are respectful of your time. If we’ve requested you do this
          challenge we’ll pay $200 for any submission in good faith effort,
          regardless if you’re ultimately hired.
        </p>

        <h2 className="text-2xl font-medium mb-4 mt-8">Project Description</h2>
        <p>
          You will build a real-time React.JS chat room that allows users to log
          in and send each other messages and links. Links shared in the chat
          should include a preview of the link inline with the message (think
          Slack, iMessage, or Android Messages).
        </p>

        <h2 className="text-2xl font-medium mb-4 mt-8">Requirements</h2>
        <ul className="list-outside list-disc ml-6">
          <li>
            Create a new <b>NextJS</b> application configured to use{' '}
            <b>tailwind.css</b> for UI styles and <b>TypeScript</b>.
          </li>
          <li>Use socket.io to add the real-time chat functionality.</li>
          <li>
            Use <span style={{ textDecoration: 'line-through' }}>Redux</span>,{' '}
            <b>Recoil</b>, or <b>React Hooks</b> to store the application's
            state and process any client-side network requests.
          </li>
          <li>
            URL links shared in the chat should show an extracted metadata
            preview (page title, image, description/summary, etc. like Slack).
            While it would be fine to use pre-existing components for the
            preview in a real setting, please implement the metadata fetching
            yourself on the server (not ajax in the client) and be mindful of
            the async experience of this for rendering in the client while that
            info is loading for other users.
          </li>
          <li>
            In the client, show a list of all users who are currently logged in
            to the room.
          </li>
        </ul>
      </main>
    </div>
  );
};

export { Home, Home as default };
