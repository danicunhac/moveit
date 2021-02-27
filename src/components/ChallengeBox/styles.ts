import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const Active = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  button {
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;
    color: var(--white);

    font-size: 1rem;
    font-weight: 600;

    transition: background-color 0.2s;
  }
`;

export const FailButton = styled.button`
  background: var(--red);

  :hover {
    background: var(--red-dark);
  }
`;

export const SuccessButton = styled.button`
  background: var(--green);

  :hover {
    background: var(--green-dark);
  }
`;

export const NotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    align-items: center;
    line-height: 1.6;
    margin-top: 3rem;
    width: 100%;
    justify-content: space-between;

    img {
      width: 32px;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
