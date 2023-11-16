import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, SectionList, TouchableOpacity } from 'react-native';

export default function TechnologiesScreen() {

  const [text, setText] = useState('')
  // const [link, setLink] = useState("");
  const [showTechnologies, setShowTechnologies] = useState(false)

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   if (isMounted) {
  //     const initialUrl = Linking.getInitialURL();
  //     console.log(initialUrl);
  //     setLink(initialUrl);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   console.log(Linking.canOpenURL());
  //   setIsMounted(true);
  //   return () => {
  //     setIsMounted(false);
  //   };
  // }, []);


  _onPressButton = () => {
    setShowTechnologies(!showTechnologies)
  }

  return (
  // return (
  //   <View style={styles.container}>
  //     {/* <View>
  //       <Button
  //         title="Compartir en WhatsApp"
  //         onPress={() => {
  //           const intent = Linking.openURL("whatsapp://send?text={link}");
  //           // console.log('hola');
  //           Linking.sendIntent(intent);
  //         }}
  //         leftIcon={
  //           <Image
  //             source={require('./assets/img/Logo-whatsapp.png')}
  //             style={{ width: 20, height: 20 }}
  //           />
  //         }
  //       />
  //     </View> */}
  //     <View style={{alignItems: 'center', width: '100%'}}>
  //       <Text style={{fontSize: 20, textAlign: "center", fontWeight: 'bold'}}>Hello World!</Text>
  //       <TextInput
  //       style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:10, paddingHorizontal: 10, width: '90%', margin: '0 auto'}}
  //         placeholder='Type here to capitalize'
  //         onChangeText={text => setText(text)}
  //         defaultValue={text}
  //       />
  //       <Text>{text.toUpperCase()}</Text>
  //     </View>
  //     <TouchableOpacity
  //       onPress={_onPressButton}
  //       underlayColor='red'
  //     >
  //       <View style={styles.showButton}>
  //         <Text style={{color: 'white'}}>{showTechnologies? 'Hide Technologies' :'Show Technologies'}</Text>
  //       </View>
  //     </TouchableOpacity>
  //     {showTechnologies &&
  //     <View style={{paddingVertical: '10%'}}>
        <SectionList
          sections={[
            {
              title: 'Languages',
              data: [
                { key: 'Javascript', img: require('../assets/img/languages/js.png') },
                { key: 'TypeScript', img: require('../assets/img/languages/typescript.png') },
              ]
            },
            {
              title: 'Front-End',
              data: [
                { key: 'HTML', img: require('../assets/img/frontend/html.png') },
                { key: 'CSS', img: require('../assets/img/frontend/css.png') },
                { key: 'React', img: require('../assets/img/frontend/React-icon.svg.png'), height: 180 },
                { key: 'Next', img: require('../assets/img/frontend/next.png') },
                { key: 'Cloudinary', img: require('../assets/img/frontend/cloudinary.png'), height: 130 },
              ]
            },
            {
              title: 'Back-End',
              data: [
                { key: 'Node', img: require('../assets/img/backend/nodejs_logo.png') },
                { key: 'Express', img: require('../assets/img/backend/express-rombo.png') },
                { key: 'PostgreSQL', img: require('../assets/img/backend/postgre.png') },
                { key: 'Sequelize', img: require('../assets/img/backend/sequelize.png') },
                { key: 'MongoDB', img: require('../assets/img/backend/mongo.png'), width: 90  },
              ]
            },

          ]}

          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Text>{item.key}</Text>
              <Image source={item.img} style={{ width: item.width || 200, height: item.height || 200 }} />
            </View>
          )}
          renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    //   </View>
    //   } 
    //   <StatusBar style="auto" />
    // </View>
  );
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
