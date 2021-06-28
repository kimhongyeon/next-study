import { useFocusValue } from "../../utils/hooks/useFocusValue";
import { Box, Field, Label, ErrorLabel } from "./style";

const TextField = ({
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

  const onClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Box
      id={id ? `TextField_Box_${id}` : null}
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
        id={id ? `TextField_Label_${id}` : null}
        isFocused={disabled ? false : isFocused}
        isError={isError}
        disabled={disabled}
      >
        {label}
      </Label>
      <Field
        id={id ? `TextField_Field_${id}` : null}
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
      <ErrorLabel id={id ? `TextField_ErrorLabel_${id}` : null}>
        {errorMessage}
      </ErrorLabel>
    </Box>
  );
};

export { TextField };
