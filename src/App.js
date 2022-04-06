import React, { useState } from 'react';
import './App.css';
import Transition from './Transition/Transition';
import SimpleBlock from './blocks/SimpleBlock';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import me from './assets/lars-maart-2022-small.jpeg'
import vrijwilligerTool from './assets/laptop screen.png'

function App() {
  const [isIn, setIn] = useState(false)

  return (
    <div className="App">
      <div className='row h-100 row-container'>
        <div className="col-md-4 col-xl-3 offset-xl-1">
          <div className='personal-info m-4 row'>
            <div className='col-4 col-md-12'>
              <Zoom><img src={me} className="App-logo w-100" alt="logo" /></Zoom>

            </div>
            <div className='col-8 col-md-12'>
              <h1 className='mb-0 mt-3'>Portfolio</h1>
              <p className='mt-0' onClick={() => setIn(!isIn)}>
                Lars Dekker
              </p>
            </div>
          </div>

        </div>
        <div className='portfolio-content col-md-8 col-xl-8'>
          <SimpleBlock title={'Internship: Ticketdesigner in React'} description={'For my internship at Moonly Software I worked on a ticket designer and the implementation of React within a brand new ticketing system. With the introduction of React to Moonly, the new ticketing system got itself a stunning user interface.'} image="https://media-exp1.licdn.com/dms/image/C5622AQHbxkHJ_ChvnQ/feedshare-shrink_2048_1536/0/1604666702721?e=2147483647&v=beta&t=Nejz26w7kKKvdygYFSoHEHKt7D7tN7R8MdUpNP2KTV0" />
          <SimpleBlock title={'KV ONDO: Volunteers Tool'} description={''} image={vrijwilligerTool} />
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
