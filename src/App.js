import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: 'React Basic',
          checked: false,
        },
        {
          id: 2,
          text: 'Component Styling',
          checked: false,
        },
        {
          id: 3,
          text: 'Make To Do App',
          checked: false,
        },
      ],
      currentIndex: 4
    }
    this.onInsert = this.onInsert.bind();
    this.onRemove = this.onRemove.bind();
    this.onToggle = this.onToggle.bind();
  }
  onInsert = (text) => {
    const todo = {
      id: this.state.currentIndex,
      text,
      checked: false,
    };
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      todos: this.state.todos.concat(todo)
    });
  }
  onRemove = (cid) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== cid)
    });
  }
  onToggle = (cid) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === cid ? { ...todo, checked: !todo.checked } : todo)
    });
  }
  render() {
    return (
      <TodoTemplate>
        <TodoInsert onInsert={this.onInsert} />
        <TodoList todos={this.state.todos} onRemove={this.onRemove} onToggle={this.onToggle} />
      </TodoTemplate>
    );
  }
}


export default App;
