import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './components/Head';
import girl from '../src/assets/girl.png'
import Button from 'react-bootstrap/Button';
import play from '../src/assets/play.png'
import Card from 'react-bootstrap/Card';
import Group1 from '../src/assets/Group1.png'
import Group2 from '../src/assets/Group2.png'
import Group3 from '../src/assets/Group3.png'
import Rectangle1 from '../src/assets/Rectangle1.png'
import Rectangle3 from '../src/assets/Rectangle3.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Head></Head>
    <div className='w-100 container ' >
      <div className='w-100  row mt-5 '>
        <div className=' w-100 container p-5 col  md-8  '>
          <p style={{color:'#DF6951'}}><b>Best Destinations around the world</b></p>
<h1 style={{color:'#181E4B'}}>Travel, enjoy and live a new and full life</h1>
<div className='container '  style={{marginLeft:'20px', color:'#5E6282'}}>
<p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
</div>
<Button onClick={handleShow} className='btn ' variant="warning">Find out more</Button>{' '}  
<Button className='btn '  style={{backgroundColor:'transparent', border:'none',color:"#5E6282"}}> <img height={50} src={play} alt="" />Play Demo</Button>{' '}  

      </div>

        <div className='col md-4 '>
          <img className='hedimg' height={500} src={girl} alt="" />
          </div>
      </div>
      {/* card section */}
      <div className='w-100 container d-flex justify-content-center mt-4'>
<h1 style={{color:'#181E4B'}}>We Offer Best Services</h1>
      </div>
<div className='w-100  row mt-5 ' >
  <div  className=' w-100 container p-5 col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  style={{height:'100px',width:'100px'}} variant="top" src={Group1} />
      <Card.Body>
        <Card.Title>Calculated Weather</Card.Title>
        <Card.Text>
        Built Wicket longer admire do barton vanity itself do in it.        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container p-5 col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'100px',width:'100px'}} variant="top" src={Group2} />
      <Card.Body>
        <Card.Title>Best Flights</Card.Title>
        <Card.Text>
        Engrossed listening. Park gate sell they west hard for the.        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container p-5 col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  style={{height:'100px',width:'100px'}} variant="top" src={Group3} />
      <Card.Body>
        <Card.Title>Local Events</Card.Title>
        <Card.Text>
        Barton vanity itself do in it. Preferd to men it engrossed listening.</Card.Text>
      </Card.Body>
    </Card>
    </div>
   </div>
   {/* card 2 */}
   <div className='w-100 container d-flex justify-content-center mt-4'>
<h1 style={{color:'#181E4B'}}>Top Destinations</h1>
      </div>
<div className='w-100  row mt-5 ' >
  <div  className=' w-100 container p-5 col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={Rectangle1} />
      <Card.Body>
        <Card.Title>Rome, Italty</Card.Title>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container p-5 col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={Rectangle1} />
      <Card.Body>
        <Card.Title>London, UK</Card.Title>
      </Card.Body>
    </Card>
    </div>
  <div  className=' w-100 container p-5 col  md-3  '><Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={Rectangle3} />
      <Card.Body>
        <Card.Title> Full Europe</Card.Title>
      </Card.Body>
    </Card>
    </div>
   </div>
   <div className='w-100 container d-flex justify-content-center mt-4'>
<div className='w-100  row mt-5 '>
  <div  className=' w-100 container p-5 col  md-4'>
  <h2> <sapan style={{color:'#fc9803'}}>T</sapan>ravel <sapan style={{color:'#fc9803'}}>L</sapan>og</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quidem eligendi accusamus at voluptatum quod quae, eos eaque fugiat pariatur illo sed alias corporis officiis.</p>
  </div>
  <div  className=' w-100 container p-5 col  md-4'>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, doloremque, nulla, odit quidem at perspiciatis voluptates nam repellat earum quas aperiam possimus sunt id corrupti quos vero distinctio porro ipsum.
</p></div>
<div  className=' w-100 container p-5 col  md-4 ' >
<i className="fa-brands fa-instagram fa-2xl" style={{marginLeft:'25px'}}></i>
<i className="fa-brands fa-twitter fa-2xl" style={{marginLeft:'25px'}}></i>
<i className="fa-brands fa-facebook fa-2xl" style={{marginLeft:'25px'}}></i>
</div>
</div>
   </div>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1><sapan style={{color:'#fc9803'}}></sapan>elcome to <sapan style={{color:'#fc9803'}}>T</sapan>ravel <sapan style={{color:'#fc9803'}}>L</sapan>og </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default App
