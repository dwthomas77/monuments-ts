import Block from '../core/Block';

type MonumentListProps = {
  testId: string,
};

const MonumentsList = ({testId}: MonumentListProps) => {
  return <Block testId={testId}>Hello World</Block>;
};

export default MonumentsList;