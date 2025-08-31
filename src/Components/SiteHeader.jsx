import React from "react";
import styled from "styled-components";
import logo from "../assets/react.svg"; 
const HeaderWrapper = styled.header`
  width: 100%;
  background: linear-gradient(135deg, var(--primary), #4f46e5);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 48px;
  width: auto;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #e0e7ff;
  margin-left: auto;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Logo src={logo} alt="Bangalo Studios" />
        <Title>Bangalo Studios</Title>
        <Subtitle>Agenda aberta!</Subtitle>
      </Container>
    </HeaderWrapper>
  );
}
