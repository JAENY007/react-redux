import React, { useState } from 'react';

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  return [inputValue, handleClearInput, handleInputValueChange];
};

export default useInput;
