# TruckMap Chat

I've got tons of ideas on how this would/could improve but time is valuable. However, it was fun and haven't really used NextJS too much but it's great for the quick and small projects. It had been **years** since having played with **SocketIO** so that was entertaining 🎉. All in all, good code challenge.

I didn't complete the `link preview` feature you noted. However. I did start the API endpoint for scraping the info which you can see at the link below, it's not perfect but a great start.

- [Scrapper link](http://localhost:3000/api/scrapper?url=https://www.mattscholta.com/)

**Resources & Tech:**

- [TruckMap Challenge](https://github.com/TruckMap/ChallengeJS)
- [Create NextJS App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [Socket Repo](https://github.com/rickyplouis/socket-next-starter)
- [socket.io](https://socket.io/get-started/chat)
- [JSDOM](https://github.com/jsdom/jsdom)
- [TailwindCSS](https://tailwindcss.com/docs)

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
