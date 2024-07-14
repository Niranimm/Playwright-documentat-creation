import { Page, expect } from "@playwright/test";

export default class MainpageService{
    
    private readonly SetupSearchSelector = "button .slds-icon-waffle"
    private readonly ServiceButtonSelector = "div .slds-dropdown__item a[id = '07pdM000000i6D4QAI']"
    private readonly KeywordServiceSelector = "h1 .slds-truncate"

    constructor(private page : Page){

    }

    async VerifySuccessfulLogin(){
        await this.page.locator(this.SetupSearchSelector).click()
        await this.page.locator(this.ServiceButtonSelector).click()    
        await expect(this.page.locator(this.KeywordServiceSelector)).toBeVisible({timeout : 15000})   
    }

}