import React, { Component } from 'react';
import {Button, Container, Form} from 'react-bootstrap';

class Contacts extends Component {
   render() {
      return (
         <div>
            <Container style={{width: '500px'}}>
               <h1 className="text-center">Contact us</h1>
               <Form>
                  <Form.Group ControlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter Email" />
                     <Form.Text>
                        Lorem ipsum dolor sit.
                     </Form.Text>
                  </Form.Group>

                  <Form.Group ControlId="formBasicPassword">
                     <Form.Label>Example textarea</Form.Label>
                     <Form.Control as="textarea" rows="3"></Form.Control>
                  </Form.Group>

                  <Form.Group ControlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
               </Form>
            </Container>
         </div>
      );
   }
}

export default Contacts;