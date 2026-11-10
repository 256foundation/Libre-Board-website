# Design Files

The hardware repository is
[256foundation/libreboard](__HW_REPO__).

The current files are on the [`__HW_BRANCH__` branch](__HW_TREE__).
`main` is still Revision 2. The `__HW_BRANCH__` branch becomes
`main` once it is merged.

## What is where

| Path | What it is |
| --- | --- |
| [KiCad project](__HW_TREE__) | Schematic, PCB, symbols, and footprints. |
| [`bom/`](__HW_TREE__/bom) | Revision 3 bill of materials and sourcing notes (`rev3-sourcing.md`, plus CSV and JSON). |
| [`fab/rev3-jlc/`](__HW_TREE__/fab/rev3-jlc) | JLCPCB Gerbers, assembly BOM, and placement files. [Order from JLCPCB](/howto/order-from-jlcpcb) is the short version. |
| [`gerber/`](__HW_TREE__/gerber) | Gerber output alongside the fab set. |
| [`test/board-test/`](__HW_TREE__/test/board-test) | The Rev 3 bench test and its notes. |
| [`assets/renders/`](__HW_TREE__/assets/renders) | Front and back renders used on this site. |
| [`LICENSE`](__HW_TREE__/LICENSE) | CERN-OHL-S-2.0. |

![Annotated front and back render shipped in the design repository as assets/libreX.png.](/libreboard-annotated.webp)

## See also

- [Specifications](/reference/specifications)
- [Revisions](/reference/revisions)
- [Where Libre Board is today](/explanation/status)
