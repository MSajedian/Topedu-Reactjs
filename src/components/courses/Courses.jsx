import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import React, { useDebugValue, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Placeholder, Row, Tab, } from 'react-bootstrap';
// import { Popover, OverlayTrigger } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import UseAuth from '../auth/UseAuth';
import CoursesNavbar from './CoursesNavbar';
import { ImPencil } from "react-icons/im";
import { BsTrash } from "react-icons/bs";

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
                                            <ImPencil size="1.1em" />
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
                                                <div className="btn btn-danger button-delete px-2" onClick={() => {
                                                    course.flowsAndActivities.splice(flowIndex, 1)
                                                    updateCourse(true)
                                                }}>
                                                    <BsTrash size="1.2em" />
                                                </div>
                                                {/* <OverlayTrigger
                                                    trigger="focus"
                                                    key={`top_flow._id${flow._id}`}
                                                    placement="top"
                                                    overlay={
                                                        <Popover id={`popover-positioned-${"top"}`} >
                                                            <Popover.Header as="h3">Flow Deletion</Popover.Header>
                                                            <div className="text-center p-1">
                                                                <div className="p-1">Do you want to delete this flow?</div>
                                                                <Button className="btn btn-success me-1" onClick={() => {
                                                                    course.flowsAndActivities.splice(flowIndex, 1)
                                                                    updateCourse(true)
                                                                }}>
                                                                    Yes
                                                                </Button>
                                                                <Button className="btn btn-danger">No</Button>
                                                            </div>
                                                        </Popover>
                                                    }
                                                >
                                                    <Button className="btn btn-danger button-delete px-2" ><BsTrash size="1.2em" /></Button>
                                                </OverlayTrigger> */}



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
                                                                                        <div className="btn btn-danger button-delete px-2" onClick={() => {
                                                                                            flow.activities.splice(activityIndex, 1)
                                                                                            updateCourse(true)
                                                                                        }}>
                                                                                            <BsTrash size="1.2em" />
                                                                                        </div>

                                                                                        {/* <Button className="btn btn-danger button-delete px-2" onClick={() => { activity.isShow = true }} key={`button${activity._id}`}>
                                                                                            <BsTrash size="1.2em" />
                                                                                        </Button>

                                                                                        <Modal show={activity.isShow} onHide={() => activity.isShow = false} key={`Modal${activity._id}`}>
                                                                                            <Modal.Header closeButton>
                                                                                                <Modal.Title>activity Deletion</Modal.Title>
                                                                                            </Modal.Header>
                                                                                            <Modal.Body >
                                                                                                <div className="text-center">Do you want to delete this activity?</div>
                                                                                                <div className="text-center mt-2 fs-3">{activity.name}</div>
                                                                                            </Modal.Body>
                                                                                            <Modal.Footer >
                                                                                                <Button variant="secondary" onClick={() => activity.isShow = false}>
                                                                                                    No
                                                                                                </Button>
                                                                                                <Button variant="danger" onClick={() => {
                                                                                                    flow.activities.splice(activityIndex, 1)
                                                                                                    updateCourse(true)
                                                                                                }}>
                                                                                                    Yes
                                                                                                </Button>
                                                                                            </Modal.Footer>
                                                                                        </Modal> */}

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
        </div >
    )
}





