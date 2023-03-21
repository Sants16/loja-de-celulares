import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  div {
    margin-top: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    background-color: crimson;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 25px;

    img {
      height: 250px;
      width: 250px;
      border-radius: 10px;
    }

    .infos {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #f1f1f1;
      row-gap: 10px;
      padding: 10px;
      border-radius: 0;

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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    background-color: crimson;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 10px;

    h2 {
      color: white;
      font-size: 10x;
    }

    img {
      height: 250px;
      width: 250px;
      border-radius: 10px;
    }

    .inputs {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 10px;
      padding: 0 100px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 10px;

      label {
        color: white;
        font-weight: bold;
        font-size: 18px;
      }

      input {
        width: 100%;
        background: #f6f6f6;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 8px;
        border-radius: 5px;
        border: none;
        text-align: center;
        font-size: 13px;
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
