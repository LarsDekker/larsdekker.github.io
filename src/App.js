import React, { useState } from 'react';
import './App.css';
import Transition from './Transition/Transition';
import SimpleBlock from './blocks/SimpleBlock';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import me from './assets/lars-maart-2022-small.jpeg'
import vrijwilligerTool from './assets/laptop screen.png'
import excusions from './assets/laptop_excursions.png'

function App() {
  const [isIn, setIn] = useState(false)

  return (
    <div className="App p-4">
      <div className='row h-100 row-container'>
        <div className="col-md-4 col-xl-3 offset-xl-1">
          <div className='personal-info m-4 row sticky'>
            <div className='col-4 col-md-12'>
              <Zoom><img src={me} className="App-logo w-100" alt="logo" /></Zoom>

            </div>
            <div className='col-8 col-md-12'>
              <h1 className='mb-0 mt-3'>Portfolio</h1>
              <p className='mt-0 d-flex justify-content-between' onClick={() => setIn(!isIn)}>
                <span>Lars Dekker</span><span className='ml-auto'> 🇳🇱</span>
              </p>
            </div>
          </div>

        </div>
        <div className='portfolio-content col-md-8 col-xl-8'>
          <SimpleBlock title={'Internship: Ticketdesigner in React'} description={'For my internship at Moonly Software I worked on a ticket designer and the implementation of React within a brand new ticketing system. With the introduction of React to Moonly, the new ticketing system got itself a stunning user interface.'} image="https://media-exp1.licdn.com/dms/image/C5622AQHbxkHJ_ChvnQ/feedshare-shrink_2048_1536/0/1604666702721?e=2147483647&v=beta&t=Nejz26w7kKKvdygYFSoHEHKt7D7tN7R8MdUpNP2KTV0" />
          <SimpleBlock title={'KV ONDO: Volunteers Tool'} description={'With this tool, KV ONDO is able to efficiently plan all their volunteers for every matchday at the association. The Korfball association of my hometown previously managed to do this by sending excel sheets around which costs a lot of time. A perfect case for my first project in college which is still in use today.'} image={vrijwilligerTool} />
          <SimpleBlock title={'Moonly Software: Sunweb Excursions'} description={'After my internship I directly started working for Moonly Software besides my studies. One of the first projects I participated in was for Sunweb. A platform for organized excursions integrated with the previously mentioned ticketing system. In the team I was responsible for bootstrapping the ReactJs framework and integrating the ticketing system as well as the internationalization into the webapp.'} image={excusions} />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
          <SimpleBlock title={'Simple block'} description={''} image="/logo192.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
