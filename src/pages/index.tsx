import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";

import { Container, Status, Challenge } from "../styles/pages/Home/styles";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <Container>
      <title>Início | Moveit</title>
      <ExperienceBar />

      <section>
        <Status>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </Status>
        <Challenge></Challenge>
      </section>
    </Container>
  );
}
