import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem'
class TodoList extends React.Component {
    constructor() {
        super();
    }
 
      render() {
        const items = [];
        for (var i = 0; i < this.props.todos.length; i++) {
            items.push(<TodoListItem onRemove={this.props.onRemove} onToggle={ this.props.onToggle} displaydata={this.props.todos[i]} key={i} />)
        }
      return (
            <div className="TodoList">
                { items}
            </div>
        )


    }
}
export default TodoList;
