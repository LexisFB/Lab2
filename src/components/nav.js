import { render } from '@testing-library/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import App from '../App';
import { Content } from './content';
import { Create } from './create';
import { Header } from './header';

import { Read } from './read';



export class Cnav extends React.Component {
    render(){
        return (
            <Router>

                <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="read">Read</Nav.Link>
                    <Nav.Link href="create">Create</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={<Content></Content>}></Route>
                <Route path='/read' element={<Read></Read>}></Route>
                <Route path='/create' element={<Create></Create>}></Route>
               
            </Routes>

          </Router>
          );

    }
  
}


