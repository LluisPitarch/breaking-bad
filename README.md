# Breaking Bad

![BB IMG](/public/img/logo/bbLogo.png)

The Breaking Bad Project is a Next.js project bootstrapped with create-next-app.

## To launch the project in development mode run:

1. To install all node module packages:
   `npm i`

2. To launch the project in development mode
   `npm run dev`

## Main project

The project uses as main framework [Next.js](https://nextjs.org/) a React framework. Also is using [Redux](https://redux.js.org/) to handle a global state (it will be no necessary at this project size, but is a showing skills project), also is combined with Thunk to handle async action creators.

## Styles

The project is styled by the awesome library [Styled Components](https://styled-components.com)

## Testing

Using Jest + [React testing library](https://testing-library.com/) + next-page-tester as render to prevent a lot of problems with contexts, providers, etc.

## Other

The translation is based in [next-i18next](https://github.com/isaachinman/next-i18next) approach that handles all the locals suffixes + has super fast config.

The project also have super simple page transitions to improve UX on page changing with [Framer Motion](https://www.framer.com/motion/) + [React Toastify](https://www.npmjs.com/package/react-toastify) to handle feedback to the user on errors.

Also you can check the site live in this [link](lluis.site)
