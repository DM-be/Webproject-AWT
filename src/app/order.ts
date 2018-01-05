import { Product } from "./product";

export class Order {

    constructor (
        public firstName: string,
        public lastName: string,
        public hamburger: Product,
        public friet: Product,
        public snack: Product,
        public sauce: Product,
        public totalPrice: number
        ) {}
        updatePrice(): void
        {
            let total = this.friet.price + this.hamburger.price + this.snack.price + this.sauce.price
            this.totalPrice = total
            
        }
        getTotalPrice(): number
        {
            return this.totalPrice
        }

}