import React from 'react';
import { Link } from 'react-router-dom';
export default class TodoListItem extends React.Component {

    render() {
        const item = this.props;
        return (
            <div className="col-4">
                <div className="todo-list-item">
                    <Link to={'/todos/' + item.id}><strong>{item.title}</strong></Link>
                    <p className={'status ' + (item.completed ? 'badge-success' : 'badge-danger')} >{item.completed ? 'Done' : 'Waiting'}</p>
                </div>
            </div>
        );
    }
}