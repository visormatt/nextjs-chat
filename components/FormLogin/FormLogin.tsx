// Vendor
import * as React from 'react';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';

// Internal
import { useFormInput } from '@root/hooks/useFormInput';
import { useFormValidation } from '@root/hooks/useFormValidation';
import { userAtom } from '@root/atoms/user';

/**
 * @name FormLogin
 * @description Basic form for login which makes use of basic HTML validation
 */
const FormLogin = function () {
  // Hooks
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputEmail = useFormInput('');
  const inputName = useFormInput('');
  const isValid = useFormValidation(formRef, [inputEmail, inputName]);
  const [_state, setState] = useRecoilState(userAtom);

  // Styles
  const classesBtn = classnames('btn', { disabled: !isValid });

  // Handlers
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState(() => ({
      email: inputEmail.value,
      loggedIn: true,
      name: inputName.value
    }));
  };

  return (
    <form className="mt-10 mx-auto" onSubmit={onSubmit} ref={formRef}>
      <fieldset className="mx-auto w-2/5">
        <label htmlFor="name">Name</label>
        <input
          autoComplete="name"
          id="name"
          onChange={inputName.onChange}
          placeholder="Name"
          required
          type="text"
          value={inputName.value}
        />

        <label htmlFor="email">Email</label>
        <input
          autoComplete="email"
          id="email"
          onChange={inputEmail.onChange}
          placeholder="email address"
          required
          type="email"
          value={inputEmail.value}
        />

        <button className={classesBtn} type="submit">
          Login
        </button>
      </fieldset>
    </form>
  );
};

export { FormLogin, FormLogin as default };
