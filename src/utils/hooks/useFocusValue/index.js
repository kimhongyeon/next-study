import { useState, useCallback } from "react";

const useFocusValue = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const onFocus = useCallback(() => {
    setValue(true);
  }, []);

  const onBlur = useCallback(() => {
    setValue(false);
  }, []);

  return [value, onFocus, onBlur];
};

export { useFocusValue };
