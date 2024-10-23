import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as result_page from "../locators/result_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"
describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
          });

    afterEach("Конец теста", function () {
        cy.get(result_page.close).should("be.visible");
    })

    it('Авторизация с валидным логином и паролем', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password)
         cy.get(main_page.login_button).click()
         cy.get(result_page.title).contains("Авторизация прошла успешно")
     })

     it("Проверка восстановления пароля", function ()    {
        cy.get(main_page.fogot_pass_btn).click ()
        cy.get(recovery_page.email).type (data.login)
        cy.get(recovery_page.send_button).click ()
        cy.get(result_page.title).contains ("Успешно отправили пароль на e-mail")

     })

     it ("Проверка авторизации с неправильным логином и правильным паролем", function () {
        cy.get(main_page.email).type("Mail@gmail.com");
        cy.get(main_page.password).type(data.password)
        cy.get(main_page.login_button).click()
        cy.get(result_page.title).contains("Такого логина или пароля нет")
     })

     it ("Проверка авторизации с неправильным паролем и правильным логином", function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(data.InvalidPassword)
        cy.get(main_page.login_button).click()
        cy.get(result_page.title).contains("Такого логина или пароля нет")
     })

     it ("Проверка авторизации с невалдиным логином и валидным паролем", function () {
        cy.get(main_page.email).type(data.InvaldLogin);
        cy.get(main_page.password).type(data.password)
        cy.get(main_page.login_button).click()
        cy.get(result_page.title).contains("Нужно исправить проблему валидации")
     })

     it ("Проверка на приведение к строчным буквам в логине", function () {
        cy.get(main_page.email).type("GerMan@Dolnikov.ru");
        cy.get(main_page.password).type(data.password)
        cy.get(main_page.login_button).click()
        cy.get(result_page.title).contains("Такого логина или пароля нет")
     })
     
 }) 