import path from "path";

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";


export default defineConfig({
	plugins: [
		solidPlugin(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@atoms": path.resolve(__dirname, "./src/components/atoms"),
			"@molecules": path.resolve(__dirname, "./src/components/molecules"),
			"@organisms": path.resolve(__dirname, "./src/components/organisms"),
			"@templates": path.resolve(__dirname, "./src/components/templates"),
			"@pages": path.resolve(__dirname, "./src/components/pages"),
			"@stores": path.resolve(__dirname, "./src/stores"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@tests": path.resolve(__dirname, "./src/tests"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@media": path.resolve(__dirname, "./src/media/"),
		},
	},
	server: {
		port: 3000,
		open: true,
	},
	build: {
		target: "esnext",
	},
});
