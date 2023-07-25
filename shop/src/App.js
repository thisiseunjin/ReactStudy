import './App.css';
import {Button, Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './routes/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Details.js';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">응프로띠테</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
        <>
          <div className='main-bg'/>
          <div className="container"> 
            <div className="row">
              {
                shoes.map(function(a,i){
                  return(
                    <Item shoes={shoes} index={i}></Item>
                  )
                })
              }
          </div>
          </div> 
        </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}>
         

        </Route>
        
        
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>


        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div>첫 주문시 양배추 즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰 받기</div> } />
        </Route>

      </Routes>

      


    </div>
  );
}

function Event(){
  return(
      <div>
        <h3>오늘의 이벤트</h3>
          <Outlet></Outlet>
      </div>

  )
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Item(props){
  return(
    <div className="col-md-4">
      <img src={props.shoes[props.index].image} width='80%' />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].content}</p>
      <p>{props.shoes[props.index].price}</p>
   </div>
  )
}



export default App;
