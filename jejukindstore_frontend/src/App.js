import React from 'react';
import { Provider } from 'react-redux';

import Routers from './common/Router'; 


import createStore from './store';
import reducers from './reducers';

const store = createStore(reducers); // reducers 를 바탕으로 store 생성

const App = () => {
  return (
        <Provider store={store}>
          <Routers />
        </Provider>
  );
}


export default App;