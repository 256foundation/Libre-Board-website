# libreboard.org

The source for [libreboard.org](https://libreboard.org), the
website of Libre Board, the 256 Foundation's open source mining
control board. The site is built with
[VitePress](https://vitepress.dev). The board design lives at
<https://github.com/256foundation/libreboard>.

This tree replaces the previous Jekyll site. `main` still serves
that site. Do not merge until the go-live note below is done.

## Run the site locally

You need Node.js and [just](https://just.systems/).

```
just install   # npm install
just dev       # dev server with hot reload
```

Run `just` with no arguments to list the other recipes. Run
`just checks` before you open a pull request. It builds the site
and fails on dead internal links.

## Where things are

Pages are markdown, organized by
[Diataxis](https://diataxis.fr): `tutorial/`, `howto/`,
`reference/`, `explanation/`. `index.md` is the landing page.
`community.md` sits outside the modes.

- Nav and sidebar: `.vitepress/config.mts`.
- The design-repository branch every page links to:
  `hardwareBranch` in `.vitepress/hardware.ts`. It is `rev3`
  until that branch is merged to `main` on the hardware
  repository. Change that one value and the links follow.
- Theme: CSS-only overrides in `.vitepress/theme/custom.css`.
- Images and other static assets: `public/`.
- Brand title face: self-hosted Italianno in `public/fonts/`
  (OFL, `font-display: swap`). The hero name stays the
  outlined wordmark in `public/wordmark.svg`. Body text and
  headings stay Inter.

[AGENTS.md](AGENTS.md) is the content rule list.

## Go-live

Out of scope for the draft pull request. GitHub Pages for this
repository is **Deploy from a branch** (`main`, folder `/`),
with custom domain `libreboard.org`. A merge while that setting
stands would Jekyll-publish this tree and replace the live site.

Do these together, and not before a human has accepted the
draft:

1. In the repository Pages settings, set the source to
   **GitHub Actions**.
2. Merge the pull request to `main`.

The workflow is not on `main` until that merge, so the two steps
belong in one sitting. The merge push builds with base `/`,
writes `libreboard.org` into the Pages artifact, and deploys.
DNS and the Pages domain are untouched. Fork builds use base
`/<repo-name>/` and write no CNAME, so a fork cannot take the
domain.

The committed `CNAME` file stays in the repository. The workflow
writes a second copy into the Pages artifact at build time, and
only for `256foundation/Libre-Board-website`.

The workflow does not run on pull requests. Pushing the draft
branch does not deploy.

## Design reference

The visual reference is the deployed Mujina site,
[mujina.org](https://mujina.org), and the VitePress rebuilds of
[emberone.org](https://github.com/256foundation/Ember-One-website)
and
[hydrapool.org](https://github.com/256foundation/Hydra-Pool-website).
Same stack: VitePress 1.6, Diataxis, the text face, the PCB-grid
hero, and the Foundation footer.
