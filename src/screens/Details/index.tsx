import React from "react";

import { Label } from '../../components/Label'
import { Body, Container, Header, NamePokemon, PokemonNumber, Content, View } from './styles';

export function Details(){
  return(
    <Container>
      <Header>
        <Content>
          <NamePokemon>Bulbassaur</NamePokemon>
          <PokemonNumber>#001</PokemonNumber>
        </Content>
        <View>
          <Label title="Planta"/>
          <Label title="Venenoso"/>
        </View>
      </Header>
      <Body>
      
      </Body>
    </Container>
  )
}