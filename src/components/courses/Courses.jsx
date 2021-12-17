import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import React, { useDebugValue, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Placeholder, Row, Tab } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import CoursesNavbar from './CoursesNavbar';

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL

export default function Courses() {
    const history = useHistory();
    const auth = UseAuth();
    const { courseId } = useParams();

    const [course, setCourse] = useStateWithLabel({}, "course");
    const [userType, setUserType] = useStateWithLabel('', "userType");
    const [editableCourseTitle, setEditableCourseTitle] = useStateWithLabel("", "editableCourseTitle");
    const [changeCourseCover, setChangeCourseCover] = useStateWithLabel('', "changeCourseCover");
    const [isHoveringCourseImage, setIsHoveringCourseImage] = useStateWithLabel(false, "isHoveringCourseImage");
    const [showChangeCourseImageModal, setShowChangeCourseImageModal] = useStateWithLabel(false, "showChangeCourseImageModal");
    const handleCloseChangeCourseImageModal = () => setShowChangeCourseImageModal(false);
    const handleShowChangeCourseImageModal = () => setShowChangeCourseImageModal(true);

    function useStateWithLabel(initialValue, name) {
        const [value, setValue] = useState(initialValue);
        useDebugValue(`${name}: ${value}`);
        return [value, setValue];
    }

    function getNewAccessToken() {
        try {
            fetch(BackendURL + "/users/refreshToken", {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => {
                    console.log('res:', res)
                    if (res.status === 401) { auth.signout(() => history.push("/login")) } else { getCourse() }
                })
        } catch (error) {
            console.log('error:', error)
        }
    }

    const getCourse = () => {
        try {
            fetch(`${BackendURL}/courses/${courseId}`, {
                credentials: 'include',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => { if (res.status === 401) { getNewAccessToken(); } return res.json() })
                .then(
                    (response) => {
                        setCourse(response.course)
                        setEditableCourseTitle(response.course.title)
                        setChangeCourseCover(response.course.cover)
                        setUserType(response.userType)
                    }
                )
        } catch (error) {
            console.log('error:', error)
        }
    };

    const updateCourse = (isRefreshContentneeded) => {
        try {
            fetch(`${BackendURL}/courses/${courseId}`, {
                credentials: 'include',
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(course) // body data type must match "Content-Type" header
            })
                .then(res => {
                    if (!res.ok) { history.push("/login") }
                    else {
                        if (isRefreshContentneeded === true) { getCourse() }
                    }
                })

        } catch (error) {
            console.log('error:', error)
        }
    };

    const postImage = (file) => {
        const body = new FormData();
        body.append("image", file);
        let headers = new Headers();
        headers.append("Origin", "http://localhost:3000");

        try {
            fetch(`${BackendURL}/courses/upload/image`, {
                credentials: 'include',
                method: 'POST',
                headers: headers,
                body: body
            })
                .then((res) => res.json())
                .then((res) => {
                    setChangeCourseCover(`${res.path}`)
                })
        } catch (error) {
            console.log('error:', error)
        }
    };

    function handleOnDragEnd(result, flowIndex) {
        if (!result.destination) return;
        const activities = Array.from(course.flowsAndActivities[flowIndex].activities);
        const [reorderedItem] = activities.splice(result.source.index, 1);
        activities.splice(result.destination.index, 0, reorderedItem);
        course.flowsAndActivities[flowIndex].activities = activities
        setCourse(course);
        updateCourse(false)
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
                        fetch(`${BackendURL}/courses/upload/image`, {
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

    const handleChangeCourseImage = (event) => {
        event.preventDefault();
        event.stopPropagation();
        course.cover = changeCourseCover
        updateCourse(false)
        handleCloseChangeCourseImageModal()
    };

    useEffect(() => {
        getCourse()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="course-background">
            <CoursesNavbar userType={userType ? userType : ""} />
            <Tab.Container id="left-accordions-tabs">
                <Row className="p-0 m-2">
                    <Col sm={3}>
                    {userType === "admin" || userType === "instructor" ?
                            // admin and Instructor can see this:
                            <>
                            <div className="text-center course-activity-title-small" >
                                <Form.Control className="text-center" value={editableCourseTitle} onChange={(e) => {
                                    setEditableCourseTitle(e.target.value)
                                    if (course.cover === `https://fakeimg.pl/350x200/333/eae0d0?text=${course.title}`) {
                                        course.cover = `https://fakeimg.pl/350x200/333/eae0d0?text=${e.target.value}`
                                    }
                                    course.title = e.target.value
                                    setCourse(course)
                                    updateCourse(false)
                                }} />
                                </div>
                                </>
                            :
                            // Learner and assistant can see this:
                            // <Form.Control className="text-center" plaintext value={course.title} disabled />
                            <div className="text-center course-activity-title-small" > {course.title} </div>
                        }
                        {userType === "admin" || userType === "instructor" ?
                            // admin and Instructor can see this:
                            <Card
                                onMouseEnter={() => setIsHoveringCourseImage(true)}
                                onMouseLeave={() => setIsHoveringCourseImage(false)}
                            >
                                <Card.Img variant="top" src={course.cover} className="p-1" />
                                {isHoveringCourseImage && (
                                    <Card.ImgOverlay>
                                        <Button
                                            className="rounded-circle"
                                            onClick={handleShowChangeCourseImageModal}
                                            variant="secondary" 
                                            >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" width="18" height="18" fill="currentColor" focusable="false" >
                                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" ></path>
                                            </svg>
                                        </Button>
                                    </Card.ImgOverlay>
                                )}
                                <Modal centered show={showChangeCourseImageModal} onHide={handleCloseChangeCourseImageModal}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Choose a New Picture</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form >
                                            <Card.Img variant="top" src={changeCourseCover} className="p-1" thumbnail />
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Control type="file"
                                                    onChange={e => {
                                                        postImage(e.target.files[0])
                                                    }}
                                                />
                                                <Button type="submit" className="mt-2" onClick={handleChangeCourseImage}>Save</Button>
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </Card>
                            :
                            // Learner and assistant can see this:
                            <Card> <Card.Img variant="top" src={course.cover} className="p-1" /> </Card>
                        }
                        
                        {course.flowsAndActivities ?
                            <Accordion>
                                {course.flowsAndActivities.map((flow, flowIndex) => (
                                    <Accordion.Item eventKey={flow._id} key={`flow._id${flow._id}`}>
                                        {userType === "admin" || userType === "instructor" ?
                                            <Accordion.Header>
                                                <div className="btn btn-danger button-delete" onClick={() => {
                                                    course.flowsAndActivities.splice(flowIndex, 1)
                                                    updateCourse(true)
                                                }}>
                                                    <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M2.03995183,3.5 L1,3.5 C0.723857625,3.5 0.5,3.27614237 0.5,3 C0.5,2.72385763 0.723857625,2.5 1,2.5 L5,2.5 L5,2 C5,1.17185763 5.67185763,0.5 6.5,0.5 L9.5,0.5 C10.3281424,0.5 11,1.17185763 11,2 L11,2.5 L15,2.5 C15.2761424,2.5 15.5,2.72385763 15.5,3 C15.5,3.27614237 15.2761424,3.5 15,3.5 L13.9600771,3.5 L13.0749738,14.1242112 L13.0749583,14.1243977 C13.0098846,14.9019827 12.3600634,15.5 11.58,15.5 L4.42067,15.5 C3.64057767,15.5 2.99070695,14.9019413 2.92572876,14.1242425 L2.03995183,3.5 Z M3.04342135,3.5 L3.92226386,14.0410691 C3.94394479,14.3005598 4.1606632,14.5 4.42067,14.5 L11.58,14.5 C11.8399987,14.5 12.0567206,14.3005553 12.0784417,14.0410023 L12.9566128,3.5 L3.04342135,3.5 Z M6,2.5 L10,2.5 L10,2 C10,1.72414237 9.77585763,1.5 9.5,1.5 L6.5,1.5 C6.22414237,1.5 6,1.72414237 6,2 L6,2.5 Z M7,11.5 C7,11.7761424 6.77614237,12 6.5,12 C6.22385763,12 6,11.7761424 6,11.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 C6.77614237,6 7,6.22385763 7,6.5 L7,11.5 Z M10,11.5 C10,11.7761424 9.77614237,12 9.5,12 C9.22385763,12 9,11.7761424 9,11.5 L9,6.5 C9,6.22385763 9.22385763,6 9.5,6 C9.77614237,6 10,6.22385763 10,6.5 L10,11.5 Z"></path></svg>
                                                </div>

                                                <Form.Control
                                                    className="border text-center mx-3" plaintext defaultValue={flow.name} onChange={(e) => {
                                                        flow.name = e.target.value
                                                        updateCourse(true)
                                                    }} />
                                            </Accordion.Header>
                                            :
                                            <Accordion.Header className="text-center">
                                                {flow.name}
                                            </Accordion.Header>
                                        }
                                        {userType === "admin" || userType === "instructor" ?
                                            <Accordion.Body>
                                                <DragDropContext onDragEnd={(result) => (handleOnDragEnd(result, flowIndex))}>
                                                    <Droppable droppableId="activities">
                                                        {(provided) => (
                                                            <Nav variant="pills" className="flex-column" {...provided.droppableProps} ref={provided.innerRef}>
                                                                {flow.activities.map((activity, activityIndex) => {
                                                                    return (
                                                                        <Draggable key={`activity._id${activity._id}`} draggableId={activity._id} index={activityIndex}>
                                                                            {(provided) => (
                                                                                <Nav.Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                                    <Nav.Link eventKey={activity._id} className="d-flex justify-content-between">
                                                                                        <div className="btn btn-danger button-delete" onClick={() => {
                                                                                            flow.activities.splice(activityIndex, 1)
                                                                                            updateCourse(true)
                                                                                        }}>
                                                                                            <svg width="16px" height="16px" viewBox="0 0 16 16"><path d="M2.03995183,3.5 L1,3.5 C0.723857625,3.5 0.5,3.27614237 0.5,3 C0.5,2.72385763 0.723857625,2.5 1,2.5 L5,2.5 L5,2 C5,1.17185763 5.67185763,0.5 6.5,0.5 L9.5,0.5 C10.3281424,0.5 11,1.17185763 11,2 L11,2.5 L15,2.5 C15.2761424,2.5 15.5,2.72385763 15.5,3 C15.5,3.27614237 15.2761424,3.5 15,3.5 L13.9600771,3.5 L13.0749738,14.1242112 L13.0749583,14.1243977 C13.0098846,14.9019827 12.3600634,15.5 11.58,15.5 L4.42067,15.5 C3.64057767,15.5 2.99070695,14.9019413 2.92572876,14.1242425 L2.03995183,3.5 Z M3.04342135,3.5 L3.92226386,14.0410691 C3.94394479,14.3005598 4.1606632,14.5 4.42067,14.5 L11.58,14.5 C11.8399987,14.5 12.0567206,14.3005553 12.0784417,14.0410023 L12.9566128,3.5 L3.04342135,3.5 Z M6,2.5 L10,2.5 L10,2 C10,1.72414237 9.77585763,1.5 9.5,1.5 L6.5,1.5 C6.22414237,1.5 6,1.72414237 6,2 L6,2.5 Z M7,11.5 C7,11.7761424 6.77614237,12 6.5,12 C6.22385763,12 6,11.7761424 6,11.5 L6,6.5 C6,6.22385763 6.22385763,6 6.5,6 C6.77614237,6 7,6.22385763 7,6.5 L7,11.5 Z M10,11.5 C10,11.7761424 9.77614237,12 9.5,12 C9.22385763,12 9,11.7761424 9,11.5 L9,6.5 C9,6.22385763 9.22385763,6 9.5,6 C9.77614237,6 10,6.22385763 10,6.5 L10,11.5 Z"></path></svg>
                                                                                        </div>
                                                                                        <Form.Control className="border text-center mx-3 overflow-auto" plaintext defaultValue={activity.name} onChange={(e) => {
                                                                                            activity.name = e.target.value
                                                                                            updateCourse(true)
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
                                                    updateCourse(true)
                                                }}>
                                                    Add a new activity
                                                </Nav.Link>
                                            </Accordion.Body>
                                            :
                                            <Accordion.Body>
                                                <Nav variant="pills" className="flex-column">
                                                    {flow.activities.map((activity, activityIndex) => (
                                                        <Nav.Item key={activityIndex}>
                                                            <Nav.Link eventKey={activity._id} className="d-flex justify-content-between">{activity.name}</Nav.Link>
                                                        </Nav.Item>
                                                    ))}
                                                </Nav>
                                            </Accordion.Body>
                                        }
                                    </Accordion.Item>
                                ))}
                                {userType === "admin" || userType === "instructor" ?
                                    <Nav.Link className="page-link text-center btn btn-success" onClick={() => {
                                        course.flowsAndActivities.push({ "name": "New Flow" })
                                        updateCourse(true)
                                    }}>
                                        Add a new flow
                                    </Nav.Link>
                                    : <></>
                                }
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
                                (flow.activities.map((activity) => (
                                    <Tab.Pane eventKey={activity._id} key={`activityId${activity._id}`} className="mt-2">
                                        <div className="text-center course-activity-title mb-3">{activity.name}</div>
                                        {userType === "admin" || userType === "instructor" ?
                                            <CKEditor
                                                editor={ClassicEditor}
                                                id={activity._id}
                                                config={
                                                    {
                                                        extraPlugins: [uploadPlugin],
                                                        // toolbar: ['mediaEmbed']
                                                        // mediaEmbed: {
                                                        //     // configuration...
                                                        // }
                                                        // toolbar: [ 'Essentials', 'CKFinderUploadAdapter', 'Autoformat', 'Bold', 'Italic', 'BlockQuote', 'CKFinder', 'CloudServices', 'EasyImage', 'Heading', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'Indent', 'Link', 'List', 'MediaEmbed', 'Paragraph', 'PasteFromOffice', 'Table', 'TableToolbar', 'TextTransformation', ],

                                                        // toolbar: {
                                                        //     items: [
                                                        //         'heading', '|',
                                                        //         'fontfamily', 'fontsize', '|',
                                                        //         'alignment', '|',
                                                        //         'fontColor', 'fontBackgroundColor', '|',
                                                        //         'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                                                        //         'link', '|',
                                                        //         'outdent', 'indent', '|',
                                                        //         'bulletedList', 'numberedList', 'todoList', '|',
                                                        //         'code', 'codeBlock', '|',
                                                        //         'insertTable', '|',
                                                        //         'uploadImage', 'blockQuote', '|',
                                                        //         'undo', 'redo'
                                                        //     ],
                                                        //     shouldNotGroupWhenFull: true
                                                        // }
                                                        // plugins: [Table, TableToolbar, Bold],
                                                        // toolbar: ['insertTable'],
                                                        // table: {
                                                        //     contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'TableToolbar', 'tableProperties', 'tableCellProperties']
                                                        // }
                                                        // plugins: [ MediaEmbed ]
                                                        // toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
                                                        // heading: {
                                                        //     options: [
                                                        //         { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                                        //         { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                                        //         { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                                                        //         { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                                                        //         { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                                                        //         { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                                                        //     ]
                                                        // }
                                                    }
                                                }
                                                data={activity.activityContent}
                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                }}
                                                onChange={(event, editor) => {
                                                    activity.activityContent = editor.getData();
                                                    setCourse(course)
                                                    updateCourse(false)
                                                }}
                                            />
                                            :
                                            <div dangerouslySetInnerHTML={{ __html: activity.activityContent }} className="ck-content course-activity-content"></div>
                                            // <iframe className='border mt-3' id="iFrame" title="iFrame" width='100%' height="1000px" srcDoc={activity.activityContent} ></iframe>
                                            // <textarea id="story" name="story" rows="5" cols="33" srcDoc={activity.activityContent}> </textarea>
                                        }
                                    </Tab.Pane>
                                ))
                                )
                            ))
                                :
                                <Placeholder animation="glow"> <Placeholder xs={10} /> </Placeholder>
                            }
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}





