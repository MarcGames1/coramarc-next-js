import { Button } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

const LoadingBtn = (props)=>{

    // [loading, className, variant, text] = props
let className = ""
     props.className
     ? (className = props.className)
     : (className = 'btn btn-sqr')
    
    
    let variant = ""
     props.variant ?  variant = props.variant : variant = "primary"



     return (
       <Button
         className={className}
         variant={props.variant}
         disabled={props.loading}
         type="submit"
       >
         {props.loading ? (
           <>
             {props.text}
             <Spinner size={'sm'} animation="border" />{' '}
           </>
         ) : (
           props.text
         )}
       </Button>
     );
}

export default LoadingBtn