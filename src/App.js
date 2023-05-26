import React, { useState } from 'react';
import Smile from './Components/Smile';
import './Style/App.css';
import './Style/view.css';
import './Style/Head.css';
import './Style/Explore.css';
import './Style/About.css';
import './Style/Singers.css';
import './Style/Price.css';
import './Style/Carousel.css';
import './Style/FooterUp.css';
import SpisokOsn from './Components/SpisokOsn';
import Buttons from './Components/UI/button/Buttons';
import Inputs from './Components/UI/input/Inputs';
import Head from './Components/Head';
import ExploreOsn from './Components/ExploreOsn';
import About from './Components/About';
import Singers from './Components/Singers';
import PriceOsn from './Components/PriceOsn';
import Carousel from './Components/Carousel';
import Footer_Up from './Components/Footer_Up';
import Weather from './Components/Weather';
import Modals from './Components/UI/modal/Modals';

import photos from './Photos/anonim.jpg';

function App() {
  const [views,setViews] = useState([
    {id : 1, title: 'Alena', text: 'Very nice place!' },
    {id : 2, title: 'Dima', text: 'I love this place!' },
    {id : 3, title: 'Danil', text: 'I do not know how to get past this wonderful place! Very nice!'},
    {id : 4, title: 'Aleksey', text: 'Very cool!!!'}
  ])

  const [explores] = useState([
    {id : 1, title: 'Pop', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    {id : 2, title: 'Folk', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    {id : 3, title: 'Instrumental', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    {id : 4, title: 'Rock', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    {id : 5, title: 'Jazz', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' }
  ])

  const [prices] = useState([
    {id : 'choose_item_1', state: 'Basic', dollars: '100', text: '1 Seat Available',access:'Access Wifi Zone', free: 'Free Food & Coffee' },
    {id : 'choose_item_2', state: 'Premium', dollars: '250', text: '1 Seat Available', access:'Access Wifi Zone', free: 'Free Food & Coffee' },
    {id : 'choose_item_3', state: 'Gold', dollars: '500', text: '2 Seat Available', access:'Access Wifi Zone', free: 'Free Food & Coffee'}
  ])

  const [view, setView] = useState({title:'', text:''})

  function addNewPL (e) {
    e.preventDefault();
    setViews([...views, { ...view, id: Date.now()}])
    setView({title:'', text:''})
    setModal(false)
  }


  const [modal,setModal] = useState(false);
  const [modalTwo,setModalTwo] = useState(false);
  const [modalPhoto,setModalPhoto] = useState(false);
  const onModalOpen = () => setModalTwo(!modalTwo);
  const onModalOpenPhoto = () => setModalPhoto(!modalPhoto);

  return (
    <div className="App">
      <header className="App-header">

      <Head onModalOpen={onModalOpen}/>
       <ExploreOsn explores={explores} title='Explore By Category'/>
       <About onModalOpen={onModalOpen}/>
       <Singers onModalOpen={onModalOpen}/>
       <PriceOsn onModalOpen={onModalOpen} prices={prices} title='Choose a Tier that`s right for you'/>

       
       <Footer_Up/>

       { modalTwo ? <Modals visible={modalTwo} setVisible={setModalTwo}>  
          <p>Modals open. Ura!</p>
        </Modals> : null}

        { modalPhoto ? <Modals visible={modalPhoto} setVisible={setModalPhoto}>  
         <img src={photos} style={{width:'100%', height:'100%', alignItems:'center'}}></img>
        </Modals> : null}
       <Modals visible={modal} setVisible={setModal}>  
          <form>
                <Inputs value={view.title} onChange={e => setView({...view, title: e.target.value})} type="text" placeholder="Your Name"/>
                <Inputs value={view.text} onChange={e => setView({...view, text: e.target.value})} type="text" placeholder="Your Feedback"/>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <Buttons onClick={addNewPL}>Send</Buttons> </div>
            </form>
        </Modals>

       <SpisokOsn onModalOpen={onModalOpenPhoto} views={views} title='Feedback from our visitors'/>
        <div style={{marginTop:15, display:'flex', justifyContent:'center', alignItems:'center'}}> <Buttons onClick={()=>setModal(true)}>Write Feedback</Buttons> </div>
       <Weather/>
      </header>
    </div>
  );
}

export default App;
