import React from 'react';

import { Container, Text } from './styles';

interface Props {
  content: string;
}

export function Description({ content }: Props){
  return(
    <Container>
      <Text>{content}</Text>
    </Container>
  )
}