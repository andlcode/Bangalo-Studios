import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./Styles/GlobalStyle";
import SiteHeader from "./Components/SiteHeader";
import BookingForm from "./BookingForm";

const Shell = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Stage = styled.section`
  display: grid;
  place-items: center;
  padding: clamp(24px, 4vw, 56px);
`;

export default function App(){
  return (
    <>
      <GlobalStyle />
      <Shell>
        <SiteHeader />
        <Stage>
          <BookingForm onSubmit={(dados)=>console.log("Agendamento:", dados)} />
        </Stage>
      </Shell>
    </>
  );
}
