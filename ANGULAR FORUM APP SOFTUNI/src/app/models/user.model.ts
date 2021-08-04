export class User {
  constructor(public _id: string,
              public username: string,
              public password: string,
              public firstName: string,
              public lastName: string,
              public email: string,
              public address: string,
              public state: string,
              public country: string,
              public type: string) {}
}
