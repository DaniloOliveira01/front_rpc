import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  div {
    display: flex;
    align-items: center;
    padding: 10px;

    button {
      width: 130px;
      height: 30px;
      color: #fff;
      background-color: #4682b4;
      font-weight: 600;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.7s;

      &:hover {
        opacity: 0.8;
      }
    }

    .logo-date {
      display: flex;
      flex-direction: column;

      span {
        font-size: 34px;
        font-weight: 600;
        color: #4682b4;
      }
    }
  }

  @media (max-width: 480px) {
    width: 400px;
  }
`
