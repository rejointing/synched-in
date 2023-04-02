# SynchedIn

_OMG what if there were an app that let you connect with other professionals in your field?_

_Like, a social network, but with less disinformation and fewer selfies and more of, like, people just kinda boasting about their professional achievements!_

Let's build a proof of concept!

## Current status

This repository was created with `create-react-app` and includes all the accoutrements thereof.

The packages `react-bootstrap` and `react-router-dom` have also been pre-installed.

`package-lock.json` has been removed because it is a pain for learning. (Very useful in the future, though!)

There are some interesting things in the `utils` and `assets` directories, which we'll address as we need to.

## Setup

- Fork and clone this repository.
- `cd` into the resulting `synched-in` directory.
- Run `code .` or whatever you do to get a project directory up in VSCode.
- Run `npm i` to install React, React Router, and Bootstrap.
- Run `npm start` to fire up your dev server.

## Step 1: Pseudocode

Let's think about what we're doing.

This app will show a list of fake people who work at fake companies. Let's pretend it's real!

### Our goals
- Show the list of people in a sensible way.
- Enable the app to show selected people based on their status in a few categories that are most important for business decsisions:
    - `devLevel`
    - `company`
    - `favoriteMusicGenre`
- Enable the user to add "favorites." These users can be shown in a special list.
- Enable the user to "block" users if they, for instance, have the temerity to list "Non Music" as their favorite music genre. That's insane. (Reasonable people call it "post-music," obviously.)

### Think ahead

We'll need:
1. The data for a list of people. We should probably keep it in state at the top level (`App.js`, perhaps) of our application.
2. A component that displays an individual person.
3. A way to filter people by criteria.
4. A way to control "favorites" and "blocking" -- probably some state variables at our top level.

We can probably do it! Let's take it step by step.

## Step 2: Get the data

A typical React front end in a full-stack app uses `fetch` (or something similar) to grab data of this sort from an API on the back end.

We know that `fetch` returns a promise and is a bit difficult to work with, and we also know that trying to yoink data from random APIs can create CORS errors that confuse us.

>### HACK: Simulated `fetch`
>
>Pre-built into this package is a function that provides the data you need -- but it provides it as a `fetch`-like promise so that you can practice handling asynchoronous data. Neat!
>
>It's also _frustrating_, though! Like `fetch`, the `fakeFetch` function doesn't return the data directly but rather returns a promise. You can use asynchronous programming and the `.json()` method of the return value to get hold of your data.

Let's use the fake `fetch` and `useEffect`, grab some people data, and store it as `people` in state!

Steps to do (in `App.js`):
- `import { useState, useEffect } from 'react'`
- `import fakeFetch from './utils/fakeFetch'`
- Create `people` and `setPeople` using `useState`, with an initial value of `[ ]`.
- Set up a `useEffect` to grab the data using `fakeFetch` and `<FAKE_FETCH_RESULT>.json()`. Don't forget to set your dependency array! When and how often do you think this data should be fetched?
- Inside your `useEffect`, store the data in `people` using `setPeople`.
- Reach out to your instructor if you hit _any_ bugs or have any trouble!
- Test whether your data is set in state. How can you find out?

## Step 3: Display each `Person`

Each person should have their own individual display element, right? Let's create a `Person.jsx` in `/components`.

For right now, just make `Person.jsx` return a `div` that with text content `I'm a person`!

Now import `Person` into `App.js`. Inside the `return` part of `App.js`, use `.map` to render a `Person` for each person in `people`!

For right now, in your browser, you'll see 300 assertions of individual personhood. We're not here to judge, so we'll accept it!

## Step 4: Pass the data for each person

If you look at the data in `assets/data.json`, you'll see that the information for each person looks roughly like this:

```json
    {
        "id": 292,
        "fullName": "Gwendolyn Casper",
        "email": "Ibrahim_Barrows@hotmail.com",
        "devLevel": "senior",
        "company": "HellaWorld, Inc.",
        "title": "Principal Optimization Administrator",
        "image": "https://loremflickr.com/200/200/animals",
        "favoriteColor": "plum",
        "favoriteMusicGenre": "Funk",
        "favoriteAnimal": "snake",
        "bio": "Vero rem aperiam quia laborum exercitationem id dolor. Repellat officia quis aperiam earum."
    }
```

That's a lot of information that we could access by using the keys in each person's object.

Unfortunately, our `Person` component doesn't have that information at the moment. How can we pass that information to the `Person` component?

If we're currently `map`ping a `Person` for each `person` in `people`, then we already have most of what we need in place. Now we just need to pass some props!

It looks ridiculous, but you might use something like this in `App.js`:

```js
<div className="people-div">
    { people.map(person => <Person key={person.id} person={person} />) }
</div>
```

>Ask your instructor to help break these lines down with you if you're confused.

Inside `Person.jsx`, we'll now be able to access each person's information as `props.person`. Go ahead and try a `console.log(props.person)` in `Person.jsx`!

## Step 5: Customize your person element

Now that we have access to the data, we can show each person's `fullName`, `company`, and `devLevel` individually.

In `Person.jsx`, try to grab some keys from `props.person` and display them on the page instead of `I'm a person!`

Now make them pretty! Remember that this repository has Bootstrap pre-installed, so you can either set up some custom CSS for your `Person` component or use the `react-boostrap` `Card` component: [Documentattion](https://react-bootstrap.github.io/components/cards/)

>If you use `Card`, you'll want to also use its child elements, like `Card.Title` and `Card.Subtitle`.

## Step 6: Make it flex

Right now, you probably see a long column of individual people.

On the `div` in which your `people` appear, use either CSS or flexbox to make your person cards fill the screen side to side and wrap to a new line once the line is full!

> Remember that Bootstrap is preinstalled here. In addition to `react-bootstrap` components, you can also use regular Bootstrap CSS classes.
>
>- [Bootstrap Flex](https://getbootstrap.com/docs/4.0/utilities/flex/)

You're ready for the next step!

## BONUS: Style your cards

If you've made it this far, you're ready for step 2. If you have some time to kill, flesh out your `Person` cards!

- Use each person's `favoriteColor` to style their name.
- Disply the company name and dev level as subtitiles, each in a different way.
- Show each person's bio as a "pull quote" in italics.

## BONUS: Style a header

Right now we just have a bunch of cards. Create a `Header` component with some cool branding moves for our awesome app. We might use it again for navigation later!
