import { NextPage } from 'next';
import styled from 'styled-components';
import { TextField } from '../../components/textfield';
import { eInputValidationType, eInputValueType, useInputValue } from '../../utils/hooks/useInputValue';

const Box = styled.div`
    margin: 24px;
`;

const ItemBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;

    &:first-child {
        margin-top: 0;
    }
`;

const ItemText = styled.p`
    margin-left: 16px;
`;

const Components: NextPage = () => {
    const [numberValue, onChangeNumberValue, isErrorNumberValue, errorMessageNumberValue] = useInputValue('', {
        inputType: eInputValueType.ONLY_NUMBER,
    });

    const [stringValue, onChangeStringValue, isErrorStringValue, errorMessageStringValue] = useInputValue('', {
        inputType: eInputValueType.ONLY_STRING,
    });

    const [name, onChangeName, isErrorName, errorMessageName] = useInputValue('', {
        validationType: eInputValidationType.NAME,
    });

    const [phone, onChangePhone, isErrorPhone, errorMessagePhone] = useInputValue('', {
        inputType: eInputValueType.PHONE,
        validationType: eInputValidationType.NAME,
    });

    const [email, onChangeEmail, isErrorEmail, errorMessageEmail] = useInputValue('', {
        validationType: eInputValidationType.EMAIL,
    });

    return (
        <Box>
            <h1>컴포넌트 모음</h1>
            <div>
                <h2>텍스트필드</h2>
                <ItemBox>
                    <TextField
                        value={numberValue}
                        onChange={onChangeNumberValue}
                        isError={isErrorNumberValue}
                        errorMessage={errorMessageNumberValue}
                        placeholder="숫자만 입력해주세요."
                    />
                    <ItemText>숫자 : {numberValue}</ItemText>
                </ItemBox>
                <ItemBox>
                    <TextField
                        value={stringValue}
                        onChange={onChangeStringValue}
                        isError={isErrorStringValue}
                        errorMessage={errorMessageStringValue}
                        placeholder="문자만 입력해주세요."
                    />
                    <ItemText>문자 : {stringValue}</ItemText>
                </ItemBox>
                <ItemBox>
                    <TextField
                        value={name}
                        onChange={onChangeName}
                        isError={isErrorName}
                        errorMessage={errorMessageName}
                        placeholder="이름을 입력해주세요."
                    />
                    <ItemText>이름 : {name}</ItemText>
                </ItemBox>
                <ItemBox>
                    <TextField
                        value={phone}
                        onChange={onChangePhone}
                        isError={isErrorPhone}
                        errorMessage={errorMessagePhone}
                        placeholder="010-1234-5678"
                    />
                    <ItemText>휴대폰번호 : {phone}</ItemText>
                </ItemBox>
                <ItemBox>
                    <TextField
                        value={email}
                        onChange={onChangeEmail}
                        isError={isErrorEmail}
                        errorMessage={errorMessageEmail}
                        placeholder="xxx@xxx.com"
                    />
                    <ItemText>이메일 : {email}</ItemText>
                </ItemBox>
            </div>
        </Box>
    );
};

export default Components;
