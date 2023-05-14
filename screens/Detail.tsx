import { RouteProp } from "@react-navigation/native";
import styled from "styled-components/native";
import { Dimensions, FlatList, Image, View } from "react-native";
import { SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

type Props = {
  route: RouteProp<RootStackParams, "Detail">;
};

const Wrapper = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: 700;
  width: ${Dimensions.get("window").width}px;
  text-align: center;
  margin-top: 20px;
`;

const Arrow = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #969696;
  z-index: 100;
`;

const ArrowText = styled.Text`
  font-size: 18px;
`;

const Detail = (props: Props) => {
  const [flatListRef, setFlatListRef] = useState<FlatList<string> | null>(null);
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <Wrapper>
        <Arrow
          onPress={() =>
            flatListRef?.scrollToIndex({
              index: Math.max(
                0,
                Math.min(
                  (props.route.params?.gallery.files.length as number) - 1,
                  page - 1
                )
              ),
            })
          }
          style={{
            left: 40,
          }}
        >
          <ArrowText>{"<"}</ArrowText>
        </Arrow>
        <Arrow
          onPress={() =>
            flatListRef?.scrollToIndex({
              index: Math.max(
                0,
                Math.min(
                  (props.route.params?.gallery.files.length as number) - 1,
                  page + 1
                )
              ),
            })
          }
          style={{
            right: 40,
          }}
        >
          <ArrowText>{">"}</ArrowText>
        </Arrow>
        <FlatList
          ref={(res) => setFlatListRef(res)}
          style={{
            flex: 1,
          }}
          data={props.route.params?.gallery.files.map((e) => e.hash)}
          keyExtractor={(item) => item}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            setPage(
              Math.round(
                e.nativeEvent.contentOffset.x / Dimensions.get("window").width
              )
            );
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
              }}
            >
              <Image
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                }}
                source={{
                  uri: `https://api.toshu.me/images/webp/${item}`,
                }}
                resizeMode="contain"
              />
              <SafeAreaView
                style={{
                  position: "absolute",
                }}
              >
                <Text>
                  {index + 1} / {props.route.params?.gallery.files.length}
                </Text>
              </SafeAreaView>
            </View>
          )}
        />
      </Wrapper>
    </>
  );
};

export default Detail;
