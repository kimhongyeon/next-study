import { ReactNode } from 'react';

interface BoxProps {
    width?: string;
    widthMobile?: string;
    height?: string;
    heightMobile?: string;
    isFocused: boolean;
    isError: boolean;
    disabled?: boolean;
}

interface FieldProps {
    id?: string;
    value: string;
    placeholder?: string;
    isFocused: boolean;
    isError: boolean;
    readOnly?: boolean;
    onChange: () => void;
    onFocus: () => void;
    onBlur: () => void;
}

interface ErrorLabelProps {
    id?: string;
    children: ReactNode;
}

export type { BoxProps, FieldProps, ErrorLabelProps };
