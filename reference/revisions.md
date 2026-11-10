# Revisions

Which design is on which branch. Validation of the current
revision is on [Where Libre Board is today](/explanation/status).

## Revision 2, on `main`

The default branch, `main`, is Revision 2. The board silkscreen
on that branch reads "Rev 2". The commit that set that text is
`b106510` (13 November 2025).

Do not order from `main` if you want the current board.

## Revision 3, the current branch

The current design is the [`__HW_BRANCH__` branch](__HW_TREE__).
The board silkscreen reads "Rev 3". That branch has the KiCad
design, the bill of materials in `bom/`, the JLCPCB order files
in `fab/rev3-jlc`, and the bench test in `test/board-test`.

Links on this site point at `__HW_BRANCH__`. That branch becomes
`main` once it is merged. The switch is one value,
`hardwareBranch` in `.vitepress/hardware.ts`.

## A later revision

[Issue 27](__HW_REPO__/issues/27) describes a possible Rev 4
cleanup of the USB 2.0 pairs from the hub to J1, J6, J10, and
J17. It is an open note. It is not a decision that Rev 4 exists.
Whether a new revision is needed depends on validation. See
[Where Libre Board is today](/explanation/status).

## See also

- [Specifications](/reference/specifications)
- [Design files](/reference/design-files)
