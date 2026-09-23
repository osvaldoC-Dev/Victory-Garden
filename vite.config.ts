import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Keep server-only code (e.g. anything under **/server/**, or files
      // importing "server-only") from being pulled into the client bundle.
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    viteReact(),
  ];

  // Nitro only matters for the production build — it decides which server
  // runtime the app is packaged for. "node-server" runs anywhere plain
  // Node.js does (a VPS, Docker, most PaaS hosts). Swap the preset if you're
  // deploying somewhere with its own target, e.g. "vercel", "netlify",
  // "cloudflare-module" — see https://nitro.build/deploy for the full list.
  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
     preset: "vercel",   }),
    );
  }

  return {
    plugins,
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
    server: {
      port: 8080,
    },
  };
});
