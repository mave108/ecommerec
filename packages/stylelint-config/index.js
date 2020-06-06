module.exports = {
  processors: [
    [
      "stylelint-processor-styled-components",
      {
        // NOTE: this is copied over from stylelint-processor-styled-components
        // we need to use decorators-legacy instead of decorators as that is what
        // our babel plugin uses for full typescript support
        parserPlugins: [
          "jsx",
          "objectRestSpread",
          "decorators-legacy",
          "classProperties",
          "exportExtensions",
          "asyncGenerators",
          "functionBind",
          "functionSent",
          "dynamicImport",
          "optionalCatchBinding",
          "optionalChaining"
        ]
      }
    ]
  ],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ]
};
