```
  "publishConfig": {
    "registry": "https://artifactory.corp.test.com:443/artifactory/api/npm/npm-lr-release-local/"
  },
```

```
  "scripts": {
    "bower-install": "$(npm bin)/bower install",
    "build": "$(npm bin)/gulp",
    "test": "$(npm bin)/wct"
  },
```

```
 "scripts": {
    "lint": "eslint ./src",
    "build": "babel --source-maps --copy-files ./src --out-dir ./dist",
    "readme": "gitdown ./.README/README.md --output-file ./README.md",
  },
```

```
{
    "compilerOptions": {
        "baseUrl": "../../vendor/angular2/2.4.9-tsc/node_modules/",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": [
            "DOM",
            "ES6"
        ],
        "module": "commonjs",
        "moduleResolution": "node",
        "noImplicitAny": true,
        "pretty": true,
        "removeComments": false,
        "sourceMap": true,
        "suppressImplicitAnyIndexErrors": true,
        "target": "es5",
        "typeRoots": [
            "../../vendor/angular2/2.4.9-tsc/node_modules/@types/"
        ],
        "types": [
            "node"
        ]
    },
    "include": [
        "./app/main.ts"
    ]
}
```

```
 "scripts": {
    "build" : "npm run copy",
    "copy": "npm run copy:jquery && npm run copy:moment && npm run copy:common-css",
    "copy:jquery": "mkdir -p js/libs/ && cp node_modules/aaaaa/build/js/libs/jquery.* js/libs/",
    "copy:moment": "mkdir -p js/libs/ && cp node_modules/aaaaa/build/js/libs/moment.js js/libs/",
    "copy:common-css": "mkdir -p css/ && cp node_modules/aaaaa/index.css css/"
  },
```
