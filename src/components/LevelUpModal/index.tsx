import React, { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';

import { CloseButton, Container, Overlay, ShareButton } from './styles';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <CloseButton type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close" />
        </CloseButton>
      </Container>
      <ShareButton type="button" onClick={() => {}}>
        <span>Compartilhar no Twitter</span>
        <object data="/icons/twitter.svg" />
      </ShareButton>
    </Overlay>
  );
};

export default LevelUpModal;
