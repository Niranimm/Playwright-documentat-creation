import test from "@playwright/test";
import Loginpage from "../Pages/Loginpage";
import MainpageService from "../Pages/Mainpage";



test("LoginTest", async ({page}) =>{

    const loginpage = new Loginpage(page)
    await loginpage.GotoLofinPage()
    await loginpage.UsernameLoginPage("niranjan921999@gmail.com")
    await loginpage.PasswordLoginPage("Dontdisturb@1")
    await loginpage.ClickLoginHomepage()

    const mainpageService = new MainpageService(page)
    await mainpageService.VerifySuccessfulLogin()

})
