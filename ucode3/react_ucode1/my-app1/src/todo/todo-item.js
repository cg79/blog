import React from 'react';
import './todo.css';
class ToDoItem extends React.Component {

    constructor(props)
    {
        debugger;
        super(props);
        this.state = {item:props.item};
    }

    componentWillReceiveProps(newp){
    }

    ondeletePress(item){
        this.props.deleteElem(item);

    }
    
    render() {
        const {item} = this.state;
        const {toggle} = this.props;

        return (
            <div>
                <h2>Item</h2>
                <div>
                <label>
        <input type="checkbox"
          checked={item.selected}
          onChange={() => toggle(item)}
        />
        <div className={item.class}>{item.name}</div>
       </label>

                    <button onClick={() => this.ondeletePress(item)}>Delete</button>
                </div>
            </div>
            
        )
    }

}

export default ToDoItem;