import * as React from 'react'
import { View, Text } from 'react-native'

export default function profilescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontWeight: 'bold' }}
      >
        Profile Screen
      </Text>
    </View>
  )
}