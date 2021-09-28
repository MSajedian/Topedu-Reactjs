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
                .then(res => { if (res.ok) { getCourse() } })

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

    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();

                    loader.file.then((file) => {
                        body.append("image", file);
                        let headers = new Headers();
                        headers.append("Origin", "http://localhost:3000");
                        fetch(`${urlCourses}/${courseId}/upload/image`, {
                            credentials: 'include',
                            method: 'POST',
                            headers: headers,
                            body: body
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                resolve({
                                    default: `${res.path}`
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });
                });
            }
        };
    }
    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }

    return (
        <>
            <CoursesNavbar CourseTitle={course.title ? course.title : <span>&nbsp;&nbsp;<Spinner animation="border" variant="primary" /></span>} />
            <Tab.Container id="left-tabs-example">
                <Row>
                    <Col sm={3}>
                        <Card>
                            <Card.Img variant="top" src={course.cover} />
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
                                            <div className="btn btn-danger" style={{ paddingRight: "6px", paddingLeft: "6px", paddingTop: "3px", paddingBottom: "3px", }} onClick={() => {
                                                course.flowsAndActivities.splice(flowIndex, 1)
                                                updateCourse(course)
                                            }}>
                                                <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M2.03995183,3.5 L1,3.5 C0.723857625,3.5 0.5,3.27614237 0.5,3 C0.5,2.72385763 0.723857625,2.5 1,2.5 L5,2.5 L5,2 C5,1.17185763 5.67185763,0.5 6.5,0.5 L9.5,0.5 C10.3281424,0.5 11,1.17185763 11,2 L11,2.5 L15,2.5 C15.2761424,2.5 15.5,2.72385763 15.5,3 C15.5,3.27614237 15.2761424,3.5 15,3.5 L13.9600771,3.5 L13.0749738,14.1242112 L13.0749583,14.1243977 C13.0098846,14.9019827 12.3600634,15.5 11.58,15.5 L4.42067,15.5 C3.64057767,15.5 2.99070695,14.9019413 2.92572876,14.1242425 L2.03995183,3.5 Z M3.04342135,3.5 L3.92226386,14.0410691 C3.94394479,14.3005598 4.1606632,14.5 4.42067,14.5 L11.58,14.5 C11.8399987,14.5 12.0567206,14.3005553 12.0784417,14.0410023 L12.9566128,3.5 L3.04342135,3.5 Z M6,2.5 L10,2.5 L10,2 C10,1.72414237 9.77585763,1.5 9.5,1.5 L6.5,1.5 C6.22414237,1.5 6,1.72414237 6,2 L6,2.5 Z M7,11.5 C7,11.7761424 6.77614237,12 6.5,12 C6.22385763,12 6,11.7761424 6,11.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 C6.77614237,6 7,6.22385763 7,6.5 L7,11.5 Z M10,11.5 C10,11.7761424 9.77614237,12 9.5,12 C9.22385763,12 9,11.7761424 9,11.5 L9,6.5 C9,6.22385763 9.22385763,6 9.5,6 C9.77614237,6 10,6.22385763 10,6.5 L10,11.5 Z"></path></svg>
                                            </div>

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
                                                            {flow.activities.map((activity, activityIndex) => {
                                                                return (
                                                                    <Draggable key={activity._id} draggableId={activity._id} index={activityIndex}>
                                                                        {(provided) => (
                                                                            <Nav.Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                                <Nav.Link eventKey={activity._id} className="d-flex justify-content-between">
                                                                                    <div className="btn btn-danger mx-2" style={{ paddingRight: "6px", paddingLeft: "6px", paddingTop: "3px", paddingBottom: "3px", }} onClick={() => {
                                                                                        flow.activities.splice(activityIndex, 1)
                                                                                        updateCourse(course)
                                                                                    }}>
                                                                                        <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M2.03995183,3.5 L1,3.5 C0.723857625,3.5 0.5,3.27614237 0.5,3 C0.5,2.72385763 0.723857625,2.5 1,2.5 L5,2.5 L5,2 C5,1.17185763 5.67185763,0.5 6.5,0.5 L9.5,0.5 C10.3281424,0.5 11,1.17185763 11,2 L11,2.5 L15,2.5 C15.2761424,2.5 15.5,2.72385763 15.5,3 C15.5,3.27614237 15.2761424,3.5 15,3.5 L13.9600771,3.5 L13.0749738,14.1242112 L13.0749583,14.1243977 C13.0098846,14.9019827 12.3600634,15.5 11.58,15.5 L4.42067,15.5 C3.64057767,15.5 2.99070695,14.9019413 2.92572876,14.1242425 L2.03995183,3.5 Z M3.04342135,3.5 L3.92226386,14.0410691 C3.94394479,14.3005598 4.1606632,14.5 4.42067,14.5 L11.58,14.5 C11.8399987,14.5 12.0567206,14.3005553 12.0784417,14.0410023 L12.9566128,3.5 L3.04342135,3.5 Z M6,2.5 L10,2.5 L10,2 C10,1.72414237 9.77585763,1.5 9.5,1.5 L6.5,1.5 C6.22414237,1.5 6,1.72414237 6,2 L6,2.5 Z M7,11.5 C7,11.7761424 6.77614237,12 6.5,12 C6.22385763,12 6,11.7761424 6,11.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 C6.77614237,6 7,6.22385763 7,6.5 L7,11.5 Z M10,11.5 C10,11.7761424 9.77614237,12 9.5,12 C9.22385763,12 9,11.7761424 9,11.5 L9,6.5 C9,6.22385763 9.22385763,6 9.5,6 C9.77614237,6 10,6.22385763 10,6.5 L10,11.5 Z"></path></svg>
                                                                                    </div>
                                                                                    <Form.Control className="mx-2" plaintext defaultValue={activity.name} onChange={(e) => {
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
                                            <Nav.Link className="page-link text-center" onClick={() => {
                                                flow.activities.push({ "name": "New Activity" })
                                                updateCourse(course)
                                            }}>
                                                Add a new activity
                                            </Nav.Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                                <Nav.Link className="page-link text-center btn btn-success" onClick={() => {
                                    course.flowsAndActivities.push({ "name": "New Flow" })
                                    updateCourse(course)
                                }}>
                                    Add a new flow
                                </Nav.Link>
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
                                            config={{ extraPlugins: [uploadPlugin] }}
                                            data={activity.activityContent}
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                activity.activityContent = data
                                                setCourse(course)
                                                updateCourse()
                                                console.log("---------------------");
                                                console.log({ event, editor, data });
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




