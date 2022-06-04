import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  width: 70px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 36px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
`;