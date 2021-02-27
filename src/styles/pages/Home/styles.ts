import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    padding: 4rem 0;

    align-content: center;

    @media (min-width: 782px) {
      grid-template-columns: 1fr 1fr;
      gap: 6.25rem;
    }

    @media (max-width: 781px) {
      grid-template-rows: 1fr 1fr;
      gap: 2.5rem;
    }
  }
`;

export const Status = styled.div``;

export const Challenge = styled.div``;
