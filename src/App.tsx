import translations from './translations.json';
import Header from './components/core/Header';
import MonumentsList from './components/MonumentsList';
import TEST_IDS from './testIds/App.json';

function App() {
  return (
    <div className="App">
      <Header testId={TEST_IDS.HEADER}>
        {translations.app.header}
      </Header>
      <MonumentsList testId={TEST_IDS.LIST} />
    </div>
  );
}

export default App;
