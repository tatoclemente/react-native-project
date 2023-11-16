import { createDrawerNavigator } from "@react-navigation/drawer"
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"
import TechnologiesScreen from "../screens/TechnologiesScreen"
import ConvertToUppercase from "../screens/ConvertToUppercase"
const Drawer = createDrawerNavigator()


export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
      initialRouteName='Home'>
        <Drawer.Screen
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name="text" color='black' size={size} />
            )
          }}
          name="Convert To Upercase" 
          component={ConvertToUppercase} />
        <Drawer.Screen 
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name="code-slash-sharp" color='black' size={size} />
            )
          }}
          name="Technologies" component={TechnologiesScreen} />
      </Drawer.Navigator>
    )
}