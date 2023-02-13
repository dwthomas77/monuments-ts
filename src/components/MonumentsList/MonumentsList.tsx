import Block from '../core/Block';
import translations from '../../translations.json';
import TEST_IDS from '../../testIds/MonumentsList.json';
import List from '../core/List';
import { MonumentType } from '../../services/monuments';

type MonumentListProps = {
  list: MonumentType[],
  testId: string,
};

const MonumentsListItem = (monument: MonumentType) => {
  return <Block key={`monument-list-item-${monument.uid}`}>{`${monument.city}, ${monument.state}`}</Block>;
}

const MonumentsList = ({list, testId}: MonumentListProps) => {
  const hasResults = list.length > 0;
  const results = hasResults ? 
    (<List ListItemComponent={MonumentsListItem} listItems={list} testId={TEST_IDS.LIST} />) :
    (<div>Sorry No Results</div>);
  return (
    <Block testId={testId}>
      <Block type='header' testId={TEST_IDS.HEADER}>{translations.monumentsList.header}</Block>
      {results}
    </Block>
  );
};

export default MonumentsList;