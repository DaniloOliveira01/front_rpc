import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(3);
`

export const Loader = styled.div`
  animation: is-rotating 0.1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #4682b4;
  height: 50px;
  width: 50px;
`;
