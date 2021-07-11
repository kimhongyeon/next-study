import { eInputValueType, eInputValidationType, eInputAutoInputType } from '../enums';

interface Options {
    autoInputType?: eInputAutoInputType;
    inputType?: eInputValueType;
    validationType?: eInputValidationType;
    maxLength?: number;
}

export type { Options, eInputValueType, eInputValidationType, eInputAutoInputType };
