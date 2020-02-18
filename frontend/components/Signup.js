import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Form from './styles/Form';
import Error from './styles/ErrorMessage';




const SIGNUP_MUTATION = gql`
 mutation SIGNUP_MUTATION($email:String,$password:String!,$name:String!){

 }

`;
export default class Signup extends Component {
  render() {
    return (
      <Form>
        <fieldset>singup for application</fieldset>


        <label htmlFor="email">
          email
        <input  type="text" name="email" onChange={()=>{this.handleChange()}}/>
        </label>
        <label htmlFor="name">
          email
        <input  type="text" name="email" onChange={()=>{this.handleChange()}}/>
        </label>

        <label htmlFor="password" />

<input type="text" name="" onChange={()=>{this.setState({})}}
          <label htmlFor="name"/>
          <input type="text" name="" onChange={()=>{this.setState({})}}
      </Form>
    )
  }
}
