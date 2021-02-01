import React, { Component } from 'react';                    
import {Container, Row, Col, Media, ListGroup, Card} from 'react-bootstrap'

class Home extends Component {
   render() {
      return (
         <div>
            <Container className="m-5">
               <Row>
                  <Col md="9">
                     <Media>
                        <img src="https://lh3.googleusercontent.com/proxy/uBRqyr1pTG9SwQHzfvSc_1fOJ11HluiDF0P7y349FYdU6ug9iZSVeC12KYdfKr_78_QdYynMPRm_eHDpKnMF" alt=""
                        width={150}
                        height={150} 
                        className="mr-3"
                        />
                        <Media.Body>
                           <h5>Blog Post</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos dolor recusandae non similique voluptate aspernatur voluptatem ratione quos natus?</p>
                        </Media.Body>
                     </Media>

                     <Media>
                        <img src="https://lh3.googleusercontent.com/proxy/uBRqyr1pTG9SwQHzfvSc_1fOJ11HluiDF0P7y349FYdU6ug9iZSVeC12KYdfKr_78_QdYynMPRm_eHDpKnMF" alt=""
                        width={150}
                        height={150} 
                        className="mr-3"
                        />
                        <Media.Body>
                           <h5>Blog Post</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos dolor recusandae non similique voluptate aspernatur voluptatem ratione quos natus?</p>
                        </Media.Body>
                     </Media>

                     <Media>
                        <img src="https://lh3.googleusercontent.com/proxy/uBRqyr1pTG9SwQHzfvSc_1fOJ11HluiDF0P7y349FYdU6ug9iZSVeC12KYdfKr_78_QdYynMPRm_eHDpKnMF" alt=""
                        width={150}
                        height={150} 
                        className="mr-3"
                        />
                        <Media.Body>
                           <h5>Blog Post</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos dolor recusandae non similique voluptate aspernatur voluptatem ratione quos natus?</p>
                        </Media.Body>
                     </Media>
                  </Col>

                  <Col md="3">
                     <h5 className="text-center mt-5">Category</h5>
                     <Card>
                        <ListGroup variant="flush">
                           <ListGroup.Item>Html/Css</ListGroup.Item>
                           <ListGroup.Item>JS</ListGroup.Item>
                           <ListGroup.Item>Python</ListGroup.Item>
                           <ListGroup.Item>C++</ListGroup.Item>
                           <ListGroup.Item>Java</ListGroup.Item>
                        </ListGroup>
                     </Card>

                     <Card className="mt-3" bg="light">
                        <Card.Body>
                           <Card.Title>Side widget</Card.Title>
                           <Card.Text>ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos dolor recusandae non similique voluptate aspernatur voluptatem ratione quos natus?</Card.Text>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}

export default Home;