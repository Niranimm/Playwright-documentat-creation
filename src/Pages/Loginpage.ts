import {Page, expect} from "@playwright/test"
import MainpageService from "./Mainpage"

export default class Loginpage{

    private readonly UsernameTextboxSelector = "#username"
    private readonly passwordTextboxSelector = "#password"
    private readonly LoginButtonSelectort = "#Login"


    constructor(private page: Page){

    }

    async GotoLofinPage(){
        await this.page.goto("/")
    }

    async UsernameLoginPage(username : string){
        await this.page.locator(this.UsernameTextboxSelector).fill(username)  
    }

    async PasswordLoginPage(password : string){
        await this.page.locator(this.passwordTextboxSelector).fill(password)
    }

    async ClickLoginHomepage(){
        await this.page.locator(this.LoginButtonSelectort).click()

        let mainpageservice = new MainpageService(this.page)
        return mainpageservice
    }
}