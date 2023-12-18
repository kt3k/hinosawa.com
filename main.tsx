/* @jsx h */
import html, { h } from "https://deno.land/x/htm@0.2.0/mod.ts";
import UnoCSS from "https://deno.land/x/htm@0.2.0/plugins/unocss.ts";
html.use(UnoCSS());

function main() {
  return html({
    lang: "en",
    title: "Hinosawa Software",
    meta: {
      description: "Hinosawa creates Web Software",
    },
    links: [
      { rel: "shortcut icon", href: "/logo_with_bg.svg" },
    ],
    scripts: [
      `console.log("Hello World!")`,
    ],
    body: (
      <div class="flex items-center justify-center w-screen h-screen bg-black">
        <div class="flex flex-col items-center justify-center gap-7">
          <img src="/logo.svg" class="h-4" />
          <p class="text-gray-300 font-light">Hinosawa Software</p>
        </div>
      </div>
    ),
  })
};

const files = [
  "/logo.svg",
  "/logo_with_bg.svg",
];

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (files.includes(url.pathname)) {
    return new Response((await Deno.open(url.pathname.slice(1))).readable, { headers: { "content-type": "image/svg+xml" } });
  } else {
    return main();
  }
});
