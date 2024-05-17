# Re-renders

```sh
yarn add --dev @babel/preset-react @welldone-software/why-did-you-render
```

* `index.js`
* `wdyr.js`
* `babel.config.js`
* `patches/@welldone-software+why-did-you-render+7.0.1.patch`
* `Component.whyDidYouRender = true;`

---

- https://github.com/welldone-software/why-did-you-render/issues/222#issuecomment-1356855888
- https://github.com/expo/expo/issues/19709
- https://github.com/welldone-software/why-did-you-render/issues/235

---

- http://bit.ly/wdyr1 (make pure components with `React.memo`, don't use inline styles)
- http://bit.ly/wdyr2 (explanation of common scenarios)
- http://bit.ly/wdyr3 (beware of shallow equal)

---

- pure components
  - `React.memo`
  - `React.PureComponent`
- eliminate inline styles, callbacks, RegExp, Date
- memoization hooks
  - `React.useMemo`
  - `React.useCallback`
  - https://attardi.org/why-we-memo-all-the-things/
- split into separate components
- React state batch update
- ESLint
  - `react-hooks/rules-of-hooks`
    1. Hooks can only be called inside React function components.
    2. Hooks can only be called at the top level of a component.
    3. Hooks cannot be conditional.
  - `react-hooks/exhaustive-deps`
