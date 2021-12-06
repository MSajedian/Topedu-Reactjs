import React, { useDebugValue, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Offcanvas, Row, Spinner, Table } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { IoIosPeople } from 'react-icons/io';
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';

const BackendURL = process.env.REACT_APP_BACKEND_REMOTE_URL || process.env.REACT_APP_BACKEND_LOCAL_URL
const FrontendURL = process.env.REACT_APP_FRONTEND_REMOTE_URL || process.env.REACT_APP_FRONTEND_LOCAL_URL

export default function MaiOffCanvasInstitutionParticipants({ ...props }) {
  const history = useHistory();
  const [show, setShow] = useState(false);
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
  
  const [showCreateInvitationModal, setShowCreateInvitationModal] = useState(false);
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
        <IoIosPeople size="1.4em" />
        &nbsp;
        <span>Institution Participants</span>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props} scroll={true} backdrop={false} style={{ height: "80vh" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <svg width="24px" height="24px" viewBox="0 0 16 16" fill="blue"><path className="fill" d="M11.8333,14 C11.8333,14.2761424 11.6094424,14.5 11.3333,14.5 C11.0571576,14.5 10.8333,14.2761424 10.8333,14 L10.8333,12.6667 C10.8333,12.0919718 10.6050526,11.5408594 10.198782,11.1345887 C9.79240176,10.7282898 9.24125473,10.5 8.666664,10.5 L3.33333,10.5 C2.75874748,10.5 2.2076098,10.7282882 1.80126551,11.1345513 C1.39493739,11.5408843 1.166664,12.0920086 1.166664,12.6667 L1.166664,14 C1.166664,14.2761424 0.942806375,14.5 0.666664,14.5 C0.390521625,14.5 0.166664,14.2761424 0.166664,14 L0.166664,12.6667 C0.166664,11.8267986 0.500289491,11.0213209 1.09419196,10.4274113 C1.68809182,9.83363016 2.49354791,9.5 3.33333,9.5 L8.666664,9.5 C9.50645301,9.5 10.3119188,9.83363081 10.9058534,10.4274466 C11.499708,11.0213012 11.8333,11.8267725 11.8333,12.6667 L11.8333,14 Z M6,7.83333 C4.25109763,7.83333 2.83334,6.41557237 2.83334,4.66667 C2.83334,2.9177663 4.25109895,1.5 6,1.5 C7.74890237,1.5 9.16667,2.91776763 9.16667,4.66667 C9.16667,6.41557105 7.7489037,7.83333 6,7.83333 Z M6,6.83333 C7.19662011,6.83333 8.16667,5.86328514 8.16667,4.66667 C8.16667,3.47005237 7.19661763,2.5 6,2.5 C4.80338486,2.5 3.83334,3.47004989 3.83334,4.66667 C3.83334,5.86328763 4.80338237,6.83333 6,6.83333 Z M15.8333,14 C15.8333,14.2761424 15.6094424,14.5 15.3333,14.5 C15.0571576,14.5 14.8333,14.2761424 14.8333,14 L14.8333001,12.6670385 C14.8329752,12.1870153 14.673198,11.7207272 14.3789822,11.3411726 C14.0850128,10.961831 13.673197,10.6908461 13.2083124,10.5708261 C12.9409369,10.5017973 12.7801451,10.2290878 12.8491739,9.96171236 C12.9182027,9.6943369 13.1909122,9.53354512 13.4582876,9.60257389 C14.1377345,9.77798781 14.7396704,10.1740763 15.1693768,10.7285745 C15.5992894,11.2831856 15.8328249,11.9647273 15.8333,12.6667 L15.8333,14 Z M10.5426763,2.57104395 C10.2751639,2.50254754 10.1138296,2.23015863 10.1823261,1.96264629 C10.2508225,1.69513394 10.5232114,1.53379965 10.7907237,1.60229605 C11.4718605,1.77670079 12.0755839,2.17284038 12.5068024,2.72832964 C12.9378849,3.28379674 13.1719,3.96692479 13.1719,4.67 C13.1719,5.37308367 12.9378859,6.05621204 12.5067615,6.61173305 C12.0755839,7.16716962 11.4718605,7.56330921 10.7907237,7.73771395 C10.5232114,7.80621035 10.2508225,7.64487606 10.1823261,7.37736371 C10.1138296,7.10985137 10.2751639,6.83746246 10.5426763,6.76896605 C11.0087198,6.64963583 11.4218037,6.37858644 11.7167976,5.99857964 C12.0117752,5.61848928 12.1719,5.15105676 12.1719,4.67 C12.1719,4.18895218 12.0117745,3.72151989 11.7168385,3.34148305 C11.4218037,2.96142356 11.0087198,2.69037417 10.5426763,2.57104395 Z"></path></svg>
            &nbsp;
            <span className="text-dark">Institution Participants</span>
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
                <button className="btn btn-outline-success d-flex ms-auto align-items-center" onClick={handleShowCreateInvitationModal}>
                  <svg width="16px" height="16px" viewBox="0 0 16 16"><path fillRule="evenodd" d="M13.87 1.07216C13.8593 1.07797 13.8488 1.08412 13.8384 1.09063L1.51649 8.79323C1.3384 8.90468 1.23 9.10001 1.23 9.31C1.23 9.64652 1.5028 9.91933 1.83933 9.91933H7.15121L13.87 1.07216ZM14.7667 1.54479L8.02594 10.421L11.2728 14.7552C11.3646 14.877 11.4988 14.9605 11.6481 14.9887C11.9787 15.0508 12.2971 14.8332 12.3593 14.5028L14.7593 1.72106C14.7703 1.66267 14.7727 1.60325 14.7667 1.54479ZM1.83933 10.9193H5.23334V13.8667C5.23334 14.7546 5.953 15.4753 6.842 15.4753C7.16528 15.4753 7.48133 15.3777 7.74815 15.1959L7.74827 15.1958L9.47285 14.0204L10.4732 15.3558L10.4739 15.3568C10.7154 15.6774 11.068 15.8968 11.4626 15.9713C12.3358 16.1357 13.1776 15.5614 13.342 14.6878L15.7419 1.90656C15.8171 1.50915 15.7398 1.09669 15.5253 0.753616C15.0541 -0.00016313 14.0615 -0.228168 13.3083 0.242696L0.986295 7.94535C0.516451 8.23925 0.229996 8.7547 0.229996 9.31C0.229996 10.1988 0.95052 10.9193 1.83933 10.9193ZM6.23334 10.9193V13.8667C6.23334 14.2027 6.50568 14.4753 6.842 14.4753C6.96401 14.4753 7.08392 14.4384 7.18507 14.3695L7.18519 14.3694L8.87184 13.2199L7.14972 10.9193H6.23334Z"></path></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></Button>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></Button>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg></Button>
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
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg></Button>
                          </td>
                          <td className="text-center">
                            <Button variant="outline-secondary" onClick={() => { navigator.clipboard.writeText(`${FrontendURL}/join/institution/${props.institutionid}/${pendingLearner._id}`); }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                              </svg>
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
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg></Button>
                          </td>
                          <td className="text-center">
                            <Button variant="outline-secondary" onClick={() => { navigator.clipboard.writeText(`${FrontendURL}/join/institution/${props.institutionid}/${pendingAssistant._id}`); }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                              </svg>
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
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg></Button>
                          </td>
                          <td className="text-center">
                            <Button variant="outline-secondary" onClick={() => { navigator.clipboard.writeText(`${FrontendURL}/join/institution/${props.institutionid}/${pendingInstructor._id}`); }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                              </svg>
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





