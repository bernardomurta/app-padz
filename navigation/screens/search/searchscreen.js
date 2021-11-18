import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  Container,
  SearchSpace,
  IconSearch,
  BlockInputSearch,
  SearchInput
} from './style.js'
export default function searchscreen({ navigation }) {
  return (
    <Container style={styles.container}>
      <SearchSpace>
        <BlockInputSearch>
          <IconSearch>
            <Ionicons name="search" size={24} color="white" />
          </IconSearch>

          <SearchInput
            placeholder="Item ou loja"
            placeholderTextColor="#9c9898"
          />
        </BlockInputSearch>
      </SearchSpace>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 60 : 0
  }
})
