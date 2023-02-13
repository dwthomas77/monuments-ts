import Block from '../Block';

type ListPropTypes = {
  ListItemComponent: React.ElementType,
  listItems: object[],
  testId: string,
};

const List = ({ ListItemComponent, listItems, testId }: ListPropTypes) => {
  return (
    <Block type='ul' testId={testId}>
      {listItems.map((item, index: number) => <ListItemComponent key={`${testId}-item-${index}`} {...item} />)}
    </Block>
  );
};

export default List;