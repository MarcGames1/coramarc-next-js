import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';


export default function NavElement({text, href, active}) {
   
    
    const activeClass = active ? 'active' : '';

  return (
    <>
      
      <li className={activeClass}>
        <Link href={href}>
        <a href={href}>
          {text}
        </a>
        </Link>
      </li>
    </>
        );
    }
        
      



