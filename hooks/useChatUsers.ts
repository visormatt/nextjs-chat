// Vendor
import * as React from 'react';

// Internal
import { SocketEvents } from '@root/types';
import { useSockets } from '@root/hooks/useSockets';

const useChatUsers = (
  setUsers: React.Dispatch<React.SetStateAction<string[]>>
) => {
  // Hooks
  const socket = useSockets();

  socket?.once(SocketEvents.usersInit, (data: string[]) => {
    socket?.off(SocketEvents.usersInit);
    setUsers(() => data);
  });

  socket?.on(SocketEvents.usersUpdate, (users: string[]) => {
    setUsers(() => users);
  });

  // Mount
  React.useEffect(() => {
    socket?.emit(SocketEvents.usersInit);
  }, [socket]);
};

export { useChatUsers };
