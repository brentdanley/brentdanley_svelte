---
title: Obsidian: My Second Brain
date: 2022-11-21
tags: [obsidian, productivity]
---

## What is Obsidian?

Obsidian, at its simplest, is an app for taking notes. To leave it there, however, would be a gross understatement. Obsidian is my second brain. It helps me to capture and organize thoughts, store things I need to remember and love to forget, and help me to be more productive.

So what is Obsidian, and how does it accomplish those things? The [Obsidian Philosophy](https://help.obsidian.md/Obsidian/Obsidian) is pretty simple: you own and control your data, links are first-class citizens within notes, and you should be able to customize your toolkit to work best for your uniqueness.

## Markdown

Inside Obsidian you have a structure of folders, in which are stored notes written in [Markdown](https://www.markdownguide.org/), a document syntax that's intuitive to write, human-readable without transfomation, portable, and can easily be converted into many other formats, like HTML. This post is written in markdown.

```markdown
# This is a heading

And some text, with a link to [Google](https://google.com/).

## This is a smaller heading

With more text and a list.

- one
- two
- three
```

## Extensibility

One of the most powerful and beneficial aspects of Obsidian is its extensibility. You truly can make it work just the way you prefer.

Obsidian is quite useful out of the box without any configuration or customizations. You can create folders and notes, link them up, and search.

### Themes

The real power of Obsidian comes from its extensibility via themes and plgins. You can change how Obsidian looks by installing a theme or directly modifying the styles with CSS.

### Plugins

Additional functionality is achieved by installing plugins, of which there are two types: **Core** and **Community**. Core plugins add features most people would find useful, like a calendar and templates. Where Obsidian really shines, though, is in its vast library of community plugins. These are plugins created by people outside of the Obsidian team for pretty much anything you can imagine. Want an interactive map in your note? You can do that with a community plugin. Want a Kanban board to track your project? You can do that, too. If there's something you'd like to do, there's a good chance someone in the community has already created a plugin to do it.

## How I use Obsidian

I have a few key workflows for which Obsidian is my primary tool. In my professional work life, I create a daily note that includes my to-dos, meetings, and random notes. When I have an idea or a stream of thoughts, I make a note. If there's some concept I encounter and want to learn more about, at a more convenient time, I create an empty "Knowledge Gap" note. And of course I keep notes for projects like new features I'm building at work or when I'm remodeling a space in my loft.

### Daily Notes

Every day I click the date on the Calendar within obsidian to generate a note for the day that includes meetings, to-dos, general notes, etc.

My daily notes are throw-away, with no expectation of archival relevance. Many use their daily notes as a sort of journal, but not me. I use my daily notes to plan my day in terms of to-dos and meetings, and from then on they act as a scratch paper. I don't refer back to them, and many of the notes I write on them I later move to their own notes for further development.

My daily notes automatically pull in links to notes for the projects on which I'm currently working, as well as tasks from previous daily notes that are not completed. This is accomplished using the _Templater_ community plugin as well as _dataview_ queries (yet another community plugin).

### Cheatsheets

Do you find yourself repeatedly searching the Internet for that terminal command you forgot? Me, too. Now, when I find myself searching for something I've previously searched, I add it to one of my living cheatsheets. I have them for _git_, _VSCode_, _bash_, _Arc_, _Dev Tools_, etc.

### Knowledge Gaps

Similar to cheatsheets, I also generate starter notes I call "Knowledge Gap". These are for those things I know I need to know more about, but don't immediately have time to research. So I use a _Quick Add_ command (another community plugin) to generate a new note. The _templater_ plugin prompts me for a title and context, then auto-pupulates a new note and puts it in the "Knowledge Gap" folder, waiting for me to research and complete.

I also have a section of my Daily Note that uses _dataview_ to list the oldest two Knowledge Gap notes, inviting me to learn something new and narrow my personal knowledge gap.

### Ideas

I make notes to capture ideas and plan for things like trips I want to take, remodels of the loft, or gifts for Skye.

## Plugins

I've already written a little about plugins above. Here, I'll list a few I use now and recommend.

### Core plugins

- Backlinks
- Command palette
- Daily notes
- File recovery
- Note composer
- Page preview
- Quick switcher
- Templates

### Community plugins

- **Dataview**
- **Templater**
- **QuickAdd**
- Calendar
- Emoji Toolbar
- Markdown prettifier
- Paste URL into selection
- Tasks

## My usecases

### Features I Love ❤️

1. (Back)Linking to other notes with the [[]] syntax. This allows you to create a note for something like "My Jeep" and then have notes about your mechanic, certain parts, maybe a history of upgrades, etc. so you have this whole connected mindmap of your Jeep activities.
2. Create a new future note anwhere along with a backlink by simply wrapping a word(s) in square brackets. When you click on this link, it'll create a note. You can also search on these, like tags, even if you never use it to [create a note].
3. [Callouts](https://help.obsidian.md/How+to/Use+callouts) are incredibly. Quickly draw attention to important little snippets and notes in a visually appealing way.
4. Tabs - A new core feature, and very powerful.
5. Plugins - Whether you want to add interactive maps to your notes or create complex tables or drawings, there are plugins to make it easy. Obsidian can be what you want it to be, simple or complex. I prefer simple.
6. Vim support, but I know I'm not like most.
7. Markdown - This is something that sets Obsidian apart. The notes are wholly mine, non-proprietary, and portable. Writing in markdown syntax is super natural and intuitive, and Obsidian immediately generates previews even while editing (a recent feature).
8. Themes - Make Obsidian your own. Start with a theme and customize with your own JS and CSS. It's build on the web standards we know and love, so go crazy.

## Have fun.

Use Cmd+, to access preferences (just like every other Mac app). Peruse the community plugins and myriad settings options. Create templates. And when you come up with something super neat, be sure to let me know. My setup is super simple and fairly minimal, but I don't know what I'd do without it and I'm sure there are loads of things I could be doing with it, but don't.
