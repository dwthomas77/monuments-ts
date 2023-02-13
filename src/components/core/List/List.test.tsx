import { render } from '@testing-library/react';
import List from './List';

const componentTestId = 'test-list';
const testEmptyList: object[] = [];
const testSingleList: { uid: string }[] = [{ uid: 'test1' }];
const TestRenderComponent = (item: object) => {
  return <div>item.uid</div>
}

describe('List component tests', () => {
  it('renders with the test id correctly', () => {
    const {getByTestId} = render(<List ListItemComponent={TestRenderComponent} listItems={testEmptyList} testId={componentTestId} />);
    const listElement = getByTestId(componentTestId);
    expect(listElement?.tagName).toBe('UL');
  });
  it('displays the first item in the list correctly', () => {
    const {getByText} = render(<List ListItemComponent={TestRenderComponent} listItems={testSingleList} testId={componentTestId} />);
    expect(getByText(testSingleList[0].uid)).toBeInTheDocument();
  });
});
