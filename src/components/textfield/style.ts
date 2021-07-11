import styled, { css } from "styled-components";
import {
  DEFAULT_DEVICE,
  DEFAULT_COLOR,
  DEFAULT_SPACE_SIZE,
  DEFAULT_TRANSITION_TIME,
} from "../../utils/default";
import {
  BoxProps,
  LabelProps,
  FieldProps,
  ErrorLabelProps,
} from "./interfaces";

const borderColorBox = ({ isError, isFocused, disabled }: BoxProps) => {
  if (!disabled) {
    if (!isError) {
      if (isFocused) {
        return DEFAULT_COLOR.PRIMARY;
      } else {
        return "#E0E3EC";
      }
    } else {
      return DEFAULT_COLOR.ERROR;
    }
  } else {
    return DEFAULT_COLOR.DISABLE;
  }
};

const defaultWidth = "200px";
const defaultHeight = "54px";

const Box = styled.div<BoxProps>`
  display: inline-block;
  position: relative;
  width: ${({ width }) => (width ? width : defaultWidth)};
  height: ${({ height }) => (height ? height : defaultHeight)};
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  background-color: ${DEFAULT_COLOR.WHITE};
  border-color: ${(props) => borderColorBox(props)};
  transition: border-color ${DEFAULT_TRANSITION_TIME.SHORT};
  cursor: default;

  ${({ isKeyword, isExistKeyword, height }) => {
    if (isKeyword && !isExistKeyword) {
      return css`
        height: 70px;
        min-height: ${height ? height : defaultHeight};
      `;
    }

    if (isExistKeyword) {
      return css`
        height: 110px;
        min-height: ${height ? height : defaultHeight};
      `;
    }
  }}

  @media ${() => DEFAULT_DEVICE.MOBILE} {
    width: ${({ widthMobile }) => (widthMobile ? widthMobile : defaultWidth)};
    height: ${({ heightMobile }) =>
      heightMobile ? heightMobile : defaultHeight};

    ${({ isKeyword, isExistKeyword, heightMobile }) => {
      if (isKeyword && !isExistKeyword) {
        return css`
          height: 70px;
          min-height: ${heightMobile ? heightMobile : defaultHeight};
        `;
      }

      if (isExistKeyword) {
        return css`
          height: 110px;
          min-height: ${heightMobile ? heightMobile : defaultHeight};
        `;
      }
    }}
  }
`;

const Label = styled.label<LabelProps>`
  position: absolute;
  left: ${DEFAULT_SPACE_SIZE.MIDDLE};
  top: ${({ isFocused }) => (isFocused ? "-5px" : DEFAULT_SPACE_SIZE.SMALL)};
  padding: 0 ${DEFAULT_SPACE_SIZE.TINY} 0 ${DEFAULT_SPACE_SIZE.TINY};
  font-size: 12px;
  color: ${({ isError }) => (isError ? DEFAULT_COLOR.ERROR : "#222222")};
  background-color: ${DEFAULT_COLOR.WHITE};
  transition: top ${DEFAULT_TRANSITION_TIME.SHORT};
`;

const Field = styled.input<FieldProps>`
  position: absolute;
  width: calc(
    100% - ${DEFAULT_SPACE_SIZE.MIDDLE} - ${DEFAULT_SPACE_SIZE.MIDDLE}
  );
  height: 28px;
  left: ${DEFAULT_SPACE_SIZE.MIDDLE};
  top: ${({ isFocused }) => (isFocused ? "12px" : "20px")};
  border: none;
  font-size: 16px;
  transition: top ${DEFAULT_TRANSITION_TIME.SHORT};

  &::placeholder {
    color: #8c8c8c;
  }

  ${({ isKeyword, isFocused }) => {
    if (isKeyword) {
      return css`
        width: calc(
          100% - ${DEFAULT_SPACE_SIZE.MIDDLE} - ${DEFAULT_SPACE_SIZE.MIDDLE} -
            ${DEFAULT_SPACE_SIZE.MIDDLE}
        );
        height: 40px;
        background-color: #f8f9fc;
        border-radius: 6px;
        top: ${isFocused ? "16px" : "24px"};
        padding: 0 ${DEFAULT_SPACE_SIZE.SMALL} 0 ${DEFAULT_SPACE_SIZE.SMALL};
      `;
    }
  }}
`;

const ErrorLabel = styled.label<ErrorLabelProps>`
  position: absolute;
  color: ${DEFAULT_COLOR.ERROR};
  top: calc(100% + 5px);
  left: 0;
  font-size: 12px;
`;

export { Box, Label, Field, ErrorLabel };
