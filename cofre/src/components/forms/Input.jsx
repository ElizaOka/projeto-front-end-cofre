import styles from './Input.module.css'
function Input({type, text, placeHolder, name,handlerChangeDreamProp}){

    return(
        <div className={styles.form_control}>
        <label html={name}> {text}</label>
        <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeHolder}
            onChange={handlerChangeDreamProp}/>
        </div>
    )

}

export default Input