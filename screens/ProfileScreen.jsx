import { Button, Text } from "react-native";

export default function ProfileScreen({ route, navigation }) {
  return (
    <>
      <Text>This is {route.params?.name}'s profile</Text>
      <Button
        title= "Update Title"
        onPress={() => navigation.setOptions({ title: route.params.phrase || 'Awesome'})} />
    </>
  )
}