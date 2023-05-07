import styled from "styled-components/native";

interface Props {
  placeholder?: string;
  value?: string;
  handler?: (text: string) => void;
  submitHandler?: () => void;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
}

const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: "#969696",
})`
  width: 240px;
  height: 40px;
  font-size: 18px;
  border: 1px solid #969696;
  border-radius: 8px;
  padding: 0 10px;
  text-align: center;
`;

const Input = (props: Props) => {
  return (
    <StyledInput
      onChangeText={props.handler}
      placeholder={props.placeholder}
      value={props.value}
      onSubmitEditing={props.submitHandler}
      returnKeyType={props.returnKeyType}
    />
  );
};

export default Input;
