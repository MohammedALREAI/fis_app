import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title'
import ItemStyles from './styles/ItemStyles'
import PriceTag from './styles/PriceTag';
import formatMoney from'./styles/PriceTag'

const  Item=({image,title,id,description})=>  {
    return (
      <ItemStyles>
        {image && <img src={item.image} alt={item.title} />}

        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id },
            }}
          >
            <a>{title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>

        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <button>Add To Cart</button>
          <button>Delete </button>
        </div>
      </ItemStyles>
    );
}
export default Item;
 Item.propTypes = {
    item: PropTypes.object.isRequired,
  };
