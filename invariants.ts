// State Invariants for DB Drill Multi V3
// This file documents the invariants that must hold for each state in the state machine.
// Invariants are conditions over the global variables that are true throughout each state.

// General Invariants (hold in all states):
// - mode ∈ {0, 1}
// - device_number ≥ 0
// - num_devices ≥ 1
// - running ∈ {true, false}
// - classed ∈ {0, 1, 2}
// - answered ∈ {true, false}
// - pressed ∈ {0, 1, 2}
// - mode_switch ∈ {0, 1, 2, 3}

// PlayerIdle State:
// - mode == 0
// - running == false
// - answered == false
// - mode_switch == 0
// - Device is showing Surprised icon
// - Waiting for inputs: long press logo, receive radio number, or long press A+B

// PlayerSettingDevice State:
// - mode == 0
// - running == false
// - Device is showing device_number
// - Transition back to PlayerIdle after showing number

// PlayerWaiting State:
// - mode == 0
// - running == true
// - answered == false
// - Device is showing classed (0, 1, or 2)
// - react_start is set to current time
// - Waiting for touch pin press (P0, P1, P2)

// PlayerFeedback State:
// - mode == 0
// - running == false (set after press)
// - answered == true initially, then set to false
// - pressed == the pin pressed (0 for P0, 1 for P1, 2 for P2)
// - react_sum updated with reaction time
// - Device shows Yes icon if pressed == classed, No otherwise
// - Sends radio value ("correct" or "wrong") with react_sum

// HostIdle State:
// - mode == 1
// - running == false
// - Device is showing T-Shirt icon
// - Waiting for inputs: long press logo or press A

// HostSettingDevices State:
// - mode == 1
// - running == false
// - Device is showing num_devices
// - Transition back to HostIdle after showing number

// HostRunning State:
// - mode == 1
// - running == true
// - react_start is set to current time
// - number_picked is set to a random number (0 to num_devices*3 - 1)
// - Sends radio number (number_picked)
// - Collects radio values from players
// - Updates score and react_sum based on received values
// - Continues sending new numbers until 15 seconds elapsed

// HostResults State:
// - mode == 1
// - running == false
// - Device shows "Time", then score, then average reaction time (react_sum / score / 1000)
// - Transition back to HostIdle after displaying results

// Transition Invariants:
// - From PlayerIdle to HostIdle: mode_switch reaches 3 (long press A+B for 3 seconds)
// - Other transitions as per state diagram