import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background-color: #1C1C1C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  letter-spacing: 0.4rem;

  div {
    padding: 0 0.5rem;
    text-transform: uppercase;
    color: #B22222;

    h2 {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.4rem;
      }

      span {
        font-size: 0.9rem;
      }
    }
  }

  nav > ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 2rem;

    li {
      cursor: pointer;
      position: relative;
      padding: 1.2rem 0;

      a {
        color: #ffff;
        font-size: 1.1rem;
      }
    }
  }

  .active {
    color: #B22222;
    &::after {
      content: '';
      position: absolute;
      bottom: 0rem;
      left: -7.5%;
      right: 0;
      width: 100%;
      height: 0.3rem;
      background-color: #B22222;
      border-radius: 0.8rem;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const MenuMobile = styled.div`
  svg {
    color: #fff;
  }

  @media (min-width: 600px) {
      display: none;
  }
`;