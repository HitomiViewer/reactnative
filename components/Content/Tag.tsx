import styled from "styled-components/native";

type Props = {
  tag: {
    tag: string;
    female: string;
    male: string;
  };
};

const Wrapper = styled.View`
  padding: 2px 4px;
  border-radius: 4px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #fff;
`;

const Tag = (props: Props) => {
  return (
    <>
      <Wrapper
        style={{
          backgroundColor:
            props.tag.female == "1"
              ? "#ff6d6d"
              : props.tag.male == "1"
              ? "#4195f4"
              : "#bdbdbd",
        }}
      >
        <Text>{props.tag.tag}</Text>
      </Wrapper>
    </>
  );
};

export default Tag;
