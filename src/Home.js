import React from "react";
// import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "jai store",
  };

  return (    <>
  <HeroSection myData={data} />
  <Services />
  <Trusted />
</>);
};

// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;