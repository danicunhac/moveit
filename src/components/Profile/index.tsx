import React from "react";

import { Container } from "./styles";

const Profile = () => {
  return (
    <Container>
      <img src="https://github.com/danicunhac.png" alt="Daniel Cunha" />
      <div>
        <strong>Daniel Cunha</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
