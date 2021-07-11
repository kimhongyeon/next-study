import { useState, useCallback } from 'react';

const useFocusValue = (initialValue: boolean = false) => {
    const [value, setValue] = useState(initialValue);

    const onFocus: any = useCallback(() => {
        setValue(true);
    }, []);

    const onBlur: any = useCallback(() => {
        setValue(false);
    }, []);

    return [value, onFocus, onBlur];
};

export { useFocusValue };
