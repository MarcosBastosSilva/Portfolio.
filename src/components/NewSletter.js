import { Alert } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"


export const NewSletter = ({ onValidated, status, menssage}) => {
    const [email, setEmail]= useState('');

    useEffect(()=> {
        if ( status === 'sucess') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault ();
        email &&
        email.indexOf("@") > -1 && 
        onValidated ({
            EMAIL: email
        }) 
    }   

    const clearFields = () => {
        setEmail('');
    }
    return (
        <Col lg={12}>
            <div className="newslatter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                    <h3>Subscribe to our NewSletter</h3>
                    {status === 'sending' && <Alert>Enviando...</Alert>}
                    {status === 'error' && <Alert variant="danger">{menssage}</Alert>}
                    {status === 'sucess' && <Alert variant="sucess">{menssage}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default NewSletter