---
layout: default
lang: en
section: notes
title: Security Notes
translation_url: /ja/notes/
permalink: /en/notes/
---
<div class="breadcrumbs"><a href="{{ '/en/' | relative_url }}">Home</a><span>/</span><span>Security Notes</span></div>
<section class="page-hero">
  <div class="eyebrow"><span class="eyebrow-line"></span> CTF / TOOLS / LABS</div>
  <h1>Security <em>Notes.</em></h1>
  <p class="page-intro">A place for CTF write-ups, tool guides, and hands-on SOC / IR labs. I plan to document what I learn, one experiment at a time.</p>
</section>
{% assign lang_posts = site.posts | where: 'lang', page.lang %}
<div class="note-controls" aria-label="Article categories">
  <button class="filter-btn selected" type="button" aria-pressed="true" data-filter="all">All</button>
  <button class="filter-btn" type="button" aria-pressed="false" data-filter="ctf">CTF Write-ups</button>
  <button class="filter-btn" type="button" aria-pressed="false" data-filter="tools">Tool Guides</button>
  <button class="filter-btn" type="button" aria-pressed="false" data-filter="labs">SOC / IR Labs</button>
  <label class="note-search" aria-label="Search notes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg><input type="search" data-note-search placeholder="Search notes…"></label>
  <span class="note-count"><span data-visible-count>{{ lang_posts.size }}</span> posts (English)</span>
</div>
<section class="note-list" aria-label="Articles">
  {% for post in lang_posts %}
  <a class="note-item" data-note-type="{{ post.note_type | default: 'labs' }}" href="{{ post.url | relative_url }}">
    <div class="note-item-meta"><span class="chip">{{ post.note_type | default: 'labs' | upcase }}</span><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time></div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 140 }}</p>
  </a>
  {% endfor %}
  {% if lang_posts.size == 0 %}
  <div class="empty-state" data-initial-empty><h2>No published articles yet.</h2><p>I'll add notes as I finish experiments and write-ups worth sharing.</p></div>
  {% endif %}
  <div class="empty-state" data-filter-empty hidden><h2>No articles in this category yet.</h2></div>
</section>
