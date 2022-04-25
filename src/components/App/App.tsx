import React from 'react';

import Posts from "../Posts";
import AppBar from "../AppBar";
import { Container } from "@mui/material";


export function App() {
  return (
      <>
          <AppBar/>
          <Container>
              <Posts/>
          </Container>
      </>

  );
}
