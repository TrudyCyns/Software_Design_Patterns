// Objective: Program a  Logger Object for a Program
var Facebook = /** @class */ (function () {
    //   public loggedInUser: User;
    function Facebook(user) {
        Facebook.user = user;
    }
    //   login(user: User) {
    //     this.loggedInUser = user
    //     return this.loggedInUser
    //   }
    //   Use login to access constructor.
    Facebook.login = function (user) {
        if (Facebook.user === null) {
            new Facebook(user);
        }
        return Facebook.user;
    };
    Facebook.logout = function () {
        if (Facebook.user !== null) {
            Facebook.user = null;
        }
        return Facebook.user;
    };
    Facebook.user = null;
    return Facebook;
}());
// let user1 = new Facebook().login({username:"Tru", password:"Tru2"})
// console.log(new Facebook(1));
// console.log(new Facebook(2));
// console.log(new Facebook(3));
// console.log(new Facebook(4));
var fb = Facebook.login({ username: "Tru", password: "Tru2" });
console.log(fb);
fb = Facebook.logout();
fb = Facebook.login({ username: 'Nab', password: 'Nab2' });
console.log(fb);
fb = Facebook.login({ username: 'Cyn', password: 'Cyn2' });
console.log(fb);
fb = Facebook.logout();
console.log(fb);
