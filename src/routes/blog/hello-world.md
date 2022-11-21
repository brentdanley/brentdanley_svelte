---
title: Hello World
date: 2022-11-20
tags: [svelte, sveltekit, markdown, coding]
---

<script>
    import CloudinaryImage from '$lib/components/CloudinaryImage.svelte'
</script>

For a long time now, I've wanted to resurrect my blog, and to write. My current blog is a GatsbyJS site, which is a React Static Site generator, hosted on Heroku. It's a nice stack and the posts are written in Markdown, which is important to me. However, I've been wanting to learn [Svelte](https://svelte.dev/), and what better sandbox than my own little piece of the web?

Svelte is a new(ish) JavaScript compiler that improves on the best practices and conventions of React. It's a technology we're talking about using at work, so plenty of incentive to learn, and not a huge departure from what I already know. In fact, given a solid base of JS, TS, and React, Svelte is refreshingly simple to both understand and code.

SvelteKit is a Svelte framework that provides all the scaffolding one would need to create a website in Svelte, particularly with regards to routing. As you can see below, it takes only a minute to get fully set up with a bare-bones "Hello World" site.

<CloudinaryImage alt="cloudinary setup" image_name="sveltekit_cli" caption="Cloudinary setup in terminal" />

I was fortunate to find an [excellent tutorial](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) by Josh Collinsworth on setting up a SvelteKit + markdown site from beginning to end, and I followed it closely.

## Why Svelte

I'm new to Svelte, but several of my engineer friends who I trust are proponents, so I checked it out and was instantly hooked. It is super lightweight, performant, and has a great developer experience.

<iframe class="youtube" src="https://www.youtube.com/embed/AdNJ3fydeao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Why Markdown

I love markdown! Markdown files are plain text, but they can be turned into rich text and HTML by loads of software. It's simple to write without having to click buttons for format text. And because it's local I don't have to mess with a database to request my content, the files are highly portable, and I can commit them to my distributed version control system (git).

## What else?

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/) - I was a Kickstarter backer way back in the early days.
- [date-fns](https://date-fns.org/)
- [Cloudinary](https://cloudinary.com/) - Hosting the images. I created a custom component to use various Cloudinary image transformations to have response images on the site. You're welcome.

## Styles

Site uses CSS Grid, obviously, but also newer CSS like the `clamp()` function for responsive fonts, the new `aspect-ratio` property, and `@container` queries.

## Hosting

I hosted the site on Vercel, even though I really love Netlify, and to a lesser extent Heroku. Vercel is the developer of NextJS, which is a React Framework I love, and the guy who started Svelte works there. My experience so far has been awesome. Super simply to set up with just a few clicks, and everything is handled automagically. I push new code to GitHub and it's instantly build and pushed to production (assuming I'm pushing my `main` branch). The SSL certificate was automatically created when I pointed my domain name DNS to it. Very easy. Very fast. And FREE!
