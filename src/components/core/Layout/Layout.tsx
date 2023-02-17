import designTokens from '../../../designSystem';

const DIRECTION_HORIZONTAL = 'HORIZONTAL';
const DIRECTION_VERTICAL = 'VERTICAL';
type DIRECTION_HORIZONTAL = string;
type DIRECTION_VERTICAL = string; 

type LayoutProps = {
  children?: any,
  direction?: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL
};

const Layout = ({children, direction = DIRECTION_HORIZONTAL}: LayoutProps) => {
  const layoutStyles = {
    ...designTokens.layout,
    flexDirection: direction && direction === DIRECTION_VERTICAL ? 'column' : 'row',
  };
  
  return (
    <div style={layoutStyles as React.CSSProperties}>
      {children}
    </div>
  );
};

export { Layout as default, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL };