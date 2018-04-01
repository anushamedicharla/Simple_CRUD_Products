import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    products: Product[];
    productForm:boolean = false;
    isNewForm:boolean;
    newProduct: any= {};
    editProductForm: boolean = false;
    editProduct: any = {};
    constructor(private prodtService: ProductService) {}
    
    ngOnInit() {
        this.getProducts();
    }
    
    getProducts() {
        this.products = this.prodtService.getProductsFromData();
    }

    showEditProductForm(product: Product){
        if(!product){
            this.productForm = false;
            return;
        }

        this.editProductForm = true;
        this.editProduct = clone(product);
    }
    
    showAddProductForm() {
        // Resets the form if the form is already edited.
        if(this.products.length) {
            this.newProduct = {}
        }

        this.productForm = true;
        this.isNewForm = true;
    }

    saveProduct(product: Product) {
        if(this.isNewForm) {
            // Add a new product
            this.prodtService.addProduct(product);
        }
        this.productForm = false;
    }    

    updateProduct(product: Product) {
        this.prodtService.updateProduct(this.editProduct);
        this.editProductForm = false;
        this.editProduct = {};
    }

    cancelEdits() {
        this.editProduct = {};
        this.editProductForm = false;
    }

    cancelAdds() {
        this.newProduct = {};
        this.productForm = false;
    }

    removeProduct(product: Product) {
        this.prodtService.removeProduct(product);
    }
}
