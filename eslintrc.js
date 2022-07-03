module.exports = {
    parser: '@typescript-eslint/parser', // ESLintでTypeScriptを解析
    parserOptions: {
        project: './tsconfig.eslint.json', // TypeScript用のconfigファイル
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目を除外
        'prettier',
    ],
    root: true, // 上位ディレクトリのeslintrcを参照しない
    env: {
        node: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {},
};
