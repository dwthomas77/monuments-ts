import Block from '../core/Block';
import translations from '../../translations.json';
import TEST_IDS from '../../testIds/MonumentsList.json';

type MonumentListProps = {
  testId: string,
};

const MonumentsList = ({testId}: MonumentListProps) => {
  return (
    <Block testId={testId}>
      <Block type='header' testId={TEST_IDS.HEADER}>{translations.monumentsList.header}</Block>
    </Block>
  );
};

export default MonumentsList;