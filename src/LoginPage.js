import React, { Component } from "react";
import styled from "styled-components";
import App from "./App";
let email = "";
let pass = "";
let id = 0;

const Login = styled.div`
  width: 250px;
  height: 250px;
  margin-top: 10%;
  margin-left: 40%;
  border-box: box-sizing;
  background-color: #fcba03;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px #e4dfdf;
  border-radius: 15px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  &:hover {
    opacity: 0.6;
  }
`;
const LoginButton = styled.button`
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #87703d;
  color: white;
  &:hover {
    opacity: 0.6;
  }
`;
const Heading = styled.h2`
  color: white;
  font-size: 30px;
`;
var isTrue = false;
function LoginPage(props) {
  var conName = (event) => {
    email = event.target.value;
  };
  var conPass = (event) => {
    pass = event.target.value;
  };
  return (
    <Login>
      <Heading>Keeper</Heading>
      <LoginForm>
        <LoginInput type="text" placeholder="email" onChange={conName} />
        <LoginInput type="password" placeholder="Password" onChange={conPass} />
        <LoginButton onClick={(e) => props.changed(e, pass)}>Login</LoginButton>
      </LoginForm>
    </Login>
  );
}
export default LoginPage;
