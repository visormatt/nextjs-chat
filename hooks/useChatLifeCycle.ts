// Vendor
import * as React from 'react';
import { useRecoilValue } from 'recoil';

// Internal
import { SocketEvents } from '@root/types';
import { useSockets } from '@root/hooks/useSockets';
import { userAtom } from '@root/atoms/user';

/**
 * @name useChatLifeCycle
 * @description Handle the user entering, exiting the chat via route changes.
 * We also use the browser event to capture the tab/window closing
 */
const useChatLifeCycle = () => {
  // Hooks
  const socket = useSockets();
  const user = useRecoilValue(userAtom);

  // Handlers
  const onUnload = (_event: BeforeUnloadEvent) => {
    socket?.emit(SocketEvents.userLeave, user.email);
  };

  // Mount / un-mount
  React.useEffect(() => {
    socket?.emit(SocketEvents.userJoin, user.email);

    return () => {
      socket?.emit(SocketEvents.userLeave, user.email);
    };
  }, [socket]);

  // Window / Tab Close
  React.useEffect(() => {
    window.addEventListener('beforeunload', onUnload);

    return () => {
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [socket]);
};

export { useChatLifeCycle };
