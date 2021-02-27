import React, { useCallback, useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { CountdownContext } from '../../context/CountdownContext';

import {
  Container,
  NotActive,
  Active,
  FailButton,
  SuccessButton,
} from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  );
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  return (
    <Container>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Type" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailButton type="button" onClick={handleChallengeFailed}>
              Falhei
            </FailButton>
            <SuccessButton onClick={handleChallengeSucceeded} type="button">
              Completei
            </SuccessButton>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>
            <span>Inicie um ciclo</span>
            <span>para receber desafios a</span>
            <span>serem completados</span>
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            <span>
              <span>Complete-os e ganhe</span>
              <span>experiência e avance de leve.</span>
            </span>
          </p>
        </NotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
