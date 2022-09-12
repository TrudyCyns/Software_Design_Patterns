// Objective: Program a  Logger Object for a Program

interface User {
  username: string;
  password: string;
}

class Facebook {
  private static user: any = null;
  //   public loggedInUser: User;

  private constructor(user: User) {
    Facebook.user = user;
  }

  //   login(user: User) {
  //     this.loggedInUser = user
  //     return this.loggedInUser
  //   }

  //   Use login to access constructor.
  static login(user: User) {
    if (Facebook.user === null) {
        new Facebook(user)
    }
    return Facebook.user;
  }

  static logout() {
    if (Facebook.user !== null) {
        Facebook.user = null
    }
    return Facebook.user
  }
}

// let user1 = new Facebook().login({username:"Tru", password:"Tru2"})

// console.log(new Facebook(1));
// console.log(new Facebook(2));
// console.log(new Facebook(3));
// console.log(new Facebook(4));

let fb = Facebook.login({username:"Tru", password:"Tru2"})
console.log(fb);
fb = Facebook.logout()
fb = Facebook.login({ username: 'Nab', password: 'Nab2' });
console.log(fb);
fb = Facebook.login({ username: 'Cyn', password: 'Cyn2' });
console.log(fb);

fb = Facebook.logout();
console.log(fb);