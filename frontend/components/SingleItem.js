import gql from 'graphql-tag';
import React, { Component } from 'react'
import { Query } from 'react-apollo';
import Error from './ErrorMessage'
import styled from 'styled-components';
import Head from 'next/head'


const SingleItemStyle = styled.div`
max-width:1200px;
margin:2rem auto;
box-shadow: ${props => props.theme.bs};
display:grid;
grid-auto-columns:1fr;
grid-auto-flow:column;
min-height:800px;
img{
  width:100%;
  height:100%;
  object-fit:contain;

}
.details{
  margin:3rem auto;
  font-size:2rem;
}

`;

const SINGLE_ITEM_QUERY = gql`
query SINGLE_ITEM_QUERY($id:ID!){
item(where:{id:$id}){
  id
  ,title
  ,description
  ,price,
  largeImage
  image

}

}`;
export default class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {
          ({ data, loading, error }) => {
            // check if that have eror
            if (error) return <Error error={error.message} />
            if (loading) return <p>loading ⌛ </p>
            if (!data) return <p>no data found 😰 {this.props.id}  </p>

              const {largeImage, image ,title,description}=data.item
            return (<SingleItem>
              <Head> <title>  sick fits |{title} </title></Head>
              <image src={largeImage} alt={title} />
              <div className="details">


                <h1>viewing {title}</h1>
                <p> {description}</p>


              </div>



            </SingleItem>)



          }}





      </Query>
    )
  }
}

