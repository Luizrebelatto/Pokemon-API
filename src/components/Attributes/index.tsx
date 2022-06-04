import React from 'react';

import { Container, Icon, Content, Title, View } from './styles';

interface Props {
  title: string;
  content: string;
  type?: string;
}

export function Attributes({ title, content, type } : Props){
  return(
    <Container>
      <View>
        <Icon name={type}/>
        <Content numberOfLines={2}>{content}</Content>
      </View>
      <Title>{title}</Title>
    </Container>
  )
}