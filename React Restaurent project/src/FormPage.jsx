
import React, { useState } from 'react';
import axios from 'axios';
import LOGO from './assets/bg-remover1.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function FormPage() {
    const [isLoginPage, setIsLoginPage] = useState(true);

    const togglePage = () => {
      setIsLoginPage(!isLoginPage);
    };
  return (
    <>
   <div className="container mt-5">
      <div className="row">
        <div className={isLoginPage ? "col-6 order-1" : "col-6 order-2"}>
          <img src={LOGO} alt="Side" className="img-fluid" />
        </div>
        <div className={isLoginPage ? "col-6 order-2" : "col-6 order-1"}>
          {isLoginPage ?  <RegisterForm />: <LoginForm />}
          <button onClick={togglePage} className="btn btn-primary" style={{backgroundColor:'#e48f0f'}} >
          Changeform to: 
            {isLoginPage ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
const RegisterForm = () => {
    const [userData, setUserData] = useState({
        username:'',
        password:'',
        email:'',
        mobile:''
    });
    const updateUseData=(e)=>{
        console.log("===e==",e.target)
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
        }
    const handleRegister=()=>{
        console.log("====Submitted===",userData)
        let data={
          username:userData.username,
          password:userData.password,
          email:userData.email,
          mobile:userData.mobile
        
  
        }
        axios.post('http://localhost:8080/mapping/create',data)
        .then((res)=>{
        //   console.log("===Response===",res)
        console.log(res.data);
        alert("registration done" );
        })
        .catch((err)=>{
            // console.error('Error logging in:', err);
            // console.error('Error registering:', err);
            alert(err);
  
        })
      }
    
  
  return (
   
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label> Create a UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName" name="username" value={userData.username} onChange={updateUseData}  />{userData.username}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhonenumber">
        <Form.Label>mobile</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" name="mobile" value={userData.mobile} onChange={updateUseData}  />{userData.mobile}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupemail" >
        <Form.Label> Create a Email</Form.Label>
        <Form.Control type="text" placeholder="Email" name="email" value={userData.email} onChange={updateUseData} />{userData.email}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label> Create a Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={userData.password} onChange={updateUseData} />{userData.password}
      </Form.Group>

      <Button variant="primary"  onClick={handleRegister}style={{backgroundColor:'#e48f0f'}}>
         Register
      </Button>
    </Form>
    
    
    </>
  )
  };

const LoginForm = () => {
    const navigate=useNavigate();
    const [userData, setUserData] = useState({
        username:'',
        password:'',
        email:'',
        mobile:'',
    });
    const updateUseData=(e)=>{
        console.log("===e==",e.target)
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
        }
    const handleSubmit=()=>{
        console.log("====Submitted===",userData)
        let data={
          username:userData.username,
          password:userData.password,
          email:userData.email,
          mobile:userData.mobile
        
  
        }
        axios.post('http://localhost:8080/mapping/login',data)
        .then((res)=>{
        //   console.log("===Response===",res)
        // console.log(res.data);
        alert(res.data);
        navigate('/');
        })
        .catch((error)=>{
            // console.error('Error logging in:', err);
            // console.error('Error logging in:', error);
            alert(error);
  
        })
      }
    
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>  UserName</Form.Label>
        <Form.Control type="text" placeholder="UserName" name="username" value={userData.username} onChange={updateUseData}  />{userData.username}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhonenumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" name="mobile" value={userData.mobile} onChange={updateUseData}  />{userData.mobile}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupemail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email Id" name="email" value={userData.email} onChange={updateUseData} />{userData.email}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>  Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={userData.password} onChange={updateUseData} />{userData.password}
      </Form.Group>

      <Button variant="primary"  onClick={handleSubmit} style={{backgroundColor:'#e48f0f'}}>
        Login
      </Button>
    </Form>
    </>
  )
  };
  
export default FormPage;