type BlockProps = {
  children: any,
  testId: string,
  type?: string, 
}

const Block = ({children, testId, type}: BlockProps) => {
  switch(type) {
    case 'header':
      return <header data-test-id={testId}>{children}</header>;
    default:
      return <div data-test-id={testId}>{children}</div>;
  }  
};

export default Block;