var vanilla = require('./vanilla');
var react = require('./react');
var eslintrc = JSON.parse(JSON.stringify(vanilla));

eslintrc.plugins = react.plugins;
Object.keys(react.rules).forEach(function assignRule(ruleId) {
  eslintrc.rules[ruleId] = react.rules[ruleId];
});

module.exports = eslintrc;
