import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.ScrollView`
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

export const Title = styled.Text`
  color: #48D0B0;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 41px;
`;

export const ViewBody = styled.View`
  flex: 1;
  margin: 52px 20px 0 20px;
`;

export const ViewAttributes = styled.View`
  flex-direction: row;
  margin: 0 23px;
  justify-content: space-between;
`;

export const Separator = styled.View`
  height: 60px;
  border: 0.7px solid #E0E0E0;
  margin-top: 32px;
`;

export const TitleChar = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 31px;
`;

export const Gender = styled.View`
  flex-direction: row;
  margin-top: 14px;
`;

export const GenderTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_grey};
`;

export const Male = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FontAwesome5)`
  margin-left: 14px;
`;

export const GenderText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 5px;
`;
