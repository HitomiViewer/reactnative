import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Detail as IDetail } from "../../@types/hitomi";
import getDetail from "../../api/Detail";
import Tag from "./Tag";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import RetryImage from "./Image";

type Props = {
  number: number;
};

const Wrapper = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 10px;
  border-bottom-color: #dcdcdc;
  border-bottom-width: 2px;
  padding: 4px 0;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: column;
`;

const TagWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2px;
  column-gap: 4px;
  padding-left: 12px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin: 10px 10px;
`;

const Image = styled(RetryImage)`
  width: 80px;
  height: 100px;
`;

const LoadingWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const Loading = styled.ActivityIndicator``;

const Item = (props: Props) => {
  const [gallery, setGallery] = useState<IDetail>();

  useEffect(
    () => void getDetail(props.number).then((res) => setGallery(res)),
    []
  );

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <>
      <Wrapper
        onPress={() => {
          if (gallery) navigation.navigate("Detail", { gallery });
        }}
      >
        {gallery ? (
          <>
            <Image
              source={{
                uri: `https://api.toshu.me/images/webp/${gallery?.files[0].hash}`,
              }}
              resizeMode="contain"
            />
            <Content>
              <Title>{gallery?.title}</Title>
              <TagWrapper>
                {gallery.tags?.map((e, i) => (
                  <Tag key={i} tag={e} />
                ))}
              </TagWrapper>
            </Content>
          </>
        ) : (
          <LoadingWrapper
            style={{
              flex: 1,
            }}
          >
            <Loading size="small" color="#000000" />
          </LoadingWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default Item;
