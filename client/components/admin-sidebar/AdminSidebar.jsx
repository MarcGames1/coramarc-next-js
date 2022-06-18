import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Icon from '@mdi/react';
import { mdiArrowLeftDropCircle } from '@mdi/js';
import { useEffect, useState } from 'react';
import ActiveLink from '../UI/ActiveLink'

const admin_routes = [
    {
        route: '/admin/produse',
        text: "Vezi Produsele"
    },
    {
        route:"/admin/produse/adauga-produs",
        test: "Adauga Produs"
    },
]






// helper


const AdminSidebar = (props) =>{

    const [current_link, setCurrent_link] = useState('')

    useEffect(() => {
        process.browser && setCurrent_link(window.location.pathname);
    }, [process.browser])

 //            <Link href="/admin/produse/adauga-produs"><Nav.Link className="text-white bg-black" href="/home">Adauga Produs</Nav.Link></Link>

    return(<>
        <Nav className="text-secondary flex-column" defaultActiveKey="/home">
            <Nav.Link className="text-black h4" as ={"span"} >Produse</Nav.Link>
            <ActiveLink 
                route="/admin/produse"
               
                text={"Vezi Produsele"}
                current_link={current_link}
            />
            <ActiveLink
                route="/admin/produse/adauga-produs"
                
                text={"Adauga Produs"}
                current_link={current_link}
            />
            <Nav.Link className="text-black h4" as={"span"} >Categorii</Nav.Link>
            <Link href="/"><Nav.Link className="text-white" href="/home">Vezi Categoriile</Nav.Link></Link>
            <Link href="/"><Nav.Link className="text-white" href="/home">Editeaza Categoriile</Nav.Link></Link>
            <Link href="/"><Nav.Link className="text-white" href="/home">Creaza Categorie Noua</Nav.Link></Link>

            <Nav.Link className="text-black h4" as={"span"} >Comenzi</Nav.Link>
            <Link href="/"><Nav.Link className="text-white" href="/home">Vezi Comenzile</Nav.Link></Link>


            <Nav.Link className="text-black h4" as={"span"} >Blog</Nav.Link>
            <Link href="/"><Nav.Link className="text-white" href="/home">Vezi Postarile</Nav.Link></Link>
            <Link href="/"><Nav.Link className="text-white" href="/home">Creaza Postare Noua</Nav.Link></Link>
            <Button onClick={props.toggleMenu} variant="danger"> <Icon path={mdiArrowLeftDropCircle} size={1} /></Button>
        </Nav>
            
    </>
            
           
        
            
            
            
            
    )
}

export default AdminSidebar