import styled from "styled-components";

import BgBorder from "../assets/borda.png";
import Cursor from "../assets/pokeball.png";

export const PokemonList = styled.div`
  max-width: 100%;
  margin: 0 auto;

  .pokemon-list__form {
    margin: 6% auto 0 auto;
    width: 40%;
    background-color: #fdc35f;
    padding: 7px;
    border-radius: 20px;

    input {
      width: 85%;
      padding: 10px 0 8px 20px;
      border-radius: 20px 0 0 20px;
      border: none;
    }

    button {
      width: 15%;
      padding: 8px;
      border: none;
      border-radius: 0 20px 20px 0;

      img {
        width: 14px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .pokemon-list__form {
      width: 90%;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .pokemon-list__form {
      width: 90%;
    }
  }

  @media screen and (max-width: 599px) {
    .pokemon-list__form {
      width: 300px;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 230px);
  justify-content: center;
  margin: 6% auto 0 auto;
  gap: 20px;
  overflow-x: hidden;

  @media screen and (min-width: 600px) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    .pokemon-list__card {
      width: 270px;
      margin: 0 auto;

      .pokemon-list__link {
        img {
          width: 100%;
        }
        figcaption {
          padding-top: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    grid-template-columns: 100%;

    .pokemon-list__card {
      width: 300px;
      margin: 0 auto;

      .pokemon-list__link {
        img {
          width: 100%;
        }

        figcaption {
          padding-top: 30px;
        }
      }
    }
  }
`;

export const PokemonCard = styled.figure`
  border-width: 35px;
  border-style: solid;
  border-image: url(${BgBorder}) 30%;

  .pokemon-list__link {
    text-align: center;
    cursor: url(${Cursor}), auto;

    img {
      width: 160px;
      height: 200px;
      display: block;
      margin: 0 auto;
    }

    figcaption {
      background-color: #fff;
      padding-top: 10%;
      margin-top: -1px;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 270px;
    margin: 0 auto;

    .pokemon-list__link {
      img {
        width: 100%;
      }
      figcaption {
        padding-top: 30px;
      }
    }
  }

  @media screen and (max-width: 599px) {
    width: 300px;
    margin: 0 auto;

    .pokemon-list__link {
      img {
        width: 100%;
      }

      figcaption {
        padding-top: 30px;
      }
    }
  }
`;

export const PokemonPagination = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PokemonButtons = styled.div`
  width: 60vw;
  margin: 40px auto;
  text-align: center;

  button {
    background-color: #fdc35f;
    width: 40px;
    padding: 5px;
    margin: 5px 5px 5px 0;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    text-align: center;
  }
`;
