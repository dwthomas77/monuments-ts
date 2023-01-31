type BlockProps = {
  children: any,
  testId: string,
  type?: string, 
}

const Block = ({children, testId, type}: BlockProps) => {
  switch(type) {
    case 'header':
      return <header data-test={testId}>{children}</header>;
    default:
      return <div data-test={testId}>{children}</div>;
  }  
};

export default Block;