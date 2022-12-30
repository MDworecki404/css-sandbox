import { useRef } from "react";
import React from "react";
import styled from "styled-components";
import "./App.css";

const Header = styled.header`
  width: 100%;

  p {
    padding: 1%;
    font-size: 1.3vw;
  }
`;
const Main = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ViewBox = styled.aside`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Parameters = styled.aside`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    display: block;
  }
`;
const Box = styled.div`
  width: 250px;
  height: 250px;
  background-color: rgb(128, 128, 128);
`;

const App: React.FC = () => {
  const BoxRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const redRef = useRef<HTMLInputElement>(null);
  const greenRef = useRef<HTMLInputElement>(null);
  const blueRef = useRef<HTMLInputElement>(null);

  const widthChange = () => {
    if (BoxRef.current && widthRef.current) {
      BoxRef.current.style.width = `${widthRef.current.value}px`;
    }
  };

  const heightChange = () => {
    if (BoxRef.current && heightRef.current) {
      BoxRef.current.style.height = `${heightRef.current.value}px`;
    }
  };

  const colorChange = () => {
    if (
      BoxRef.current &&
      redRef.current &&
      greenRef.current &&
      blueRef.current
    ) {
      BoxRef.current.style.backgroundColor = `RGB(${redRef.current.value},${greenRef.current.value},${blueRef.current.value})`;
    }
  };

  return (
    <div className="App">
      <Header>
        <p>CSS SANDBOX</p>
      </Header>
      <Main>
        <ViewBox>
          <Box ref={BoxRef}></Box>
        </ViewBox>
        <Parameters>
          <div>
            <label htmlFor="width">Width</label>
            <input
              onChange={widthChange}
              ref={widthRef}
              id="width"
              type="range"
              min="0"
              max="750"
              defaultValue={250}
            ></input>
          </div>
          <div>
            <label htmlFor="Height">Height</label>
            <input
              onChange={heightChange}
              ref={heightRef}
              id="Height"
              type="range"
              min="0"
              max="750"
              defaultValue={250}
            ></input>
          </div>
          <div>
            <label htmlFor="RED">RGB: Red</label>
            <input
              onChange={colorChange}
              ref={redRef}
              id="RED"
              type="range"
              min="0"
              max="255"
              defaultValue={128}
            ></input>
          </div>
          <div>
            <label htmlFor="Green">RGB: Green</label>
            <input
              onChange={colorChange}
              ref={greenRef}
              id="Green"
              type="range"
              min="0"
              max="255"
              defaultValue={128}
            ></input>
          </div>
          <div>
            <label htmlFor="Blue">RGB: Blue</label>
            <input
              onChange={colorChange}
              ref={blueRef}
              id="Blue"
              type="range"
              min="0"
              max="255"
              defaultValue={128}
            ></input>
          </div>
        </Parameters>
      </Main>
    </div>
  );
};

export default App;
