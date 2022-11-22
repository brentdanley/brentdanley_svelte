---
title: Hello World, Again
date: 2022-11-20
tags: [svelte, sveltekit, markdown, coding, blog]
---

<script>
    import CloudinaryImage from '$lib/components/CloudinaryImage.svelte'
</script>

Welcome to my new blog! (Actually, it's statistically probabable that this site is not new when you're reading this, but it's certainly new while I'm drafting this post.)

## This _new_ site is written in SvelteKit

[Svelte](https://svelte.dev/) is a new(ish) JavaScript compiler that improves on the best practices and conventions of React. It's a technology we're talking about using at work, so plenty of incentive to learn, and not a huge departure from what I already know. In fact, given a solid base of JS, TS, and React, Svelte is refreshingly simple to both understand and code.

[SvelteKit](https://kit.svelte.dev/) is a Svelte framework that provides all the scaffolding one would need to create a website in Svelte, particularly with regards to routing. As you can see below, it takes only a minute to get fully set up with a bare-bones "Hello World" site.

<CloudinaryImage alt="cloudinary setup" image_name="sveltekit_cli" caption="Cloudinary setup in terminal" />

I was fortunate to find an [excellent tutorial](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) by Josh Collinsworth on setting up a SvelteKit + markdown site from beginning to end, and I followed it closely. It's really good and easy to follow. If you're interested in setting up a similar site, you couldn't do much better than to use Josh's excellent tutorial.

## Why Svelte

I'm new to Svelte, but several of my engineer friends who I trust are proponents, so I checked it out and was instantly hooked. It is super lightweight, performant, and has a great developer experience.

<iframe class="youtube" src="https://www.youtube.com/embed/AdNJ3fydeao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why Markdown

I love markdown!

Markdown files are simply text files that have a human-readable syntax for marking up text. They have a `.md` or `.markdown` extention. Markdown files can be turned into rich text and HTML by loads of software. It's simple to write without having to click buttons for format text. Because the files are local, I don't have to mess with a database to request my content, the files are highly portable, and I can commit them to my distributed version control system (git).

## The other dependencies for my site

- [Google Fonts](https://fonts.google.com/) - I'm using Google's Merriweather font for most of the text, and Passion One for the bold header font.
- [Font Awesome](https://fontawesome.com/) - I was a Kickstarter backer way back in the early days.
- [date-fns](https://date-fns.org/) - For date formatting.
- [Cloudinary](https://cloudinary.com/) - Hosting the images. I created a custom component to use various Cloudinary image transformations to have response images on the site.

## Styles

Site uses CSS Grid, obviously, but also newer CSS like the `clamp()` function for responsive fonts, the new `aspect-ratio` property, and `@container` queries.

## Hosting

I'm hosting this site on [Vercel](https://vercel.com/dashboard). It's FREE for a hobby site like this, and super simple to set up and configure. Every time I push new commits to GitHub, Vercel automatically runs a build and publishes my site. SSL is handled out of the box with zero setup.

I have a few sites on both Netlify and Heroku and like them both, so I'm just trying Vercel so I can be familiar with it. I'm super pleased, so far. In fact, of the three I'd say it's risen to the top.

## Thanks for stopping by

I'm glad you're here. Look around. Kick the tires. I plan to make lots of improvements to the look and feel and to add content related to my personal life and interests. Coding still will mostly live over on [brentdanley.codes](https://www.brentdanley.codes/).
