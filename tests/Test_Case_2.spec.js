import {test, expect} from "@playwright/test";
import { ProductPage } from "../pageobjects/product_page";
import { ProductDetailsPage } from "../pageobjects/product_details_page";
import { AddtoCart } from "../pageobjects/add_to_cart";

test.describe("Test Case 2", () =>{

     let productPg,productDetails,cart;

    test.beforeEach(async ({page}) => {

        productPg = new ProductPage(page);
        productDetails = new ProductDetailsPage(page);
        cart = new AddtoCart(page);
    });

     test ("Verify Navigate to Specific URL", async({page}) =>{
        await productPg.goto();

    });

    test ("Verify Homepage Visible", async({page}) =>{
        await productPg.goto();
        await productPg.homePageVisible();

    });

    test ("Verify View product click", async({page}) =>{
        await productPg.goto();
        await productDetails.viewProductClick();
    });

    test ("Verify Product Details open", async({page}) =>{
        await productPg.goto();
        await productDetails.viewProductClick();
        await productDetails.productDetailsContent();
    });

    test ("Verify Increase Product Quantity to 4", async({page}) =>{
        await productPg.goto();
        await productDetails.viewProductClick();
        await productDetails.productQuantityIncrease();
    });

     test ("Verify click add to cart button", async({page}) =>{
        await productPg.goto();
        await productDetails.viewProductClick();
        await productDetails.productQuantityIncrease();
        await productDetails.addToCartButtonClick();
    });

    test ("Verify View Cart Button click", async({page}) =>{
        await productPg.goto();
        await productDetails.viewProductClick();
        await productDetails.productQuantityIncrease();
        await productDetails.addToCartButtonClick();
        await productDetails.viewCartBtnClick();
        await page.waitForTimeout(2000);
        await cart.shoppingCartPage();
    });


     test ("Verify Product added in the Cart page", async({page}) =>{
        await productPg.goto();
        await productDetails.viewProductClick();
        await productDetails.productQuantityIncrease();
        await productDetails.addToCartButtonClick();
        await productDetails.viewCartBtnClick();
        await cart.shoppingCartPage();
        await cart.cartPageProduct();

    });
    
    



})