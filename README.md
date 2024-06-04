# Landing Page Material UI

This is an app for a landing page using Material UI, there is also a Tailwind CSS version of it in the repository. The main goals are to display the design from the Figma file: [link](<https://www.figma.com/design/pFtdMqmlsPdRNMWl5k01qa/Ecomail-test-(Oxana-Gre%C5%A1likov%C3%A1)?node-id=0-1&t=1Zny3icWI2QHTvsb-1>), fetch the `Fake Store API` backend: [link](https://fakestoreapi.com) and apply responsive design to the following devices: desktops, tablets and mobiles.

## Technologies

- Vite
- ReactJS
- TypeScript
- Material UI for styling
- Hooks for state management
- Axios for HTTP requests

## Setup

1. Download or clone the repository

```
https://github.com/oxanakraynova/landing-page-mui.git
```

2. Install NPM packages

```
npm install
```

3. Run the app in development mode. Open http://localhost:5173 to view it in the browser.

```
npm run dev
```

## Status

The development is finished. During the course of the project, I faced two following problems.

### Problem 1:

- Unfortunately, the GET `fakeStoreApi` endpoint doesn't have pagination right now, and I can't do part of the exercise to load more products.

### My solution:

- In the code I provided a solution, how I would set up a loading of the new products if the pagination worked -> The request with the offset change is sent to backend.

### Problem 2:

- When creating a universal product card, I had to modify the length of a text a little. The title and description in `fakeStoreApi` have different lengths, sometimes the title takes up only one line, sometimes four. It's the same with the description. So, the distance between the elements was different, the elements moved around the card in a chaotic manner and the entire list of cards was scattered.

### My solution:

- I propose two solutions to this problem -> in this Tailwind application, the number of characters in the title and description has been reduced so that cards look the same. In the MUI app, the number of characters has been reduced just in the title.
