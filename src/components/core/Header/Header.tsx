import Block from '../Block';
import designTokens from '../../../designSystem';

type HeaderProps = {
  children: any,
  testId: string,
};

const Header = ({children, testId}: HeaderProps) => {
  return (
    <Block type='header' testId={testId} style={designTokens.pageHeader}>
      <Block type='h1'>{children}</Block>
    </Block>
  );
};

export default Header;