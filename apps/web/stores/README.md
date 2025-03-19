# Zustand Stores

This directory contains Zustand stores for state management across the application.

## Available Stores

- `useCounterStore`: Example store that demonstrates basic Zustand patterns with a counter.

## Best Practices

1. **Type Safety**: Always define proper TypeScript interfaces for state and actions.
2. **Middleware**:
   - Use `devtools` for better debugging in Redux DevTools.
   - Use `persist` when state needs to be saved to localStorage.
3. **Naming**:
   - Store files should follow the pattern `use-*-store.ts`
   - Store hooks should follow the pattern `use*Store`
4. **Action Names**: When using devtools, provide action names as the third parameter to `set()`.
5. **Selective Persistence**: Use `partialize` to only persist the necessary parts of the state.

## Example Usage

```tsx
import { useCounterStore } from "@/stores/use-counter-store";

function MyComponent() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}
```

For performance optimization, you can use selectors to only re-render when specific state changes:

```tsx
// This component will only re-render when count changes
function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  return <div>Count: {count}</div>;
}

// This component will only re-render when increment changes
function IncrementButton() {
  const increment = useCounterStore((state) => state.increment);
  return <button onClick={() => increment()}>Increment</button>;
}
```
