import './App.css';
import translations from './translations.json';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        {translations.app.header}
      </h1>
    </div>
  );
}

export default App;
