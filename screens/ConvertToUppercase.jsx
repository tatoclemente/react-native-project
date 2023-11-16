import { useState } from 'react';
import { Button, Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ConvertToUppercase() {
  const [text, setText] = useState('')
  return (
    <View style={styles.container}>
      {/* <View>
        <Button
          title="Compartir en WhatsApp"
          onPress={() => {
            const intent = Linking.openURL("whatsapp://send?text={link}");
            // console.log('hola');
            Linking.sendIntent(intent);
          }}
          leftIcon={
            <Image
              source={require('../assets/img/Logo-whatsapp.png')}
              style={{ width: 20, height: 20 }}
            />
          }
        />
      </View> */}
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: 'bold' }}>Hello World!</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, width: '90%', margin: '0 auto' }}
          placeholder='Type here to capitalize'
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Text>{text.toUpperCase()}</Text>
      </View>
      {/* <TouchableOpacity
        onPress={_onPressButton}
        underlayColor='red'
      >
        <View style={styles.showButton}>
          <Text style={{ color: 'white' }}>{showTechnologies ? 'Hide Technologies' : 'Show Technologies'}</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '20%',
  },
  showButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 37,
    borderRadius: 20,
    backgroundColor: 'steelblue',
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '40%'
  }
});
