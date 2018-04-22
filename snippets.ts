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
