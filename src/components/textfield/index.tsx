import React, { FC } from "react";
import { useFocusValue } from "../../utils/hooks/useFocusValue";
import { Box, Field, Label, ErrorLabel } from "./style";

interface iProps {
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

const TextField: FC<iProps> = ({
  id,
  width,
  widthMobile,
  height,
  heightMobile,
  label,
  value,
  placeholder = "",
  isError = false,
  errorMessage = "",
  disabled = false,
  onChange,
}) => {
  const [isFocused, onFocus, onBlur] = useFocusValue(false);

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Box
      width={width}
      widthMobile={widthMobile}
      height={height}
      heightMobile={heightMobile}
      isFocused={isFocused}
      isError={isError}
      disabled={disabled}
      onClick={onClick}
    >
      <Label
        isFocused={disabled ? false : isFocused}
        isError={isError}
        disabled={disabled}
      >
        {label}
      </Label>
      <Field
        type="text"
        isFocused={disabled ? false : isFocused}
        value={value}
        placeholder={placeholder}
        isError={isError}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={disabled}
      />
      <ErrorLabel>{errorMessage}</ErrorLabel>
    </Box>
  );
};

export { TextField };
