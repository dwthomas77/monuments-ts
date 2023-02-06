type BlockProps = {
  children: any,
  style?: object,
  testId?: string,
  type?: string, 
}

const Block = ({children, style, testId = '', type}: BlockProps) => {
  switch(type) {
    case 'header':
      return <header data-test={testId} style={style}>{children}</header>;
    case 'h1':
      return <h1 data-test={testId} style={style}>{children}</h1>;
    default:
      return <div data-test={testId} style={style}>{children}</div>;
  }  
};

export default Block;