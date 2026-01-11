import chromium from '@sparticuz/chromium-min';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import { getHtml } from '@/lib/flier.js';

export async function POST(req) {
  const data = await req.json();
  let browser = null;

  try {
    const isLocal = process.env.NODE_ENV === 'development';

    chromium.setGraphicsMode = false;

    browser = await puppeteer.launch({
      args: isLocal ? ['--no-sandbox', '--disable-setuid-sandbox'] : chromium.args,
      defaultViewport: chromium.defaultViewport,
      // Use your local Fedora path or the Vercel path
      executablePath: isLocal 
        ? '/usr/bin/chromium-browser' // Result of 'which google-chrome'
        : await chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v143.0.4/chromium-v143.0.4-pack.x64.tar'),
      headless: isLocal ? 'new' : chromium.headless,
    });

    const page = await browser.newPage();
    const html = getHtml(data);

    await page.setContent(html, { waitUntil: 'networkidle0' });

    const element = await page.$('#capture-target');
    const buffer = await element.screenshot({ type: 'png' });

    return new NextResponse(buffer, {
        status: 200,
      headers: { 'Content-Type': 'image/png' },
      'Content-Disposition': 'attachment; filename="flier.png"'
    });

  } catch (error) {
    console.error('Screenshot Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (browser) await browser.close();
  }
}