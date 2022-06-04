import React from "react";

// import ImagePokemon from '../../assets/Bulba.png';
import { Label } from '../../components/Label';
import { Description } from '../../components/Description';
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
         <Description 
          content="Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente nas costas. Ao absorver os raios do sol, a semente cresce progressivamente maior."
        />
      </ViewBody>
      </Body>
    </Container>
  )
}