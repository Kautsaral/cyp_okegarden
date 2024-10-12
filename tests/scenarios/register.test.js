import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.pages";
import * as signupPage from "@tests/pages/signup.pages";
import * as login from "@tests/data/login.data";
import * as registerPage from "@tests/data/register.data";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";
import { INVALID_LOGIN } from "../data/login.data";
import { RANDOM_STRINGS } from "../data/register.data";
import { VALID_REGISTER } from "../data/register.data";
import { REGISTER } from "../const/routes";

describe("Register Test", function () {
    beforeEach(() => {
      route.visit(REGISTER.register);
    });

    it("Successfull register with valid data", () => {
        element.clearAndFillField(registerPage.nameField, VALID_REGISTER.name);
        element.clearAndFillField(registerPage.emailField, VALID_REGISTER.email);
        element.clearAndFillField(registerPage.telpField, VALID_REGISTER.telp);
        element.clearAndFillField(registerPage.paswordField, VALID_REGISTER.password);
        element.clearAndFillField(registerPage.confirmpaswordField, VALID_REGISTER.confirmpassword);
        element.click(registerPage.signinBtn);

        assert.containText("Email Address already exist!");
        });
    })
