/**
 * record-mobile.mjs
 * Records a full mobile walkthrough of the Moe Finance website.
 * Output: recordings/mobile-walkthrough.webm (portrait 390×844)
 *
 * Run: node scripts/record-mobile.mjs
 */

import { chromium, devices } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "recordings");
mkdirSync(OUT_DIR, { recursive: true });

const URL = "http://localhost:3001";
const WIDTH = 390;
const HEIGHT = 844;

/* ── helpers ── */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function smoothScroll(page, targetY, durationMs = 1000) {
  const startY = await page.evaluate(() => window.scrollY);
  const steps = Math.round(durationMs / 16);
  for (let i = 1; i <= steps; i++) {
    const eased = 0.5 - Math.cos((Math.PI * i) / steps) / 2;
    await page.evaluate((y) => window.scrollTo(0, y), startY + (targetY - startY) * eased);
    await wait(16);
  }
}

async function getSectionTop(page, selector, offset = 60) {
  return page.evaluate(
    ({ sel, off }) => {
      const el = document.querySelector(sel);
      return el ? el.getBoundingClientRect().top + window.scrollY - off : 0;
    },
    { sel: selector, off: offset }
  );
}

/* ── main ── */
(async () => {
  console.log("📱  Starting mobile recording...");

  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const context = await browser.newContext({
    ...devices["iPhone 14"],
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    recordVideo: {
      dir: OUT_DIR,
      size: { width: WIDTH, height: HEIGHT },
    },
  });

  const page = await context.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await wait(2000);

  /* ──────────────────────────────
     1. HERO — show portrait layout
  ────────────────────────────── */
  console.log("  ↓ Hero (mobile)");
  await wait(3500); // hero animations

  /* ──────────────────────────────
     2. OPEN HAMBURGER MENU
  ────────────────────────────── */
  console.log("  ☰ Open nav menu");
  const menuBtn = await page.$('[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.tap();
    await wait(1500); // menu slides in
    /* Hover over a link */
    const navLink = await page.$('[id="mobile-menu"] a');
    if (navLink) await navLink.hover();
    await wait(800);
    /* Close menu */
    const closeBtn = await page.$('[aria-label="Close navigation menu"]');
    if (closeBtn) {
      await closeBtn.tap();
      await wait(1000);
    }
  }

  /* ──────────────────────────────
     3. STATS
  ────────────────────────────── */
  console.log("  ↓ Stats");
  const statsTop = await getSectionTop(page, '[aria-label="Key statistics"]');
  await smoothScroll(page, statsTop, 1200);
  await wait(2200); // counters

  /* ──────────────────────────────
     4. SERVICES
  ────────────────────────────── */
  console.log("  ↓ Services");
  const servicesTop = await getSectionTop(page, "#services");
  await smoothScroll(page, servicesTop, 1200);
  await wait(1500);
  /* Scroll through the grid slowly */
  const servicesBottom = await getSectionTop(page, "#about");
  await smoothScroll(page, servicesBottom - 100, 2000);
  await wait(800);

  /* ──────────────────────────────
     5. ABOUT / TIMELINE
  ────────────────────────────── */
  console.log("  ↓ About");
  const aboutTop = await getSectionTop(page, "#about");
  await smoothScroll(page, aboutTop, 1200);
  await wait(1800);
  /* slowly reveal timeline */
  const afterTimeline = await getSectionTop(page, '[aria-label="Our lending network"]');
  await smoothScroll(page, afterTimeline - 100, 2500);
  await wait(800);

  /* ──────────────────────────────
     6. LENDERS BELT
  ────────────────────────────── */
  console.log("  ↓ Lenders");
  const lendersTop = await getSectionTop(page, '[aria-label="Lending partner logos"]');
  await smoothScroll(page, lendersTop - 80, 1200);
  await wait(2500); // watch belt

  /* ──────────────────────────────
     7. PROCESS
  ────────────────────────────── */
  console.log("  ↓ Process");
  const processTop = await getSectionTop(page, "#process");
  await smoothScroll(page, processTop, 1200);
  await wait(2000);
  const processEnd = await getSectionTop(page, "#testimonials");
  await smoothScroll(page, processEnd - 100, 2000);
  await wait(800);

  /* ──────────────────────────────
     8. TESTIMONIALS
  ────────────────────────────── */
  console.log("  ↓ Testimonials");
  const testiTop = await getSectionTop(page, "#testimonials");
  await smoothScroll(page, testiTop, 1200);
  await wait(1500);

  const nextBtn = await page.$('[aria-label="Next testimonial"]');
  if (nextBtn) {
    for (let i = 0; i < 3; i++) {
      await nextBtn.tap();
      await wait(1800);
    }
  }

  /* ──────────────────────────────
     9. PHILOSOPHY
  ────────────────────────────── */
  console.log("  ↓ Philosophy");
  const currentY = await page.evaluate(() => window.scrollY);
  await smoothScroll(page, currentY + HEIGHT * 1.5, 1400);
  await wait(1800);

  /* ──────────────────────────────
     10. CONTACT — show stacked form
  ────────────────────────────── */
  console.log("  ↓ Contact");
  const contactTop = await getSectionTop(page, "#contact");
  await smoothScroll(page, contactTop, 1200);
  await wait(1200);

  /* Tap into form fields */
  const firstField = await page.$('input[name="firstName"]');
  if (firstField) {
    await firstField.tap();
    await wait(400);
    await page.keyboard.type("Sara", { delay: 100 });
    await wait(400);
    await page.tap('input[name="email"]').catch(() => {});
    await wait(300);
    await page.keyboard.type("sara@example.com", { delay: 70 });
    await wait(400);
    const sel = await page.$("select");
    await sel?.selectOption("Personal Loan");
    await wait(600);
    const msgField = await page.$("textarea");
    await msgField?.tap();
    await wait(300);
    await page.keyboard.type("Need a personal loan ASAP.", { delay: 70 });
    await wait(800);
  }

  /* Scroll to CTA button */
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) {
    await submitBtn.scrollIntoViewIfNeeded();
    await wait(600);
    await submitBtn.hover();
    await wait(1000);
  }

  /* ──────────────────────────────
     11. SCROLL TO FOOTER
  ────────────────────────────── */
  console.log("  ↓ Footer");
  await smoothScroll(page, 999999, 1800);
  await wait(2000);

  /* ──────────────────────────────
     12. SCROLL BACK TO TOP
  ────────────────────────────── */
  console.log("  ↑ Back to top");
  await smoothScroll(page, 0, 3500);
  await wait(2000);

  await context.close();
  await browser.close();

  console.log("✅  Mobile recording complete → recordings/ folder");
  console.log("   Rename the .webm file to mobile-walkthrough.webm");
})();
