import React, { Component } from 'react';
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';

class Home extends Component {
   render() {
      return (
         <div>
            <Container>
               <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                  <Row>
                     <Col sm={3}>
                        <Nav variant="pilles" className="flex-column mt-2">
                           <Nav.Item>
                              <Nav.Link eventKey="first">Design</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="second">Team</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="third">Programing</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="fifth">Libraris</Nav.Link>
                           </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={9}>
                        <Tab.Content className="mt-3">
                           <Tab.Pane eventKey="first">
                              <img src="https://i.vimeocdn.com/video/822590268.webp?mw=1200&mh=682&q=70" alt=""/>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dicta.</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="second">
                              <img src="https://i.ytimg.com/vi/Kf1gILChfks/maxresdefault.jpg" alt=""/>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dicta.</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="third">
                              <img src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png" alt=""/>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dicta.</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="fourth">
                              <img src="https://i.ytimg.com/vi/hT2m1ExZE8U/maxresdefault.jpg" alt=""/>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dicta.</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="fifth">
                              <img src="https://cnet3.cbsistatic.com/img/KhWoFnIS6NiHxgQL9ZmTkRNhpy8=/940x0/2019/10/21/0b8fbcc3-50fd-4561-8135-f9e6a1e2ed9d/figma-editor.jpg" alt=""/>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum quia harum, repellat impedit assumenda mollitia debitis ducimus consequatur ipsum ipsam sunt quasi omnis alias animi quos aspernatur. Laborum ipsa non, numquam reprehenderit soluta laudantium sunt. Ut voluptates, voluptas fugit quos impedit nesciunt dicta iste, recusandae numquam animi expedita! Natus vel maiores ipsa voluptate sapiente hic nostrum laudantium corporis explicabo provident aliquid ut harum quasi voluptates dignissimos expedita cupiditate, rem recusandae ab alias deleniti? Quae, unde porro et magni, fugit cupiditate, assumenda cum vitae saepe quam consectetur sapiente laboriosam quod delectus distinctio id. Cum hic perferendis quidem cumque beatae veniam totam, excepturi laudantium delectus ullam debitis culpa est. Pariatur molestias ullam totam unde ab doloremque architecto et, eveniet quas delectus possimus dolores, animi assumenda iste quis expedita optio nobis vero, labore sapiente. Cumque enim voluptatem quas a quaerat vitae, distinctio alias deserunt, eum modi vero sunt ullam aperiam, hic eveniet?</p>
                           </Tab.Pane>
                        </Tab.Content>
                     </Col>
                  </Row>
               </Tab.Container>
            </Container>
         </div>
      );
   }
}

export default Home;