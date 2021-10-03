Binding keyboard events

```typescript
private keysPressed: Set<string> = new Set([]);

// ...

window.addEventListener("keydown", (e) => {
            if (this.keysPressed.has(e.code)) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.keysPressed.add(e.code);
        }, { capture: false });
        window.addEventListener("keyup", (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.keysPressed.delete(e.code);
        }, { capture: false });
        
    public keyPressed(key: string):boolean {
        return this.keysPressed.size > 0 && this.keysPressed.has(key);
    }
```

Unbinding keyboard events

```typescript
    private unbind() {
        window.removeEventListener(eventName, listener, useCapture);
        window.removeEventListener(eventName, listener, useCapture);
    }
```

Movement by keyboard

```typescript
            if (this.keyPressed(keyboard.properties.UP)) {
                position.properties.y -= velocity.properties.y;
            } else if (this.keyPressed(keyboard.properties.DOWN)) {
                position.properties.y += velocity.properties.y;
            }

            if (this.keyPressed(keyboard.properties.LEFT)) {
                position.properties.x -= velocity.properties.x;
            } else if (this.keyPressed(keyboard.properties.RIGHT)) {
                position.properties.x += velocity.properties.x;
            }
```
