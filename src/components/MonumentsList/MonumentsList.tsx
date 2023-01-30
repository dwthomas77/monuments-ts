import Block from '../core/Block';
import translations from '../../translations.json';

type MonumentListProps = {
  testId: string,
};

export const TEST_IDS = {
  header: 'monument-header',
};

const MonumentsList = ({testId}: MonumentListProps) => {
  return (
    <Block testId={testId}>
      <Block type='header' testId={TEST_IDS.header}>{translations.monumentsList.header}</Block>
    </Block>
  );
};

export default MonumentsList;