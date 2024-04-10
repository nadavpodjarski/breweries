import styled from "styled-components";
import { Navbar } from "../navbar/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <Navbar />
      <Children>{children}</Children>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
`;

const Children = styled.div`
  overflow: auto;
  padding: 24px;
  box-sizing: border-box;
`;

const Footer = styled.div`
  height: 64px;
  background-color: whitesmoke;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
