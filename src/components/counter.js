import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
    };


    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && "please create new tags"}
                {this.renderTags()}

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={this.handleIncrement} className="btn btn-info btn-sm">Increment</button>

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