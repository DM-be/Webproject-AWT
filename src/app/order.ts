import { Product } from "./product";

export class Order {

    constructor (
        public name: string,
        public email: String,
        public hamburger: Product,
        public friet: Product,
        ) { }

}