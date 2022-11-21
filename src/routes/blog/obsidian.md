---
title: 'Obsidian: My Second Brain'
date: 2022-11-21
tags: [obsidian, productivity, 'how to']
---

<script>
    import CloudinaryImage from '$lib/components/CloudinaryImage.svelte'
</script>

If you're like me you always have a lot going on, are constantly learning new things, and need a way to organize the plethora of information in your life. Whether I'm taking notes about the book I'm reading, planning a holiday meal, creating a new website, or just have thoughts in my head I need to get out, a good note-taking tool is important.

There are many out there, and for years I've been a devotee of Evernote, but I've since adopted Obsidian and find it indepensible.

## What is Obsidian?

Obsidian, at its simplest, is an app for taking notes. To leave it there, however, would be a gross understatement. Obsidian is my second brain. It helps me to capture, link, and organize thoughts; store things I need to remember and love to forget; and help me to be more productive.

The [Obsidian Philosophy](https://help.obsidian.md/Obsidian/Obsidian) is pretty simple: you own and control your data, links are first-class citizens within notes, and you should be able to customize your toolkit to work best for you.

It's effortless to open a new note, link to other notes to form connectedness of ideas, add tags for context and searchability, and format your note with markdown while you're writing.

## Markdown

Inside Obsidian you have a structure of folders, in which are [Markdown](https://www.markdownguide.org/) files that are your notes. Markdown is a document syntax that's intuitive to write, human-readable without transfomation, portable, and can easily be converted into many other formats, like HTML. This post is written in markdown.

```markdown
# Sample markdown syntax. This is a big heading.

And some text, with a link to [Google](https://google.com/).

## This is a smaller heading

With more text and a list.

- one
- two
- three
```

## Make it your own

One of the most powerful and beneficial aspects of Obsidian is its extensibility. You truly can make it work just the way you prefer.

Obsidian is quite useful out of the box without any configuration or customizations. You can create folders and notes, link them up, and search. But there is so much more it can do for you. However, for those who need a bit more, feel free to go crazy with themes and plugins.

### Themes

Don't like the default colors of Obsidian? You can change how it looks by installing a theme or directly modifying the styles with CSS.

### Plugins

Additional functionality is achieved by installing plugins, of which there are two types: **Core** and **Community**. Core plugins add features most people would find useful, like a calendar and templates. Where Obsidian really shines, though, is in its vast library of community plugins. These are plugins created by people outside of the Obsidian team for pretty much anything you can imagine. Want an interactive map in your note? You can do that with a community plugin. Want a Kanban board to track your project? You can do that, too. If there's something you'd like to do, there's a good chance someone in the community has already created a plugin to do it.

## How I use Obsidian

I have a few key workflows for which Obsidian is my primary tool. In my professional work life, I create a daily note that includes my to-dos, meetings, and random notes. When I have an idea or a stream of thoughts, I make a note. If there's some concept I encounter and want to learn more about, at a more convenient time, I create an empty "Knowledge Gap" note. And of course I keep notes for projectsv on which I'm currently working.

My personal notes are similar, if somewhat less organized. I keep notes for the books I'm reading, personal web projects, aviation, and vacation planning.

### Daily Notes

Every workday I click the date on the Calendar within Obsidian to generate a note for the day that includes meetings, to-dos, general notes, etc.

My daily notes are throw-away, with no expectation of archival relevance. Many people use their daily notes as a sort of journal, but not me. I use my daily notes to plan my day in terms of to-dos and meetings, and from then on they act as a scratch paper. I don't refer back to them, and many of the notes I write on them I later move to their own notes for further development. Which isn't suggesting they aren't important. My daily note grounds me to the objectives that are important to me for that day, and a place I can quickly capture ideas that will likely be expanded upon in separate notes.

My daily notes automatically pull in links to notes for the projects on which I'm currently working, as well as tasks from previous daily notes that are not completed. This is accomplished using the _Templater_ community plugin as well as _dataview_ queries (yet another community plugin).

### Cheatsheets

Do you find yourself repeatedly searching the Internet for that terminal command you forgot? Me, too. Now, when I find myself searching for something I've forgotten, I add it to one of my living cheatsheets. I have them for _git_, _VSCode_, _bash_, _Arc_, _Dev Tools_, etc.

### Knowledge Gaps

Similar to cheatsheets, I also generate starter notes for what I call my "Knowledge Gap". These are for those things I know I need to know more about, but don't immediately have time to research. So I use a _Quick Add_ command (another community plugin) to generate a new note. The _templater_ plugin prompts me for a title and context, then auto-pupulates a new starter note and puts it in the "Knowledge Gap" folder, waiting for me to research further.

I have a section of my Daily Note that uses _dataview_ to list the oldest two Knowledge Gap notes, inviting me to learn something new and narrow my personal knowledge gap.

<pre>
```dataview
LIST
FROM "Knowledge Gap"
SORT date-created asc
LIMIT 2
```
</pre>

Which turns it into this:

<CloudinaryImage alt="Knowledge Gap with dataview" image_name="knowledgegap_dataview" title="Knowledge Gap with dataview" />

### Ideas

I make notes to capture ideas and plan for things like trips I want to take, remodels of the loft, or gifts for Skye.

## Plugins

I've discussed the power of plugins above. Here, I'll list a few I use now and recommend.

### Core plugins

**Daily notes** - If you'd like a fresh note every day to keep track of just today, get this simple plugin.

Look through the other core plugins, select the ones you think would be most helpful for you, and then look through the settings for each. Doing this will get you very far to being able to start creating your second brain.

### Community plugins

**Dataview** - This is perhaps the most powerful plugin I use. It requires some minor SQL-like coding, but if you can handle that you'll be able to use it to add tremendous power to your notes.
**Templater** - This is like the core _Template_ plugin on steroids. You can use variables to make it easy to populate new notes in non-trivial ways, as well as transform things like dates.
**QuickAdd** - Quick Add provides a way to create macros to do things like create new notes based on specific templates. It can save a lot of time.
Calendar - Calendar adds, well, a calendar to Obsidian and shows the level of activity each day. It's also a quick way to generate your daily note.
Emoji Shortcodes - This plugin provides the ability to add emoji with the same colon-syntax that we love in Slack.
Markdown prettifier - Want your markdown properly formatted, automatically. Get this plugin.

## Features I Love ❤️

1. (Back)Linking to other notes with the \[\[\]\] syntax. This simple in-line syntax allows you to quickly, as you type, link to another note in your vault, create a reference to a new note, or simply create a reference for the graph view as a sort of quasi-tag.
2. As mentioned above, create a new future note anwhere along with a backlink by simply wrapping a word(s) in square brackets. When you click on this link, it'll create a note. You can also search on these, like tags, even if you never use it to [create a note].
3. [Callouts](https://help.obsidian.md/How+to/Use+callouts) are incredibly. Quickly draw attention to important little snippets and notes in a visually appealing way.
4. Editor Tabs - A new core feature, and very powerful.
5. Plugins - Whether you want to add interactive maps to your notes or create complex tables or drawings, there are plugins to make it easy. Obsidian can be what you want it to be, simple or complex. I prefer simple.
6. **Vim** support, but I know I'm not like most.
7. Markdown - This is something that sets Obsidian apart. The notes are wholly mine, non-proprietary, and portable. Writing in markdown syntax is super natural and intuitive, and Obsidian immediately generates previews even while editing (a recent feature).
8. Themes - Make Obsidian your own. Start with a theme and customize with your own JS and CSS. It's build on the web standards we know and love, so go crazy.

## Have fun.

Use `⌘ ,` to access preferences (just like every other Mac app). Peruse the community plugins and myriad settings options. Create templates. And when you come up with something super neat, be sure to let me know. My setup is super simple and fairly minimal, but I don't know what I'd do without it and I'm sure there are loads of things I could be doing with it, but don't.

## Phew, you made it this far!

If you really read everything above and got to here, you might as well download Obsidian and check it out for yourself.

[Download Obsidian](https://obsidian.md/download) and then go check out the [Getting Started](https://help.obsidian.md/Obsidian/Index#Getting+started) tips.

Good luck!

## Additional Resources

### YouTube

[Nicole van der Hoeven](https://www.youtube.com/watch?v=OUrOfIqvGS4&list=PL-1Nqb2waX4Vba6QDVS5rhnSb9pZGTO4b) - The best Obsidian how-to content.

### Websites

[Download and install Obsidian](https://help.obsidian.md/Getting+started/Download+and+install+Obsidian)
