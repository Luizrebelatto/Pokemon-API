import React from 'react';

import { Wrapper, Header, UserInfo, Greetings, User, UserGreetings, UserName, Welcome, Photo, Title, ViewTitle } from './styles';

export function Dashboard(){
  return(
    <Wrapper>
      <Header>
        <UserInfo>
          <Greetings>
            <User>
              <UserGreetings>Olá, </UserGreetings>
              <UserName>Luiz Gabriel</UserName>
            </User>
            <Welcome>Bem Vindo!😄</Welcome>
          </Greetings>
          <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62765965?v=4' }}/>
        </UserInfo>
      </Header>
      <ViewTitle>
        <Title numberOfLines={2}>Qual pókemon você escolheria?</Title>
      </ViewTitle>
      
    </Wrapper>
  )
}