import React, { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";

import { Container } from "./styles";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
