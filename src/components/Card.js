import React from 'react'

export default function Card({todo, clickCard}) {
    return (
        <div className='todo-card'>
            <div className='delete-symbol--small'>x</div>
            <div className='todo-title' onClick={()=>clickCard(todo)}>{todo.title}</div>
        </div>
    )
}
