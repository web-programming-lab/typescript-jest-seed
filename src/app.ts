class App {

  // missing interface. Read exercise below:
  createUser(name: string): User {
    return {
      id: 123,
      name: name,
      settings: {
        settingA: 123,
        settingB: 456,
      }
    }
  }
}

let user = new App().createUser('Andreas');
console.log(user);



