# nextjs-with-custom-server-boilerplate

A boilerplate of an [Express](https://www.npmjs.com/package/express) server that renders pages (made with [ReactJS components](https://reactjs.org/docs/components-and-props.html)) using [NextJS](https://github.com/zeit/next.js).

I made this project for future personal use but if you want you can use it too. 👍

## Packages and tools used

- [express](https://www.npmjs.com/package/express)
- [next](https://github.com/zeit/next.js): Render React components in server-side.
- [react](https://www.npmjs.com/package/react)
- [typescript](https://typescriptlang.org): To ensure code type-safety.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev): Run Typescript files on Node without manually compiling them before.
- [less](http://lesscss.org/): To process CSS styles (but if you want to use [sass](https://sass-lang.com/) you can easily [switch](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)).

## CLI commands

- **`dev`**: Start the server in development mode on port 3000 using ts-node-dev. It will restart if you make changes to any file.
  - You can use `--api-only` argument to prevent starting nextjs.
- **`debug`**: Same as the above command but optimized to be attached by [VS Code debugger](https://code.visualstudio.com/docs/editor/debugging).
- **`build`**: Compile server and client codes into a production optimized version.
- **`start`**: Start the server in production mode. **Requires the "build" command to be executed first!**

## Folder structure

```
.
├── .vscode
├── client  // Contains all client-side codes.
│   ├── components  // Folder with React components.
│   ├── pages  // Folder with Next's Page components.
│   ├── next.config.js  // Self explanatory.
│   └── tsconfig.json  // TypeScript build options specific to front-end codes.
├── common  // Contain files that are used in many parts of the project.
├── out  // Folder where compiled server code will be placed by the "build" script.
├── public  // Contains static files to be publicly served by Express.
├── server
│   ├── main.ts  // Config express server.
│   ├── next.ts  // Init NextJS.
│   └── start.ts  // Start express server.
├── globals.d.ts
├── tsconfig.json  // Main TypeScript build options.
├── package.json
└── yarn.lock
```
