type BlockProps = {
  children: any,
  testId: string,  
}

const Block = ({children, testId}: BlockProps) => {
  return <div data-test-id={testId}>{children}</div>;
};

export default Block;