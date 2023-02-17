import Block from '../Block';

type ListPropTypes = {
  ListItemComponent: React.ElementType,
  listItems: object[],
  testId: string,
};

const List = ({ ListItemComponent, listItems, testId }: ListPropTypes) => {
  const hoverTextClass = 'hoverText';
  const activeTextClass = 'activeText';

  return (
    <Block type='ul' testId={testId}>
      {listItems.map(
        (item, index: number) => (
          <Block type='li' key={`${testId}-item-${index}`} className={hoverTextClass}>
            <ListItemComponent {...item} />
          </Block>
      ))}
    </Block>
  );
};

export default List;