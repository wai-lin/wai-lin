---
title: "Designing type-safe boundaries between your frontend and backend"
date: 2024-11-12
tags:
  - TypeScript
  - Architecture
readingTime: 8 min read
---

End-to-end type safety is one of the highest-leverage investments a product team can make. Here is how I think about drawing the line.

<!--more-->

One of the most common sources of bugs in web applications is the gap between what the server sends and what the client expects. For years we papered over that gap with hand-written types that drifted out of sync the moment someone changed a field.

The fix is to treat the API boundary as a single source of truth. Whether you use tRPC, GraphQL codegen, or a shared schema package, the goal is the same: a change on the server should surface as a type error on the client before it ever ships.

In practice this means investing in your build pipeline early. The cost of setting this up is real, but it pays for itself the first time a rename ripples cleanly through your entire codebase instead of blowing up in production.
