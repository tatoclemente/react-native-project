import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function HomeScreen({ navigation, route }) {
    const [clicks, setClicks] = useState(0)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button
            title="JOIN"
            color="#222"
            onPress={() => {
                setClicks(prevClicks => prevClicks + 1)
              Alert.alert(
                "Impossible",
                "Sorry but you don't have super powers",
                [
                  {
                    text: "OK",
                  }
                ]
              )
            }} />,
        })
    }, [navigation])
    return (
        <View>
            <Text>Attemps to join: {clicks}</Text>
            <Button 
                title="Black Widow"
                onPress={() => navigation.navigate('Profile', {name: 'Black Widow'})}
            />
            <Button 
                title="Black Panther"
                onPress={() => navigation.navigate('Profile', {name: 'Black Panther', phrase: 'Wakanda Forever'})}
            />
            <Button 
                title="Extra"
                onPress={() => navigation.navigate('Extra')}
            />
            <Text>{route.params?.fromChild || "Param not provide yet"}</Text>
        </View>
    )
}