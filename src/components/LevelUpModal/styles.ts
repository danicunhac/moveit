import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(222, 223, 225, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px 5px 0px 0px;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  background: transparent;
  border: 0;
  font-size: 0;
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 80px;

  border: 0;
  border-top: 1px solid var(--gray-line);
  border-radius: 0px 0px 5px 5px;

  box-shadow: var(--shadow);

  background: var(--blue-light);
  color: var(--blue-twitter);

  span {
    font-weight: 600;
    font-size: 1.25rem;
  }

  object {
    width: 24px;
    height: 24px;
    margin-left: 24px;
  }
`;
