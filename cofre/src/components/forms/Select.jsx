import styles from './Select.module.css'
function Select({text,name}){
    return(
        <div className={styles.form_control}>
             <label htmlFor={name}>{text}</label>
             <select name ={name} id={name}>
                <option>Selecione um sonho</option>
                <option>Viagem</option>
                <option>carro</option>
                <option>casa</option>
                <option>outros</option>
             </select>
            
        </div>
       

    )
}
export default Select