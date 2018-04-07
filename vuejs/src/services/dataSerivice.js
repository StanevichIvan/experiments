import Cat from "../models/Cat";

class DataService {

  constructor() {
      this.apiUrl = 'http://localhost:3000/';
  }

  getCatsCards() {
   return fetch(this.apiUrl)
     .then((value) => value.json())
     .then((data) => {
       return data.map(cat => new Cat(cat));
     });
  }
}

export default new DataService();
