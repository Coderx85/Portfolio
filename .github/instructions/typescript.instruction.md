---
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript Code Style Guide
- Use interface over type for defining object shapes.
- Use `const` for variables that are not reassigned.
- Use `let` only when the variable needs to be reassigned.
- Use `async/await` for asynchronous code instead of `.then()` for better readability.
- Use `null` for intentional absence of value, and `undefined` for uninitialized variables.
- Use `===` and `!==` for strict equality checks to avoid type coercion issues
- Add interface or type in the types folder for better organization.
- Use `import type` for importing types to avoid unnecessary code in the bundle.
- Insert constants at the top of the file for better visibility.
- Add variable in the constants folder if it is used in multiple places.
- Use `enum` or union types for fixed value sets to ensure type safety.