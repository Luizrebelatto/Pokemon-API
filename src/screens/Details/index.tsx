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
  id: number;
  weight: number;
  height: number;
  move: string;
  health: number;
  attack: number;
  defense: number;
  valueAttack: number;
  valueDefense: number;
  speed: number;
  type1: string;
  type2: string;
  description: string;
}

export function Details(){

  const [descriptions, setDescriptions] = useState([] as IPokemon[]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    (async() => {
        try {
            const collection: IPokemon[] = [];
            const response = await api.get('/pokemon/1');
            const elements = response.data;
            const responseDescription = await api.get('/pokemon-species/1');
            var items = {
              name: elements.name,
              id: elements.id,
              weight: elements.weight,
              height: elements.height,
              move: elements.moves[4].move.name,
              health: elements.stats[0].base_stat,
              attack: elements.stats[1].base_stat,
              defense: elements.stats[2].base_stat,
              valueAttack: elements.stats[3].base_stat,
              valueDefense: elements.stats[4].base_stat,
              speed: elements.stats[5].base_stat,
              type1: elements.types[0].type.name,
              type2: elements.types[1].type.name,
              description: responseDescription.data.flavor_text_entries[6].flavor_text
            }

            const sum = items.health + items.attack + items.defense + items.valueAttack + items.valueDefense + items.speed;
            setTotal(sum);
            collection.push(items);
            setDescriptions(Object.values([...collection]))        
        } catch(error) { 
            console.log(error);
        }
    })()
},[]);

  return(
    <Container>
      {descriptions.map((item) => 
        (
          <>
            <Header>
              <Content>
                <NamePokemon>{item.name}</NamePokemon>
                <PokemonNumber>{item.id >= 10 ? `#0${item.id}` : `#00${item.id}`}</PokemonNumber>
              </Content>
              <View>
                <Label title={item.type1}/>
                <Label title={item.type2}/>
              </View>
            </Header>
      
            <Body>
              <Image source={ImagePokemon} style={{ width:100, height: 100, marginLeft: 140}}/>
              <ViewBody>
                <Title>Descrição</Title>
                <Description 
                  content={item.description}
                />

                <ViewAttributes>
                  <Attributes title="Peso" content={String(item.weight) + ' KG'} type="weight"/>
                  <Separator/>
                  <Attributes title="Altura" content={String(item.height) + ' m'} type="ruler-vertical"/>
                  <Separator/>
                  <Attributes title="Poder Principal" content={item.move}/>
                </ViewAttributes>

                <TitleChar>Suas características</TitleChar>
                <Gender>
                  <GenderTitle>Gênero</GenderTitle>
                  <Male>
                    <Icon name="male"/>
                    <GenderText>87.5%</GenderText>
                  </Male>
                  <Male>
                    <Icon name="female"/>
                    <GenderText>87.5%</GenderText>
                  </Male>
                </Gender>

                <Skills title="Saúde" value={item.health}/>
                <Skills title="Ataque" value={item.attack}/>
                <Skills title="defesa" value={item.defense}/>
                <Skills title="Vl.Ataque" value={item.valueAttack}/>
                <Skills title="Vl.Defesa" value={item.valueDefense}/>
                <Skills title="Velocidade" value={item.speed}/>
                <Skills title="Total" value={total}/>

                <TitleChar style={{ marginBottom: 14 }}>Pontos fortes e fracos</TitleChar>
                <Description 
                  content="Pokémon tipo grama são fortes contra pokémon do tipo Água, Terra, Pedra mas eles são fracos contra pokémon do tipo Fogo, Grama, Veneno, Voador, Inseto, Dragão. Pokémon tipo veneno são fortes contra pokémon do tipo Grama, Inseto, Fada mas eles são fracos contra pokémon do tipo Veneno, Terra, Pedra, Fantasma."
                />
              </ViewBody>
            </Body>
          </>
        ))
      }
    </Container>
  )
}