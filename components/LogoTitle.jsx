import { Image, Text, View } from "react-native";

export default function LogoTitle() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
        style={{width: 30, height: 35}}
        source={require('../assets/img/logo.png')} />
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize:25, marginLeft: 15}}>
            Gustavo Clemente
        </Text>
    </View>
  )
}
