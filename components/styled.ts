import styled from "styled-components"

export const Container = styled.section`
  flex: 1;
  border: 1px solid rgb(var(--white));
  border-radius: 5px;
  height: fit-content;
  padding: 20px;

  h2 {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid rgb(var(--white));
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      div {
        display: flex;
        height: fit-content;
        justify-content: space-between;
        align-items: center;
        height: 35px;
      }

      p {
        margin: 0;
        padding: 5px 0;
      }
      border-bottom: 1px solid rgb(var(--white));
      margin-bottom: 10px;
    }
  }
`

export const Dialog = styled.dialog`
  background-color: rgb(var(--white));
  border-radius: 5px;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  max-width: 350px;
  width: calc(100% - 5rem);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: rgb(var(--black));
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
`

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  resize: vertical;
  max-height: 200px;
`

export const Button = styled.button`
  background-color: rgb(var(--emerald-green));
  color: rgb(var(--white));
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &.remove {
    background-color: rgb(var(--festive-red));
    width: 25px;
    height: 25px;
    padding: 0;
  }
`
