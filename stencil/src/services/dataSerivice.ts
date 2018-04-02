import Cat from "../models/Cat";

class DataService {
  apiUrl = 'http://localhost:3000/';
  constructor() {}

  getCatsCards(): Promise<Cat[]> {
   return fetch(this.apiUrl)
     .then((value: Response) => value.json())
     .then((data: any[]) => {
       return data.map(cat => new Cat(cat));
     });
  }
}

export default new DataService();
