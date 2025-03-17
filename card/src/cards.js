import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaChrome } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards()
{
    return(
    <div class="container" className="p-5"className="bg-colour" >
     <Container >
      
      <Row>
        <Col>
        <Card class="card " className="card" style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text>
        <img src="data:image/jpeg;base64,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" alt="" class="image-top" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIo1L7fiG8N9png-xGr0-s4JcORbaUMhA5gOHCmcmJzJTNmRBaS51rZAE&s" alt="" className="profile-image" />
        </Card.Text>
        <Card.Text className="logo-titile"><h5>PERSON ONE</h5> 
        <p className="content-one">A mountain is a landfowith steep sides and a sharp peak. Mountains are usually higher than hills, and are often found in chains or ranges.<br></br> </p>
        <div className="icons"> <FaFacebookSquare /> <FaLinkedin /> <FaChrome />  <FaTwitter />   </div>
       
       
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
    </Row>

             
             
              {/* card two */}
      <Row>
        <Col>
        <Card class="card " className="" style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmJ3ymPIMejOylqT8jBFrSZW2IHopkXctTg&s" alt="" class="image-top" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57_0G84G3wNP061VD4xks9B7VlCFJH6v6Fg&s" alt="" class="profile-image" />
        </Card.Text>
        <Card.Text className="logo-titile"><h5>PERSON TWO</h5> 
        <p className="content-one">A mountain is a landfowith steep sides and a sharp peak. Mountains are usually higher than hills, and are often found in chains or ranges.<br></br> </p>
        <div className="icons"> <FaFacebookSquare /> <FaLinkedin /> <FaChrome />  <FaTwitter /></div>
       
       
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
    </Row>

         {/* card 3 */}


         <Row>
        <Col>
        <Card class="card " className="" style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDYONMzfxBBGpFfn-GxfMa3Gq3fWjoCltwA&s" alt="" class="image-top" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s" alt="" class="profile-image" />
        </Card.Text>
        <Card.Text className="logo-titile"><h5>PERSON THREE</h5> 
        <p className="content-one">A mountain is a landfowith steep sides and a sharp peak. Mountains are usually higher than hills, and are often found in chains or ranges.<br></br> </p>
        <div className="icons"> <FaFacebookSquare /> <FaLinkedin /> <FaChrome />  <FaTwitter /></div>
       
       
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
    </Row>
        
      
    </Container>

    </div>)
    }