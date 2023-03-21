import styled from "styled-components";

export const AccessContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    height: 340px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 20px;
    padding: 20px;
    background: #dc143c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      label {
        align-self: flex-start;
        font-size: 20px;
        color: #ffffff;
      }

      input {
        width: 100%;
        height: 45px;
        background: #f6f6f6;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: none;
        text-align: center;
        font-size: 15px;
        font-weight: lighter;
        outline-width: 0;
      }

      .input_password {
        width: 100%;
        display: flex;
        flex-direction: row;

        button {
          margin-left: 10px;
          background: transparent;
          color: white;
          border: none;
          cursor: pointer;
          transition: all ease-in-out 0.2s;
          &:hover {
            color: black;
            filter: drop-shadow(4px 4px 5px #000);
          }
        }
      }
    }

    .access_btn {
      margin-top: 25px;
      cursor: pointer;
      padding: 15px 25px;
      border: unset;
      border-radius: 15px;
      color: #212121;
      z-index: 1;
      background: #e8e8e8;
      position: relative;
      font-weight: 1000;
      font-size: 16px;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
      overflow: hidden;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #212121;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
      }

      &:hover {
        color: #e8e8e8;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
`;
