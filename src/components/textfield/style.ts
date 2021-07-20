import styled from 'styled-components';
import { DEFAULT_DEVICE, DEFAULT_COLOR, DEFAULT_SPACE_SIZE, DEFAULT_TRANSITION_TIME } from '../../utils/default';
import { BoxProps, FieldProps, ErrorLabelProps } from './interface';

const borderColorBox = ({ isError, isFocused, disabled }: BoxProps) => {
    if (!disabled) {
        if (!isError) {
            if (isFocused) {
                return DEFAULT_COLOR.PRIMARY;
            } else {
                return '#E0E3EC';
            }
        } else {
            return DEFAULT_COLOR.ERROR;
        }
    } else {
        return DEFAULT_COLOR.DISABLE;
    }
};

const defaultWidth = '200px';
const defaultHeight = '54px';

const Box = styled.div<BoxProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => (width ? width : defaultWidth)};
    height: ${({ height }) => (height ? height : defaultHeight)};
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    background-color: ${DEFAULT_COLOR.WHITE};
    border-color: ${(props) => borderColorBox(props)};
    transition: border-color ${DEFAULT_TRANSITION_TIME.SHORT};
    cursor: default;
    box-sizing: border-box;

    @media ${() => DEFAULT_DEVICE.MOBILE} {
        width: ${({ widthMobile }) => (widthMobile ? widthMobile : defaultWidth)};
        height: ${({ heightMobile }) => (heightMobile ? heightMobile : defaultHeight)};
    }
`;

const Field = styled.input<FieldProps>`
    width: 100%;
    height: 28px;
    border: none;
    font-size: 16px;
    box-sizing: border-box;
    padding: 0 ${DEFAULT_SPACE_SIZE.MIDDLE} 0 ${DEFAULT_SPACE_SIZE.MIDDLE};

    &::placeholder {
        color: #8c8c8c;
    }
`;

const ErrorLabel = styled.label<ErrorLabelProps>`
    position: absolute;
    color: ${DEFAULT_COLOR.ERROR};
    top: calc(100% + 5px);
    left: 0;
    font-size: 12px;
`;

export { Box, Field, ErrorLabel };
