import React from 'react'
import { Text, View, SafeAreaView, Button, Image } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/Entypo'
import Iconn from 'react-native-vector-icons/Feather'

const header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Iconn
          name="user"
          size={30}
          color="white"
          onPress={() => {
            alert('olá')
          }}
        />
        <Image
          source={require('../assets/imgs/padlogo.png')}
          style={{ width: 150, height: 70 }}
        />

        <Icon
          name="menu"
          size={30}
          color="white"
          onPress={() => {
            alert('olá')
          }}
        />
      </View>
    </SafeAreaView>
  )
}
export default header
