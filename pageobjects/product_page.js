import { expect } from '@playwright/test';
import { searchProduct } from '../helpers/data';

export class ProductPage{
     /**
     * @param {import('@playwright/test').page} page
     */

     constructor(page){
        this.page = page;
        this.homeText = page.getByRole('link', { name: 'Home' });
        this.landingLogo = page.getByAltText('Website for automation practice');
        this.productSectionTitle = page.locator("//h2[normalize-space()='Features Items']");
        this.productButton = page.locator('ul.nav.navbar-nav a[href="/products"]');
        this.allProductPage = page.locator("//h2[normalize-space()='All Products']");

        //search
        this.searchField = page.locator("#search_product");
        this.searchButton = page.locator("#submit_search");
        this.searchProductSectionTitle = page.locator("//h2[normalize-space()='Searched Products']");
        this.productCards = page.locator(".single-products");
     }

     async goto(){
        await this.page.goto("https://automationexercise.com/");
        await expect(this.landingLogo).toBeVisible();
     }

     async homePageVisible(){
        await expect(this.homeText).toBeVisible();
        await expect(this.homeText).toHaveText("Home");
        await expect(this.productSectionTitle).toBeVisible();
        await expect(this.productSectionTitle).toHaveText("Features Items");
     }

     async productBtnClick(){
        await expect(this.productButton).toBeVisible();
        await expect(this.productButton).toContainText("Products");
        await this.productButton.click();
        await expect(this.allProductPage).toBeVisible();
        await expect(this.allProductPage).toHaveText("All Products");
     }

     async searchProduct(){
        await expect(this.searchField).toBeVisible();
        await expect(this.searchButton).toBeVisible();
        await this.searchField.fill(searchProduct);
        await this.searchButton.click();

        await this.page.waitForTimeout(2000);

        const count = await this.productCards.count();
        await expect(count).toBeGreaterThan(0);

        for (let product = 0; product < count; product++) {
            const card = this.productCards.nth(product);
            await expect(card).toBeVisible();
            await expect(card).toContainText(new RegExp(searchProduct, 'i'));
        }

     }


      
   }
    