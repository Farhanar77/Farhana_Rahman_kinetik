import {test, expect} from "@playwright/test";
import { ProductPage } from "../pageobjects/product_page";
import { searchProduct } from "../helpers/data";

test.describe("Test case 1", () =>{

     let productPg;

    test.beforeEach(async ({page}) => {

        productPg = new ProductPage(page);
    });

    test ("Verify Navigate to Specific URL", async({page}) =>{
        await productPg.goto();

    });

     test ("Verify Homepage Visible", async({page}) =>{
        await productPg.goto();
        await productPg.homePageVisible();

    });

    test ("Verify Product button Click & navigate to product page", async({page}) =>{
        await productPg.goto();
        await productPg.productBtnClick();

    });

    test ("Verify product Search input", async({page}) =>{
        await productPg.goto();
        await productPg.productBtnClick();
        await productPg.searchProduct(searchProduct);

    });

    test ("Verify Search Product Visible", async({page}) =>{
        await productPg.goto();
        await productPg.productBtnClick();
        await productPg.searchProduct(searchProduct);

    });
    


})