import {
  Browser,
  BrowserContext,
  chromium,
  expect,
  Page,
} from "@playwright/test";
import { afterAll, beforeAll, describe, test } from "vitest";

describe("playwright meets vitest", () => {
  let page: Page;
  let browser: Browser;
  let context: BrowserContext;
  beforeAll(async () => {
    browser = await chromium.launch();
    let context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("has title", async () => {
    await page.goto("http://localhost:3000/");

    // Expect a title "to contain" a substring.
    await expect(page.getByRole("heading", { name: "Socar" })).toBeVisible();
  });

  test("get started link", async () => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });
});
