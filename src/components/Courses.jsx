import React, { useState, useEffect, useDebugValue } from "react";
import { Tab, Row, Col, Accordion, Nav, Card, Placeholder, Spinner, Form } from 'react-bootstrap';
import CoursesNavbar from './CoursesNavbar';
import { useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getNewAccessToken } from './auth/UseAuth';

let urlCourses = "http://localhost:3001/courses";

function Courses() {
    const [course, setCourse] = useStateWithLabel({}, "course");
    const [editableCourseTitle, setEditableCourseTitle] = useStateWithLabel("", "editableCourseTitle");
    let { courseId } = useParams();

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    const getCourse = () => {
        try {
            fetch(urlCourses + "/" + courseId, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => { if (res.status === 401) { getNewAccessToken(); getCourse() } return res.json() })
                .then(
                    (result) => {
                        setCourse(result)
                        setEditableCourseTitle(result.title)
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    const updateCourse = () => {
        try {
            fetch(urlCourses + "/" + courseId, {
                credentials: 'include',
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(course) // body data type must match "Content-Type" header
            })
        } catch (error) {
            console.log('error:', error)
        }
    };

    useEffect(() => {
        getCourse()
        // eslint-disable-next-line
    }, [])

    function handleOnDragEnd(result, flowIndex) {
        if (!result.destination) return;
        const activities = Array.from(course.flowsAndActivities[flowIndex].activities);
        const [reorderedItem] = activities.splice(result.source.index, 1);
        activities.splice(result.destination.index, 0, reorderedItem);
        course.flowsAndActivities[flowIndex].activities = activities
        setCourse(course);
        updateCourse()
    }

    return (
        <>
            <CoursesNavbar CourseTitle={course.title ? course.title : <span>&nbsp;&nbsp;<Spinner animation="border" variant="primary" /></span>} />
            <Tab.Container id="left-tabs-example">
                <Row>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={course.cover ? course.cover : "https://picsum.photos/640/360"} />
                            <Card.Title >
                                <Form.Control className="text-center" plaintext value={editableCourseTitle} onChange={(e) => {
                                    setEditableCourseTitle(e.target.value)
                                    if (course.cover === `https://fakeimg.pl/350x200/333/eae0d0?text=${course.title}`) {
                                        course.cover = `https://fakeimg.pl/350x200/333/eae0d0?text=${e.target.value}`
                                    }
                                    course.title = e.target.value
                                    setCourse(course)
                                    updateCourse()
                                }} />
                            </Card.Title>
                        </Card>
                        {course.flowsAndActivities ?
                            <Accordion>
                                {course.flowsAndActivities.map((flow, flowIndex) => (
                                    <Accordion.Item eventKey={flow._id} key={flow._id}>
                                        <Accordion.Header>
                                            <Form.Control className="text-center" plaintext defaultValue={flow.name} onChange={(e) => {
                                                flow.name = e.target.value
                                                updateCourse(course)
                                            }} />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <DragDropContext onDragEnd={(result) => (handleOnDragEnd(result, flowIndex))}>
                                                <Droppable droppableId="activities">
                                                    {(provided) => (
                                                        <Nav variant="pills" className="flex-column" {...provided.droppableProps} ref={provided.innerRef}>
                                                            {flow.activities.map((activity, index) => {
                                                                return (
                                                                    <Draggable key={activity._id} draggableId={activity._id} index={index}>
                                                                        {(provided) => (
                                                                            <Nav.Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                                <Nav.Link eventKey={activity._id}>
                                                                                    <Form.Control plaintext defaultValue={activity.name} onChange={(e) => {
                                                                                        activity.name = e.target.value
                                                                                        updateCourse(course)
                                                                                    }} />
                                                                                </Nav.Link>
                                                                            </Nav.Item>
                                                                        )}
                                                                    </Draggable>
                                                                )
                                                            })}
                                                            {provided.placeholder}
                                                        </Nav>
                                                    )}
                                                </Droppable>
                                            </DragDropContext>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                            :
                            <Accordion>
                                <Accordion.Item>
                                    <Accordion.Header>
                                        <Placeholder animation="glow">
                                            <Placeholder xs={10} />
                                        </Placeholder>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link>
                                                    <Placeholder animation="glow">
                                                        <Placeholder xs={10} />
                                                    </Placeholder>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        }
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {course.flowsAndActivities ? course.flowsAndActivities.map((flow) => (
                                flow.activities.map((activity) => (
                                    <Tab.Pane eventKey={activity._id} key={activity._id} className="mt-2">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={activity.activityContent}
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                // console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                activity.activityContent = data
                                                setCourse(course)
                                                updateCourse()
                                                // console.log("---------------------");
                                                // console.log({ event, editor, data });
                                            }}
                                        // onBlur={(event, editor) => {
                                        //     console.log('Blur.', editor);
                                        // }}
                                        // onFocus={(event, editor) => {
                                        //     console.log('Focus.', editor);
                                        // }}
                                        />
                                    </Tab.Pane>
                                ))
                            ))
                                :
                                <Placeholder animation="glow"> <Placeholder xs={10} /> </Placeholder>
                            }
                        </Tab.Content>



                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Courses;




