import React,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import {Button,Container,Nav,Navbar,Table,Modal,Form,Row,Col,Dropdown,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';

function AddProducts() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            handleClose();
            // alert("Added Successfully")
            getproducts();

          })
          .catch((err)=>{
    
          })
        }

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
        <Button variant="primary" onClick={handleShow}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
    <Form.Control type="file" name='productImage' value={userData.productImage} onChange={updateUseData}  />
  </Col>
</Form.Group>

{/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
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
  {/* </Col>
</Form.Group> */} 

{/* <Button variant='primary' onClick={handleSubmit}>Submit</Button> */}
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped borderless >
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
      </Table>

        {
            data.map((e)=>(
                <Table striped borderless >
    
                    <tbody >
                      <tr>
                        <td>{e.prodId}</td>
                        <td>{e.productName}</td>
                        <td>{e.productDiscript}</td>
                        <td>{e.productPrice}</td>
                        {/* <td>{e.productImage}</td> */}
                        {/* <td>{e.productType}</td> */}
                        <td style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                            <Button style={{fontSize:'12px'}} variant='primary'>View</Button>
                            <Button style={{fontSize:'12px'}} variant='secondary'>Edit</Button>
                            <Button style={{fontSize:'12px'}} variant='danger'>Delete</Button>
                        </td>
                         </tr>
                    </tbody>
                </Table>
            ))
        }
      
      
    </>
  )
}

export default AddProducts