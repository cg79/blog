import React from 'react';

class AddToDo extends React.Component {

    constructor(props) {
        debugger;
        super(props);
        this.state = { text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onaddPress(item) {
        this.props.addElem(item);

    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.props.addElem(newItem);
        this.setState({text:""});
    }

    render() {
        const { item } = this.state;

        return (
            <div className="foo">
                <h2>Item</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.text} />
                        <button>{'Add #'} </button>
                    </form>
                </div>
            </div>

        )
    }
}
export default AddToDo;