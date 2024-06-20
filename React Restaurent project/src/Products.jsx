import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState,useEffect } from 'react';
import AddProducts from './AddProducts';
import food from '../src/assets/home-banner-image.png'


function Products() {
  const[data,setdata]=useState([]);

  const getproducts=()=>{

      axios.get('http://localhost:8080/product/get')
      .then((res)=>{
          console.log(res)
          setdata(res.data)
      })
      .catch((err)=>{

      })
      
  }

  useEffect(()=>{
      getproducts();
  },[])
  return (
   <>
   <AddProducts />
   <Container style={{backgroundColor:' #f6f6f6'}}>
            <Row style={{gap:'20px'}}>
                {data.map((e)=>(
                  
                   <Col key={e.prodId}>
                     
                    <Card style={{ width: '18rem',backgroundColor:'#585858' }} key={e.prodId} >
                        <Card.Body>
                                <Card.Title>{e.prodId}</Card.Title>
                                <img src={food}></img>
                            
                            <Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">{e.productName}</Card.Subtitle>                           
                            <Card.Subtitle className="mb-2 text-muted">{e.productPrice}</Card.Subtitle>
                            </Card.Text>
                            < Card.Link href="#"><Button style={{backgroundColor:'#fe9e0d'}}>Add to cart</Button></Card.Link>
                            {/* <Card.Link href="#">{e.productImage}</Card.Link> */}
                            <img src={e.productImage} style={{height:'20px'}}></img>
                        </Card.Body>
                        {/* <Link to='users'>Click</Link> */}
                    </Card>

                    </Col>
                   ))
                }
            </Row>
        </Container>
   </>
  )
}

export default Products