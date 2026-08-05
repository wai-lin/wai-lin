---
title: "Small tools, big leverage: the case for building your own CLIs"
date: 2024-07-18
tags:
  - Tooling
  - Developer Experience
readingTime: 5 min read
---

The best productivity gains I have seen came from tiny internal tools that removed friction from everyday workflows.

<!--more-->

There is a certain kind of task that shows up every single day and quietly taxes an entire team: spinning up an environment, seeding data, running a deploy. Individually they are small. In aggregate they are enormous.

A well-made internal CLI turns those multi-step rituals into a single command with helpful output. The trick is to optimize for clarity over cleverness — good defaults, readable errors, and a short path to the happy case.

You do not need a framework or a grand plan. Start with a shell script, notice which commands you run most, and gradually promote them into a proper tool.
