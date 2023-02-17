type BlockProps = {
  children?: any,
  className?: string,
  onClick?:  React.MouseEventHandler<HTMLElement> | undefined,
  style?: object,
  testId?: string,
  type?: string, 
}

type BlockElementProps = {
  className?: string,
  'data-test-id'?: string,
  onClick?: React.MouseEventHandler<HTMLElement> | undefined,
  style?: object,
  testId?: string,
};

const Block = ({className='', children, onClick = undefined, style, testId = '', type}: BlockProps) => {
  console.log(onClick)
  const blockElementProps: BlockElementProps = { 'data-test-id': testId, style, className};
  if (onClick) {
    blockElementProps.onClick = onClick;
  }
  switch(type) {
    case 'header':
      return <header {...blockElementProps}>{children}</header>;
    case 'h1':
      return <h1 data-testid={testId} style={style} className={className} onClick={onClick}>{children}</h1>;
    case 'ul':
      return <ul data-testid={testId} style={style} className={className} onClick={onClick}>{children}</ul>;
    case 'li':
        return <li data-testid={testId} style={style} className={className} onClick={onClick}>{children}</li>;
    default:
      return <div data-testid={testId} style={style} className={className} onClick={onClick}>{children}</div>;
  }  
};

export default Block;