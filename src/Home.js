import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

class Home extends Component{

   render(){
      return (
         <div>
            <img className="banner-img" src={require('./images/download.jpg')} alt="banner" />
            <Container>
               <h1 className="center">Developer</h1>
               <Row>
                  <Col className="center" sm="12" md="4">
                     <img className="dev-logo" src={require('./images/download.jpg')} alt="development logo" />
                     <p className="dev-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                     </p>
                  </Col>
                  <Col className="center" sm="12" md="4">
                     <img className="dev-logo" src={require('./images/download.jpg')} alt="development logo" />
                     <p className="dev-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                     </p>
                  </Col>
                  <Col  className="center" sm="12" md="4">
                     <img className="dev-logo" src={require('./images/download.jpg')} alt="development logo" />
                     <p className="dev-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                     </p>
                  </Col>
               </Row>
               <h1 className="center">Designer</h1>
               <Row>

               </Row>
               <h1 className="center">Hobbies</h1>
               <Row>
                  <Col className="center" md="3" sm="12">
                     <Row>
                        <Col>
                           <img className="hobby-img" src={require('./images/download.jpg')} alt="development logo" />
                           <p className="d-sm-block d-md-none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                              natoque penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis, ultricies nec,
                              pellentesque eu, pretium quis, sem. Nulla consequat massa
                              quis enim. Donec pede justo, fringilla vel, aliquet nec,
                              vulputate eget, arcu. In enim justo, rhoncus ut,
                              imperdiet a, venenatis vitae, justo. Nullam dictum felis
                              eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                              Vivamus elementum semper nisi.
                           </p>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <img className="hobby-img" src={require('./images/download.jpg')} alt="development logo" />
                           <p className="d-sm-block d-md-none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                              natoque penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis, ultricies nec,
                              pellentesque eu, pretium quis, sem. Nulla consequat massa
                              quis enim. Donec pede justo, fringilla vel, aliquet nec,
                              vulputate eget, arcu. In enim justo, rhoncus ut,
                              imperdiet a, venenatis vitae, justo. Nullam dictum felis
                              eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                              Vivamus elementum semper nisi.
                           </p>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <img className="hobby-img" src={require('./images/download.jpg')} alt="development logo" />
                           <p className="d-sm-block d-md-none">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                              natoque penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Donec quam felis, ultricies nec,
                              pellentesque eu, pretium quis, sem. Nulla consequat massa
                              quis enim. Donec pede justo, fringilla vel, aliquet nec,
                              vulputate eget, arcu. In enim justo, rhoncus ut,
                              imperdiet a, venenatis vitae, justo. Nullam dictum felis
                              eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                              Vivamus elementum semper nisi.
                           </p>
                        </Col>
                     </Row>
                  </Col>
                  <Col md="3" className="d-sm-none d-md-block center">
                     <Row>
                        <img className="hobby-img" src={require('./images/download.jpg')} alt="development logo" />
                     </Row>
                     <Row>
                        <img className="hobby-img" src={require('./images/download.jpg')} alt="development logo" />
                     </Row>
                  </Col>
                  <Col className="center " md="6">
                     <p className="d-sm-none d-md-block">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec,
                        vulputate eget, arcu. In enim justo, rhoncus ut,
                        imperdiet a, venenatis vitae, justo. Nullam dictum felis
                        eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        Vivamus elementum semper nisi.
                     </p>
                  </Col>
               </Row>
            </Container>
         </div>


      );
   }

}

export default Home;
