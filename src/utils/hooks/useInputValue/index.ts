import { useState, useCallback } from "react";
import {
  eInputValueType,
  eInputValidationType,
  eInputAutoInputType,
} from "./enums";
import { Options } from "./interfaces";

const initErrorMessageList = [
  "이름을 입력해주세요.",
  "휴대폰번호를 입력해주세요.",
  "이메일을 입력해주세요.",
  "생년월일을 입력해주세요.",
  "연월을 입력해주세요.",
  "성별을 선택해주세요.",
];

const useInputValue = (initialValue: string = "", options: Options = {}) => {
  if (initialValue === undefined || initialValue === null) {
    initialValue = "";
  }

  let initErrorMessage = null;

  if (!initialValue && options.validationType !== undefined) {
    initErrorMessage = initErrorMessageList[options.validationType];
  }

  if (
    initialValue === "0" &&
    options.validationType === eInputValidationType.GENDER
  ) {
    initErrorMessage = initErrorMessageList[options.validationType];
  }

  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState(initErrorMessage);
  const [isError, setIsError] = useState(initErrorMessage ? true : false);

  const autoInputValue = (value: string, type: eInputAutoInputType): string => {
    if (type === eInputAutoInputType.PHONE) {
      const newValue = value
        .replace(/[^0-9]/g, "")
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          "$1-$2-$3"
        )
        .replace("--", "-");

      if (newValue.length > 13) {
        return value.substring(0, value.length - 1);
      }

      const reg = /^[0-9*-]+$/;
      if (!reg.test(value) && value !== "") {
        return value;
      }

      return newValue;
    }

    return value;
  };

  const isCanInput = (value: string, type: eInputValueType): boolean => {
    if (type === eInputValueType.ONLY_NUMBER) {
      return !isNaN(value as any);
    } else if (type === eInputValueType.ONLY_STRING) {
      return !/\d/.test(value);
    } else if (type === eInputValueType.PHONE) {
      return /[0-9-]/.test(value);
    }

    return true;
  };

  const getValidateMessage = (
    value: string,
    type: eInputValidationType,
    length: number = 0
  ): string => {
    if (value.length === 0 && type !== eInputValidationType.LENGTH) {
      return initErrorMessageList[type];
    }

    if (type === eInputValidationType.NAME) {
      const reg = /^[a-zA-Z가-힣]+$/;

      if (!reg.test(value.replace(/ /g, ""))) {
        return "한글 및 영어 대소문자만 입력 가능해요.";
      }

      if (value.length < 1 || value.length > 20) {
        return "최소 1자, 최대 20자까지 입력할 수 있어요.";
      }
    } else if (type === eInputValidationType.PHONE) {
      const reg = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

      if (!reg.test(value)) {
        return "휴대폰번호를 올바르게 입력해주세요.";
      }
    } else if (type === eInputValidationType.EMAIL) {
      const reg =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

      if (!reg.test(value)) {
        return "이메일을 올바르게 입력해주세요.";
      }

      if (value.length < 5 || value.length > 50) {
        return "최소 5자, 최대 50자까지 입력할 수 있어요.";
      }
    } else if (type === eInputValidationType.BIRTH_DAY) {
      const reg = /^(19|20)\d{2}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[0-1])$/;

      if (!reg.test(value)) {
        return "생년월일을 올바르게 입력해주세요.";
      }
    } else if (type === eInputValidationType.MONTH) {
      const reg = /^(19|20)\d{2}.(0[1-9]|1[012])$/;

      if (!reg.test(value)) {
        return "연월을 올바르게 입력해주세요.";
      }
    } else if (type === eInputValidationType.GENDER) {
      if (value === "0") {
        return "성별을 선택해주세요.";
      }
    } else if (type === eInputValidationType.LENGTH) {
      if (value.length > length) {
        return `최대 ${length}자까지 입력할 수 있어요.`;
      }
    }

    return "";
  };

  const onChange: any = useCallback(
    (event: { currentTarget: { value: string } }) => {
      let inputValue =
        typeof event === "string"
          ? event
          : (event.currentTarget.value as string);

      if (options.autoInputType !== undefined) {
        inputValue = autoInputValue(inputValue, options.autoInputType);
      }

      if (options.inputType !== undefined) {
        if (!isCanInput(inputValue, options.inputType)) {
          setValue(inputValue.substring(0, inputValue.length - 1));
          return;
        }
      }

      if (options.validationType !== undefined) {
        const validateMessage = getValidateMessage(
          inputValue,
          options.validationType,
          options.maxLength
        );
        setErrorMessage(validateMessage);
        setIsError(validateMessage ? true : false);
      }

      setValue(inputValue);
    },
    []
  );

  return [value as string, onChange, isError, errorMessage];
};

export {
  useInputValue,
  eInputValueType,
  eInputValidationType,
  eInputAutoInputType,
};
