describe("form input testing", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    const nameInput = () => cy.get("[data-cy=nameInput");
    const specialInput = () => cy.get("[data-cy=specialInput");
    // const termsInput = () => cy.get("[data-cy=termsInput");
    const submitButton = () => cy.get("[data-cy=submitButton]");
  
    it("check for name input label", () => cy.contains("Name:"));
  
    it("Name input exists", () => nameInput().should("exist"));
  
    it("Check that name input can receive string input", () => {
      nameInput()
        .should("have.value", "")
        .type("Aloysius")
        .should("have.value", "Aloysius");
    });
  
    
  
    it("Check that special request input can receive input", () => {
      specialInput()
        .should("have.value", "")
        .type("I want it my way!")
        .should("have.value", "I want it my way!");
    });
  
    // it("Check that terms checkbox can be checked", () => {
    //   termsInput()
    //     .click()
    //     .should("be.checked");
    // });
  
    it("check submit button is disabled via form validation testing", () => {
      submitButton().should("be.disabled");
    });
  
    it("check submit button is enabled via form validation testing", () => {
      nameInput().type("Aloysius");
      submitButton().should("not.be.disabled");
    });
  
    it("verify form validation prevents submission with an empty input", () => {
      nameInput().type("Aloysius");
      submitButton().should("not.be.disabled");
      nameInput().type(
        "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}"
      );
      submitButton().should("be.disabled");
    });
    // it("verify form can be submitted and data listed in the dom", () => {
    //   nameInput().type("Aloysius");
    //   submitButton().click();
    // //   cy.contains("Aloysius test@email.com");
    // })
  });
  