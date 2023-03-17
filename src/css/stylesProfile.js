import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 35px 200px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 35px;
    background-color: crimson;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 25px 0;

    img {
      height: 400px;
      width: 400px;
      border-radius: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #f1f1f1;
      border-radius: 15px;
      row-gap: 10px;
      padding: 20px;

      p {
        span {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }

    .message {
      background-color: #f1f1f1;
      padding: 20px;
      border-radius: 15px;
    }

    button {
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

export const ProfileEditContainer = styled.div`
  padding: 35px 200px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 35px;
    background-color: crimson;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 25px 0;

    h2 {
      color: white;
    }

    img {
      height: 400px;
      width: 400px;
      border-radius: 10px;
    }

    .inputs {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 10px;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        color: white;
        font-weight: bold;
        font-size: 20px;
      }

      input {
        width: 30%;
        background: #f6f6f6;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 8px;
        border-radius: 5px;
        border: none;
        text-align: center;
        font-size: 15px;
        font-weight: lighter;
        outline-width: 0;
      }
    }

    button {
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
