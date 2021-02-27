// Vendor
import { io, Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';

/**
 * @name useSockets
 * @description WIP hook for quickly interacting with socket.io
 */
const useSockets = () => {
  const [connection, setConnection] = useState<Socket>();

  // Initialize client side
  useEffect(() => {
    setConnection(() => io('/'));

    return () => {
      connection?.close();
    };
  }, []);

  return connection;
};

export { useSockets };
