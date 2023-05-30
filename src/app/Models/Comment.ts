
  export interface CommentsApi{
    comments: Comment[],
    total: number,
    skip: number,
    limit:number
  }

  export interface Comment {
        id : number,
        body:string,
        postId: number,
        user: {
          id:number,
          username:string
        }
    }
