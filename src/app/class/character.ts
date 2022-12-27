import { Location } from "./location";

export class Character {
    constructor(
      public id?: number,
      public name?: string,
      public gender?: number,
      public location?: Location,
      public image?: string,
      public status?: string,
      public species?: string,
      public url?: string,
      public episode?: string[]
    ) { }
  }

