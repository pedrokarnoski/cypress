describe("Login attempts", () => {
  const elements = {
    TITLE: ".login_logo",
    USERNAME: '[data-test="username"]',
    PASSWORD: '[data-test="password"]',
    LOGIN: '[data-test="login-button"]',
    BURGER_BUTTON: "#react-burger-menu-btn",
    BURGER_MENU: ".bm-menu-wrap",
    BURGER_MENU_ALL_ITEMS: "#inventory_sidebar_link",
    BURGER_MENU_ABOUT: "#about_sidebar_link",
    BURGER_MENU_LOGOUT: "#logout_sidebar_link",
    BURGER_MENU_RESET_APP_STATE: "#reset_sidebar_link",
    BACK_TO_PRODUCTS: '[data-test="back-to-products"]',
    CART: "#shopping_cart_container",
    CART_BADGE: ".shopping_cart_badge",
    ITEM_NAME_INV: ".inventory_item_name",
    ITEM_NAME: ".inventory_details_name",
    ITEM_IMAGE: ".inventory_details_img",
    ITEM_DESCRIPTION: ".inventory_details_desc",
    ITEM_PRICE: ".inventory_details_price",
    ADD_TO_CART: '[data-test*="add-to-cart-sauce-labs-"]',
    REMOVE_FROM_CART: '[data-test*="remove-sauce-labs-"]',
    FOOTER: "footer",
  };

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("verifica o conteúdo da página", () => {
    cy.get(elements.TITLE).should("be.visible").contains("Swag Labs");
    cy.get(elements.USERNAME).should("be.visible");
    cy.get(elements.PASSWORD).should("be.visible");
    cy.get(elements.LOGIN).should("be.visible");
  });

  it("login como standard_user", () => {
    cy.get(elements.USERNAME).type("standard_user");
    cy.get(elements.PASSWORD).type("secret_sauce");
    cy.get(elements.LOGIN).click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });
});
