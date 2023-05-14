import { RouteProp } from "@react-navigation/native";
import styled from "styled-components/native";
import { Dimensions, FlatList, Image, View } from "react-native";
import { SafeAreaView } from "react-native";

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

const Detail = (props: Props) => {
  return (
    <>
      <Wrapper>
        <FlatList
          style={{
            flex: 1,
          }}
          data={props.route.params?.gallery.files.map((e) => e.hash)}
          keyExtractor={(item) => item}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
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
