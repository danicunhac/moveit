import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;

  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  outline: 0;

  background: var(--blue);
  color: var(--white);

  transition: all 0.2s;

  :hover {
    background: var(--blue-dark);
  }

  :disabled {
    background: var(--white);
    color: var(--title);
    cursor: not-allowed;

    border-bottom: 4px solid var(--green);
  }

  ${props =>
    props.isActive &&
    css`
      background: var(--white);
      color: var(--title);

      :hover {
        background: var(--red-dark);
        color: var(--white);
        svg {
          path {
            transition: fill 0.2s;
            fill: var(--white) !important;
          }
        }
      }
    `}

  font-size: 1.25rem;
  font-weight: 600;

  img,
  svg {
    margin-left: 16px;
  }
`;
