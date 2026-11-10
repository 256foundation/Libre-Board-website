# Design Goals

The work after the board that is on the bench now.
[Where Libre Board is today](/explanation/status) says what Revision 3 is
doing. This page is the direction.

## Finish Revision 3

Finish validation of the Rev 3 boards. Then publish the complete
files and bill of materials on `main`. The files are already on
the [`__HW_BRANCH__` branch](__HW_TREE__). Merging that branch is
how they become the default.

## Build and bring-up docs

Write the build guide and the bring-up guide from the validated
board, so a builder can go from the order files to a running
system without inventing the steps.

## Other compute modules

The connectors are the standard 100-pin pair the CM5 uses. Test
other modules on those connectors: ARM, x86, and RISC-V. The CM5
is the module the current board is drawn for.

## A node and a local pool

Run a Bitcoin node on the board, and run a local Stratum pool on
the board. [Hydrapool](https://hydrapool.org) is the pool
software in the same stack. The CM5 is a Linux computer, which
is what makes this a goal for this board and not for a separate
machine.

## Adapters for other hashboards

Ember One is the hashboard the USB-C ports are drawn for.
Adapters from those USB-C ports to other hashboards' data
connectors are the way further hashboards get on the bench.

## See also

- [Where Libre Board is today](/explanation/status)
- [Why Libre Board](/explanation/why-libre-board)
- [Specifications](/reference/specifications#hashboards)
