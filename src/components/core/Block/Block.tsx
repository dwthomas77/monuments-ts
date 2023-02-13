type BlockProps = {
  children?: any,
  style?: object,
  testId?: string,
  type?: string, 
}

const Block = ({children, style, testId = '', type}: BlockProps) => {
  switch(type) {
    case 'header':
      return <header data-testid={testId} style={style}>{children}</header>;
    case 'h1':
      return <h1 data-testid={testId} style={style}>{children}</h1>;
    case 'ul':
      return <ul data-testid={testId} style={style}>{children}</ul>;
    case 'li':
        return <ul data-testid={testId} style={style}>{children}</ul>;
    default:
      return <div data-testid={testId} style={style}>{children}</div>;
  }  
};

export default Block;