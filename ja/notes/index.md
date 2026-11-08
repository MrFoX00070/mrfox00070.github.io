---
layout: default
lang: ja
section: notes
title: Security Notes
translation_url: /en/notes/
permalink: /ja/notes/
---
<div class="breadcrumbs"><a href="{{ '/ja/' | relative_url }}">Home</a><span>/</span><span>Security Notes</span></div>
<section class="page-hero">
  <div class="eyebrow"><span class="eyebrow-line"></span> CTF / TOOLS / LABS</div>
  <h1>Security <em>Notes.</em></h1>
  <p class="page-intro">CTFのWrite-up、ツールの使い方、SOC・IRの検証記録をまとめる場所です。今はまだ準備中ですが、学んだ内容を自分の言葉で整理していきます。</p>
</section>
{% assign lang_posts = site.posts | where: 'lang', page.lang %}
<div class="note-controls" aria-label="記事カテゴリ">
  <button class="filter-btn selected" type="button" aria-pressed="true" data-filter="all">All</button>
  <button class="filter-btn" type="button" aria-pressed="false" data-filter="ctf">CTF Write-ups</button>
  <button class="filter-btn" type="button" aria-pressed="false" data-filter="tools">Tool Guides</button>
  <button class="filter-btn" type="button" aria-pressed="false" data-filter="labs">SOC / IR Labs</button>
  <label class="note-search" aria-label="記事を検索"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg><input type="search" data-note-search placeholder="記事を検索…"></label>
  <span class="note-count"><span data-visible-count>{{ lang_posts.size }}</span> posts (日本語)</span>
</div>
<section class="note-list" aria-label="記事一覧">
  {% for post in lang_posts %}
  <a class="note-item" data-note-type="{{ post.note_type | default: 'labs' }}" href="{{ post.url | relative_url }}">
    <div class="note-item-meta"><span class="chip">{{ post.note_type | default: 'labs' | upcase }}</span><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time></div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 140 }}</p>
  </a>
  {% endfor %}
  {% if lang_posts.size == 0 %}
  <div class="empty-state" data-initial-empty><h2>まだ公開記事はありません。</h2><p>まずは自分のペースで。公開できる内容から、少しずつ追加していきます。</p></div>
  {% endif %}
  <div class="empty-state" data-filter-empty hidden><h2>このカテゴリの記事はまだありません。</h2></div>
</section>
