import { Container, Counter, Bar, Progress } from "./styles";

const ExperienceBar = () => {
  return (
    <Container>
      <Counter>0 xp</Counter>
      <Bar>
        <Progress $experience={50} />
        <Counter $left={50}>300xp</Counter>
      </Bar>
      <Counter>600 xp</Counter>
    </Container>
  );
};

export default ExperienceBar;
