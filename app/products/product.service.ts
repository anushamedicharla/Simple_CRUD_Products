import { Injectable } from "@angular/core";
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';
@Injectable()
export class ProductService{
    private pitems = PRODUCT_ITEMS;

    getProductsFromData() : Product[] {
        return this.pitems;
    }

    addProduct(product: Product) {
        this.pitems.push(product);
    }

    updateProduct(product:Product) {
        let index = findIndex(this.pitems, (p:Product) => {
            return p.id === product.id;
        });

        this.pitems[index] = product;
    }

    removeProduct(product: Product) {
        this.pitems.splice(this.pitems.indexOf(product),1);
    }
    // getProducts(): Product[] {
    //     return [
    //         {
    //             id: 1,
    //             name: 'Scissors',
    //             description: 'use this to cut stuff',
    //             price: 4.99
    //         },
    //         {
    //             id: 2,
    //             name: 'Steak Knives',
    //             description: 'use this to eat steak with',
    //             price: 10.99
    //         },
    //         {
    //             id: 3,
    //             name: 'Shot Glass',
    //             description: 'use this to take shots',
    //             price: 3.99
    //         }
    //     ];
    // }
}