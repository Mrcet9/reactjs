import React from 'react';
//import Fuctcomp1 from './components/fuctcomp1'; 
//import { Class1, Class2 } from './components/class1'; 
//import Click from './components/click';
//import Counter from './components/counter';
//import Parentcomp from './components/parentcomp';
import Classprop from './components/classprop';
import Fuctprops from './components/fuctprops';
function App() {
  return (
    <div> 
      <Classprop  name='rahul' place='dehil'/>
      <p>hello nice meeting</p>    
      <Classprop name='rohit'/>
      <button>click</button>
      <Classprop name='raj'/>
      <Fuctprops name='rahul'  place='kerala'/>

    </div>
  );
}

export default App;
