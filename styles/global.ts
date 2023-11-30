"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'K2D', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(var(--black));
    color: rgb(var(--white));
  }

  :root {
    --black: 0, 0, 0;
    --white: 255, 255, 255;
    --midnight-gray: 20, 20, 20;
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
    flex-wrap: wrap;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    background-color: rgb(var(--midnight-gray));
  }
`
