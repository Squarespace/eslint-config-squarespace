var eslint = require('eslint');
var CLIEngine = eslint.CLIEngine;
var chai = require('chai');
var fs = require('fs');
var path = require('path');
var expect = chai.expect;

describe('eslintConfig', function() {
  var rootPath = path.join(__dirname, '__fixtures__');
  var fixtures = fs.readdirSync(rootPath);
  var cli = new CLIEngine(Object.assign(require('../index.js'), {
    useEslintrc: false,
  }));

  fixtures.forEach(function(p) {
    var code = fs.readFileSync(path.join(rootPath, p)).toString();
    var result = cli.executeOnText(code);
    it(p, function() {
      if (p.indexOf('bad.js') !== -1) {
        expect(result.errorCount + result.warningCount).to.not.equal(0);
      } else {
        expect(result.errorCount + result.warningCount).to.equal(0);
        if (result.errorCount + result.warningCount > 0) {
          console.log(result);
        }
      }
    });
  });
});
