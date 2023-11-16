import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"
import TechnologiesScreen from "../screens/TechnologiesScreen";
import ConvertToUppercase from "../screens/ConvertToUppercase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LogoTitle from "./LogoTitle";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
const ScreenTwo = () => {
    return (
        <View>
            <Text>ScreenTwo</Text>
        </View>
    )
}
const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Screen Two" component={ScreenTwo} />
    </Drawer.Navigator>
  );
}

export default function TabNavigator() {
    return (
        
      <Tab.Navigator
        initialRouteName='Awesome'
        screenOptions={{
          "tabBarActiveTintColor": "darkred",
          headerTitle: () => <LogoTitle />,
            headerStyle: {
              backgroundColor: "#f60f4f"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            // headerRight: () => <Button
            //   title="JOIN"
            //   color="#222"
            //   onPress={() => {
            //     Alert.alert(
            //       "Impossible",
            //       "Sorry but you don't have super powers",
            //       [
            //         {
            //           text: "OK",
            //         }
            //       ]
            //     )
        }

        }
      >
        <Tab.Screen
          name="Asgard"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            
          }}
          component={MyDrawer}
        >
                </Tab.Screen>
        <Tab.Screen
          name="Conver To Uppercase"
          component={ConvertToUppercase}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="text" color={color} size={size} />
            )
          }} />
        <Tab.Screen
          name="Technologies"
          component={TechnologiesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="people" color={color} size={size} />
            )
          }} />
      </Tab.Navigator>
    )
}