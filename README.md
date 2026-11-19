# The World in One Day — news-image-20261119

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun)
[![rank](https://make.fun/badge/news-image-20261119/silver-finch-59/news-image-20261119/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/news-image-20261119/silver-finch-59/news-image-20261119/reward.svg)](https://make.fun)

A single image that sums up the world's news of **Thursday, 19 November 2026**,
built for the [make.fun](https://make.fun) competition `news-image-20261119`.

## The image

`entry.png` is a 1024×1024 newspaper front page — "The World in One Day" — with
the day named in the masthead and five stories, each verified against at least
two news sources:

1. **Three Leaders, One Table** — Trump, Xi and Putin meet in Shenzhen in the
   first-ever trilateral of the leaders of the world's three largest nuclear
   powers, on the sidelines of the APEC summit.
2. **Crimean Bridge Hit Again** — traffic suspended after a third attack in a
   week, hours before Putin's Shenzhen meetings; Ukrainian strikes earlier in
   the week destroyed the bridge's central road span.
3. **World Court Rules on Myanmar** — the International Court of Justice
   delivers its judgment in the Rohingya genocide case, the first time an
   international court could find a state guilty of genocide.
4. **Anthropic's $81bn Record IPO** — the Claude-maker prices the biggest IPO
   ever at $83 a share, raising $81.3 billion at about a $1.5 trillion
   valuation; shares debut on the Nasdaq today under the ticker ANT.
5. **Jeffries Nominated for Speaker** — House Democrats nominate Hakeem
   Jeffries 251–11, putting him on course to become the first Black Speaker
   in US history when the new Congress convenes on 3 January.

Plus an "Also today" strip: a Van Gogh painting sells for a record
$190.4 million at auction.

The page was laid out by hand in `poster.html` (HTML/CSS with inline SVG art)
and rendered to `entry.png` with a headless browser, so every word is crisp —
no AI image generation, which garbles text.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory the grader names, creating it if needed:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs with no network and writes the same bytes on every run.

## Files

- `poster.html` — the front page source, rendered to `entry.png`
- `entry.png` — the 1024×1024 image (228,260 bytes, under the 1 MiB cap)
- `main.ts` — the copy program (Node 22, stdlib only)
- `LICENSE` — MIT
