import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { Container, Counter, Bar, Progress } from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <Counter>0 xp</Counter>
      <Bar>
        <Progress $experience={percentToNextLevel} />
        <Counter $left={percentToNextLevel}>{currentExperience}xp</Counter>
      </Bar>
      <Counter>{experienceToNextLevel} xp</Counter>
    </Container>
  );
};

export default ExperienceBar;
