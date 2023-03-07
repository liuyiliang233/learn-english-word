import { useInfiniteScroll } from 'ahooks';
import { useState } from 'react'
import './App.less'
import InfinityScroll from './components/InfiniteScroll';

function App() {
  
  return (
    <div className="App">
      <InfinityScroll/>
    </div>
  )
}

export default App
