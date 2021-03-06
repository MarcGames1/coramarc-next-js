import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ActiveLink from "../../../UI/ActiveLink"
import styles from '../../../../layout/adminLayout.module.css'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

let routes = {
  produse: [
    {
      route: '/admin/produse',
      text: 'Vezi Produsele',
    },
    {
      route: '/admin/produse/adauga-produs',
      text: 'Adauga Produs',
    },

    {
      route: '/admin/produse/categorii-produs',
      text: 'Categorii Produs',
    },
  ],

  categorii: [
    {
      route: '/admin/categorii',
      text: 'Vezi Categoriile',
    },

    {
      route: '/admin/creaza-categorie',
      text: 'Creaza Categorie Noua',
    },
  ],

  comenzi: [
    {
      route: '/admin/comenzi',
      text: 'Vezi Comenzile',
    },
  ],

  blog: [
    {
      route: '/admin/blog',
      text: 'Vezi Postarile',
    },

    {
      route: '/admin/blog/nou',
      text: 'Creaza Postare Noua',
    },
  ],
}; 



let blog = []




// helper


const AdminSidebar = (props) =>{

    

    const [current_link, setCurrent_link] = useState('')

    useEffect(() => {
        process.browser && setCurrent_link(window.location.pathname);
    }, [process.browser])

 //            <Link href="/admin/produse/adauga-produs"><Nav.Link className="text-white bg-black" href="/home">Adauga Produs</Nav.Link></Link>

    return (
      <>
        <Nav className="text-secondary flex-column" defaultActiveKey="/home">
          <span className="text-black text-center h5">Produse</span>

          {routes.produse.map((route, idx) => {
            return (
              <ActiveLink
                route={route.route}
                text={route.text}
                current_link={current_link}
                key={idx}
              />
            );
          })}

          <span className="text-black text-center h5">Categorii</span>
          {routes.categorii.map((route, idx) => {
            return (
              <ActiveLink
                route={route.route}
                text={route.text}
                current_link={current_link}
                key={idx}
              />
            );
          })}
          <span className="text-black text-center h5">Comenzi</span>
          <ActiveLink
            route={routes.comenzi[0].route}
            current_link={current_link}
            text={routes.comenzi[0].text}
          />

          <span className="text-black text-center h5">Blog</span>
          {routes.blog.map((route, idx) => {
            return (
              <ActiveLink
                route={route.route}
                text={route.text}
                current_link={current_link}
                key={idx}
              />
            );
          })}
        </Nav>
        <Button
          className={styles.toggleBtn}
          onClick={props.toggleMenu}
          variant="danger"
        >
          {' '}
          <FontAwesomeIcon icon={faAngleLeft} size={'2xl'} />
        </Button>
      </>
    );
}

export default AdminSidebar