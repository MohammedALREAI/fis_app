import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Items = (props) => {


  const { data, error, loading } = useQuery(ALL_ITEMS_QUERY);
  if (loading) return <p>loading</p>
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>


  return (
    <Center>

      <ItemsList>
        {data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>


    </Center>);
}





export default Items;
