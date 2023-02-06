import Block from '../core/Block';

type HeaderProps = {
  children: any,
  testId: string,
};

const stylesObject = {
  backgroundColor: 'gray',
  padding: '20px 15px 5px 5px',
  color: 'white',
  borderBottom: '2px solid black',
};

const Header = ({children, testId}: HeaderProps) => {
  return (
    <Block type='header' testId={testId} style={stylesObject}>
      <Block type='h1'>{children}</Block>
    </Block>
  );
};

export default Header;