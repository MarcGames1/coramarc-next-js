import styles from './ErrorComponent.module.css'


const ErrorComponent = (props) =>{
    return(<>
        
   <p className={styles.glitch}>{props.message}
        <span aria-hidden="true">{props.message}</span>
        <span aria-hidden="true">{props.message}</span>
    </p>
    </>)
   

}

export default ErrorComponent