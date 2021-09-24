import React from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Row, Tab, Tabs } from 'react-bootstrap';
function PlaceHoldersImages() {
    return (
        <Container>
            <Tabs defaultActiveKey="MyCourses" id="courses-tabs" className="mb-1">
                <Tab eventKey="MyCourses" title="placehodler Images">
                    <Row xs={1} md={2} className="mt-1 g-4" id="link-1">
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="https://eu.ui-avatars.com/api/?size=150&name=Course%20Title%20Test" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="https://dummyimage.com/200x200.jpg?text=dummy" />
                                <Card.Img style={{ height: '40vh' }} variant="top" src="https://dummyimage.com/200x200/000000/FFFFFF.jpg?text=dummy%20dummy3" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="https://fakeimg.pl/400x200/?text=World&font=lobster" />
                                1<img src="https://fakeimg.pl/300/?text=World" alt="fakeimg1" />
                                2<img src="https://fakeimg.pl/250x100/?text=World" alt="fakeimg2" />
                                3<img src="https://fakeimg.pl/250x100/333/?text=World" alt="fakeimg3" />
                                4<img src="https://fakeimg.pl/350x200/333/eae0d0?text=World" alt="fakeimg4" />

                                5<img src="https://fakeimg.pl/350x200/ff0000,128/000,255?text=World" alt="fakeimg5" />
                                6<img src="https://fakeimg.pl/350x200/?text=World" alt="fakeimg" />
                                7<img src="https://fakeimg.pl/200x100/?retina=1&text=World&font=noto" alt="fakeimg6" />
                                8<img src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="fakeimg7" />
                                9<img src="https://fakeimg.pl/350x200/?text=World&font=bebas" alt="fakeimg8" />
                                10<img src="https://fakeimg.pl/350x200/?text=World&font=Museo" alt="fakeimg9" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="http://loremflickr.com/g/200/200/loremfliker" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="http://lorempixel.com/200/200/animals/lorempixel" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="https://picsum.photos/200/200" />

                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="https://place-hold.it/200x200?text=place-hold.it" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="http://placekitten.com/200/200" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="http://placeskull.com/200/200" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="http://unsplash.it/200/200?gravity=center" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="position-relative border border-secondary" >
                                <Card.Img style={{ height: '40vh' }} variant="top" src="http://unsplash.it/200/200?gravity=center" />
                                <Card.Body className="border border-primary border-end-0 border-bottom-0 border-start-0">
                                    <Card.Title >Course Title Test</Card.Title>
                                </Card.Body>
                                <DropdownButton id={`dropdown-item-button`} title={`⋮`} className="position-absolute bottom-0 end-0" >
                                    <Dropdown.Item as="button">Delete</Dropdown.Item>
                                </DropdownButton>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default PlaceHoldersImages;