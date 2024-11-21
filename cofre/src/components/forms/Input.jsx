import styles from './Input.module.css'
function Input({type, text, placeHolder, name,handlerChangeDream}){

    return(
        <div className={styles.form_control}>
        <label html={name}> {text}</label>
        <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeHolder}
            onChange={handlerChangeDream}/>
        </div>
    )

}

export default Input