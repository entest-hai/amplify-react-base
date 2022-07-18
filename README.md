# Setup React App with TSX, Eslint, and Amplify

## Create an React App 
create an react app

```bash
npx create-react-app amplify-ui-demo
```

## Add Amplify 
add amplify ui and aws amplify

```bash
npm i @aws-amplify/ui-react aws-amplify
```

## Support Typescript 
support tsx for an existing react project

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

support tsx for a new react project

```bash
npx create-react-app my-app --template typescript
```

add tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
```

## setup eslint and prettier

```bash
npm install eslint --save-dev
```

configure .eslintrc.json
```bash 
npm init @eslint/config
```

rules 
```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

detail .eslintrc.json  
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes":["error", "double"],
        "indent":["error", 2],
        "no-unused-vars": ["error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }],
        "react/display-name": 0
    }
}
```

configure .prettierrc
```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "parser": "typescript"
}

```

update package.json 
```json
"scripts": {
    "lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
    "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  },
```

