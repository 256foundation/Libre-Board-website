# Order from JLCPCB

How to order a Revision 3 board from the files already in the
design repository. This is the order. It is not a bring-up. The
full bring-up guide comes after Rev 3 validation.

The order notes below follow `fab/rev3-jlc/README.md` on the
[`__HW_BRANCH__` branch](__HW_TREE__/fab/rev3-jlc/README.md).
That file is the source. If it and this page ever disagree, the
repository wins.

## Where the files are

`fab/rev3-jlc/` on the `__HW_BRANCH__` branch. The script
`python3 fab/make_jlc.py` regenerates the folder from the KiCad
board (the notes name KiCad 10.0.6 `kicad-cli`). Re-run it after
any board change.

| File | Use |
| --- | --- |
| `gerbers/` | The PCB: Gerber layers plus plated and non-plated drill files. The upload zip is git-ignored. The script recreates it. |
| `libreboard-rev3-bom-jlc.csv` | Assembly bill of materials. |
| `libreboard-rev3-cpl-jlc.csv` | Placement file. Parts are on the top side. |
| `libreboard-rev3-bom-jlc-smt-only.csv` and `libreboard-rev3-cpl-jlc-smt-only.csv` | The same set without the through-hole parts, if those are fitted by hand. |
| `libreboard-rev3-tht-hand-fit.csv` | The through-hole parts and their solder joints. |

## PCB settings

Set these to match the board the files were drawn for:

- 6 layers, 125 × 125 mm, 1.6 mm nominal.
- Stackup JLC06161H-3313. The notes record that JLC's finished
  thickness for this stackup is about 1.54 mm, not 1.6 mm, and
  that the board accepts that.
- Impedance control on. The net classes assume this stackup for
  the 90 Ω and 100 Ω pairs.
- Vias epoxy-filled and capped. Vias sit in SMD pads, including
  the USB-C pads on J15.
- Surface finish ENIG for this run. The notes choose ENIG because
  parts are fitted by hand after assembly and the board may be
  reworked. OSP is the other flat finish they discuss.

## What the assembler does not place

Assembly is top side, SMT plus through-hole.

Not placed by the assembler, from the order notes:

- U1, U2, and J19 are not fitted (DNP).
- U17 (TCA9538) is bought separately and soldered by hand. The
  bench test needs it for the status LED and the hub reset.
- M2–M5, the SMT nuts, are fitted by hand. They have no footprint.

Fitted by hand if you use the SMT-only files: the four USB-C
receptacles J1, J6, J10, and J17, the pin headers J2, J3, and J8,
the fan headers J51–J54, the screw terminals J100 and J101, the
buttons SW1 and SW2, and the Ethernet jack U3. J11, J15, J22, and
J4 stay with the assembler. Their pins are fine-pitch SMD even
where the shell has stakes.

## Check the preview

Before you confirm the order, the notes ask for these checks in
the placement preview:

- Module1 and Module2, the CM5 connectors: the pin-1 mark at the
  bottom end, on the right-hand row of each connector.
- SW1 and SW2: the buttons face the board edge, as on the
  silkscreen.
- J100 and J101: the wire clamp on the same side as the
  silkscreen outline.
- BT1: the cell opening matches the silkscreen. The pads are
  symmetric, so the preview does not decide this by itself.

## See also

- [Design files](/reference/design-files)
- [Specifications](/reference/specifications)
- [What you need](/tutorial/what-you-need)
- [Where Libre Board is today](/explanation/status)
