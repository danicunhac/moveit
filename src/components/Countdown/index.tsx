import React, { useContext } from "react";

import { CountdownContext } from "../../context/CountdownContext";

import { Container, Wrapper, Button } from "./styles";

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
        <>
          {isActive ? (
            <Button isActive={isActive} onClick={resetCountdown}>
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
            </Button>
          ) : (
            <Button isActive={isActive} onClick={startCountdown}>
              Iniciar um ciclo
              <img src="icons/next.svg" alt="Start" />
            </Button>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Countdown;
