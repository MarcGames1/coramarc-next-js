import React, { Children } from 'react'
import reactSelect from 'react-select'


function MenuItemChildren({name, href, children}) {
  return (
    <li className="menu-item-has-children ">
  <a href={href}>{name}</a>
  <ul className="dropdown">
   {children}
  </ul>
</li>

  )
}

export default MenuItemChildren