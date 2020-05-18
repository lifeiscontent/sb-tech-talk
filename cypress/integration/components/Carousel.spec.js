/// <reference types="cypress" />

describe("Carousel", function () {
  beforeEach(function () {
    cy.visit("/iframe.html?id=components-carousel--renders");
  });

  it("should have totalPages cues", function () {
    cy.get('[data-cy="UICarouselPaginationStatusCue"]').should(
      "have.length",
      4
    );
  });

  it("should have first cue active", function () {
    cy.get('[data-cy="UICarouselPaginationStatusCue"]')
      .eq(0)
      .should("have.attr", "data-active");
  });

  it("should have previous button disabled", function () {
    cy.get('[data-cy="UICarouselPaginationAction"]')
      .first()
      .should("be.disabled");
  });

  it("should have next button enabled", function () {
    cy.get('[data-cy="UICarouselPaginationAction"]')
      .last()
      .should("not.be.disabled");
  });

  context("on page 2", function () {
    beforeEach(function () {
      cy.get('[data-cy="UICarouselPaginationAction"]').last().click();
    });

    it("should have scrollLeft equal to the full width of the list", function () {
      cy.get('[data-cy="UICarouselFrameList"]')
        .should("have.prop", "scrollLeft")
        .and("eq", 960);
    });

    it("should have 2nd status cue active", function () {
      cy.get('[data-cy="UICarouselPaginationStatusCue"]')
        .eq(1)
        .should("have.attr", "data-active");
    });

    it("goes to the previous page when previous button is clicked", function () {
      cy.get('[data-cy="UICarouselPaginationAction"]').first().click();

      cy.get('[data-cy="UICarouselFrameList"]')
        .should("have.prop", "scrollLeft")
        .and("eq", 0);
      cy.get('[data-cy="UICarouselPaginationStatusCue"]')
        .eq(0)
        .should("have.attr", "data-active");
    });
  });

  context("on page 4", function () {
    beforeEach(function () {
      cy.get('[data-cy="UICarouselFrameList"]').invoke(
        "prop",
        "scrollLeft",
        3072
      );
    });

    it("should have next button disabled", function () {
      cy.get('[data-cy="UICarouselPaginationAction"]')
        .last()
        .should("be.disabled");
    });
  });
});
