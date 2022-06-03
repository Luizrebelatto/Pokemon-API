import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  width: 100%;
  height: 50%;
  background-color: yellow;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Header = styled.View`
  width: 100%;
  height: 50%;
  background-color: #48D0B0;
`;

export const NamePokemon = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const PokemonNumber = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`