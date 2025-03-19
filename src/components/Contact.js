import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import ContactImg from '../assets/img/contact-img.svg'


export const Contact = () => {
    const FormInitialDetails = {
        FirstName: '',
        LastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const[formDetails, setFormDetails] = useState(FormInitialDetails);
    const [buttonText, setButtomText] = useState('Enviar');
    const [status, setStatus] = useState({})
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        setButtomText('enviando...');
        let response = await fetch("http://localhost:5000/contact",{
            meth: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtomText("Enviado");
        let result = response.json();
        setFormDetails(FormInitialDetails);
        if(result.code === 200) {
            setStatus({sucess: true, menssage: "menssagem enviada com sucesso"})
        } else {
            setStatus({sucess: false, menssage: "menssagem nao enviada com sucesso, tente novamente depois"});
        }
    }
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                      <img src={ContactImg} alt="Contate-me por aqui"/>
                    </Col>
                    <Col md={6}>
                      <h2> Entre em contato comigo!</h2>
                      <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm = {6} className="px-1">
                            <input 
                            type="text" 
                            value={formDetails.FirstName} 
                            placeholder="Primeiro nome" 
                            onChange={(e)=> onFormUpdate('FirstName', e.target.value)}/>
                            </Col>
                            <Col sm = {6} className="px-1">
                            <input 
                            type="text" 
                            value={formDetails.lastName} 
                            placeholder="Ultimo nome" 
                            onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm = {6} className="px-1">
                            <input 
                            type="email" 
                            value={formDetails.email} 
                            placeholder="e-mail de contato" 
                            onChange={(e)=> onFormUpdate('email', e.target.value)}/></Col>
                            <Col sm = {6} className="px-1">
                            <input 
                            type="tel" 
                            value={formDetails.phone} 
                            placeholder="telefone" 
                            onChange={(e)=> onFormUpdate('phone', e.target.value)}/></Col>
                            <Col>
                            <textarea rows={6} 
                            value={formDetails.message} 
                            placeholder="Mensagem" 
                            onChange={(e)=> onFormUpdate('message', e.target.value)}/>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                <p className={status.sucess === false ? "danger" : "sucess"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                      </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}