```typescript
// LibraryA.ts
export class ClassA {}
export class ClassB {}

// LibraryB.ts
export class ClassA {}
export class ClassB {}

// MyLibrary.ts
import * as LibraryA from './LibraryA';
import * as LibraryB from './LibraryB';

export default {
  LibraryA,
  LibraryB
}

// app.ts
import myLibrary from 'myLibrary';

const AA = new myLibrary.LibraryA.ClassA();
const BA = new myLibrary.LibraryB.ClassB();
```

```typescript
class LazyInitialisedComposite
{

    public lazyInitialise<T>(
        prop: string,
        // compositeClass is a javascript class, non instantiated
        compositeClass: { new(...args: any[]) },
        ...args: any[]
    ): T {
        if (this[prop] === undefined) {
            this[prop] = new compositeClass(args);
        }
        return this[prop];
    }
```


```typescript
function staticCast<AA>(value: AA): AA {
    return value;
}
```
