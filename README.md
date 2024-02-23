We rely mostly on [Astro](https://astro.build/) for building static UIs, while leveraging [React.js](https://react.dev/) and [Framer Motion](https://www.framer.com/motion/) to create some fancy animations.

Inside of the project, you'll see the following structure:

```
/
├── public/
│   └── scripts/
│   |   └── facebook-pixel.js
│   |   └── google-analytics.js
│   └── favicon.png
├── src/
│   ├── components/
│   │   └── react-components // This is where you can place your react components
│   │       └── header.tsx
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── index.astro
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Install the astro extension to make the code easier to read

There's nothing special about `src/components/`, but that's where we like to put any Astro and React components.

Any static assets, like images, can be placed in the `public/` directory(i.e scripts).

use node js version 16.5.5

Install the astro extension to make the code easier to read
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `npm run dev`                 | Starts local dev server at `localhost:3000`      |
| `yarn build`               | Build your production site to `./dist/`          |
| `yarn preview`             | Preview your build locally, before deploying     |
| `yarn astro ...`           | Run CLI commands like `astro add`, `astro check` |
| `yarn lint`                | Run Eslint to find code style problems           |
| `yarn lint:fix`            | Run to fix Eslint style problems automatically   |

## 👀 Want to learn more?

Feel free to check [the Astro documentation](https://docs.astro.build).