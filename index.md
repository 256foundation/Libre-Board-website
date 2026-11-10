---
layout: home

hero:
  name: Libre Board
  text: Open source mining control board
  tagline: >-
    The motherboard of a miner. Full Linux on a swappable compute
    module, documented I/O, and files you can build from or run as-is.
  image:
    src: /mascot.svg
    alt: >-
      Liberty leading with the flag, the Libre Board mark, taken from
      the design files.
  actions:
    - theme: brand
      text: Specifications
      link: /reference/specifications
    - theme: alt
      text: Design files
      link: /reference/design-files
    - theme: alt
      text: GitHub
      link: __HW_TREE__

features:
  - title: A reference design you can run
    details: >-
      Published files, and a board that runs as built. Strip it down
      to your own parts list and form factor when you need to.
    link: /explanation/why-libre-board
    linkText: Why Libre Board
  - title: Ember One and Mujina
    details: >-
      Ember One connects over the USB-C ports. Mujina is the mining
      firmware that runs on the board.
    link: /reference/specifications#hashboards
    linkText: What connects
  - title: A Linux computer
    details: >-
      The compute module runs a full Linux system, so the board can
      also run a Bitcoin node or a local Stratum pool.
    link: /explanation/why-libre-board
    linkText: The control board
  - title: Open hardware
    details: >-
      KiCad design, bill of materials, and fabrication files.
      Licensed CERN-OHL-S-2.0.
    link: /reference/design-files
    linkText: Design files
---

## The control board

Libre Board is the 256 Foundation's open-source mining control
board. A control board is the motherboard of a miner: it schedules
power, cooling, and the network, and it talks to the hashboards.
Libre Board runs a full Linux system on a swappable compute module,
with the I/O brought out and documented.

It is both an open reference design and a board you can run as-is.
The files are yours to build from, or to cut down to a smaller
parts list and a different outline.

The compute module on the current design is a Raspberry Pi CM5, on
the two standard 100-pin connectors. [Mujina](https://mujina.org)
is the mining firmware. [Ember One](https://emberone.org) is the
hashboard with first-class support, over USB-C. The same Linux
system can run other software beside the firmware, such as a
Bitcoin node or a local Stratum pool
([Hydrapool](https://hydrapool.org)).

Libre Board is part of the [256 Foundation](https://256foundation.org)
open mining stack, with Mujina, Ember One, and Hydrapool.

The picture above is the Liberty mark from the design files. The
board renders are below.

![Front of the board, from the KiCad render in the design repository.](/libreboard-front.webp)

![Back of the board, with the Liberty mark and the Libre Board wordmark in silkscreen.](/libreboard-back.webp)

## Find the project

- [Design files on GitHub](__HW_TREE__), branch `__HW_BRANCH__`.
  That branch becomes `main` once it is merged.
  See [Design files](/reference/design-files).
- [Libre Board on the forum](https://forum.256foundation.org/c/libre-board)
- [Telegram](https://t.me/the256foundation), the 256 Foundation's
  public group chat
- Sister projects: [Mujina](https://mujina.org),
  [Ember One](https://emberone.org),
  [Hydrapool](https://hydrapool.org)
- A project of the [256 Foundation](https://256foundation.org)
