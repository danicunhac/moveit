import React, { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";

import { Container } from "./styles";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/danicunhac.png" alt="Daniel Cunha" />
      <div>
        <strong>Daniel Cunha</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
