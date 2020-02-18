import React, { Component } from 'react'

import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'
import {ALL_ITEMS_QUERY} from'./Items'

const DELATE_MUTATION_ITEM = gql`
mutation DELATE_MUTATION_ITEM($id:ID!){
  deleteItem(id:$id){
    id
  }
}


`;
export default class DeleteItem extends Component {


  update = (cache, payload) => {
///WE NEED TO UPDATE THE ITEM CACHE AFTER THE ITEM IS DELATED
const data = cache.readQuery({
  query:ALL_ITEMS_QUERY
})
// we need to set new quey = curent cache - item delete
data.item=data,item.filter(item=>item.id != payload.id)
//we need to write in the cache
    cache.writeQuery({query:ALL_ITEMS_QUERY,data})
}
  render() {


    return (
      <Mutation mutation={DELATE_MUTATION_ITEM}
        variables={{ id: this.props.id }}
          update={}

      >
        {(deleteItem, { loading, error }) => {

          <button onClick={() => {
            if (confirm(`Are you want to delate this item ${this.props.id}`)) {
              deleteItem();
            }
            else { alert}
          }

        }>{this.props.children}</button>
        }}


      </Mutation>
    )
  }
}
