import {Component, State} from '@stencil/core';
import DataService from '../../services/dataSerivice';
import Cat from "../../models/Cat";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @State() cats: Cat[] = [];

  componentWillLoad() {
    DataService.getCatsCards()
      .then((collection) => {
        this.cats = collection;
      });
  }

  render() {
    return (
      <div>
        {this.cats.map((cat) =>
          <div>
            <div>{cat.title}</div>
            <div>{cat.description}</div>
            <img src={cat.image}/>
          </div>
        )}
      </div>
    )
  }
}
