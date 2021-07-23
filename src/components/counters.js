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

    // methodes
    handleDelete = (counterId) => {
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: newCounters });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        //if key and value share the same name than you 
        // only need to use the name once in setState  { counters : counters  }
        this.setState({ counters });
    }
    handleDecrement = (counter) => {
        const countersArr = [...this.state.counters];
        const index = countersArr.indexOf(counter);
        countersArr[index] = { ...counter };
        if (countersArr[index].value > 0) {
            countersArr[index].value--
        }
        //if key and value share the same name than you 
        // only need to use the name once in setState  { counters : counters  }
        this.setState({ counters: countersArr });
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        key={counter.id}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;