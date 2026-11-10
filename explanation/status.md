# Where Libre Board Is Today

Revision 3 is the current design. Boards have been assembled, and
they are under bench test. This page is the validation record.
[Design goals](/explanation/design-goals) is the roadmap. Other pages
describe the board as it is drawn.

::: info Current as of 9 November 2026
Checked against the `__HW_BRANCH__` branch of
[256foundation/libreboard](__HW_TREE__), commit `0dbe8d1`
(9 November 2026), which adds `test/board-test`. [Follow the
work](#follow-the-work) is where a later result shows up.
:::

## What is in hand

- The Revision 3 KiCad design, bill of materials, and JLCPCB
  order files are on the [`__HW_BRANCH__` branch](__HW_TREE__).
  `main` is still Revision 2. See [Revisions](/reference/revisions).
- Rev 3 boards have been assembled and are on the bench. The
  bench procedure is
  [`test/board-test`](__HW_TREE__/test/board-test) on that branch.
- The published automatic result in that directory is for one
  board, dated 9 November 2026: 41 pass, 1 fail, 1 warning. The
  fail is U17 (TCA9538) not fitted yet. The warning is no coin
  cell in BT1. The same note records Ethernet at 1000 Mb/s with
  no loss, the TUSB4041 hub enumerating, an NVMe read, and the
  5 V rail up, with no kernel errors on that run.
- That is one board's automatic checks. It is not a finished
  validation of Revision 3.

## What comes next

Build and bring-up guides come after Rev 3 validation, on the
assumption that validation does not find something a new revision
has to fix.

[Issue 27](__HW_REPO__/issues/27) is an open note about the USB
2.0 pairs from the hub (U11) to J1, J6, J10, and J17. It proposes
a Rev 4 routing cleanup and says the current routing is expected
to work and is still unproven. It does not decide that Rev 4
will be built.

## Follow the work

- [Design repository](__HW_TREE__), branch `__HW_BRANCH__`
- [Issue 27](__HW_REPO__/issues/27), the USB routing note
- [Libre Board on the forum](https://forum.256foundation.org/c/libre-board)
- [Community](/community)

## See also

- [Design goals](/explanation/design-goals)
- [Specifications](/reference/specifications)
- [What you need](/tutorial/what-you-need)
