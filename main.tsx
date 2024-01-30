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
      <div>
        <div class="flex items-center justify-center w-screen h-[100svh] bg-black">
          <div class="flex flex-col items-center justify-center gap-7">
            <img src="/logo.svg" class="h-4" />
            <p class="text-gray-300 font-light">Hinosawa Software</p>
          </div>
        </div>
        <div class="relative flex items-center justify-center w-screen h-[100lvh] bg-white text-gray-600">
          <table class="border-separate border-spacing-3 mx-2">
            <tr>
              <td class="text-right whitespace-nowrap">会社名</td>
              <td>株式会社ひのさわソフトウェア</td>
            </tr>
            <tr>
              <td class="text-right whitespace-nowrap">設立</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td class="text-right whitespace-nowrap">資本金</td>
              <td>2,000,000円</td>
            </tr>
            <tr>
              <td class="text-right whitespace-nowrap">代表者</td>
              <td>日野澤歓也</td>
            </tr>
            <tr>
              <td class="text-right whitespace-nowrap">所在地</td>
              <td>東京都江東区</td>
            </tr>
            <tr>
              <td class="align-top text-right whitespace-nowrap">事業内容</td>
              <td>
                <ul class="text-sm">
                  <li>Web技術を用いた各種管理システムの開発</li>
                  <li>Web技術を用いた各種エディタの開発</li>
                  <li>教育用プログラミング言語の開発</li>
                  <li>JavaScript処理系の開発</li>
                  <li>
                    クラウドエッジコンピューティングプラットフォームの開発
                  </li>
                </ul>
              </td>
            </tr>
          </table>
          <div class="text-center absolute bottom-0 mb-4 text-gray-600">
            <Logo class="h-4" />
          </div>
        </div>
      </div>
    ),
  });
}

function Logo(props: { class?: string }) {
  return (
    <svg
      class={props.class}
      width="60px"
      height="100px"
      viewBox="0 0 60 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="path" transform="translate(-470, -450)" fill="currentColor">
          <path d="M470,550 L470,450 L530,450 L530,550 L470,550 Z M490,530 L510,530 L510,510 L490,510 L490,530 Z M490,490 L510,490 L510,470 L490,470 L490,490 Z">
          </path>
        </g>
      </g>
    </svg>
  );
}

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname.endsWith(".svg")) {
    return new Response((await Deno.open(url.pathname.slice(1))).readable, {
      headers: { "content-type": "image/svg+xml" },
    });
  } else {
    return main();
  }
});
