import React from 'react' ;
import '../App.css' ;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return (

    <div className='contact-container  m-5 p-4 bg-dark text-white p-2' >


    <Container className=''>
    <Row >
      
      <Col className='col-12 col-md-6'>
      <div className='contentcontact'>
        <h4>LOCATION</h4><br/>
        <p>28 mainroad strt dindigul-293948-</p>

        <div className='Contact-logo my-5'>

          <h2>Follow Us</h2>
          <div className='logo text-white'>
        <a href=''> <i class="bi bi-facebook"></i></a> 
        <a href=''> <i class="bi bi-instagram"></i></a> 
        <a href=''> <i class="bi bi-twitter"></i></a> 
        <a href=''> <i class="bi bi-google"></i></a> 
        
          </div>
       
        </div>
        </div>
      </Col>

      <Col className='col-12 col-md-6'>
      <div className='contact-form'>
           <h1>CONTACT FORM</h1>

           <Form>
    <Form.Group className="p-3" controlId="exampleForm.ControlInput1">
      <Form.Label>ENTER YOUR NAME</Form.Label>
      <Form.Control type="Name" placeholder="Enter Your Name" required/>
    </Form.Group>

    <Form.Group className=" p-3" controlId="exampleForm.ControlInput1">
      <Form.Label>ENTER YOUR EMAIL</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Email" required />
    </Form.Group>



    <Form.Group className="mb-2 mx-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>COMMENT</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder='Enter Your Message' required />
      <button className='btn btn-primary px-5 my-3'>submit</button>
    </Form.Group>
    
  </Form>


      </div>
      
      
      </Col>
      

      
    </Row>
  </Container>
  
    
  </div>
   
  )
}

export default Contact;
