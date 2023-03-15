import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import './App.less';
import InfinityScroll from './components/InfiniteScroll';
import SummaryInfo from './components/SummaryInfo';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InfinityScroll />
        <SummaryInfo />
      </Provider>
    </div>
  );
}

export default App;
