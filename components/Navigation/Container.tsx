import * as React from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { userAtom, userDefault } from '@root/atoms/user';
import { Navigation } from './Navigation';

export interface ContainerProps {}

/**
 * @name Container
 * @description Manages the logic around logging in/out for the navigation
 */
const Container: React.FC<ContainerProps> = (_props) => {
  // Hooks
  const [state, setState] = useRecoilState(userAtom);
  const router = useRouter();

  // Setup
  const { visitor } = state;

  // Handlers
  const onClickLogout = () => {
    setState(() => userDefault);
    router.push('/');
  };

  return <Navigation onClickLogout={onClickLogout} visitor={visitor} />;
};

export { Container, Container as default };
