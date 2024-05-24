const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14 from "./screens/IPhone14";
import IPhone141 from "./screens/IPhone141";
import IPhone142 from "./screens/IPhone142";
import IPhone143 from "./screens/IPhone143";
import IPhone144 from "./screens/IPhone144";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14"
              component={IPhone14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone141"
              component={IPhone141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone142"
              component={IPhone142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone143"
              component={IPhone143}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone144"
              component={IPhone144}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
