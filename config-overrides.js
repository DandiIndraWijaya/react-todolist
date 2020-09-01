const { override, addBabelPreset } = require("customize-cra");

module.export = override(addBabelPreset("@emotion/babel-preset-css-prop"));