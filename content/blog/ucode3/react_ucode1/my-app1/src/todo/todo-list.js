import React from 'react';
import ToDoItem from './todo-item';
import AddToDo from './add-todo';
class ToDoList extends React.Component {

    constructor(props) {
        debugger;
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Algoritmica'
                },
                {
                    id: 2,
                    name: 'React'
                },
                {
                    id: 3,
                    name: 'React1'
                },
                {
                    id: 4,
                    name: 'React2'
                },
            ]
        };

        // this.delete = this.delete.bind(this);
    }

    componentWillReceiveProps(newp) {
    }

    delete = (elem) => {
          const items = this.state.items;
        // const { items } = this.state;
        // const newItems = items.filter(el => el.id !== elem.id);
        elem.class = 'completed';
        this.setState({ items });
    }

    adapter(elem) {
        return {
            id: elem.id,
            name: elem.text
        }
    }
    adaugareElement = (elem) => {
        //  const items = this.state.items;
        const { items } = this.state;
        elem.id = items.length;
        const newElem = this.adapter(elem);
        // const newItems = items.concat(elem);
        items.push(newElem);
        this.setState({ items: items });
    }

    renderAddComponent(hasPermission) {
        if(!hasPermission) {
            return false;
        }
        return (
            <div>
                <AddToDo
                    addElem={this.adaugareElement}
                > </AddToDo>
            </div>
        );
    }

    renderItems(items) {
        return (
            <div className="">
                {items.map((item, index) => (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        deleteElem={this.delete}
                        toggle={this.toggle}
                    />
                ))}

                <button onClick={() => this.deleteSelected()}>Delete Selected</button>
            </div>
        );

    }

    toggle = (elem) => {
          const items = this.state.items;
        // const { items } = this.state;
        // const newItems = items.filter(el => el.id !== elem.id);

        //const elem  = items.find(el => el.id === e.id);
        elem.selected = elem.selected ? false : true; 
        this.setState({ items });
    }

    deleteSelected = () => {
        //  const items = this.state.items;
        const { items } = this.state;
        const newItems = items.filter(el => !el.selected);
        this.setState({ items: newItems });
    }

    render() {
        const { items } = this.state;
        const {permission} = this.props;
        return (
            <div>
                {this.renderItems(items)}
                {this.renderAddComponent(permission)}
            </div>
        )
    }

}

export default ToDoList;