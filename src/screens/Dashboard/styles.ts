import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background_header};
  width: 100%;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  margin: 0 0 35px 22px;
`;

export const Greetings = styled.View`
  margin-right: 102px;
  margin-top: 76px;
`;

export const User = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
`;

export const UserGreetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 24.2px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 24.2px;
`;

export const Welcome = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 24.2px;
`;

export const Photo = styled.Image`
  width: 47px;
  height: 47px;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 66px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  line-height: 31.2px;
`;

export const ViewTitle = styled.View`
  padding-top: 35px;
  width: 80%;
  margin-left: 22px;
`;