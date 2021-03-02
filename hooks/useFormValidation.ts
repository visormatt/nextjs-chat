// Vendor
import { useEffect, useState } from 'react';

/**
 * @name useFormValidation
 * @description Simple hook that takes a form element as a ref and returns
 * the validity using HTML validation and the rules on the form inputs
 */
const useFormValidation = (
  formRef: React.RefObject<HTMLFormElement>,
  dependencies: unknown[]
) => {
  // Hooks
  const [valid, setValid] = useState(false);

  // Setup
  const { current } = formRef;

  useEffect(() => {
    if (current) {
      const isValid = current.checkValidity();
      setValid(() => isValid);
    }
  }, dependencies);

  return valid;
};

export { useFormValidation };
