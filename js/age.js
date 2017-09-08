export class Age {
  constructor(age) {
    this.age = age;
  }

  seconds() {
    let ageSeconds = this.age * 31536000;
    return ageSeconds;
  }
}
