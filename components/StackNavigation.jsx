import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ExtraScreen from "../screens/ExtraScreen"
import LogoTitle from "./LogoTitle"

const Stack = createStackNavigator()

export default function StackNavigation() {
    return (
     <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
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
            //   }} />,
          }}
          initialParams={{ fromChild: 'Initial' }} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="Extra" component={ExtraScreen} />
      </Stack.Navigator> 
    )
}