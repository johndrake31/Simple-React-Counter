import React, { Component } from 'react';

class Counter extends Component {

    state = {

        count: this.props.counter.value,

    };


    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.state.count > 0 ?
            this.setState({ count: this.state.count - 1 }) :
            this.setState({ count: 0 })
    }

    render() {
        const counter = this.props.counter;

        return (
            <React.Fragment>
                <div className="row p-5">

                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className="btn btn-info btn-sm m-2">Increment</button>
                    <button onClick={this.handleDecrement} className="btn btn-dark btn-sm m-2">Decrement</button>
                    <button onClick={() => { this.props.onDelete(counter.id) }} className="btn btn-danger btn-sm">delete</button>
                </div>

            </React.Fragment>

        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <h3>please enter some data</h3>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    /**
     * 
     * @returns String | JSX
     */
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;