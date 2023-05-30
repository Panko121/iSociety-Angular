
  export interface UsersApi{
    users: User[],
    total: number,
    skip: number,
    limit:number
  }

  export interface User {
        id : number,
        firstName : string,
        lastName : string,
        maidenName : string,
        age : number,
        gender : string,
        email : string,
        phone : string,
        username : string,
        password : string,
        birthDate : string,
        image : string,
    }
