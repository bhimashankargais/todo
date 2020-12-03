import React from 'react';
import './TodoTemplate.scss';

class TodoTemplate extends React.Component{
    render(){
        return (
            <div className="TodoTemplate">
              <div className="app-title">Schedule Management</div>
              <div className="content">{this.props.children}</div>
            </div>
          );
    }
}
export default TodoTemplate;
