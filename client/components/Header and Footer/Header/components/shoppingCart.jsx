import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const ShoppingCart = ({itemsCount}) => {
  return (
    <div className="mini-cart-wrap">
      <a href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        {typeof itemsCount == 'number' ? <div className="notification">{itemsCount}</div> : null}
        
      </a>
    </div>
  );
}

export default ShoppingCart