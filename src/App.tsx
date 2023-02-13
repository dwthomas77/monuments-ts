import { useEffect, useReducer } from 'react';
import translations from './translations.json';
import Header from './components/core/Header';
import MonumentsList from './components/MonumentsList';
import TEST_IDS from './testIds/App.json';
import { UPDATE_MONUMENT_LIST } from './actions';
import { MonumentType } from './services/monuments';
import fetchMonuments from './services/monuments';

type StateType = {
  monuments: MonumentType[],
};

type ActionType = {
  type: string,
  payload?: any
};

const defaultState: StateType = {
  monuments: [],
};

const reducer = (state: StateType, action: ActionType) => {
  const { type, payload } = action;
  if (type === UPDATE_MONUMENT_LIST) {
    return {
      ...state,
      monuments: payload,
    };
  }
  else {
    return state;
  }
}

const fetchDataOnLoad = async (dispatch: Function) => {
  console.log('fetching data');
  const monuments = await fetchMonuments();
  dispatch({
    type: UPDATE_MONUMENT_LIST,
    payload: monuments,
  });
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => { fetchDataOnLoad(dispatch) }, []);

  return (
    <div className='App'>
      <Header testId={TEST_IDS.HEADER}>
        {translations.app.header}
      </Header>
      <MonumentsList testId={TEST_IDS.LIST} list={state.monuments} />
    </div>
  );
}

export default App;
