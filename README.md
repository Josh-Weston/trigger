# Welcome to Trigger! <span><img width="28" height="28" src="lightning.png" alt="Lightning Bolt" /></span>

![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40jweston%2Ftrigger)
![NPM Version](https://img.shields.io/npm/v/%40jweston%2Ftrigger)
![NPM Downloads](https://img.shields.io/npm/dt/%40jweston%2Ftrigger)
![NPM License](https://img.shields.io/npm/l/%40jweston%2Ftrigger)

Trigger is a lightweight, zero-dependency state management library purpose-built for React and TypeScript. It is designed to bridge the gap between high-performance data handling and an intuitive developer experience.

## Core Philosophies

Trigger blends the structural clarity of traditional database systems with the reactive nature of modern UI development, all wrapped in a robust type system that provides full type hints for the data in your store.

- **Database Patterns**: It utilizes familiar concepts like `INSERT` / `UPDATE` / `DELETE` and automated triggers to ensure data integrity and a simple mental model.
- **The Flux Pattern**: Drawing inspiration from the architecture popularized by [Redux](https://redux.js.org/) and [Zustand](https://zustand.docs.pmnd.rs/learn/getting-started/introduction), Trigger employs a predictable, unidirectional data flow. This ensures state changes are transparent, traceable, and easy to debug.
- **Reactivity**: Trigger features computed values that automatically and efficiently stay in sync when their dependencies change.
- **End-to-End Type Safety**: The robust type system provides full type hints and autocomplete for all data types residing in the data store, catching errors at compile time and eliminating guesswork.
- **State Modularity**: Easily create separate, dedicated stores throughout your application. This modular approach enforces a clean separation of concerns, preventing global state bloat and keeping your architecture maintainable as your project scales.
- **High-Performance Rendering**: Engineered specifically for data-intensive applications, Trigger uses internal change tracking to enable highly granular DOM updates. Your React components only re-render when the specific data they depend on changes, drastically reducing unnecessary compute strain on React's diffing algorithm.

<br/>

```
npm i @jweston/trigger
```

<br/>

---

## 👉 Head over to the [official documentation](https://trigger.joshweston.ca/)
