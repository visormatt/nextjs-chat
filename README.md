# TruckMap Chat

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptatem assumenda neque cum quis asperiores reprehenderit magni delectus accusamus, voluptate quasi deserunt sit nesciunt dolores nostrum. Accusamus maxime veritatis totam?

- [TruckMap Challenge](https://github.com/TruckMap/ChallengeJS)
- [socket.io](https://socket.io/get-started/chat)
- [JSDOM](https://github.com/jsdom/jsdom)
- [TailwindCSS](https://tailwindcss.com/docs)
- https://github.com/rickyplouis/socket-next-starter/blob/master/pages/rooms.js

## Installation + Setup

> Node version 12+
>
> - no specific reason, just an acceptable minimum range and I used 14.15.0

```bash
# Install
yarn install

# Build
yarn build

# Start
yarn start

# Open the URL logged out
open http://localhost:3000
```

## Requirements

- [x] Create a new [NextJS](https://nextjs.org/) application configured to use [tailwind.css](https://tailwindcss.com/) for UI styles and [TypeScript](https://www.typescriptlang.org/).
- [x] Use [socket.io](https://socket.io/) to add the real-time chat functionality.
- [x] Use [Redux](https://redux.js.org/), [Recoil](https://recoiljs.org/), or [React Hooks](https://reactjs.org/docs/hooks-intro.html) to store the application's state and process any client-side network requests.
- [ ] URL links shared in the chat should show an extracted metadata preview (page title, image, description/summary, etc. like Slack). While it would be fine to use pre-existing components for the preview in a real setting, please implement the metadata fetching yourself on the server (not ajax in the client) and be mindful of the async experience of this for rendering in the client while that info is loading for other users.
- [x] In the client, show a list of all users who are currently logged in to the room.
