const nama = {
    firstName: 'Gilang',
    lastName: 'Romadhan',
    get firstName () {
      if (typeof this.firstName === 'string') {
        return `Fullname : ${this.firstName} ${this.lastName}`
      }
    }
  }

nama.firstName;

console.log(nama.firstName);