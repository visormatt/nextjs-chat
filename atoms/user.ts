// Vendor
import { atom } from 'recoil';

// Internal
import { User } from '@root/types';

export const userDefault: User = {
  loggedIn: false
};

export const userAtom = atom<User>({
  key: 'user',
  default: userDefault
});
