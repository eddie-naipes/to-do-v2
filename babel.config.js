module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@components": "./src/components",
          "@config": "./src/config",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@assets": "./assets",
          "@theme": "./src/theme",
          "@types": "./src/types",
          "@interfaces": "./src/shared/interfaces/*",
        }
      }
      ]
    ]
  };
};
