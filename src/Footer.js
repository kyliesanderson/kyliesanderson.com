import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

class Footer extends Component{

   render(){
      return(
         <Container className="footer">
            <Row>
               <Col className="d-md-block d-sm-none center" md="4">
                  <h2>Kylie Sanderson</h2>
               </Col>
               <Col sm="8" md="6">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
               </Col>
               <Col sm="4" md="2">
                  <a href="#">Back to top</a>
               </Col>
            </Row>
         </Container>
      );
   }
}

export default Footer;
