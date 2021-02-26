import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";

import { Container, Status, Challenge } from "../styles/pages/Home/styles";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";

export default function Home() {
  return (
    <Container>
      <title>Início | Moveit</title>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <Status>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </Status>

          <Challenge>
            <ChallengeBox />
          </Challenge>
        </section>
      </CountdownProvider>
    </Container>
  );
}
