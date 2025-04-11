import React, { PureComponent } from "react";
import styled from "styled-components";
const NHeader = styled.header`
  background-color: #1f2937;
  color: white;
  padding: 20px;
  width: 50vw;
  box-sizing: border-box;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const NFooter = styled.header`
  background-color: #1f2937;
  color: white;
  padding: 20px;
  width: 50vw;
  box-sizing: border-box;
  font-size: 0.5rem;
  font-weight: bold;
`;
const NWrapper = styled.div`
  display: flex;
  flex-direction: column; /* optional: stack header + footer vertically */
  align-items: center; /* centers children horizontally */
  border-radius: 25px;S
`;

export default class WeatherCard extends PureComponent {
  render() {
    return (
      <NWrapper>
        <NHeader>Daily App</NHeader>
        <div className="mid" style={{ display: "block" }}>
          <div>the temperature</div>
          <div>Select location</div>
          <div>Day long Temperature</div>
        </div>
        <NFooter>
          <span>@Daily App</span>
        </NFooter>
      </NWrapper>
    );
  }
}
