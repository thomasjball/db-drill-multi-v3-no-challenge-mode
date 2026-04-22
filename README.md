
> Open this page at [https://tiilt-lab-code.github.io/db-drill-multi-v3-no-challenge-mode/](https://tiilt-lab-code.github.io/db-drill-multi-v3-no-challenge-mode/)

## Overview

**DB Drill Multi V3** is a classification drill game for BBC MicroBit devices that measures reaction time and accuracy across multiple participants. The program supports a host/participant architecture where one device acts as the controller and multiple devices act as players attempting to classify items quickly and accurately.

## How It Works

### Two Modes of Operation

**Mode 0: Player Mode** (Default)
- Players respond to classification challenges sent from the host
- Three touch buttons (P0, P1, P2) represent three classification options
- The device displays which class (0, 1, or 2) the player must classify
- Player presses the corresponding touch button to respond
- Reaction time and accuracy are tracked and sent back to the host
- Long press the logo button to set your device number
- Icon display: Surprised face while waiting for the host to start

**Mode 1: Host Mode**
- Controller device that sends classification challenges to all player devices
- Press Button A to start a 15-second drill round
- Automatically generates random classification problems (3 options per device)
- Collects scores and reaction times from all players
- Displays final scores and average reaction time after the round completes
- Set number of connected devices by long pressing the logo button
- Icon display: T-Shirt while in host mode

### Setup

1. **Configure Device Numbers:**
   - In Mode 0, long press the logo button to cycle through device numbers (0-2)
   - Device numbers must be unique for each player
   - Host device should also have a device number set

2. **Set Host Device:**
   - Long press Button A + B together for 3 seconds on the host device to switch from Mode 0 to Mode 1
   - The device will show a T-Shirt icon when in host mode

3. **Configure Number of Devices:**
   - In Mode 1, long press the logo button to set the total number of connected player devices
   - This helps the host know how many responses to expect

### Gameplay

1. Host presses Button A to start a round
2. Players see a number (0, 1, or 2) displayed on their device
3. Players press the corresponding touch pin (P0, P1, or P2) as quickly as possible
4. Correct answers add +1 to score, incorrect answers add -1
5. After 15 seconds, the host displays:
   - "Time" message
   - Final score (number of correct - incorrect responses)
   - Average reaction time in seconds across all responses

### Radio Configuration

All devices use radio group **108** for communication. Devices on the same radio group will communicate with each other.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/tiilt-lab-code/db-drill-multi-v3-no-challenge-mode** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/tiilt-lab-code/db-drill-multi-v3-no-challenge-mode** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
