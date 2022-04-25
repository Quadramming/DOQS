module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		//================================================================
		'array-callback-return': ['error', { 'checkForEach': true, 'allowImplicit': true }],
		'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': ['error', { allowImplicit: true }],
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': ['error', { 'checkLoops': true }],
		'no-constructor-return': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': ['error', { 'includeExports': true }],
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': ['error', 'both'],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': ['error', { 'skipTemplates': true, skipStrings: true, skipComments: true, skipRegExps: true }],
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-prototype-builtins': 'error',
		'no-self-assign': ['error', { 'props': true }],
		'no-self-compare': 'error',
		'no-setter-return': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-undef': ['error', { 'typeof': true }],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': ['error', { 'ignore': [] }],
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': ['error', { 'enforceForOrderingRelations': true }],
		'no-unsafe-optional-chaining': ['error', { 'disallowArithmeticOperators': true }],
		'no-unused-private-class-members': 'error',
		'no-unused-vars': ['error', { 'vars': 'all', 'args': 'all', 'ignoreRestSiblings': false, 'caughtErrors': 'all' }],
		'no-use-before-define': ['error', { 'functions': true, 'classes': true, 'variables': true }],
		'no-useless-backreference': 'error',
		'require-atomic-updates': ['error', { 'allowProperties': false }],
		'use-isnan': ['error', { 'enforceForSwitchCase': true, 'enforceForIndexOf': true }],
		//====
		'accessor-pairs': ["error", { "getWithoutSet": true, getWithoutSet: true, enforceForClassMembers: true }],
		'arrow-body-style': ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
		'block-scoped-var': "error",
		'camelcase': ["error", { properties: "always", "ignoreDestructuring": false, "ignoreImports": false, "ignoreGlobals": false }],
		'capitalized-comments': ["error", "always"],
		'class-methods-use-this': ["error", { "enforceForClassFields": true }],
		"complexity": ["error", { "max": 10 }],
		'consistent-return': ["error", { "treatUndefinedAsUnspecified": true }],
		'consistent-this': "error",
		'curly': ["error", "multi"],
		'default-case': "error",
		'default-case-last': "error",
		'default-param-last': "error",
		'dot-notation': ["error", { "allowKeywords": true }],
		'eqeqeq': ["error", "always", { "null": "always" }],
		'func-name-matching': ["error", "always", { "considerPropertyDescriptor": true, "includeCommonJSModuleExports": true }],
		'func-names': ["error", "as-needed", { "generators": "as-needed" }],
		'func-style': ["error", "declaration", { "allowArrowFunctions": true }],
		'grouped-accessor-pairs': ["error", "getBeforeSet"],
		'guard-for-in': "error",
		// id-denylist
		// id-length
		// id-match
		"init-declarations": ["error", "always"],
		"max-classes-per-file": ["error", { ignoreExpressions: false }],
		// max-depth
		// max-lines
		// max-lines-per-function
		// max-nested-callbacks
		// max-params
		// max-statements
		'multiline-comment-style': ["error", "bare-block"],
		'new-cap': ["error", { "newIsCap": true, "capIsNew": true, "properties": true }],
		// no-alert
		'no-array-constructor': "error",
		// no-bitwise
		'no-caller': "error",
		'no-case-declarations': "error",
		// no-confusing-arrow
		// no-console
		'no-continue': "error",
		'no-delete-var': "error",
		// no-div-regex
		'no-else-return': ["error", { allowElseIf: true }],
		'no-empty': ["error", { "allowEmptyCatch": true }],
		'no-empty-function': "error",
		'no-eq-null': "error",
		'no-eval': "error",
		'no-extend-native': "error",
		'no-extra-bind': "error",
		'no-extra-boolean-cast': ["error", { "enforceForLogicalOperands": true }],
		'no-extra-label': "error",
		'no-extra-semi': "error",
		'no-floating-decimal': "error",
		'no-global-assign': "error",
		'no-implicit-coercion': ["error", { "disallowTemplateShorthand": true }],
		'no-implicit-globals': ["error", { "lexicalBindings": true }],
		'no-implied-eval': "error",
		// no-inline-comments
		'no-invalid-this': ["error", { "capIsConstructor": false }],
		'no-iterator': "error",
		'no-label-var': "error",
		'no-labels': "error",
		'no-lone-blocks': "error",
		'no-lonely-if': "error",
		'no-loop-func': "error",
		'no-magic-numbers': ["error", { "ignoreArrayIndexes": false, "ignoreDefaultValues": false, "enforceConst": true, "detectObjects": true }],
		'no-mixed-operators': ["error", { "allowSamePrecedence": true }],
		'no-multi-assign': ["error", { "ignoreNonDeclaration": false }],
		'no-multi-str': "error",
		'no-negated-condition': "error",
		'no-nested-ternary': "error",
		'no-new': "error",
		'no-new-func': "error",
		'no-new-object': "error",
		'no-new-wrappers': "error",
		'no-nonoctal-decimal-escape': "error",
		'no-octal': "error",
		'no-octal-escape': "error",
		'no-param-reassign': ["error", { "props": false }],
		'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
		'no-proto': "error",
		'no-redeclare': ["error", { "builtinGlobals": true }],
		'no-regex-spaces': "error",
		'no-restricted-exports': ["error", { "restrictedNamedExports": ["default"] }],
		// no-restricted-globals
		// no-restricted-imports
		// no-restricted-properties
		// no-restricted-syntax
		'no-return-assign': ["error", "always"],
		'no-return-await': "error",
		'no-script-url': "error",
		'no-sequences': ["error", { "allowInParentheses": false }],
		'no-shadow': ["error", { "builtinGlobals": true, "hoist": "all", "ignoreOnInitialization": false }],
		'no-shadow-restricted-names': "error",
		// no-ternary
		'no-throw-literal': "error",
		'no-undef-init': "error",
		'no-undefined': "error",
		'no-underscore-dangle': "error",
		'no-unneeded-ternary': ["error", { "defaultAssignment": false }],
		'no-unused-expressions': ["error", { "allowShortCircuit": false, "allowTernary": false, "allowTaggedTemplates": false }],
		'no-unused-labels': "error",
		'no-useless-call': "error",
		'no-useless-catch': "error",
		'no-useless-computed-key': ["error", { "enforceForClassMembers": true }],
		'no-useless-concat': "error",
		'no-useless-constructor': "error",
		'no-useless-escape': "error",
		"no-useless-rename": ["error", { "ignoreDestructuring": false, "ignoreImport": false, "ignoreExport": false }],
		'no-useless-return': "error",
		'no-var': "error",
		'no-void': ["error", { "allowAsStatement": false }],
		'no-warning-comments': "error",
		'no-with': "error",
		"object-shorthand": ["error", "always", { "avoidQuotes": false, "ignoreConstructors": false, "avoidExplicitReturnArrows": false }],
		'one-var': ["error", "never"],
		// one-var-declaration-per-line
		'operator-assignment': ["error", "always"],
		'prefer-arrow-callback': ["error", { allowNamedFunctions: false, allowUnboundThis: false }],
		'prefer-const': ["error", { "destructuring": "any", "ignoreReadBeforeAssign": false }],
		// prefer-destructuring
		'prefer-exponentiation-operator': "error",
		'prefer-named-capture-group': "error",
		'prefer-numeric-literals': "error",
		'prefer-object-has-own': "error",
		'prefer-object-spread': "error",
		'prefer-promise-reject-errors': ["error", { "allowEmptyReject": false }],
		'prefer-regex-literals': ["error", { "disallowRedundantWrapping": true }],
		'prefer-rest-params': "error",
		'prefer-spread': "error",
		'prefer-template': "error",
		'quote-props': ["error", "as-needed", { "keywords": true, "unnecessary": true, "numbers": true }],
		'radix': ["error", "always"],
		'require-await': "error",
		'require-unicode-regexp': "error",
		'require-yield': "error",
		// sort-imports
		// sort-keys
		// sort-vars
		// spaced-comment
		'strict': ["error", "global"],
		'symbol-description': "error",
		'vars-on-top': "error",
		'yoda': ["error", "never", { "exceptRange": true, "onlyEquality": false }],
		//====
		'array-bracket-newline': ["error", "never"],
		'array-bracket-spacing': ["error", "never"],
		'array-element-newline': ["error", "never"],
		'arrow-parens': ["error", "as-needed", { "requireForBlockBody": false }],
		'arrow-spacing': ["error", { "before": true, "after": true }],
		'block-spacing': "error",
		'brace-style': ["error", "1tbs", { "allowSingleLine": true }],
		'comma-dangle': ["error", "never"],
		'comma-spacing': ["error", { "before": false, "after": true }],
		'comma-style': ["error", "last"],
		'computed-property-spacing': ["error", "never", { "enforceForClassMembers": true }],
		'dot-location': ["error", "object"],
		'eol-last': ["error", "always"],
		'func-call-spacing': ["error", "never"],
		'function-call-argument-newline': ["error", "consistent"],
		'function-paren-newline': ["error", "multiline-arguments"],
		'generator-star-spacing': ["error", { "before": false, "after": true }],
		'implicit-arrow-linebreak': ["error", "beside"],
		"indent": ["error", "tab"]
		// jsx-quotes
	}
};