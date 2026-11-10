# Contributing to libreboard.org

This repository is the source of
[libreboard.org](https://libreboard.org). Pull requests are
welcome. Most changes are small: a wording fix or a corrected
connector. If the change is self-contained and the fact is
already public, open the PR.

The board design is a different repository. Changes to the
schematic, the PCB, or the bench test belong at
<https://github.com/256foundation/libreboard>, not here.

## Small edits, from the site itself

Every page ends with an "Edit this page on GitHub" link. It
opens the markdown in GitHub's editor. That is the right path
for a typo or a single-page correction.

## Larger changes, locally

Read [AGENTS.md](AGENTS.md) before writing. It records what the
site may claim, and where status is allowed to live.
Contributions are reviewed against it.

Run `just checks` before you open the PR. It builds the site and
fails on dead internal links. The [README](README.md) covers
setup.

## What not to restore

The previous libreboard.org page was a grant proposal. Do not
bring back donation links, budgets, or the old GitHub paths.
Facts belong to the hardware repository and the Foundation pages
named in [AGENTS.md](AGENTS.md).

## Commits

One logical change per commit. Messages follow
[conventional commits](https://www.conventionalcommits.org/).
Subject in the imperative, wrapped at 72 characters.

Common types here: `feat` for a new page, `fix` for a wrong
fact, `style` for wording, `chore` for the build.

## Pull requests

Rebase on `main`, run `just checks`, and title the PR as a
conventional commit. Open a draft if you want eyes on it before
it is ready.

Do not merge a site rebuild while Pages still deploys `main`
with Jekyll. The README's go-live note is the sequence that
keeps libreboard.org on the old site until someone chooses to
publish.
