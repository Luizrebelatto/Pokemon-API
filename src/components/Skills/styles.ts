import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 14px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_grey};
  font-size: 14px;
  width: 80px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary_grey};
  font-size: 14px;
  margin-left: 35px;
`;