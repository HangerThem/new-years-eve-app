"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'K2D', sans-serif;
    background-color: rgb(var(--black));
    color: rgb(var(--white));
  }

  :root {
    --black: 0, 0, 0;
    --white: 255, 255, 255;
    --midnight-blue: 25, 25, 112;
    --gold: 255, 215, 0;
    --festive-red: 255, 69, 0;
    --emerald-green: 0, 128, 0;
    --sparkling-silver: 192, 192, 192;
  }

  main {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
  }
`
