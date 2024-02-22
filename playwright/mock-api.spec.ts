import { test, expect } from "@playwright/test";

test.describe("use vitest method in playwright", () => {
  test("mock about /posts page api", async ({ page }) => {
    await page.goto("http://localhost:3000");
    // Click the get started link.
    await page.route("**/posts", async (route) => {
      const json = [
        {
          userId: 1,
          id: 1,
          title: "playwright-mock",
          body: "body-mock",
        },
      ];
      await route.fulfill({ json });
    });

    await page.getByRole("link", { name: "About" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText("playwright-mock")).toBeVisible();
  });
});
