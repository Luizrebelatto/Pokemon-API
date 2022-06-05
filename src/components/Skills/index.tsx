import React from 'react';

import { Container, Title, Value } from './styles';

interface Props {
  title: string;
  value: number;
}

export function Skills({ title, value }: Props){
  return(

    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  )
}