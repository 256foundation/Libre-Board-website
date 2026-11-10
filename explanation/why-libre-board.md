# Why Libre Board

A control board decides what a miner is allowed to be. Closed
boards keep the firmware, the display, the network, and the
hashboard connector inside one vendor's machine. Libre Board
publishes that layer.

## The motherboard

Libre Board is the motherboard of a miner. It takes 12–24 V DC,
runs a full Linux system on a swappable compute module, and
brings the I/O out to documented connectors: Ethernet, the CM5's
Wi-Fi and Bluetooth, HDMI, a MIPI camera or display, NVMe, a
Raspberry Pi HAT header, Qwiic, fan headers, and USB-C for the
hashboards.

The current module is a Raspberry Pi CM5, on two standard
100-pin connectors. The same connectors are how another module
would fit. Trying ARM, x86, and RISC-V modules is a
[design goal](/explanation/design-goals). The board in the repository is
drawn and tested around the CM5.

## Run it, or cut it down

Libre Board is a reference design and a board you can run as-is.
The KiCad project, the bill of materials, and the fabrication
files are published under CERN-OHL-S-2.0. Build that board. Or
delete the parts you do not need and change the outline. The
license is what makes the second path allowed.

## The rest of the stack

Libre Board is one layer of the 256 Foundation open mining
stack.

- [Ember One](https://emberone.org) is the hashboard. It connects
  over the USB 2.0 Type-C ports.
- [Mujina](https://mujina.org) is the mining firmware. It runs on
  the compute module.
- [Hydrapool](https://hydrapool.org) is pool software. A local
  pool can run on the same Linux system as the firmware, because
  the board is a computer and not only a mining controller.

[Specifications](/reference/specifications) is the connector
list. [Where Libre Board is today](/explanation/status) is the state of
Revision 3. [Design goals](/explanation/design-goals) is the work after that.

## See also

- [Community](/community), including who leads the work
- [Design files](/reference/design-files)
