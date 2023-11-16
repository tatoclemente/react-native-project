import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigation';
import StackNavigation from './components/StackNavigation';
import DrawerNavigation from './components/DrawerNavigation';


export default function App() {

   return (
  
    <NavigationContainer>
      {/* <DrawerNavigation /> */}

      {/* <StackNavigation /> */}
      
      <TabNavigator />

    </NavigationContainer>
  )
}