import React, { Component } from 'react';
import DataService from '../services/dataSerivice';

export default class List extends Component {

    constructor() {
        super();
        this.state = {cats: []};
    }

    componentDidMount() {
        this.loadCats();
    }

    loadCats() {
        DataService.getCatsCards()
            .then((cats) => {
                this.setState({
                    cats: cats
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.cats.map((cat, i) =>
                    <div key={i}>
                        <div>{cat.title}</div>
                        <div>{cat.description}</div>
                        <img src={cat.image}
                             alt={cat.title}
                        />
                    </div>
                )}
            </div>
        );
    }
}