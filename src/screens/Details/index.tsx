import React, { useEffect, useState } from "react";

import { Image } from 'react-native';
import { Label } from '../../components/Label';
import { Description } from '../../components/Description';
import { Attributes } from '../../components/Attributes';
import { Skills } from '../../components/Skills';

import ImagePokemon from '../../assets/Bulba.png';

import api from '../../services/api';
import { 
  Body, 
  Container, 
  Header, 
  NamePokemon, 
  PokemonNumber, 
  Content, 
  View, 
  Title, 
  ViewBody, 
  ViewAttributes, 
  Separator, 
  TitleChar,
  Gender,
  GenderTitle,
  Male,
  Icon,
  GenderText
} from './styles';

interface IPokemon {
  name: string;
  weight: number;
  height: number;
  move: string;
  health: number;
  attack: number;
  defense: number;
  valueAttack: number;
  valueDefense: number;
  speed: number;
}

export function Details(){

  const [descriptions, setDescriptions] = useState([] as IPokemon[]);

  useEffect(() => {
    (async() => {
        try {
            const collection: IPokemon[] = [];
            const response = await api.get('/pokemon/1');
            const elements = response.data;
            var items = {
              name: elements.name,
              weight: elements.weight,
              height: elements.height,
              move: elements.moves[4].move.name,
              health: elements.stats[0].base_stat,
              attack: elements.stats[1].base_stat,
              defense: elements.stats[2].base_stat,
              valueAttack: elements.stats[3].base_stat,
              valueDefense: elements.stats[4].base_stat,
              speed: elements.stats[5].base_stat
            }
            collection.push(items);
            setDescriptions([...collection])        
        } catch(error) { 
            console.log(error);
        }
    })()
},[]);

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
      <Image source={ImagePokemon} style={{ width:100, height: 100, marginLeft: 140}}/>
      <ViewBody>
         <Title>Descrição</Title>
         <Description 
          content="Bulbasaur pode ser visto cochilando sob a luz do sol. Há uma semente nas costas. Ao absorver os raios do sol, a semente cresce progressivamente maior."
        />

        <ViewAttributes>
          <Attributes title="Peso" content="6.9 KG" type="weight"/>
          <Separator/>
          <Attributes title="Altura" content="0.7 m" type="ruler-vertical"/>
          <Separator/>
          <Attributes title="Poder Principal" content="Chicote de vinha"/>
        </ViewAttributes>

        <TitleChar>Suas características</TitleChar>
        <Gender>
          <GenderTitle>Gênero</GenderTitle>
          <Male>
            <Icon name="male"/>
            <GenderText>87.5%</GenderText>
          </Male>
          <Male>
            <Icon name="male"/>
            <GenderText>87.5%</GenderText>
          </Male>
        </Gender>

        <Skills title="Saúde" value="45"/>
        <Skills title="Ataque" value="49"/>
        <Skills title="defesa" value="49"/>
        <Skills title="Vl.Ataque" value="65"/>
        <Skills title="Vl.Defesa" value="15"/>
        <Skills title="Velocidade" value="15"/>
        <Skills title="Total" value="317"/>

        <TitleChar style={{ marginBottom: 14 }}>Pontos fortes e fracos</TitleChar>
         <Description 
          content="Pokémon tipo grama são fortes contra pokémon do tipo Água, Terra, Pedra mas eles são fracos contra pokémon do tipo Fogo, Grama, Veneno, Voador, Inseto, Dragão. Pokémon tipo veneno são fortes contra pokémon do tipo Grama, Inseto, Fada mas eles são fracos contra pokémon do tipo Veneno, Terra, Pedra, Fantasma."
        />
      </ViewBody>
      </Body>
    </Container>
  )
}