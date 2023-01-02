import { createGlobalStyle } from "styled-components";
import EthnocentricRegularItalic from "./Font/Static/ethnocentric-rg-it.ttf";
import EthnocentricRegular from "./Font/Static/ethnocentric-rg.ttf";

export const GlobalStyles = createGlobalStyle`
*{

    @font-face {
	font-family: 'Eth-italic';
	src: url(${EthnocentricRegularItalic}) format("truetype");
}

@font-face {
	font-family: 'Eth-regular';
	src: url(${EthnocentricRegular}) format("truetype");
}

}`;
