import React from 'react'
import './App.css';
import Context from './Components/Context';
import ImperativeHandle from './Components/ImperativeHandle';
import Memo from './Components/Memo';
import StateTutorial from './Components/StateTutorial';
import UseEffect from './Components/UseEffect';
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import LayoutEffect from './LayoutEffect';
// import culinary from './Images/culinaryd.jpg';
// import restraunt from './Images/restrauntk.jpg';
// import wine from './Images/wine5.JPG';

function App(){
 
  return (
    <>
   {/*  <div className='App'>
       
        <div className='kashee info'>
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
          <span>!</span>
        </div>
       <div className='kashee info_1'>
          <span>t</span>
          <span>o</span>
          <span>m</span>
          <span>y</span>
          </div>
          <div className='kashee info_2'>
          <span>c</span>
          <span>r</span>
          <span>e</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>v</span>
          <span>e</span>
          <span>s</span>
          <span>p</span>
          <span>a</span>
          <span>c</span>
          <span>e</span>
       </div>
      
    </div>
    <div className='trial'>
     <h1><span>Welcome</span> space!!<span></span></h1>
      </div>

      <div className='intro'>
        <button className='expand'><p><span>Welcome</span>!<span></span></p></button>
      </div> */}
      <StateTutorial />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <ImperativeHandle />
      <LayoutEffect />
      <Context />
      <Memo />
      </>
  )
}

export default App;