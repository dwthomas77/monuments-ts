import { useEffect, useReducer } from 'react';
import translations from './translations.json';
import Header from './components/core/Header';
import Layout, {DIRECTION_VERTICAL} from './components/core/Layout';
import MonumentsList from './components/MonumentsList';
import TEST_IDS from './testIds/App.json';
import { UPDATE_ACTIVE_MONUMENT, UPDATE_MONUMENT_LIST } from './actions';
import { MonumentType } from './services/monuments';
import fetchMonuments from './services/monuments';

type StateType = {
  monuments: MonumentType[],
  activeMonument: MonumentType["uid"] | null,
};

type ActionType = {
  type: string,
  payload?: any
};

const defaultState: StateType = {
  monuments: [],
  activeMonument: null,
};

const reducer = (state: StateType, action: ActionType) => {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_MONUMENT_LIST:
      return {
        ...state,
        monuments: payload,
      };
    case UPDATE_ACTIVE_MONUMENT: 
      return {
        ...state,
        activeMonument: payload,
      }
    default:
      return state;
  }
}

const fetchDataOnLoad = async (dispatch: Function) => {
  const monuments = await fetchMonuments();
  dispatch({
    type: UPDATE_MONUMENT_LIST,
    payload: monuments,
  });
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => { fetchDataOnLoad(dispatch) }, []);

  const itemClickHandler = (uid: string) => {console.log(uid)};

  return (
    <Layout direction={DIRECTION_VERTICAL}>
      <Header testId={TEST_IDS.HEADER}>
        {translations.app.header}
      </Header>
      <Layout>
        <MonumentsList onItemClick={itemClickHandler} testId={TEST_IDS.LIST} list={state.monuments} />
      </Layout>
    </Layout>
  );
}

export default App;
