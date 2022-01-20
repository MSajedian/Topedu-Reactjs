import React, { useDebugValue, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Offcanvas, Row, Spinner, Table } from 'react-bootstrap';
import { BiMailSend } from 'react-icons/bi';
import { BsClipboard, BsClipboardCheck, BsTrash } from 'react-icons/bs';
import { FcInvite } from 'react-icons/fc';
import { FiMail } from 'react-icons/fi';
import { IoIosPeople } from 'react-icons/io';
import { useHistory, useParams } from "react-router-dom";

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL
const FrontendURL = process.env.REACT_APP_FRONTEND_REMOTE_URL || process.env.REACT_APP_FRONTEND_LOCAL_URL

export default function OffCanvasCourseParticipants({ ...props }) {
  const history = useHistory();
  const { courseId } = useParams();
  const [show, setShow] = useStateWithLabel(false, "show");
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [course, setCourse] = useStateWithLabel({}, "course");
  const [role, setRole] = useStateWithLabel("Learner", "role");
  const [name, setName] = useStateWithLabel("", "name");
  const [email, setEmail] = useStateWithLabel("", "email");
  const [refreshState, setRefreshState] = useStateWithLabel(false, "refreshState");
  const [courseInvitationLink, setCourseInvitationLink] = useStateWithLabel("", "courseInvitationLink");
  const [CourseInvitatedUser, setCourseInvitatedUser] = useStateWithLabel({}, "CourseInvitatedUser");
  const [messageFromServer, setMessageFromServer] = useStateWithLabel("", "messageFromServer");
  const [isCopied, setIsCopied] = useStateWithLabel(false, "isCopied");
  const [isSent, setIsSent] = useStateWithLabel(false, "isSent");

  const [showCreateInvitationModal, setShowCreateInvitationModal] = useStateWithLabel(false, "showCreateInvitationModal");
  const handleCloseCreateInvitationModal = () => setShowCreateInvitationModal(false);
  const handleShowCreateInvitationModal = () => { setShowCreateInvitationModal(true); setCourseInvitationLink(""); setMessageFromServer(""); setCourseInvitatedUser({}) }

  function useStateWithLabel(initialValue, name) {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
  }

  const handleSubmitCreateInvitation = (event) => {
    event.preventDefault();
    event.stopPropagation();
    postInvitationRequest()
  };

  const getCourseParticipants = () => {
    try {
      fetch(`${BackendURL}/courses/${courseId}/participants`, {
        credentials: 'include',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => (res.json()))
        .then(
          (result) => {
            setCourse(result)
          }
        )
    } catch (error) {
      console.log('error:', error)
    }
  };

  const postInvitationRequest = () => {
    try {
      fetch(`${BackendURL}/courses/${courseId}/invitation`, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role, email }) // body data type must match "Content-Type" header
      })
        .then(res => (res.json()))
        .then(
          (result) => {
            if (result._id) {
              setCourseInvitationLink(`${FrontendURL}/join/course/${courseId}/${result._id}`)
              setCourseInvitatedUser(result)
            }
            else { setMessageFromServer(result.message) }
            getCourseParticipants()
          }
        )
    } catch (error) {
      console.log('error:', error)
    }
  };

  const sendInvitationEmail = (userId, userEmail) => {
    try {
      fetch(`${BackendURL}/courses/${courseId}/email/invitation/${userId}`, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'email': userEmail })
      })
        .then(res => (res.json()))
    } catch (error) {
      console.log('error:', error)
    }
  };

  const updateCourse = (isRefreshContentNeeded) => {
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
            if (isRefreshContentNeeded === true) { getCourseParticipants() }
          }
        })

    } catch (error) {
      console.log('error:', error)
    }
  };

  useEffect(() => {
    getCourseParticipants()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <button type="button" className="btn-grad-green px-3 py-2" onClick={toggleShow} >
        <IoIosPeople size="1.5em" color="blue" />
        &nbsp;
        <span>Course Participants</span>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props} scroll={true} backdrop={false} className="height-80vh">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <IoIosPeople size="1.7em" color="blue" />
            &nbsp;
            <span className="text-dark">Course Participants</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              {/*<Col>
                 <Form className="d-flex">
                  <FormControl
                    type="SearchForParticipant"
                    placeholder="Search for participant"
                    className="me-2"
                    aria-label="SearchForParticipant"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> 
              </Col> */}
              <Col>
                <Button variant="outline-success" className="d-flex ms-auto align-items-center" onClick={handleShowCreateInvitationModal}>
                  <FcInvite size="1.4em"/>
                  &nbsp;&nbsp;
                  <span>Invite Participants</span>
                </Button>
                {/* <div className="d-flex">
                  <div className="p-2 h1"><Button variant="primary" >+&nbsp;Create&nbsp;Invitation</Button></div>
                </div> */}
              </Col>
            </Row>
            <Modal centered show={showCreateInvitationModal} onHide={handleCloseCreateInvitationModal}>
              <Modal.Header closeButton>
                <Modal.Title>Create a New Invitation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmitCreateInvitation}>
                  <Form.Label className="mt-2">Invite</Form.Label>
                  <Form.Select className="me-sm-2" id="inlineFormCustomSelect" onChange={(e) => (setRole(e.target.value))}>
                    <option value="Learner">Learner</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Assistant">Assistant</option>
                  </Form.Select>
                  <Form.Label className="mt-2">name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" onChange={(e) => (setName(e.target.value))} required />
                  <Form.Label className="mt-2">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e) => (setEmail(e.target.value))} required />
                  <hr />
                  <Button type="submit" className="align-self-center" >Create an Invitation</Button>
                  <hr />
                  {courseInvitationLink ?
                    <Container>
                      <Row className="justify-content-center">
                        <Col xs={2} className="pb-3">
                          <Button variant="outline-success" className="m-1" onClick={() => { setIsCopied(true); navigator.clipboard.writeText(courseInvitationLink); setTimeout(function () { setIsCopied(false) }, 1500); }}>
                            {isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                          <Button variant="outline-info" className="m-1" onClick={() => { setIsSent(true); sendInvitationEmail(CourseInvitatedUser._id, CourseInvitatedUser.email); setTimeout(function () { setIsSent(false) }, 1500); }}>
                            {isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </Col>
                        <Col xs={10} className="p-0">
                          <Alert key={courseInvitationLink} variant="info" className="overflow-auto"> {courseInvitationLink} </Alert>
                        </Col>
                      </Row>
                    </Container>
                    : <></>}
                  {messageFromServer ? <Alert key={messageFromServer} variant="info" className="text-center"> {messageFromServer} </Alert> : <></>}
                </Form>
              </Modal.Body>
            </Modal>
            <hr />
            <Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email / username</th>
                    <th>User type</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Delete</th>
                    <th className="text-center">Link</th>
                    <th className="text-center">Send Email</th>
                  </tr>
                </thead>
                {course.participants ?
                  <tbody>
                    {course.participants.admins.map((admin, Index) => (
                      <tr key={admin._id}>
                        <td>{admin.name} {admin.surname}</td>
                        <td>{admin.email}</td>
                        <td>Admin</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Enrolled</Alert></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {course.participants.instructors.map((instructor, Index) => (
                      <tr key={instructor._id}>
                        <td>{instructor.name} {instructor.surname}</td>
                        <td>{instructor.email}</td>
                        <td>Instructor</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Enrolled</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" className="p-2" onClick={() => { course.participants.instructor.splice(Index, 1); updateCourse(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {course.participants.assistants.map((assistant, Index) => (
                      <tr key={assistant._id}>
                        <td>{assistant.name} {assistant.surname}</td>
                        <td>{assistant.email}</td>
                        <td>Assistant</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Enrolled</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" className="p-2" onClick={() => { course.participants.assistants.splice(Index, 1); updateCourse(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {course.participants.learners.map((learner, Index) => (
                      <tr key={learner._id}>
                        <td>{learner.name} {learner.surname}</td>
                        <td>{learner.email}</td>
                        <td>Learner</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Enrolled</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" className="p-2" onClick={() => { course.participants.learners.splice(Index, 1); updateCourse(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {course.notEnrolledUsers.learners.map((learner, Index) => (
                      < tr key={learner._id} >
                        <td>{learner.name} {learner.surname}</td>
                        <td>{learner.email}</td>
                        <td>Learner</td>
                        <td><Alert variant="warning" className="m-0 p-0 text-center">Not Enrolled</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" className="p-2" onClick={() => { course.notEnrolledUsers.learners.splice(Index, 1); updateCourse(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-success" onClick={() => { learner.isCopied = true; setRefreshState(true); navigator.clipboard.writeText(`${FrontendURL}/join/course/${courseId}/${learner._id}`); setTimeout(function () { learner.isCopied = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && learner.isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>

                        </td>
                        <td className="text-center">
                          <Button variant="outline-info" onClick={() => { learner.isSent = true; setRefreshState(true); sendInvitationEmail(learner._id, learner.email); setTimeout(function () { learner.isSent = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && learner.isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {course.notEnrolledUsers.assistants.map((assistant, Index) => (
                      <tr key={assistant._id}>
                        <td>{assistant.name} {assistant.surname}</td>
                        <td>{assistant.email}</td>
                        <td>Assistant</td>
                        <td><Alert variant="warning" className="m-0 p-0 text-center">Not Enrolled</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" className="p-2" onClick={() => { course.notEnrolledUsers.assistants.splice(Index, 1); updateCourse(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="success" onClick={() => { assistant.isCopied = true; setRefreshState(true); navigator.clipboard.writeText(`${FrontendURL}/join/course/${courseId}/${assistant._id}`); setTimeout(function () { assistant.isCopied = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && assistant.isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-info" onClick={() => { assistant.isSent = true; setRefreshState(true); sendInvitationEmail(assistant._id, assistant.email); setTimeout(function () { assistant.isSent = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && assistant.isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {course.notEnrolledUsers.instructors.map((instructor, Index) => (
                      <tr key={instructor._id}>
                        <td>{instructor.name} {instructor.surname}</td>
                        <td>{instructor.email}</td>
                        <td>Instructor</td>
                        <td><Alert variant="warning" className="m-0 p-0 text-center">Not Enrolled</Alert> </td>
                        <td className="text-center">
                          <Button variant="outline-danger" className="p-2" onClick={() => { course.notEnrolledUsers.instructors.splice(Index, 1); updateCourse(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="success" onClick={() => { instructor.isCopied = true; setRefreshState(true); navigator.clipboard.writeText(`${FrontendURL}/join/course/${courseId}/${instructor._id}`); setTimeout(function () { instructor.isCopied = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && instructor.isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-info" onClick={() => { instructor.isSent = true; setRefreshState(true); sendInvitationEmail(instructor._id, instructor.email); setTimeout(function () { instructor.isSent = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && instructor.isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  :
                  <Spinner animation="border" variant="info" />
                }
              </Table>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}





