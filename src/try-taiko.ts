// @ts-ignore
import chromePaths from "chrome-paths";
// @ts-ignore
import { $, openBrowser, goto, write, click, closeBrowser } from "taiko/lib/taiko"; // note: cannot import from 'taiko' directly

// note: it would be better to allow pass in as api option
process.env.TAIKO_CHROMIUM_URL = chromePaths.chrome;

const tryTaiko = async () => {
  try {
    await openBrowser({
      headless: false,
      args: ["--no-first-run"]
    });
    await goto("google.com");
    await write("taiko test automation");
    await click($('input[value^="Google"]'));
  } catch (error) {
    console.error(error);
  } finally {
    await closeBrowser();
  }
};

export default tryTaiko;
