import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./module.header.css";
import { Link } from "react-router-dom";
import { StartContext } from '../../Start';

const Header = () => {
  const context = React.useContext(StartContext);
  return (
    <>
    <Navbar className='header' collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Link to={"/"}><Navbar.Brand id='headerTitle'  href="#home" >СПА R&B</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"> 
        {/* <Link to={"/"}><div>Главная // было ранее: -Цены-Новости </div></Link>  */}
        <Link to={"/"}>
          <div>Главная<sup>{context.tourList.length}</sup></div>
        </Link>
        <Link to={"/favorites"}>
          <div>{context.favorList.length===0
            ?  
              "НЕИЗБРАНО"
            : <>Избранное:{context.favorList.length}</>}
        {/* : <>ИЗБРАННОE<sup>{context.favorList.length}</sup></>} */}
          </div>
          </Link> *
         <Link to={"/form1"}><div>Заказать звонок</div></Link> * 
          <NavDropdown title="МЕНЮ" id="collasible-nav-dropdown">
            <NavDropdown.Item >
              <Link to={"/form1"}>Заказать звонок</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to={"/description"}>Описание</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
            <Link to={"/favorites"}>Избранное</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to={"/cart"}>Корзина</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to={"/"}>Зарезервировать</Link>
              </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to={"/"}>Отменить заказ</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <Link to={"/"}>Новые предложения</Link>
            </NavDropdown.Item>
          </NavDropdown> *
          <Link to={"/cart"}>
            <div> {context.cartList.length === 0 
              ?
              "Корзина пуста"
              : <>В корзине:{context.cartList.length}</>}
           {/* : <>Корзина<sup>{context.cartList.length}</sup></>} */} 
            </div>
          </Link> *
          <Link to={"/description"}><div>Описание</div></Link>  
        </Nav>
        <Nav>
        <Link to={"/"}><Nav.Link href="#deets">О нас</Nav.Link></Link>
          <Nav.Link eventKey={2} href="#memes">
            Войти
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <div className='blankHeader'></div>
  </>
  )
}

export default Header