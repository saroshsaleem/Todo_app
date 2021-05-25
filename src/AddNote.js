import React from "react";
import styled from "styled-components";
import App from "./App";

const AddNotes = (props) => {
  console.log(props.history);
  var title = "";
  var text = "";
  function titleChange(event) {
    title = event.target.value;
  }
  function textChange(event) {
    text = event.target.value;
  }
  const Form = styled.form`
    margin-top: 90px;
    padding: 20px 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
  `;
  const FormAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const FormInput = styled.input`
    font-size: 20px;
    border: none;
    text-align: left;
    padding: 10px;
  `;
  const FormText = styled.textarea`
    font-size: 15px;
    border: none;
    text-align: left;
  `;
  const FormButton = styled.button`
    bottom: 62%;
    right: 40%;
    font-size: 15px;
    padding: 10px;
    border-radius: 50%;
    border: none;
    background-color: black;
    color: white;
  `;
  const SignoutButton = styled.button`
    position: fixed;
    bottom: 91%;
    right: 5%;
    font-size: 15px;
    padding: 10px;
    border-radius: 15px;
    border: none;
    background-color: black;
    color: white;
  `;
  return (
    <FormAdd>
      <SignoutButton onClick={props.backward}>SignOut</SignoutButton>
      <Form>
        <FormInput onChange={titleChange} placeholder="Add title" />
        <FormText onChange={textChange} rows="3" placeholder="Add text here" />
      </Form>
      <FormButton onClick={(e) => props.click(e, title, text)}>Add</FormButton>
    </FormAdd>
  );
};
export default AddNotes;
