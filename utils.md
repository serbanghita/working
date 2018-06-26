Extending deep string valued objects

```
function test() {
        const destination = arguments[0];
        const sources = Array.prototype.slice.call(arguments, [1]);

        if (sources.length === 0) {
            return destination;
        }

        let i;
        sources.forEach((source) => {
            for (i in source) {
                if (source.hasOwnProperty(i)) {
                    if (destination[i] && typeof destination[i] === "object" && Object.keys(destination[i]).length) {
                        test(destination[i], source[i]);
                    } else {
                        destination[i] = source[i];
                    }
                }
            }
        });


        return destination;
    };
```

`test({name: "Serban", info: {age: 34, sex: "male"}}, {info: {age: 10}}, {info: {sex: "robot"}})`
