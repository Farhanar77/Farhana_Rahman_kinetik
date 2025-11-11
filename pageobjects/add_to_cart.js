import { expect } from '@playwright/test';
import { productQuantty } from '../helpers/data';

export class AddtoCart{
     /**
     * @param {import('@playwright/test').page} page
     */

     constructor(page){
        this.page = page;
        this.cartItemspage = this.page.locator("div.breadcrumbs ol.breadcrumb li.active");
        this.productRow = this.page.locator('tr').filter({ hasText: 'Blue Top' });
        this.productDescription = this.productRow.locator(".cart_description");
        this.productNam = this.productDescription.locator("h4 a");
        this.categrytoCart = this.productDescription.locator("p");
        this.cartQuantity = this.productRow.locator(".cart_quantity");
        
    }


    async shoppingCartPage(){
        await expect(this.cartItemspage).toBeVisible();
        await expect(this.cartItemspage).toHaveText("Shopping Cart");
    }

    async cartPageProduct(){
        await expect(this.productRow).toBeVisible();
        await expect(this.productNam).toBeVisible();
        await expect(this.productNam).toHaveText("Blue Top");
        await expect(this.categrytoCart).toBeVisible();
        await expect(this.categrytoCart).toHaveText("Women > Tops");
        await expect(this.cartQuantity).toBeVisible();
        await expect(this.cartQuantity).toHaveText(productQuantty);
    }
}    