import Link from 'next/link';
import Router from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../../context/auth';

// import { useRouter } from 'next/router';
import router from 'next/router';
import axios from 'axios';
import toast from 'react-hot-toast';



export const UserInfo = () => {
    const Signout = () =>{

      // router = useRouter()
    return (
      <Link href="/login-register">
        <a>
          <i className="fa fa-sign-out"></i> Login
        </a>
      </Link>

    );
  }

  const SignIn = () =>{

    return (

        <a onClick={SignOutUser}>
          <i className="fa fa-sign-out"></i> Logout
        </a>

    );
  }

  const [auth, setAuth] = useContext(AuthContext);

  const roleBasedLink = () => {
    if (auth?.user?.role === 'Admin') {
      return '/admin';
    } else if (auth.user?.role === 'Author') {
      return '/author';
    } else if (auth.user?.role === 'Subscriber') {
      return '/subscriber';
    } else {
      return '/login-register';
    }
  };

  const SignOutUser = () =>{
    axios.get('/signout')
      setAuth({
          user:"",
          token:"",
      });
      localStorage.removeItem('auth');
      router.push('/')
  }

  return (
    <ul className="user-info-block">
      {auth?.user ? (
        <li>
          <Link href="/contul-meu">
            <a>
              <i className="fa fa-user-circle"></i>
              {auth?.user?.nume}
            </a>
          </Link>
        </li>
      ) : null}
      {auth?.user ? (
        <li>
          <Link href={roleBasedLink()}>
            <a>
              <i className="fa fa-credit-card"></i> {auth?.user?.role} Dashbord
            </a>
          </Link>
        </li>
      ) : null}
      <li>{auth?.user ?
       <SignIn />
       :
       <Signout /> 
        }</li>
    </ul>
  );
};
