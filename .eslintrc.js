module.exports = {
  root: true,
  env: {
    node: true,      
    es2022: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    'dist/',         
    'node_modules/', 
    '.env'           
  ],
  rules: {
    // قواعد مخصصة إذا أحببت
  }
};

