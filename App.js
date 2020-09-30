import "react-native-gesture-handler";
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//COMPONENTS
import Tab1 from "./src/screens/tabs/Tab1";
import Tab2 from "./src/screens/tabs/Tab2";
import Tab3 from "./src/screens/tabs/Tab3";
import Tab4 from "./src/screens/tabs/Tab4";
import Tab5 from "./src/screens/tabs/Tab5";
import Tab6 from "./src/screens/tabs/Tab6";
import Tab7 from "./src/screens/tabs/Tab7";

import Home from "./src/screens/drawers/Home";
import Settings from "./src/screens/drawers/Settings";
import Bookmarks from "./src/screens/drawers/Bookmarks";

const TopTabs = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function HomeTabs() {
    return (
      <TopTabs.Navigator>
        <TopTabs.Screen name="Tab1" component={Tab1} />
        <TopTabs.Screen name="Tab2" component={Tab2} />
        <TopTabs.Screen name="Tab3" component={Tab3} />
        <TopTabs.Screen name="Tab4" component={Tab4} />
        <TopTabs.Screen name="Tab5" component={Tab5} />
        <TopTabs.Screen name="Tab6" component={Tab6} />
        <TopTabs.Screen name="Tab7" component={Tab7} />
      </TopTabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <View>
        <Text>News App</Text>
      </View>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeTabs} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Bookmarks" component={Bookmarks} />
      </Drawer.Navigator>{" "}
    </NavigationContainer>
  );
}
