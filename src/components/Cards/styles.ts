import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NextProgramme = styled.section`
  width: 600px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-left: 5px solid #4682b4;
  margin-bottom: 30px;
  flex-direction: column;

  .programme {
    background-color: #fff;
    margin-left: 20px;
    display: flex;
    margin-bottom: 10px;

    span {
      display: flex;
      justify-content: space-around;
      font-weight: 600;
    }

    .live-news {
      display: flex;
      width: 130px;
      color: red;

      .ball-red {
        width: 20px;
        height: 18px;
        border-radius: 50%;
        background-color: red;
      }
    }
  }

  .image-programme {
    background: transparent;
    box-shadow: 2px 3px 4px rgba(0,0,0,0.5);
    margin-bottom: 10px;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;

    span {
      font-weight: 600;
    }

    p {
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-left: 20px;
  }
`
