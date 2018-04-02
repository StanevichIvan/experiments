export default class Cat {
  image: string;
  title: string;
  description: string;

  constructor(obj: any) {
      this.image = obj.imageUrl || '';
      this.title = obj.title || '';
      this.description = obj.text || '';
  }
}
