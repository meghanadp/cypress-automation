describe("Gmail Login", () => {
  it.only("Login through gmail", () => {
    const username = Cypress.env("email");
    const password = Cypress.env("password");
    const loginUrl = Cypress.env("url");
    const cookieName = Cypress.env("PortalSession");
    const options = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      loginSelector: ".custom-btn-primary"
    };

    return cy.task("GoogleSocialLogin", options).then(({ cookies }) => {
      cy.clearCookies();

      Cypress.Cookies.defaults({
        preserve: cookieName
      });
    });
  });
});
