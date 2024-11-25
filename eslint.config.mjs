import { fileURLToPath } from "node:url";

import stylisticTs from "@stylistic/eslint-plugin-ts";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import { dirname, resolve } from "path";

// Resolve __dirname for ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [{
    files: ["src/**/*.ts"],
    ignores: [
        "eslint.config.mjs",
        "lib/**/*",
        "**/*.html",
        "**/generated/**/*",
        "**/*.js",
        "src/zone-flags.ts",
        "e2e/*",
        "electron/node_modules",
        "**/node_modules/",
        "**/www/"
    ]
}, {
    plugins: {
        "@stylistic/ts": stylisticTs,
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort
    },

    languageOptions: {
        globals: {
            ...globals.browser
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            projectService: {
                defaultProject: "tsconfig.json"
            },
            tsconfigRootDir: import.meta.dirname
        }
    },
    rules: {
        "no-restricted-syntax": ["warn", {
            selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info)$/]",
            message: "Do not use console.* for production. Allowed methods are console.info/warn/error."
        }, "warn", {
            selector: "CallExpression[callee.object.name='window'][callee.property.name=/^(alert|prompt)$/]",
            message: "Do not use window.(alert|prompt) for production."
        }],

        "@typescript-eslint/adjacent-overload-signatures": "error",

        "@typescript-eslint/array-type": ["warn", {
            default: "array-simple"
        }],

        "@typescript-eslint/await-thenable": "error",

        "@typescript-eslint/ban-ts-comment": ["error", {
            "ts-expect-error": {
                descriptionFormat: "^: .+$"
            },

            "ts-ignore": {
                descriptionFormat: "^: .+$"
            },

            "ts-nocheck": {
                descriptionFormat: "^: .+$"
            },

            "ts-check": {
                descriptionFormat: "^: .+$"
            }
        }],

        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/consistent-generic-constructors": "error",

        "@typescript-eslint/consistent-type-assertions": ["error", {
            assertionStyle: "as"
        }],

        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "error",

        "@typescript-eslint/explicit-member-accessibility": ["error", {
            ignoredMethodNames: ["constructor"],

            overrides: {
                methods: "explicit",
                properties: "explicit",
                constructors: "explicit"
            }
        }],

        "@stylistic/ts/indent": ["error", 4],

        "@stylistic/ts/member-delimiter-style": ["warn", {
            multiline: {
                delimiter: "semi",
                requireLast: true
            },

            singleline: {
                delimiter: "semi",
                requireLast: false
            }
        }],

        "@stylistic/ts/comma-spacing": ["warn"],

        "@typescript-eslint/typedef": ["error", {
            arrowParameter: true,
            variableDeclaration: false
        }],

        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-misused-new": "warn",

        "@typescript-eslint/no-magic-numbers": ["warn", {
            ignore: [-1, 0, 1],
            ignoreArrayIndexes: true,
            detectObjects: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreEnums: true
        }],

        "@typescript-eslint/member-ordering": ["off", {
            default: [
                "private-static-field",
                "private-instance-field",
                "protected-static-field",
                "protected-instance-field",
                "public-static-field",
                "public-instance-field",
                "private-constructor",
                "protected-constructor",
                "public-constructor",
                "method"
            ]
        }],

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_"
        }],

        "@typescript-eslint/no-useless-constructor": "off",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "sort-imports": "off",
        "simple-import-sort/imports": "error",

        "no-param-reassign": ["error", {
            props: false
        }],

        "brace-style": ["warn", "1tbs", {
            allowSingleLine: true
        }],

        "@stylistic/ts/quotes": ["warn", "double"],
        "@stylistic/ts/semi": ["error", "always"],
        "arrow-body-style": "warn",

        // "@typescript-eslint/naming-convention": ["warn", {
        //     selector: "default",
        //     format: ["camelCase"]
        // }, {
        //     selector: "variableLike",
        //     format: ["camelCase"]
        // }, {
        //     selector: "variable",
        //     format: ["camelCase"]
        // }, {
        //     selector: "parameter",
        //     format: ["camelCase"],
        //     leadingUnderscore: "allow"
        // }, {
        //     selector: "parameterProperty",
        //     modifiers: ["private"],
        //     format: ["camelCase"]
        // }, {
        //     selector: "memberLike",
        //     format: ["camelCase"]
        // }, {
        //     selector: "memberLike",
        //     modifiers: ["private"],
        //     format: ["camelCase"],
        //     leadingUnderscore: "allow"
        // }, {
        //     selector: "typeLike",
        //     format: ["PascalCase"]
        // }, {
        //     selector: "typeParameter",
        //     format: ["PascalCase"],
        //     prefix: ["T"]
        // }, {
        //     selector: "interface",
        //     format: ["PascalCase"]
        // }],

        "comma-dangle": "warn",

        "complexity": ["warn", {
            max: 20
        }],

        "constructor-super": "warn",
        "curly": "warn",
        "eqeqeq": ["off", "always"],

        "id-blacklist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],

        "id-match": "warn",
        "max-classes-per-file": ["warn", 1],
        "no-cond-assign": "warn",
        "no-duplicate-case": "warn",
        "no-duplicate-imports": "warn",
        "no-empty": "warn",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "warn",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "warn",
        "no-redeclare": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["warn"],
        "no-template-curly-in-string": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "error",
        "no-var": "warn",
        "one-var": ["warn", "never"],
        "prefer-const": "warn",
        "prefer-template": "warn",
        "quote-props": ["warn", "consistent"],
        "radix": "warn",
        "space-before-function-paren": 0,
        "space-in-parens": 0,
        "spaced-comment": "warn",
        "use-isnan": "warn"
    }
}];
