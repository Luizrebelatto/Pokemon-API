import React from "react";

import { Body, Container, Header, NamePokemon, PokemonNumber, Content } from './styles';

export function Details(){
  return(
    <Container>
      <Header>
        <Content>
          <NamePokemon>Bulbassaur</NamePokemon>
          <PokemonNumber>#001</PokemonNumber>
        </Content>
        
      </Header>
      <Body>
      
      </Body>
    </Container>
  )
}