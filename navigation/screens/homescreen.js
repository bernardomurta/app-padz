import * as React from 'react'
import { View, Text } from 'react-native'

export default function homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => alert('this is the "home" screen.')}
        style={{ fontWeight: 'bold' }}
      >
        Home Screen
      </Text>
    </View>
  )
}
