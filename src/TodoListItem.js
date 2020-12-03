import React from 'react';
import './TodoListItem.scss';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
class TodoListItem extends React.Component {


    render() {
        return (
            <div className="TodoListItem">
                {this.props.displaydata.checked ? (<MdCheckBox onClick={() => this.props.onToggle(this.props.displaydata.id)} className="checked" />) : (<MdCheckBoxOutlineBlank onClick={() => this.props.onToggle(this.props.displaydata.id)} className="checked" />)}
                {this.props.displaydata.checked ? (<label className="text1">{this.props.displaydata.text}</label>) : (<label className="text">{this.props.displaydata.text}</label>)}
                <MdRemoveCircleOutline onClick={() => this.props.onRemove(this.props.displaydata.id)} className="remove"></MdRemoveCircleOutline>
            </div>
        )


    }
}
export default TodoListItem;
