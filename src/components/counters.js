import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {
                id: 1,
                value: 0
            },
            {
                id: 2,
                value: 3
            },
            {
                id: 3,
                value: 0
            },
            {
                id: 4,
                value: 4
            },
        ]

    }
    handleDelete = (counterId) => {
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: newCounters });
    };

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter
                        onDelete={this.handleDelete}
                        key={counter.id}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;