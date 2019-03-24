const path = require('path');

const cpy = require('cpy');
const shell = require('shelljs');
const tmp = require('tmp');
const execute = require('install-local').execute;

it('installs with peer deps and lints', done => {
  tmp.dir({ unsafeCleanup: true }, async function _tempDirCreated(
    err,
    dir,
    cleanupCallback,
  ) {
    if (err) throw err;

    await cpy(path.join(__dirname, 'fixtures/**/{.*,*}'), dir);

    shell.cd(dir);

    // Install our peer deps to simulate how a real consumer of this package
    // would do so. In reality they'd likely use `install-peerdeps`, but the
    // behaviour is the same.
    const peerDeps = require(`${__dirname}/package.json`).peerDependencies;
    const installString = Object.entries(peerDeps)
      .map(([name, version]) => `${name}@${version}`)
      .join(' ');
    console.log(installString);
    shell.exec(`npm install ${installString}`);

    // Now install the package itself
    await execute({
      dependencies: [__dirname],
      save: true,
      targetSiblings: false,
    });

    // This is a run script defined in our fixture's package.json
    const lintResult = shell.exec('npm run lint');
    expect(lintResult.code).toEqual(0);

    // Manual cleanup
    cleanupCallback();
    done();
  });
}, 60000);
