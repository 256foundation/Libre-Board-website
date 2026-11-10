# AGENTS.md

Guidance for AI agents and human contributors working on this
repository.

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for commits and pull
requests. This file is the editorial rule list.

## What this repository is

The source for [libreboard.org](https://libreboard.org). The
board design is a different repository:
<https://github.com/256foundation/libreboard>. Do not change
that repository from a website task. Do not change DNS, GitHub
Pages settings, or `main`. The README has the go-live order.

## Tech stack

VitePress 1.x, default theme, no plugins. Theme work is CSS in
`.vitepress/theme/custom.css`. `just` is the command runner.
`just checks` is the build, and the build fails on dead internal
links.

## Content organization

[Diataxis](https://diataxis.fr). Tutorial teaches by a guided
task. How-to completes a task for someone who already knows the
goal. Reference is lookup. Explanation is the reasoning, with no
steps. `index.md` and `community.md` sit outside the modes. Link
across modes. Do not mix them.

Do not invent a bring-up procedure. The tutorial and the JLCPCB
how-to stay short until a validated procedure exists in the
design repository.

## References

Facts come from the hardware repository, especially the `rev3`
branch (KiCad, `bom/`, `fab/rev3-jlc`, `test/board-test`), the
Foundation projects page, and the public bench notes. The
previous libreboard.org page was a 2025 grant proposal. Do not
restore it. Do not restore donation links, PayNym, budgets, or
the old GitHub paths `256-Foundation/Libre-Board` and
`libre-board`.

The design-file branch is one value: `hardwareBranch` in
`.vitepress/hardware.ts`. Pages use the tokens `__HW_TREE__`,
`__HW_REPO__`, and `__HW_BRANCH__`. Do not hard-code a second
copy of the branch name in a URL.

## What the pages may claim

- Libre Board is the Foundation's open-source mining control
  board: the motherboard of a miner, full Linux on a swappable
  compute module, documented I/O, CERN-OHL-S-2.0. It is a
  reference design and a board you can run as-is, or cut down
  to your own parts list and form factor.
- The CM5 on the two 100-pin connectors is the compute the
  Rev 3 files are drawn for. Other ARM, x86, and RISC-V modules
  are a design goal. Do not say they have been tested.
- Ember One on the USB 2.0 Type-C ports, and Mujina, are the
  first-class pairing. Other hashboards need an adapter from
  those USB-C ports to that board's data connector. Do not claim
  native Antminer or Whatsminer support. Bitaxe may be mentioned
  as demo and development use (DoomAxe, and J15 on the Rev 3
  bench). It is not a second supported product.
- The board runs Linux, so a Bitcoin node or a local Stratum
  pool can run on it. Doing that work is also on the design-goals
  page. Do not write a procedure for it that the repos do not
  contain.
- Status lives on `explanation/status.md`. The roadmap lives on
  `explanation/design-goals.md`. Do not scatter "unfinished"
  through the hero, the specs, or the why page. The tutorial and
  the how-to may say that the full bring-up guide comes after
  Rev 3 validation. That sentence is the limit.
- Do not overclaim the bench. The 9 November 2026 note is one
  board's automatic checks. It is not a finished validation.
  Issue 27 is an open USB-routing note, not a decision that
  Rev 4 will be built.
- No dollar amounts, invoices, grant applications, budgets, or
  time commitments. The JLCPCB how-to does not quote the price
  tables in `fab/rev3-jlc/README.md`.
- No em dashes in site copy. The words "honest" and "honestly"
  do not appear. Plain technical English. Short verbs. One fact
  per sentence.
- The hero name is a lockup: the Liberty figure
  (`public/mascot.svg`) on the left of the outlined wordmark
  (`public/wordmark.svg`). The same figure is the nav mark and
  the favicon. Do not trace a new mascot, and do not delete
  dark pixels to fake a transparent background. Interior gaps
  in the figure are transparent. On dark surfaces invert that
  art with a CSS filter so the black linework reads light.
  Do not punch new holes.
- The picture on the right of the hero is the front board
  render with the backdrop removed
  (`public/libreboard-hero.webp`). Do not invert that render
  in dark mode, and do not color-key dark copper out of it.
- The script in the artwork is outlined, so the original face
  is unknown. The closest OFL match is Italianno, and it is not
  exact. It is self-hosted
  (`public/fonts/italianno-latin-400-normal.woff2`,
  `Italianno-OFL.txt`), preloaded, `font-display: swap`. Use it
  for the product name where that name is set as a brand title,
  including the nav title. Do not use it for body text, page
  headings, or the footer line. Do not load it from a CDN.
- The forum is <https://forum.256foundation.org/c/libre-board>.
  Telegram (<https://t.me/the256foundation>) is chat. The
  hardware URL is <https://github.com/256foundation/libreboard>.
- Schnitzel (Michael Schmid) is lead engineer. econoalchemist
  (Eco) is project manager. Name them on the community page.
  Do not make either person the hero.
- The Foundation publishes the design and does not sell boards.
  No donation form on this site.

## Deployment

`.github/workflows/deploy.yml` runs on push to `main` only. It
must not gain a `pull_request` trigger. The production CNAME is
written into the Pages artifact only when `GITHUB_REPOSITORY` is
`256foundation/Libre-Board-website`. The committed `CNAME` stays
in the tree.
