import './app.scoped.css';

import { MainContext } from '..';
import { useContext } from 'react';
function App() {
    console.log(useContext(MainContext))
  return (
      <div className='second-cls'> 

      </div>
  );
}

export default App;
