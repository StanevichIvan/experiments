export default class Cat {
  constructor(obj) {
      this.image = obj.imageUrl || '';
      this.title = obj.title || '';
      this.description = obj.text || '';
  }
}
