import { Character } from "./character";

export class Location {
    constructor(
        public id?: number,
        public name?: string,
        public type?: string,
        public dimension?: string,
        public residents?: Character[],
        public created?: string
    ) { }
  }




