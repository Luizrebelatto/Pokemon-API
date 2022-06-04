import styled from "styled-components/native";

export const Container = styled.View``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;