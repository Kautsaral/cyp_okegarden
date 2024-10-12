import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.pages";
import * as login from "@tests/data/login.data";
import * as assert from "@helpers/asserts";
import { shouldHaveUrl, shouldBeVisible } from '../helpers/asserts';
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN, UNREGIST_LOGIN, INVALIDEMAIL_LOGIN,INVALIDPASS_LOGIN } from "../data/login.data";

describe("Login Test", function () {
  beforeEach(() => {
    route.visit(ROUTES.login);
  });

  it("Successfull login", () => {
    element.clearAndFillField(loginPage.emailField, VALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, VALID_LOGIN.password);
    element.click(loginPage.signinBtn);

    shouldHaveUrl('/member/my-order');

  });

  it("Unsuccessfull login with unregist email and password", () => {
    element.clearAndFillField(loginPage.emailField, UNREGIST_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, UNREGIST_LOGIN.password);
    element.click(loginPage.signinBtn);
    cy.reload();

    cy.should('be.visible');
  

  });
  
  it("Unsuccessfull login with null email", () => {
    element.clearAndFillField(loginPage.emailField, INVALIDEMAIL_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, INVALIDEMAIL_LOGIN.password);
    element.click(loginPage.signinBtn);

    cy.get('#error-message').should('be.visible').and('contain.text', 'Your email or password is incorrect!');
  });

  it("Unsuccessfull login with null password", () => {
    element.clearAndFillField(loginPage.emailField, INVALIDPASS_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, INVALIDPASS_LOGIN.password);
    element.click(loginPage.signinBtn);

    cy.get('#error-message').should('be.visible').and('contain.text', 'Your email or password is incorrect!');
  });

  it("Unsuccessfull login with null email and password", () => {
    element.clearAndFillField(loginPage.emailField, INVALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, INVALID_LOGIN.password);
    element.click(loginPage.signinBtn);

    cy.get('#error-message').should('be.visible').and('contain.text', 'Your email or password is incorrect!');
  });

  


});