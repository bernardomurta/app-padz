import React from 'react'
import { StyleSheet, Platform } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import {
  Container,
  Header,
  HeaderInfos,
  Infos,
  Name,
  EditProfile,
  Img
} from './style.js'

import fotoDePerfil from '../../../assets/imgs/eu.jpeg'

export default function profilescreen({ navigation }) {
  return (
    <Container style={styles.container}>
      <Header>
        <HeaderInfos>
          <Img source={fotoDePerfil} alt="Foto de Perfil" />

          <Infos>
            <Name>Bernardo Murta</Name>
            <EditProfile>Editar Perfil</EditProfile>
          </Infos>
        </HeaderInfos>

        <Entypo name="chevron-right" size={17} color="#6e6b6b" />
      </Header>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 60 : 0
  }
})
