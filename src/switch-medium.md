# Creating a Highly Flexible Component Library With Classic Patterns and React Hooks - Switch

## Motivation

Over the summer, I had an internship at GoDaddy, during which I used a lot React and Redux. I spent most of the time throughout that summer learning as much as I could about Redux, while neglecting React, which I now realize probably wasn't the wisest decision. I'm heading back to GoDaddy after I graduate and to make sure I'm on point when I get there, I decided that I would create a React component library with a focus on creating the most flexible components possible in order to learn some of the more advanced React patterns like render props. I'm creating this blog series as an exercise in learning in public. I would imagine that I'm going to be learning a lot throughout this series, and I'm going to try my best to document my mistakes as well as my successes throughout the creation of this library, because I think that sort of stuff may actually be valueable to see.

## The Plan

As I said before I'm creating this library to learn about how to create flexible components with more traditional patterns, but I'm also going to take this opportunity to learn as much as I can about the other aspects of creating React components as well, like styling and testing. For styling, my plan is just to use plain CSS because my CSS skills aren't fantastic and I want to be able to leverage it as best as possible by itself before learning fancier CSS-in-JS options. For testing, I'm going to be using Jest and Enzyme, mostly because that's what I was using at work. I'm tempted to also write a set of tests in react-testing-library, becaus I've been wanting to try it out for a while now, but honestly, that'll really depend on how much I feel like it after writing the first round of tests for each component.

On top of all of that stuff, the plan is actually to include one more thing to this pretty large amount of learning, which is React-Hooks! That's right, on top of using production ready React, I'm going to try to recreate a bunch of these components in hooks (notice how I don't say all to give myself a get out of jail free card)