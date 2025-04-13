import React, { PureComponent } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NHeader = styled.header`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: flex;
  background-color: #1f2937;
  color: white;
  padding: 20px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const NFooter = styled.header`
  display: flex;
  background-color: #1f2937;
  color: white;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.5rem;
  font-weight: bold;
  align-items: flex-end;
  justify-content: space-between;
`;

const NMidSection = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
`;
const NWrapper = styled.div`
  display: flex;
  flex-direction: column; /* optional: stack header + footer vertically */
  align-items: center; /* centers children horizontally */
  justify-content: center;
  border-radius: 25px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 50vw;
`;

const Temperature = styled.div`
  display: flex;
  font-family: sans-serif;
  background-color: pink;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 25vh;
  width: 100%;
  padding: 50px;
`;
const LocationSelect = styled.select`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  color: #333;
  font-size: 1rem;
  width: 100%;
  margin: 20px 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1f2937; /* Darker border on focus */
    box-shadow: 0 0 0 2px rgba(31, 41, 55, 0.2);
  }
`;

const DayLongTemperature = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  padding: 20px 0;
  width: 100%;
  scrollbar-gutter: stable;
  scroll-behavior: smooth;
`;

const HourTemp = styled.span`
  min-width: 100px;
  background-color: darkcyan;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 1rem;
  flex-shrink: 0;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 2,
};
export default class WeatherCard extends PureComponent {
  render() {
    return (
      <NWrapper>
        <NHeader>Daily App</NHeader>
        <NMidSection>
          <Temperature>10 degree</Temperature>
          <LocationSelect>
            <option value="">Select Location</option>
            <option value="nyc">New York</option>
            <option value="la">Los Angeles</option>
            <option value="chi">Chicago</option>
          </LocationSelect>
          <DayLongTemperature>
            <DayLongTemperature>
              <HourTemp>5°</HourTemp>
              <HourTemp>6°</HourTemp>
              <HourTemp>7°</HourTemp>
              <HourTemp>8°</HourTemp>
              <HourTemp>9°</HourTemp>
              <HourTemp>10°</HourTemp>
              <HourTemp>5°</HourTemp>
              <HourTemp>6°</HourTemp>
              <HourTemp>7°</HourTemp>
              <HourTemp>8°</HourTemp>
              <HourTemp>9°</HourTemp>
              <HourTemp>10°</HourTemp>
            </DayLongTemperature>
          </DayLongTemperature>
        </NMidSection>
        <NFooter>
          <span>@Daily App</span>
          <span>@Contact Us</span>
        </NFooter>
      </NWrapper>
    );
  }
}
