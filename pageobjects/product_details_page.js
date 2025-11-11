import { expect } from '@playwright/test';
import { produtName,productQuantty } from '../helpers/data';

export class ProductDetailsPage{
     /**
     * @param {import('@playwright/test').page} page
     */

     constructor(page){
        this.page = page;
        this.viewProductLink = page.locator(".product-image-wrapper").locator(".choose").getByRole('link', { name: 'View Product' }).nth(0);
        this.productDetailsSection = page.locator('div.product-details');
        this.productInformation = page.locator(".product-information");
        this.productName = this.productInformation.locator("h2");
        this.productCategory = this.productInformation.locator('p', { hasText: 'Category: Women > Tops' });
        this.productPrice = this.productInformation.locator('span > span');
        this.productQuantity = this.productInformation.locator('span > label');
        this.addtoCartButton = this.productInformation.getByRole('button', { name: 'Add to cart' });
        this.quantityField = this.productInformation.locator("#quantity");
        this.quantityIncreaseButton = this.productInformation.locator("#product_id");


        //addtocart
        this.cartmodal = page.locator(".modal-content");
        this.viewCartButton = this.cartmodal.getByRole('link', { name: 'View Cart' });
    }

     async viewProductClick()
     {
        await this.page.mouse.wheel(0,200);
        await this.page.waitForTimeout(2000);
        await expect(this.viewProductLink).toBeVisible();
        await this.viewProductLink.click();
        await expect(this.page).toHaveURL('https://automationexercise.com/product_details/1');
        await expect(this.productDetailsSection).toBeVisible();
     }


     async productDetailsContent(){
        await expect(this.productInformation).toBeVisible();
        await expect(this.productName).toBeVisible();
        await expect(this.productName).toHaveText(produtName)
        await expect(this.productCategory).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.productQuantity).toBeVisible();
        await expect(this.addtoCartButton).toBeVisible();
        await expect(this.addtoCartButton).toHaveText("Add to cart");
     }

     async productQuantityIncrease(){
        await expect(this.quantityField).toBeVisible();
        await this.quantityField.fill(productQuantty);
        await expect(this.quantityField).toHaveValue(productQuantty);
     }

    async addToCartButtonClick(){
        await this.addtoCartButton.click();
     }

      async viewCartBtnClick(){
        await this.viewCartButton.click();
     }


}  