# ramda-over-path

a commonly used utility in the form of

```typescript
// curry((pathArr, transformer, state) => over(lensPath(pathArr), transformer, state));
import overPath from 'ramda-over-path';

// => [2, 2]
overPath([0], s => s + 1, [1, 2]);
```

with generic type <Root, Part>;