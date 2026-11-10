# What You Need

A short list for someone about to build or bench a Libre Board.
The full bring-up guide comes after Rev 3 validation.

## If you are building a board

- The Revision 3 design files, on the [`__HW_BRANCH__` branch](__HW_TREE__).
  [Design files](/reference/design-files) says which directory is
  which. That branch becomes `main` once it is merged.
- The bill of materials in `bom/` on that branch, and the JLCPCB
  order set in `fab/rev3-jlc`. [Order from JLCPCB](/howto/order-from-jlcpcb)
  is the order page.
- A Raspberry Pi Compute Module 5. The board uses the two standard
  100-pin connectors. A CM5 Lite (no eMMC) also needs a microSD
  card. The silkscreen says the SD slot is only for modules
  without eMMC.
- A 12–24 V DC supply, into the two screw terminals.

## If you are running one

- The board, with the CM5 fitted.
- 12–24 V DC.
- [Mujina](https://mujina.org) for mining firmware.
- An [Ember One](https://emberone.org) hashboard if that is the
  machine you are building. It connects to the USB 2.0 Type-C
  ports. See [Hashboards](/reference/specifications#hashboards).

## What this page does not cover

There is no flash procedure and no bring-up procedure here yet.
Those guides come after Rev 3 validation. [Where Libre Board is
today](/explanation/status) is the validation record.
[Specifications](/reference/specifications) is the connector list.
