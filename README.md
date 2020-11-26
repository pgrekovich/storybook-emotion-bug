How to reproduce: 

```
  yarn install
  yarn storybook
```

When you start storybook with `yarn storybook`, it thow the error: `Module not found: Error: Can't resolve '@emotion/styled/base'`

Emotion component used in the `src/Home.tsx`

The problem seems to be in the `@emotion/babel-plugin`, since everything works without it.
