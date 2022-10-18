export interface Product {
    id: number,
    name: string,
    price: number,
    inventory: number
}

export type Cart = Product 

export const product: Product[] = [
    { id: 1, name: 'iphone14', price: 8888, inventory: 5 },
    { id: 2, name: 'iMac', price: 10000, inventory: 3 },
    { id: 3, name: 'MacBook Pro', price: 12000, inventory: 2 }
]