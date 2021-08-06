export class Post {
  constructor(public _id: string,
              public userId: string,
              public title: string,
              public content: string,
              public imagePath: string,
              public username: string) {}
}
