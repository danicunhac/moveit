import styled, { css } from 'styled-components';

interface ProgressProps {
  $experience: Number;
}

interface CounterProps {
  $left?: Number;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
`;

export const Counter = styled.span<CounterProps>`
  font-size: 1rem;
  left: ${(props) => (props.$left ? `${props.$left}%` : '0%')};
  ${(props) =>
    props.$left
      ? css`
          position: absolute;
          top: 12px;
          transform: translateX(-50%);
        `
      : ''}
`;

export const Bar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const Progress = styled.div<ProgressProps>`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
  width: ${(props) => (props.$experience ? `${props.$experience}%` : '0%')};
`;
