export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    return this.members.has(member) ? 'Этот персонаж уже в команде' : this.members.add(member);
  }

  addAll(arr) {
    this.members = new Set([...this.members, ...arr]);
    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
