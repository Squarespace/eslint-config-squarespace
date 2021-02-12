const path = require('path');
const fs = require('fs');
const { CLIEngine } = require('eslint');

function lintFixtures(config, fixturePath) {
  const newConfig = {
    root: true,
    useEslintrc: false,
    baseConfig: config,
  };

  const cli = new CLIEngine(newConfig);
  const fixtures = fs
    .readdirSync(fixturePath)
    .filter((filename) => /\.js|\.ts$/.test(filename));

  return fixtures.map((fileName) => {
    const code = fs.readFileSync(path.join(fixturePath, fileName)).toString();
    const result = cli.executeOnText(code);
    return { fileName, result };
  });
}

describe('eslintConfig', function () {
  const rootPath = path.join(__dirname, '__fixtures__');
  const newConfig = Object.assign(require('../index.js'));
  const fixtures = lintFixtures(newConfig, rootPath);

  fixtures.forEach(({ fileName, result }) => {
    test(fileName, function () {
      const numOfErrors = result.errorCount + result.warningCount;
      const shouldReportErrors =
        fileName.indexOf('bad.js') === -1 && numOfErrors > 0;
      if (shouldReportErrors) {
        result.results.forEach(({ messages }) => {
          console.log('messages', messages);
        });
      }

      if (fileName.indexOf('bad.js') !== -1) {
        expect(numOfErrors).toBeGreaterThan(0);
      }
      expect(numOfErrors).toMatchSnapshot();
    });
  });
});