import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {Button,Container,Nav,Navbar,Table,Modal,Form,Row,Col,Dropdown,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';

function LandingPage() {
  

  // const [userData,setUserData]=useState({
  //   Productname:'',
  //   Description:'',
  //   Price:'',
  //   Image:'',
  //   Type:''
  // });
  //   const updateUseData=(e)=>{
  //     console.log("===e==",e.target)
  //     const {name,value}=e.target;
  //     setUserData({...userData,[name]:value})
  //     }
  //   const handleSubmit=()=>{
  //     console.log("====Submitted===",userData)
  //     let data={
  //       productName:userData.Productname,
  //       description:userData.Description,
  //       price:userData.Price,
  //       productImage:userData.Image,
  //       productType:userData.Type
  //     }
  //     axios.post('http://localhost:2626/mapping/addproducts',data)
  //     .then((res)=>{
  //       console.log("===Response===",res)
  //       alert("Added Successfully")
  //     })
  //     .catch((err)=>{

  //     })
    // }

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{height:'55px',padding:'7px 1%'}}>
          <Navbar.Brand href="#home" >Pizza Spot</Navbar.Brand>
          <Nav className="ms-auto" >
            <Nav.Link to="/" >Home</Nav.Link>
            <Nav.Link to="/" >Menu</Nav.Link>
            <Nav.Link to="/" >Services</Nav.Link>
            <Nav.Link to="/" >Blog</Nav.Link>
            <Nav.Link to="/" >About</Nav.Link>
            <Nav.Link to="/" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div style={{fontSize:'20px',textAlign:'center',paddingTop:'8px'}}>Menu </div>

      <Button  variant="primary" onClick={() => setModalShow(true)}>
        Add Product
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
      

      <Table striped borderless style={{marginTop:'50px'}}>
      <thead>
        <tr >
          <th>S.No</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Type</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          {/* <td>{userData.productName}</td>
          <td>{userData.productDiscript}</td>
          <td>{userData.productPrice}</td> */}
          {/* <td>{userData.Type}</td> */}
          <td style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
          <Button style={{fontSize:'12px'}} variant='primary'>View</Button>
          <Button style={{fontSize:'12px'}} variant='secondary'>Edit</Button>
          <Button style={{fontSize:'12px'}} variant='danger'>Delete</Button>
          </td>

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>chocka@gmail.com</td>
          <td style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
          <Button style={{fontSize:'12px'}} variant='primary'>View</Button>
          <Button style={{fontSize:'12px'}} variant='secondary'>Edit</Button>
          <Button style={{fontSize:'12px'}} variant='danger'>Delete</Button>
          </td>

        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>page</td>
          <td>@twitter</td>
          <td>chocka@gmail.com</td>
          <td style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
          <Button style={{fontSize:'12px'}} variant='primary'>View</Button>
          <Button style={{fontSize:'12px'}} variant='secondary'>Edit</Button>
          <Button style={{fontSize:'12px'}} variant='danger'>Delete</Button>
          </td>

        </tr>
        <tr>
          <td>4</td>
          <td>Larry</td>
          <td>page</td>
          <td>@twitter</td>
          <td>chocka@gmail.com</td>
          <td style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
          <Button style={{fontSize:'12px'}} variant='primary'>View</Button>
          <Button style={{fontSize:'12px'}} variant='secondary'>Edit</Button>
          <Button style={{fontSize:'12px'}} variant='danger'>Delete</Button>
          </td>

        </tr>
      </tbody>
    </Table>

    </>
  )
}

function MyVerticallyCenteredModal(props) {

  const [userData,setUserData]=useState({
    productName:'',
    productDiscript:'',
    productPrice:'',
    productImage:'',
    // Type:''
  });
    const updateUseData=(e)=>{
      console.log("===e==",e.target)
      const {name,value}=e.target;
      setUserData({...userData,[name]:value})
      }
    const handleSubmit=()=>{
      console.log("====Submitted===",userData)
      let data={
        productName:userData.productName,
        productDiscript:userData.productDiscript,
        productPrice:userData.productPrice,
        productImage:userData.productImage,
        // productType:userData.Type
      }
      axios.post('http://localhost:8080/product/addProd',data)
      .then((res)=>{
        console.log("===Response===",res)
        alert("Added Successfully")
      })
      .catch((err)=>{

      })
    }

    alert
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Product Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name='productName' value={userData.productName} onChange={updateUseData}  />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name='productDiscript' value={userData.productDiscript} onChange={updateUseData}  />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name='productPrice' value={userData.productPrice} onChange={updateUseData}  />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name='productImage' value={userData.productImage} onChange={updateUseData}  />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Type
              </Form.Label>
              <Col sm="10">
              {/* <Dropdown as={ButtonGroup}>
                <Button variant="success">Options</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" name='Type' value={userData.Type} onChange={updateUseData} />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Pizza</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pasta</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Burgers</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Drinks</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              </Col>
            </Form.Group>

            <Button variant='primary' onClick={handleSubmit}>Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LandingPage