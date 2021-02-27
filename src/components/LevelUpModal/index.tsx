import React, { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';

import { Container, Overlay } from './styles';

const LevelUpModal = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level/</p>

        <button type="button" onClick={() => {}}>
          <img src="/icons/close.svg" alt="Close" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
