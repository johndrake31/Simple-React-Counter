import React, { Component } from 'react';

class Counter extends Component {

    render() {
        const counter = this.props.counter;
        const tProps = this.props;

        return (
            <React.Fragment>
                <div className="row p-5">

                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => tProps.onIncrement(counter)} className="btn btn-info btn-sm m-2">Increment</button>
                    <button onClick={() => tProps.onDecrement(counter)} className="btn btn-dark btn-sm m-2">Decrement</button>
                    <button onClick={() => tProps.onDelete(counter.id)} className="btn btn-danger btn-sm">delete</button>
                </div>

            </React.Fragment>

        );
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <h3>please enter some data</h3>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.count === 0 ? "warning" : "primary";
        return classes;
    }

    /**
     * 
     * @returns String | JSX
     */
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

}

export default Counter;