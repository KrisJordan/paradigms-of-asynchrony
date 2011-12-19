# Paradigms of Asynchrony

To run the examples in this repo clone the repo and then run `npm install`.
This sets up the underscore, async, and tame.js dependencies.

This repository contains some examples of asynchronous callback ugliness.
The two biggest and most common problems programmers face when moving from
synchronous, imperative-style programming to asynchronous, callback-driven
programming are scripting a series interdependent async function calls, 
and managing asynchronous iteration.

This repository is organized based on these two classes of problems. Within each
directory you will find a 'the-problem.js' script which contains either 
incorrect or horribly offensive looking/organized code.

Solution 1 represents a 'roll your own' one-off solution to the problem.

Solution 2 relies upon the async node.js library.

Solution 3 uses the tame.js `await` and `defer` model.

I created these examples quickly when trying to study the `async` library 
approach and the tame.js approach. Looks like there will be at least
a blog post or two to come out of this Sunday study. Really interesting
stuff.

(c) 2011 Kris Jordan
