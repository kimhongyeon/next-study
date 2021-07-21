import React, { FC } from 'react';
import { useFocusValue } from 'utils/hooks/useFocusValue';
import { BoxProps, FieldProps } from './interface';
import { Box, Field, ErrorLabel } from './style';

interface iProps {
    id?: string;
    width?: string;
    widthMobile?: string;
    height?: string;
    heightMobile?: string;
    value: string;
    placeholder?: string;
    isError?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    onChange: () => void;
}

const TextField: FC<iProps> = ({
    id,
    width,
    widthMobile,
    height,
    heightMobile,
    value,
    placeholder = '',
    isError = false,
    errorMessage = '',
    disabled = false,
    onChange,
}) => {
    const [isFocused, onFocus, onBlur] = useFocusValue(false);

    const onClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const boxProps: BoxProps = {
        width,
        widthMobile,
        height,
        heightMobile,
        isFocused,
        isError,
        disabled,
    };

    const fieldProps: FieldProps = {
        value,
        placeholder,
        isFocused,
        isError,
        readOnly: disabled,
        onChange,
        onFocus,
        onBlur,
    };

    if (id) {
        fieldProps.id = id;
    }

    return (
        <Box {...boxProps} onClick={onClick}>
            <Field {...fieldProps} />
            <ErrorLabel>{errorMessage}</ErrorLabel>
        </Box>
    );
};

export { TextField };
