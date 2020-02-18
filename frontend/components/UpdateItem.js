import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $title: String
    $description: String
    $price: Int

  ) {
    updateItem(
      title: $title
      description: $description
      price: $price

    ) {
      id
    }
  }
`;
const SINGLE_ITEM_Query = gql`
  query UPDATE_ITEM_MUTATION(
    $id: ID!

  ) {
    item(where:{id:$id}){
       title,
       description,
        price,
        id
    }
  }
`;
handleSubmit = async (e, updateItemMutation) => {
  e.preventDefault();
  const res = await updateItemMutation({
    variables: { id:this.props.id, ...this.state },


   })

 }

class UpdateItem extends Component {
  state = {
    title: 'Cool Shoes',
    description: 'I love those shoes',
    price: 1000,
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (

      <Query query={SINGLE_ITEM_Query} variables={{ id: this.props.id }}>


        {({data,loading,error})=>{

              if(loading){ return <p> Loading .....</p>}
          if (error) { return <p> {error.message} .....</p> }
          if (!data.item) { return <p>no data found {this.props.id}</p>}

          return (


            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
        {(updateItem, { loading, error }) => (
          <Form
                  onSubmit={e=> this.handleSubmit(e,updateItem)}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  defaultValue={data.title}
                  onChange={this.handleChange}
                  />
              </label>

              <label htmlFor="price">
                Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  required
                   defaultValue={data.price}

                  value={this.state.price}
                  onChange={this.handleChange}
                  />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                 defaultValue={data.description}

                  id="description"
                  name="description"
                  placeholder="Enter A Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                  />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
        )
      }}
</Query>

    );
  }
}

export default CreateItem;
export { UPDATE_ITEM_MUTATION };
