import { invoke } from "cypress/types/lodash";

export {};
context("Assertions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("Check password generator UI", () => {
    it(".should()", () => {
      cy.get("select").should("have.value", 12);
      cy.get('[type="checkbox"]').should("not.be.checked");
      cy.get(".copy-feedback").should(
        "have.text",
        'Press "generate password!"'
      );
    });
  });
});
context("Assertions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/check");
  });
  describe("Check password evaluator UI", () => {
    it(".should()", () => {
      cy.get("input").should("have.value", "");
      cy.get("#result").should(($div) => {
        expect($div).to.have.length(1);
        $div[0].className = "";
        $div[0].style.width = "0px";
      });
      it(".should()", () => {
        cy.get("#alert h4").should("have.text", "Password evaluation");
        cy.get("#alert > :nth-child(1) > div > :nth-child(2)").should(
          "have.text",
          "Nothing yet"
        );
      });
    });
  });
});
context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should select", () => {
    cy.get("select")
      .select("16", { force: true })
      .invoke("val")
      .should("eq", "16")
      .then(() => {
        cy.get("select")
          .select("6", { force: true })
          .invoke("val")
          .should("eq", "6");
      })
      .then(() => {
        cy.get("select")
          .select("9", { force: true })
          .invoke("val")
          .should("eq", "9");
      });
  });

  it("should checkbox", () => {
    cy.get("#numbersChecker").check({ force: true }).should("be.checked");
    cy.get("#upperChecker").check({ force: true }).should("be.checked");
    cy.get("#lowerChecker").check({ force: true }).should("be.checked");
  });
  it("should textarea", () => {
    cy.get("textarea")
      .should("have.value", "")
      .then(() => {
        cy.contains("Generate password").click();
      })
      .then(() => {
        cy.get("textarea").contains(/[a-z]{12}/);
        cy.get("#numbersChecker")
          .check({ force: true })
          .then(() => {
            cy.contains("Generate password").click();
          })
          .then(() => {
            cy.get("textarea").contains(/\d{12}/);
            cy.get("#numbersChecker").uncheck({ force: true });
            cy.get("#upperChecker").check({ force: true });
            cy.contains("Generate password").click();
          })
          .then(() => {
            cy.get("textarea").contains(/[A-Z]{12}/);
            cy.get("#lowerChecker").check({ force: true });
            cy.get("#numbersChecker").check({ force: true });
            cy.get("select").select("6", { force: true });
            cy.contains("Generate password").click();
          })
          .then(() => {
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
            cy.contains("Generate password").click();
            cy.get("textarea").contains(/[a-zA-Z0-9]{6}/);
          })
          .then(() => {
            cy.get(".copy-area > button").click();

            cy.get(".copy-feedback")
              .should("have.text", "Password copied!")
              .then(() => {
                cy.get("textarea")
                  .invoke("val")
                  .then((text) => {
                    cy.visit("http://localhost:3000/check");
                    cy.get("input").type(text.toString());
                    cy.get("#strength").should(($div) => {
                      expect($div).to.have.length(1);
                      const className = $div[0].className;
                      expect(className).to.match(
                        /\b(?:weaker|weak|medium|strong|stronger)\b/gi
                      );
                    });
                    cy.get("input").type("hu2JHPxgGvhVkT9V");
                    cy.get('strong').should(
                      "have.text",
                      "Great, Mr. Robot would be proud of your password!"
                    );
                  });
              });
          });
      });
  });
});
