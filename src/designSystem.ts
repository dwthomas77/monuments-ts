const colors = {
  background: {
    dark: '#CCCCCC',
    light: '#e5e5e5'
  },
  border: 'black',
  header: {
    background: 'gray',
    backgroundSecondary: '#b5b5b5',
    text: 'white',
  },
};

const sizes = {
  full: '100%',
  screen: {
    large: '1200px',
  },
  spacing: {
    small: '5px',
    medium: '15px',
    large: '25px',
  }
};

const designTokens = {
  pageHeader: {
    padding: `${sizes.spacing.large} ${sizes.spacing.medium} ${sizes.spacing.small} ${sizes.spacing.small}`,
    color: colors.header.text,
    backgroundColor: colors.header.background,
    borderBottom: `2px solid ${colors.border}`,
  },
  layout: {
    display: 'flex',
    width: sizes.full,
    maxWidth: sizes.screen.large,
    margin: '0 auto',
    backgroundColor: colors.background.light,
    height: sizes.full,
    justifyContent: 'space-between',
  },
  listHeader: {
    color: colors.header.text,
    backgroundColor: colors.header.backgroundSecondary,
    border: `thin solid ${colors.border}`,
    padding: sizes.spacing.small,
  }
};

export default designTokens;