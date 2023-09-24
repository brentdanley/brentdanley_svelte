# brentdanley.com - The personal website of Brent Danley

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Hosting

Site is hosted on Vercel.

## Colors

![color swatch](./src/lib/images/color_swatch.png?raw=true 'Color Swatch')
[Coolors](https://coolors.co/palettes/trending)

## Fonts

Google Fonts: [Merriweather](https://fonts.google.com/specimen/Merriweather?query=merriweather)

## Custom Components

**\<CloudinaryImage /\>** - Returns a responsive image hosted on the Cloudinary platform, with optional caption.
Arguments are `image_name`, `alt`, and optional `caption`.

## Acknowledgments

_Josh Collinsworth's [excellent blog post](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) was an invaluable guide when developing this site._ Thanks, [@josh-collinsworth](https://github.com/josh-collinsworth).
