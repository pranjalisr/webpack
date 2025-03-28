var path = require("path");
var LibManifestPlugin = require("../../../../").LibManifestPlugin;

/** @type {(env: any, options: any) => import("../../../../").Configuration} */
module.exports = (env, { testPath }) => ({
	entry: {
		bundle0: ["./"]
	},
	plugins: [
		new LibManifestPlugin({
			path: path.resolve(testPath, "[name]-manifest.json"),
			name: "[name]_[fullhash]"
		})
	],
	node: {
		__dirname: false
	}
});
