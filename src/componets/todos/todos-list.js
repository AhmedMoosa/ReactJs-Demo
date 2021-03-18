import './todos.css';
import React from "react";
import TodoListItem from './todo-list-item';
import { getAll } from './todos.service';
export default class TodosList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        getAll(10)
            .then(response => this.setItems(response.data));
    }

    setItems(data) {
        // console.log(data);
        this.setState({ items: data });
    }

    render() {
        return (
            <div className="container">
                <div className="row todos-list">
                    {
                        this.state.items.map(item =>
                            <TodoListItem key={item.id} {...item} ></TodoListItem>
                        )
                    }
                </div>
            </div>
        );
    }
}