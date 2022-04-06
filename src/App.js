import React, { useState } from 'react';
import './App.css';
import Transition from './Transition/Transition';
import SimpleBlock from './blocks/SimpleBlock';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import me from './assets/lars-maart-2022-small.jpeg'

function App() {
  const [isIn, setIn] = useState(false)

  return (
    <div className="App">
      <div className='row h-100 row-container'>
        <div className="col-md-4 col-xl-3 offset-xl-1">
          <div className='personal-info m-4'>
            <Zoom><img src={me} className="App-logo w-100" alt="logo" /></Zoom>
            <h1 className='mb-0'>Portfolio</h1>
            <p className='mt-0' onClick={() => setIn(!isIn)}>
              Lars Dekker
            </p>
          </div>

        </div>
        <div className='portfolio-content col-md-8 col-xl-8'>
          <SimpleBlock title={'Internship: Ticketdesigner in React'} description={'For my internship at Moonly Software I worked on the ticket designer and the implementation of React in the new version of Eventgoose. With the introduction of React to Moonly, the new Eventgoose got itself a stunning user interface. '} image="https://media-exp1.licdn.com/dms/image/C5622AQHbxkHJ_ChvnQ/feedshare-shrink_2048_1536/0/1604666702721?e=2147483647&v=beta&t=Nejz26w7kKKvdygYFSoHEHKt7D7tN7R8MdUpNP2KTV0" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
