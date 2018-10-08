module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "globals": {
      "APP_VERSION": true,
      "$": true,
      "Cropper": true,
      "window": true,
      "localStorage": true,
      "FormData":true,
      "document":true,
      "process": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-param-reassign": [
        "error",
        {
          "props": false,
        }
      ],
      "comma-dangle": [
        2,
        "always-multiline"
      ],
      "quotes": [
        2,
        "single",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "import/no-unresolved": [
        "off"
      ],
      "no-tabs": "off"
    }
};
