import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import ExtraScreen from './screens/ExtraScreen';
import HomeScreen from './screens/HomeScreen';
import LogoTitle from './components/LogoTitle';
import { Alert, Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons'
import TechnologiesScreen from './screens/TechnologiesScreen';
import ConvertToUppercase from './screens/ConvertToUppercase';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const WorldScreen = (props) => {
  return (
    <View style={{padding: 25}}>
      <Text>This is the first Native App created by {props.name}!</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}
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
        >
          {props => <WorldScreen {...props} name="Tato Clemente" />}
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
    </NavigationContainer>
  )
}