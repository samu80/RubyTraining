import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Login.css";
const axios = require('axios').default;


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',

    };
};
 formSubmit = (e) => {
     e.preventDefault();
     axios.post('http://reqres.in/api/login' ,{
         email: this.state.email,
         password: this.state.password
     }
     )
     .then((response) => {
         console.log(response)
         this.props.history.push('/ProductCardComponenet')
     },(error) => {
         alert("Wrong Credential");
         console.log(error);

     });
 };
 

 handleEmailChange=(e) => {
     this.setState({email:e.target.value});

 }

 handlePasswordChange=(e) => {
    this.setState({password:e.target.value});
    
}
  
render(){
  return (
    <div className="Login">
      <Form onSubmit={this.formSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={this.state.email}
            onChange={ this.handleEmailChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
      </Form>
    </div>
  );
  }
}

export default withRouter(Login);