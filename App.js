import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/Home";
import Earnings from "./components/Earnings";
import { Provider } from "react-redux";
import reducer from "./store/index";
import { createStore } from "redux";

const store = createStore(reducer);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Empala">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Empala" }}
          />
          <Stack.Screen
            name="Earnings"
            component={Earnings}
            options={{ title: "Earnings" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
