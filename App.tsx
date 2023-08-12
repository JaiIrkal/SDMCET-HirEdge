const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import InfoPage4 from "./screens/InfoPage4";
import InfoPage3 from "./screens/InfoPage3";
import InfoPage2 from "./screens/InfoPage2";
import InfoPage1 from "./screens/InfoPage1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="InfoPage4"
              component={InfoPage4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InfoPage3"
              component={InfoPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InfoPage2"
              component={InfoPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InfoPage1"
              component={InfoPage1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
