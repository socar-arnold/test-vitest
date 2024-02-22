import { test, expect } from "@playwright/test";

test.describe("use vitest method in playwright", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });
  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page.getByRole("heading", { name: "Socar" })).toBeVisible();
  });

  test("go about link", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "About" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText("About")).toBeVisible();
  });

  test("go serverMSW link", async ({ page }) => {
    // Click the get started link.
    await page.getByRole("link", { name: "MSW" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText("AboutMsw")).toBeVisible();
  });
});
