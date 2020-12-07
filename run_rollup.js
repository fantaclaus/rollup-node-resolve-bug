const { exec } = require('child_process');

const cwd = process.cwd();
const cwd2 = cwd[0].toLowerCase() + cwd.slice(1); // change drive letter to lower case

// launch rollup in cwd2 working folder

exec(
	'node_modules\\.bin\\rollup.cmd -c',
	{
		cwd: cwd2
	},
	function (error, stdout, stderr)
	{
		if (error) console.log('Error code: ' + error.code);
		if (stdout) console.log('Child Process STDOUT:\n' + stdout);
		if (stderr) console.log('Child Process STDERR:\n' + stderr);
	});
