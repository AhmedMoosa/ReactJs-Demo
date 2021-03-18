import './todos.css';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getBy } from "./todos.service";

export default function TodoDetails() {
    const [item, setItem] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    let { id } = useParams();
    useEffect(() => {
        if (!isLoaded) {
            setIsLoaded(true);
            getBy(id)
                .then(response => setItem(response.data));
        }
    })

    return (
        <div className="todos-list">
            <div className="todo-list-item">
                <p>Id : {item.id}</p>
                <strong>{item.title}</strong>
                <p>User Id : {item.userId}</p>
                <p className={'status ' + (item.completed ? 'badge-success' : 'badge-danger')} >{item.completed ? 'Done' : 'Waiting'}</p>
            </div>
        </div>
    );
}