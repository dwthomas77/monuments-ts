import './App.css';
import translations from './translations.json';
import MonumentsList from './components/MonumentsList';
import TEST_IDS from './testIds/App.json';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        {translations.app.header}
      </h1>
      <MonumentsList testId={TEST_IDS.LIST} />
    </div>
  );
}

export default App;
