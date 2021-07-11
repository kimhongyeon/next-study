import { ReactNode } from "react";

interface InputProps {
  id?: string;
  width?: string;
  widthMobile?: string;
  height?: string;
  heightMobile?: string;
  label: string;
  value: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  maxLength?: number;
  keywords?: string[];
  onChange: () => void;
}

interface BoxProps {
  width?: string;
  widthMobile?: string;
  height?: string;
  heightMobile?: string;
  isFocused: boolean;
  isError: boolean;
  disabled?: boolean;
  isKeyword?: boolean;
  isExistKeyword?: boolean;
}

interface LabelProps {
  id?: string;
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
  isKeyword?: boolean;
  onChange: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

interface ErrorLabelProps {
  id?: string;
  children: ReactNode;
}

export type { InputProps, BoxProps, LabelProps, FieldProps, ErrorLabelProps };
