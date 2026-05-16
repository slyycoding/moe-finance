/**
 * record-desktop.mjs
 * Records a full desktop walkthrough of the Moe Finance website.
 * Output: recordings/desktop-walkthrough.webm
 *
 * Run: node scripts/record-desktop.mjs
 */

import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "recordings");
mkdirSync(OUT_DIR, { recursive: true });

const URL = "http://localhost:3001";
const WIDTH = 1920;
const HEIGHT = 1080;

/* ── helpers ── */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function smoothScroll(page, targetY, durationMs = 1200) {
  const startY = await page.evaluate(() => window.scrollY);
  const steps = Math.round(durationMs / 16);
  for (let i = 1; i <= steps; i++) {
    const eased = 0.5 - Math.cos((Math.PI * i) / steps) / 2; // ease-in-out
    await page.evaluate((y) => window.scrollTo(0, y), startY + (targetY - startY) * eased);
    await wait(16);
  }
}

async function getSectionTop(page, selector) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    return el ? el.getBoundingClientRect().top + window.scrollY - 80 : 0;
  }, selector);
}

async function hoverElements(page, selector, pauseMs = 500) {
  const handles = await page.$$(selector);
  for (const el of handles.slice(0, Math.min(handles.length, 4))) {
    await el.hover().catch(() => {});
    await wait(pauseMs);
  }
}

/* ── main ── */
(async () => {
  console.log("🎬  Starting desktop recording...");

  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: OUT_DIR,
      size: { width: WIDTH, height: HEIGHT },
    },
  });

  const page = await context.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await wait(2000); // let hero animations settle

  /* ──────────────────────────────
     1. HERO — show above fold
  ────────────────────────────── */
  console.log("  ↓ Hero");
  await wait(3500); // watch hero animate in

  /* Hover CTA button */
  const ctaBtn = await page.$('a[href="#contact"]');
  if (ctaBtn) {
    await ctaBtn.hover();
    await wait(800);
  }

  /* ──────────────────────────────
     2. STATS
  ────────────────────────────── */
  console.log("  ↓ Stats");
  const statsTop = await getSectionTop(page, '[aria-label="Key statistics"]');
  await smoothScroll(page, statsTop, 1400);
  await wait(2200); // watch counters animate

  /* ──────────────────────────────
     3. SERVICES
  ────────────────────────────── */
  console.log("  ↓ Services");
  const servicesTop = await getSectionTop(page, "#services");
  await smoothScroll(page, servicesTop, 1400);
  await wait(1200);
  await hoverElements(page, '[role="list"] li, article', 400);

  /* ──────────────────────────────
     4. ABOUT
  ────────────────────────────── */
  console.log("  ↓ About");
  const aboutTop = await getSectionTop(page, "#about");
  await smoothScroll(page, aboutTop, 1600);
  await wait(2000);

  /* ──────────────────────────────
     5. LENDERS BELT
  ────────────────────────────── */
  console.log("  ↓ Lenders");
  const lendersTop = await getSectionTop(page, '[aria-label="Lending partner logos"]');
  await smoothScroll(page, Math.max(0, lendersTop - 200), 1400);
  await wait(3000); // watch the belt scroll

  /* ──────────────────────────────
     6. JOURNEY / PROCESS
  ────────────────────────────── */
  console.log("  ↓ Process");
  const processTop = await getSectionTop(page, "#process");
  await smoothScroll(page, processTop, 1400);
  await wait(2200);

  /* ──────────────────────────────
     7. TESTIMONIALS
  ────────────────────────────── */
  console.log("  ↓ Testimonials");
  const testiTop = await getSectionTop(page, "#testimonials");
  await smoothScroll(page, testiTop, 1400);
  await wait(1500);

  /* click next testimonial twice */
  const nextBtn = await page.$('[aria-label="Next testimonial"]');
  if (nextBtn) {
    for (let i = 0; i < 3; i++) {
      await nextBtn.click();
      await wait(1800);
    }
  }

  /* ──────────────────────────────
     8. PHILOSOPHY
  ────────────────────────────── */
  console.log("  ↓ Philosophy");
  const philoTop = await page.evaluate(() => window.scrollY + document.querySelector("figure")?.getBoundingClientRect().top - 120 || 0);
  await smoothScroll(page, philoTop, 1400);
  await wait(2000);
  await hoverElements(page, '[role="list"] li', 500);

  /* ──────────────────────────────
     9. CONTACT FORM
  ────────────────────────────── */
  console.log("  ↓ Contact");
  const contactTop = await getSectionTop(page, "#contact");
  await smoothScroll(page, contactTop, 1400);
  await wait(1200);

  /* Fill form fields */
  const firstField = await page.$('input[name="firstName"]');
  if (firstField) {
    await firstField.click();
    await wait(400);
    await page.keyboard.type("Ahmed", { delay: 80 });
    await wait(400);

    const emailField = await page.$('input[name="email"]');
    await emailField?.click();
    await wait(300);
    await page.keyboard.type("ahmed@example.com", { delay: 60 });
    await wait(400);

    const select = await page.$("select");
    await select?.selectOption("Car Finance");
    await wait(600);

    const msgField = await page.$("textarea");
    await msgField?.click();
    await wait(300);
    await page.keyboard.type("I'm looking for car finance on a 2023 vehicle.", { delay: 55 });
    await wait(800);
  }

  /* Hover submit button (don't click) */
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) {
    await submitBtn.hover();
    await wait(1000);
  }

  /* ──────────────────────────────
     10. SCROLL BACK UP
  ────────────────────────────── */
  console.log("  ↑ Scrolling back to top");
  await smoothScroll(page, 0, 3000);
  await wait(2000);

  /* ──────────────────────────────
     11. NAVBAR HOVER DEMO
  ────────────────────────────── */
  console.log("  ↑ Navbar demo");
  const navLinks = await page.$$("nav a");
  for (const link of navLinks.slice(0, 4)) {
    await link.hover();
    await wait(500);
  }
  await wait(1000);

  /* Close */
  await context.close();
  await browser.close();

  console.log("✅  Desktop recording complete → recordings/ folder");
  console.log("   Rename the .webm file to desktop-walkthrough.webm");
})();
