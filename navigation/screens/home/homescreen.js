import * as React from 'react'
import { View, Text } from 'react-native'
import Option from '../../../components/options/options.js'
export default function homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Option />
    </View>
  )
}