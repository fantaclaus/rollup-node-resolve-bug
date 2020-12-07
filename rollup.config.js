import path from 'path';
import resolveNodeModules from '@rollup/plugin-node-resolve';

export default {
	input: path.resolve('src/main.js'),
	preserveModules: true,
	output: {
		dir: 'out',
		format: 'es',
	},
	plugins: [
		resolveNodeModules({
			preferBuiltins: false,
			browser: true
		}),
	],
}
