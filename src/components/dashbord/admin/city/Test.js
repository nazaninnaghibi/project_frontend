import React, {Component} from 'react';

import axios from 'axios';

class Test extends Component{
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/city`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {

        console.log("|||||" + this.state.persons);
        

        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }

}

export default Test;