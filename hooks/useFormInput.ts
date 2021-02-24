// Vendor
import { useState } from 'react';

/**
 * @name useFormInput
 * @description A convenience hook for working with text inputs
 */
const useFormInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  return { onChange, setValue, value };
};

export { useFormInput };
