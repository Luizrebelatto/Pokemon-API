import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View``;

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.grey_dark};
  font-size: 14px;
  width: 60px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grey_medium};
  font-size: 10px;
  text-align: center;
  padding-top: 10px;
`;

export const Icon = styled(FontAwesome5)`
  margin-right: 8px;
`;

export const View = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 42px;
`;