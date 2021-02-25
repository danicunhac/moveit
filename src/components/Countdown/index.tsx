import React, { useCallback, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";

import { Container, Wrapper, Button } from "./styles";

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const toggleCountdown = useCallback(() => {
    if (isActive) {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(0.1 * 60);
      return;
    }

    setIsActive(true);
  }, [isActive, time]);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <Wrapper>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button disabled isActive={isActive}>
          Ciclo encerrado
          <img src="icons/done.svg" alt="Done" />
        </Button>
      ) : (
        <Button isActive={isActive} onClick={toggleCountdown}>
          {isActive ? (
            <>
              Abandonar o ciclo
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#666666"
                />
              </svg>
            </>
          ) : (
            <>
              Iniciar um ciclo
              <img src="icons/next.svg" alt="Start" />
            </>
          )}
        </Button>
      )}
    </Wrapper>
  );
};

export default Countdown;
