import React, { Component } from 'react';
import CaruselBox from '../Components/CaruselBox';
import {Container, CardDeck, Card, Button} from 'react-bootstrap';

class Home extends Component {
   render() {
      return (
         <div>
            <CaruselBox />
            <Container>
               <h2 className="text-center m-4">Our Team</h2>
               <CardDeck className="m-3">
                  <Card bg="warning" border="danger" text="primary">
                     <Card.Img
                     variant="top"
                     src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     />
                     <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                     </Card.Body>
                  </Card>

                  <Card bg="success">
                     <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                     </Card.Body>
                     <Card.Img
                     variant="bottom"
                     src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     />
                  </Card>

                  <Card bg="info">
                     <Card.Img
                     variant="top"
                     src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     />
                     <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                           Lorem ipsum dolor sit amet.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                     </Card.Body>
                  </Card>  
               </CardDeck>
            </Container>
         </div>
      );
   }
}

export default Home;