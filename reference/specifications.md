# Specifications

Figures for the Revision 3 design files on the `__HW_BRANCH__`
branch. [Revisions](/reference/revisions) says where Revision 2 lives.
[Where Libre Board is today](/explanation/status) is the
validation record.

## Board

| Item | Value |
| --- | --- |
| Role | Mining control board. The motherboard of a miner. |
| Size | 125 × 125 mm, measured on the Rev 3 board outline. The same outline as [Ember One](https://emberone.org). |
| Layers | 6 copper layers: Top, GND1, PWR, SIG, GND2, Bottom. |
| Thickness | 1.6 mm nominal. The fab notes specify stackup JLC06161H-3313 and record a finished thickness near 1.54 mm. |
| Mounting | Four M2.5 holes (2.7 mm) at the same positions as Ember One's corner mounting holes. |
| Input | 12–24 V DC, silkscreen "12–24 VDC", on screw terminals J100 and J101. |
| Compute | Raspberry Pi CM5 on two standard 100-pin connectors (Module1 and Module2, Amphenol 10164227-1001A1RLF). Other ARM, x86, and RISC-V modules on those connectors are a [design goal](/explanation/design-goals). They are not tested on this board. |
| Storage | M.2 M-key socket (J4) for NVMe. microSD (J7) for a CM5 Lite. The silkscreen says the SD slot is only for modules without eMMC. |
| Network | Gigabit Ethernet, MagJack U3. Wi-Fi and Bluetooth are the CM5 radios. Header J3 can disable them (`nBT_Dis`, `nWireless_Dis`). |
| Video and camera | One HDMI Type-A (J22). One 22-pin MIPI camera/display FFC (J5, silkscreen CAM/DISP). |
| USB hub | TUSB4041 4-port USB hub (U11, TUSB4041IPAPR). |
| USB-C, hashboard | Four USB 2.0 Type-C ports on the hub: J1, J6, J10, J17. Silkscreen "USB-C 2.0 to emberOne". |
| USB-C, SuperSpeed | J15. USB 3 Type-C, silkscreen "USB3", through an HD3SS3220 orientation mux. |
| USB-C, J11 | USB 2.0 Type-C, silkscreen "USB2". The bench-test notes say J11 has no VBUS from the board. |
| Expansion | Raspberry Pi 40-pin HAT header (J8). Qwiic connector (J16). |
| Fans | Four 12 V 4-pin headers (J51, J52, J53, J54). A separate CM5 fan connector (J14). |
| Buttons | Power button SW1. eMMC boot-disable button SW2, silkscreened as flash mode. |
| Status LED | U9, an SK6812, silkscreen "Status". |
| RTC | Coin-cell holder BT1. Silkscreen CR1225. The fitted holder takes a 12 mm cell (CR1216, CR1220, or CR1225). |
| Tool | KiCad |
| License | [CERN-OHL-S-2.0](__HW_TREE__/LICENSE) |

## Hashboards

Ember One is the hashboard with first-class support. It connects
to the USB 2.0 Type-C ports. [Mujina](https://mujina.org) is the
mining firmware with first-class support. It runs on the compute
module.

Other hashboards are [planned](/explanation/design-goals). Each
one needs an adapter from Libre Board's USB-C ports to that
hashboard's data connector.

A Bitaxe has been used two ways, both as a demo and as a
development setup. Public demos (DoomAxe) paired a Libre Board
with a Bitaxe, and the Rev 3 bench test connects a Bitaxe to J15
through a USB-C to USB-A host adapter. That is not a second
product line. Ember One and Mujina are the supported path.

## What else the board runs

The CM5 runs a full Linux system. Mining firmware is one program
on that system. A Bitcoin node, or a local Stratum pool such as
[Hydrapool](https://hydrapool.org), can run on the same board.

## See also

- [Revisions](/reference/revisions)
- [Design files](/reference/design-files)
- [Order from JLCPCB](/howto/order-from-jlcpcb)
