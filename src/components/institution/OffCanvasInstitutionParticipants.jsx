import React, { useDebugValue, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Offcanvas, Row, Spinner, Table } from 'react-bootstrap';
import { BiMailSend } from 'react-icons/bi';
import { BsClipboard, BsClipboardCheck, BsTrash } from 'react-icons/bs';
import { FcInvite } from 'react-icons/fc';
import { FiMail } from 'react-icons/fi';
import { IoIosPeople } from 'react-icons/io';
import { useHistory } from "react-router-dom";

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL
const FrontendURL = process.env.REACT_APP_FRONTEND_REMOTE_URL || process.env.REACT_APP_FRONTEND_LOCAL_URL

export default function MaiOffCanvasInstitutionParticipants({ ...props }) {
  const history = useHistory();
  const [show, setShow] = useStateWithLabel(false, "show");
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const [institution, setInstitution] = useStateWithLabel({}, "institution");
  const [institutionInvitationLink, setInstitutionInvitationLink] = useStateWithLabel("", "institutionInvitationLink");

  const [role, setRole] = useStateWithLabel("Learner", "role");
  const [name, setName] = useStateWithLabel("", "name");
  const [email, setEmail] = useStateWithLabel("", "email");
  const [isCopied, setIsCopied] = useStateWithLabel(false, "isCopied");
  const [isSent, setIsSent] = useStateWithLabel(false, "isSent");
  const [messageFromServer, setMessageFromServer] = useStateWithLabel("", "messageFromServer");
  const [institutionInvitatedUser, setInstitutionInvitatedUser] = useStateWithLabel({}, "institutionInvitatedUser");
  const [refreshState, setRefreshState] = useStateWithLabel(false, "refreshState");

  const [showCreateInvitationModal, setShowCreateInvitationModal] = useStateWithLabel(false, "showCreateInvitationModal");
  const handleCloseCreateInvitationModal = () => setShowCreateInvitationModal(false);
  const handleShowCreateInvitationModal = () => { setShowCreateInvitationModal(true); setInstitutionInvitationLink(""); setMessageFromServer(""); setInstitutionInvitatedUser({}) }

  function useStateWithLabel(initialValue, name) {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
  }

  const getInstitutionParticipants = () => {
    try {
      fetch(`${BackendURL}/institutions/${props.institutionid}/participants`, {
        credentials: 'include',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => (res.json()))
        .then(
          (result) => {
            setInstitution(result)
          }
        )
    } catch (error) {
      console.log('error:', error)
    }
  };

  const handleSubmitCreateInvitation = (event) => {
    event.preventDefault();
    event.stopPropagation();
    postInvitationRequest()
    // handleCloseCreateInvitationModal()
  };

  const postInvitationRequest = () => {
    try {
      fetch(`${BackendURL}/institutions/${props.institutionid}/invitation`, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role, email }) // body data type must match "Content-Type" header
      })
        .then(res => (res.json()))
        .then(
          (result) => {
            if (result._id) {
              setInstitutionInvitationLink(`${FrontendURL}/join/institution/${props.institutionid}/${result._id}`)
              setInstitutionInvitatedUser(result)
            }
            else { setMessageFromServer(result.message) }
            getInstitutionParticipants()
          }
        )
    } catch (error) {
      console.log('error:', error)
    }
  };

  const updateInstitution = (isRefreshContentNeeded) => {
    try {
      fetch(`${BackendURL}/institutions/${props.institutionid}`, {
        credentials: 'include',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(institution) // body data type must match "Content-Type" header
      })
        .then(res => {
          if (!res.ok) { history.push("/login") }
          else {
            if (isRefreshContentNeeded === true) { getInstitutionParticipants() }
          }
        })

    } catch (error) {
      console.log('error:', error)
    }
  };

  const sendInvitationEmail = (userId, userEmail) => {
    try {
      fetch(`${BackendURL}/institutions/${props.institutionid}/email/invitation/${userId}`, {
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

  useEffect(() => {
    getInstitutionParticipants()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <button type="button" className="btn-grad-green" onClick={toggleShow} >
        <IoIosPeople size="1.4em" color="green"/>
        &nbsp;
        <span>Institution Participants</span>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props} scroll={true} backdrop={false} className="height-80vh">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <IoIosPeople size="1.7em" color="green" />
            &nbsp;
            <span className="text-dark">Institution Participants</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <button className="btn btn-outline-success d-flex ms-auto align-items-center" onClick={handleShowCreateInvitationModal}>
                  <FcInvite size="1.4em" />
                  &nbsp;
                  <span>Invite Participants</span>
                </button>
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
                  <Button type="submit" >Create an Invitation</Button>
                  <hr />
                  {institutionInvitationLink ?
                    <Container>
                      <Row className="justify-content-center">
                        <Col xs={2} className="pb-3">
                          <Button variant="outline-success" className="m-1" onClick={() => { setIsCopied(true); navigator.clipboard.writeText(institutionInvitationLink); setTimeout(function () { setIsCopied(false) }, 1500); }}>
                            {isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                          <Button variant="outline-info" className="m-1" onClick={() => { setIsSent(true); sendInvitationEmail(institutionInvitatedUser._id, institutionInvitatedUser.email); setTimeout(function () { setIsSent(false) }, 1500); }}>
                            {isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </Col>
                        <Col xs={10} className="p-0">
                          <Alert key={institutionInvitationLink} variant="info" className="overflow-auto"> {institutionInvitationLink} </Alert>
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
                {institution.participants ?
                  <tbody>
                    {institution.participants.admins.map((admin, Index) => (
                      <tr key={admin._id}>
                        <td>{admin.name} {admin.surname}</td>
                        <td>{admin.email}</td>
                        <td>Admin</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Registered</Alert></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {institution.participants.instructors.map((instructor, Index) => (
                      <tr key={instructor._id}>
                        <td>{instructor.name} {instructor.surname}</td>
                        <td>{instructor.email}</td>
                        <td>Instructor</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Registered</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" onClick={() => { institution.participants.instructors.splice(Index, 1); updateInstitution(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {institution.participants.assistants.map((assistant, Index) => (
                      <tr key={assistant._id}>
                        <td>{assistant.name} {assistant.surname}</td>
                        <td>{assistant.email}</td>
                        <td>Assistant</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Registered</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" onClick={() => { institution.participants.assistants.splice(Index, 1); updateInstitution(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {institution.participants.learners.map((learner, Index) => (
                      <tr key={learner._id}>
                        <td>{learner.name} {learner.surname}</td>
                        <td>{learner.email}</td>
                        <td>Learner</td>
                        <td><Alert variant="success" className="m-0 p-0 text-center">Registered</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" onClick={() => { institution.participants.learners.splice(Index, 1); updateInstitution(true) }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                      </tr>
                    ))}
                    {institution.pendingUsers.learners.map((pendingLearner, Index) => (
                      < tr key={pendingLearner._id} >
                        <td>{pendingLearner.name} {pendingLearner.surname}</td>
                        <td>{pendingLearner.email}</td>
                        <td>Learner</td>
                        <td><Alert variant="warning" className="m-0 p-0 text-center">Pending</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" onClick={() => {
                            institution.pendingUsers.learners.splice(Index, 1); updateInstitution(true)
                          }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-secondary" onClick={() => { navigator.clipboard.writeText(`${FrontendURL}/join/institution/${props.institutionid}/${pendingLearner._id}`); }}>
                            {refreshState && pendingLearner.isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-info" onClick={() => { pendingLearner.isSent = true; setRefreshState(true); sendInvitationEmail(pendingLearner._id, pendingLearner.email); setTimeout(function () { pendingLearner.isSent = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && pendingLearner.isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {institution.pendingUsers.assistants.map((pendingAssistant, Index) => (
                      <tr key={pendingAssistant._id}>
                        <td>{pendingAssistant.name} {pendingAssistant.surname}</td>
                        <td>{pendingAssistant.email}</td>
                        <td>Assistant</td>
                        <td><Alert variant="warning" className="m-0 p-0 text-center">Pending</Alert></td>
                        <td className="text-center">
                          <Button variant="outline-danger" onClick={() => {
                            institution.pendingUsers.assistants.splice(Index, 1); updateInstitution(true)
                          }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-secondary" onClick={() => { navigator.clipboard.writeText(`${FrontendURL}/join/institution/${props.institutionid}/${pendingAssistant._id}`); }}>
                            {refreshState && pendingAssistant.isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-info" onClick={() => { pendingAssistant.isSent = true; setRefreshState(true); sendInvitationEmail(pendingAssistant._id, pendingAssistant.email); setTimeout(function () { pendingAssistant.isSent = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && pendingAssistant.isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {institution.pendingUsers.instructors.map((pendingInstructor, Index) => (
                      <tr key={pendingInstructor._id}>
                        <td>{pendingInstructor.name} {pendingInstructor.surname}</td>
                        <td>{pendingInstructor.email}</td>
                        <td>Instructor</td>
                        <td> <Alert variant="warning" className="m-0 p-0 text-center">Pending</Alert> </td>
                        <td className="text-center">
                          <Button variant="outline-danger" onClick={() => {
                            institution.pendingUsers.instructors.splice(Index, 1); updateInstitution(true)
                          }}>
                            <BsTrash size="1.5em" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-secondary" onClick={() => { navigator.clipboard.writeText(`${FrontendURL}/join/institution/${props.institutionid}/${pendingInstructor._id}`); }}>
                            {refreshState && pendingInstructor.isCopied ? <BsClipboardCheck size="1.5em" /> : <BsClipboard size="1.5em" />}
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button variant="outline-info" onClick={() => { pendingInstructor.isSent = true; setRefreshState(true); sendInvitationEmail(pendingInstructor._id, pendingInstructor.email); setTimeout(function () { pendingInstructor.isSent = false; setRefreshState(false) }, 1500); }}>
                            {refreshState && pendingInstructor.isSent ? <BiMailSend size="1.5em" /> : <FiMail size="1.5em" />}
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





