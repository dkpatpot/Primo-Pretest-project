use commandline
Create project for the first times
1. cd into project use "cd Primo-Pretest-project"
2. use npm init -y to initialize project with out question
3. npm install typescript jest ts-jest @types/jest to install library and dependency

Create and Setup tsconfig.json and package.json
1. touch tsconfig.json
2. cd into tsconfig.json "cd tsconfig.json"
3. add config to tsconfig.json
  {
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true
    }
  }
4. add config on package.json
   "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
  },

Clone project and run
1. "npm i" for install library and dependency
2. "npm run test" for testing project
