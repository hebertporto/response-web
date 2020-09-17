import styled, { css } from 'styled-components';

export const Page = styled.div`
  ${() => css`
    background-color: white;
    width: 100vw;
    height: 100vh;
    @media (min-width: 800px) {
    }
  `};
`;

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    max-width: 1050px;
    background-color: white;
    height: 100vh;
    @media (min-width: 800px) {
      flex-direction: row;
    }
  `};
`;
export const Topbar = styled.div`
  ${() => css`
    background-color: tomato;
    width: 100%;
    height: 80px;
    display: block;
    @media (min-width: 800px) {
      display: none;
    }
  `};
`;

export const Sidebar = styled.div`
  ${() => css`
    background-color: tomato;
    width: 240px;
    height: 100vh;
    display: none;
    @media (min-width: 800px) {
      display: block;
    }
  `};
`;

export const ContactBar = styled.div`
  ${() => css`
    @media (min-width: 800px) {
    }
  `};
`;

export const Content = styled.div`
  ${() => css`
    background-color: beige;
    width: 800px;
    height: 100vh;
    @media (min-width: 800px) {
    }
  `};
`;
