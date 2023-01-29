import './App.css';
import translations from './translations.json';
import MonumentsList from './components/MonumentsList';
import TEST_IDS from './testIds/app.json';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        {translations.app.header}
      </h1>
      <MonumentsList testId={TEST_IDS.list} />
    </div>
  );
}

export default App;
