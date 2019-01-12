import React from 'react'
import TodoItem from './TodoItem'
import styles from '../Styles/style.module.css'
console.log(styles.todolist)
function App() {
    return(
        <div className ={styles.todolist}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App


