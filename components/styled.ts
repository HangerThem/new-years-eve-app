import styled from "styled-components"

export const Container = styled.section`
  border: 1px solid rgb(var(--white));
  border-radius: 5px;
  height: fit-content;
  padding: 20px;
  width: 100%;
  flex: 1 1 350px;

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
        width: 100%;
        word-break: break-all;
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

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &.close {
    color: rgb(var(--festive-red));
    background-color: transparent;
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
  }
`
