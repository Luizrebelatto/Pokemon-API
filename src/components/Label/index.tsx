import React from 'react';

import { Container, Text } from './styles';

interface Props {
  title: string;
}

export function Label({ title }: Props){
  return(
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}