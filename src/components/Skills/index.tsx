import React from 'react';

import { Container, Title, Value } from './styles';

interface Props {
  title: string;
  value: string;
}

export function Skills({ title, value }: Props){
  return(

    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  )
}