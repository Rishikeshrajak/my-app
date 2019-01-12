import React from 'react'
import styles from '../Styles/style.module.css'
function TodoItem(){
    return(
        <div className={styles.todoitem}>
         <input type="checkbox" />
         <h3>Click here</h3>
    
        </div>
    )
}
export default TodoItem