import React from 'react'
import { Header } from "semantic-ui-react";
import Gnb from './Gnb';

const Top = () => {
  return (
    <div>
      <div style={{ display:"flex", paddingTop: 20 }}>
        <div style={{ display:"flex" }}>
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ display:"block", width: 60 }}
          />
        </div>
        <Header as="h1">TauBoong</Header>
      </div>
      <Gnb />
    </div>
  )
}

export default Top

