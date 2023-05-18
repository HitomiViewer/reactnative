// import "react-native-url-polyfill/auto";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import List from "./screens/List";
import Detail from "./screens/Detail";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
