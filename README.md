# MrFoX00070 — Portfolio + Technical Blog

This site combines the original portfolio with a Jekyll-powered technical blog. It is designed for GitHub Pages (`mrfox00070.github.io`).

## Быстрый старт

1. Создай публичный репозиторий `mrfox00070.github.io`.
2. Загрузи в него **содержимое** этой папки (не ZIP целиком), сохраняя имена и расположение папок.
3. GitHub → Settings → Pages → Source → `Deploy from a branch` → `main` → `/(root)` → Save.
4. Открой `https://mrfox00070.github.io/` и `https://mrfox00070.github.io/blog/`.

**Важно:** если у тебя уже есть сайт в репозитории, обновление `index.html` заменит текущую главную страницу. Перед загрузкой сохрани резервную копию.

## Новая статья

- Создай файл `_posts/2026-11-08-my-first-article.md` (замени дату и название).
- Скопируй содержимое `_drafts/example-article.md`, замени пример на собственный материал.
- `Commit changes` — GitHub Pages автоматически соберёт новый блог.
- Опубликованные статьи появятся на `/blog/`.

Папка `_drafts` предназначена для черновиков и не публикуется на GitHub Pages при обычной сборке.

## Что где настраивать

- `index.html` — главная страница, достижения, представление.
- `_config.yml` — настройки Jekyll, адрес сайта, ссылки на статьи.
- `blog/index.html` — список опубликованных статей.
- `_layouts/post.html` — шаблон каждой статьи.
- `_layouts/default.html` — общая шапка и подвал блога.
- `assets/blog.css` — шрифты, цвета, оформление статей.
- `_posts/` — статьи в Markdown.
- `_drafts/` — черновики (не публикуются).

Не добавляй файл `.nojekyll` — GitHub Pages должен обрабатывать шаблоны Jekyll.

## Безопасная публикация

Не размещай пароли, токены, приватные IP/логи третьих лиц, персональные данные или материалы конкурсов с ограничениями на публикацию.
