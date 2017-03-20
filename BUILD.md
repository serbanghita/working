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
