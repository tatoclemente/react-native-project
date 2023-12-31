import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      marginTop: 10
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  

export default function FetchingMovies() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then(response => response.json())
            .then(json => {
                for (let index = 0; index < 1000000; index++) {
                    setData(json.movies)
                }
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator style={styles.loading} size="large" color="#00ff00" />
                : (
                    <FlatList
                        data={data}
                        keyIndicator={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}, {item.releaseYear}</Text>
                        )} />
                )}
        </View>
    )
}