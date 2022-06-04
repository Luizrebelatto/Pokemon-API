import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #48D0B0;
`;

export const Body = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 18px 31px 25px 20px;
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
  font-weight: bold;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const View = styled.View`
  flex-direction: row;
  padding-top: 11px;
`;