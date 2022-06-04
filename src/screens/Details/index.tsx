import React from "react";

// import ImagePokemon from '../../assets/Bulba.png';
import { Label } from '../../components/Label'
import { Body, Container, Header, NamePokemon, PokemonNumber, Content, View, Title, ViewBody } from './styles';

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
      <ViewBody>
         <Title>Descrição</Title>
      </ViewBody>
      </Body>
    </Container>
  )
}