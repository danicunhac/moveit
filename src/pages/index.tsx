import { GetServerSideProps } from 'next';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';

import { Container, Status, Challenge } from '../styles/pages/Home/styles';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
