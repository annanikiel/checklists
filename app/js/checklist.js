/* =========================
   Checklist data
   ========================= */

const ALL_CHECKLISTS = {
  c150: {
    internal: {
      title: "Internal",
      subtitle: "Pre-flight cockpit checks",
      items: [
        { label: "Passenger brief", action: "IF NEEDED" },
        { label: "Seats", action: "ADJUSTED & LOCKED" },
        { label: "Hatches & Harnesses", action: "CLOSED & FASTENED" },
        { label: "Parking brake", action: "AS REQUIRED" },
        { label: "Heaters & air vents", action: "CHECK" },
        { label: "Instruments + Hobbs", action: "CHECK & NOTE" },
        { label: "Radios", action: "OFF" },
        { label: "Circuit breakers", action: "IN & SECURE" },
        { label: "Flight Controls", action: "FREE, FULL, CORRECT" },
        { label: "Trim", action: "FREE, FULL, CORRECT + TO" }
      ]
    },

    start: {
      title: "Start",
      subtitle: "Engine start",
      items: [
        { label: "Cabin Air & Heater", action: "CLOSED" },
        { label: "Throttle friction", action: "OPERATE, SET LOOSE" },
        { label: "Throttle", action: "FULL, FREE, 1/2 INCH OPEN" },
        { label: "Mixture", action: "FULL, FREE, RICH" },
        { label: "Carburettor Heat", action: "FULL, FREE, COLD" },
        { label: "Master Switch", action: "ON" },
        { label: "Key", action: "IN" },
        { label: "Beacon", action: "ON" },
        { label: "Primer (if cold engine)", action: "PRIME & LOCK" },
        { label: "Lookout", action: "'CLEAR PROP'" },
        { label: "Magnetos", action: "BOTH" },
        { label: "Starter", action: "ENGAGE" },
        { label: "Memory items", action: "CARRY OUT" },
        { label: "Ammeter", action: "CHARGING" },
        { label: "Suction", action: "3-5 INCH" },
        { label: "Magnetos", action: "DROP, NO STOP" },
        { label: "Flaps", action: "UP, STAGES, SYMMETRY" },
        { label: "Instruments (QNH, DI, AI)", action: "SET" },
        { label: "Headset ANR", action: "SWITCH ON" },
        { label: "Radios", action: "TUNE, ATIS, CALL" }
      ]
    },

    power_checks: {
      title: "Power checks",
      subtitle: "Run-up checks",
      items: [
        { label: "Position", action: "INTO WIND" },
        { label: "Parking brake", action: "CONSIDER" },
        { label: "Throttle", action: "SET 1200rpm" },
        { label: "Fuel", action: "ON, SUFFICIENT" },
        { label: "Engine Ts & Ps", action: "IN THE GREEN" },
        { label: "Throttle", action: "SET 1700rpm, CHECK BRAKES HOLDING" },
        { label: "Carb Heat", action: "ON, DROP STEADY REVS, SET COLD" },
        { label: "Magnetos", action: "MAX DROP 125rpm, MAX DIFF 50rpm" },
        { label: "Engine Ts & Ps", action: "IN THE GREEN" },
        { label: "Ammeter", action: "CHARGING" },
        { label: "Suction", action: "3-5 INCH" },
        { label: "Throttle", action: "CLOSE, 500 - 700rpm" },
        { label: "Throttle", action: "SET 1200rpm" }
      ]
    },

    pre_takeoff: {
      title: "Pre-takeoff",
      subtitle: "Before departure",
      items: [
        { label: "Trim", action: "SET TO" },
        { label: "Throttle friction", action: "SET 'FINGER TIGHT'" },
        { label: "Mixture", action: "RICH" },
        { label: "Magnetos", action: "BOTH" },
        { label: "Pitot Heat", action: "AS REQUIERED" },
        { label: "Fuel", action: "ON, PRIMER LOCKED" },
        { label: "Flaps", action: "AS REQUIRED" },
        { label: "Hatches & Harnesses", action: "SECURE" },
        { label: "Carb Heat", action: "COLD" },
        { label: "Controls", action: "FULL, FREE" },
        { label: "Transponder", action: "SET ALT" },
        { label: "Lights", action: "AS REQUIRED" }
      ]
    },

    after_landing: {
      title: "After landing",
      subtitle: "Clear runway and tidy up",
      items: [
        { label: "Runway vacated", action: "STOP, SET 1200rpm" },
        { label: "Carb heat", action: "COLD" },
        { label: "Pitot heat", action: "OFF" },
        { label: "Flaps", action: "UP" },
        { label: "Trim", action: "NEUTRAL" },
        { label: "Throttle friction", action: "LOOSE" },
        { label: "Electrics", action: "NON-ESSENTIAL OFF" },
        { label: "Transponder", action: "AS REQUIRED" },
        { label: "Radios", action: "NON-ESSENTIAL OFF" },
      ]
    },

    fuelling: {
      title: "Fuelling",
      subtitle: "Engine shutdown for refuelling",
      items: [
        { label: "Throttle", action: "SET 1200 rpm" },
        { label: "Magnetos", action: "CHECK" },
        { label: "Radios", action: "OFF" },
        { label: "Mixture", action: "IDLE CUT OFF" },
        { label: "Magnetos", action: "OFF, KEY OUT" },
        { label: "Electrics", action: "OFF" },
        { label: "Master switch", action: "OFF" },
        { label: "Fuel", action: "OFF" }
      ]
    },

    shutdown: {
      title: "Shutdown",
      subtitle: "Secure aircraft",
      items: [
        { label: "Position", action: "INTO WIND" },
        { label: "Parking brake", action: "AS REQUIRED" },
        { label: "Throttle", action: "SET 1200rpm" },
        { label: "Magnetos", action: "CHECK (NOTE DROP)" },
        { label: "Radios", action: "OFF" },
        { label: "Mixture", action: "IDLE CUT OFF" },
        { label: "Magnetos", action: "OFF, KEY OUT" },
        { label: "Electrics", action: "OFF" },
        { label: "Master switch", action: "OFF" },
        { label: "Fuel", action: "OFF" },
        { label: "Hobbs", action: "NOTE" },
        { label: "Hatches & Harnesses", action: "TIDY & SECURE" },
        { label: "Aircraft", action: "SECURE, CONTROL LOCK" },
      ]
    }
  },

  pa28: {
    preflight: {
      title: "Preflight",
      subtitle: "External pre-flight checks",
      items: [
        { label: "Flaps",             action: "DOWN" },
        { label: "Avionics",          action: "OFF" },
        { label: "Parking brake",     action: "ON" },
        { label: "Magnetos",          action: "OFF" },
        { label: "Master switch",     action: "ON" },
        { label: "Annunciator panel", action: "CHECK" },
        { label: "Fuel",              action: "ON LOWER" },
        { label: "Window",            action: "OPEN" },
        { label: "Lights & Pitot",    action: "ON & CHECK" },
        { label: "Stall warner",      action: "CHECK" },
        { label: "Switches",          action: "OFF" },
        { label: "Master switch",     action: "OFF" },
      ]
    },

    internal: {
      title: "Internal",
      subtitle: "Pre-flight cockpit checks",
      items: [
        { label: "Flaps",              action: "CHECK IN STAGES, SELECT UP" },
        { label: "Passenger brief",    action: "IF REQUIRED" },
        { label: "Seats",              action: "ADJUSTED & LOCKED" },
        { label: "Hatches & Harnesses", action: "SECURE" },
        { label: "Instruments",        action: "CHECKED & QNH" },
        { label: "Radios",             action: "OFF" },
        { label: "Circuit breakers",   action: "IN & SECURE" },
        { label: "Flight controls",    action: "FREE, FULL, CORRECT" },
        { label: "Trim",               action: "FREE, FULL, CORRECT" },
        { label: "Cabin air",          action: "OFF" },
        { label: "Fuel",               action: "ON LOWEST" },
      ]
    },

    start: {
      title: "Start",
      subtitle: "Engine start",
      items: [
        { label: "Throttle friction",    action: "LOOSE" },
        { label: "Throttle",             action: "FREE, FULL, 1/2 INCH OPEN" },
        { label: "Mixture",              action: "FREE, FULL, SET RICH" },
        { label: "Carb heat",            action: "FREE, FULL, SET COLD" },
        { label: "Master switch",        action: "ON" },
        { label: "Key",                  action: "IN" },
        { label: "Beacon",               action: "ON" },
        { label: "Primer",               action: "IF NEEDED (5 STROKES) & LOCK" },
        { label: "Fuel pump",            action: "ON & CHECK PRESSURE" },
        { label: "Fuel pump",            action: "OFF" },
        { label: "Lookout",              action: "'CLEAR PROP'" },
        { label: "Starter",              action: "ENGAGE" },
        { label: "Memory items",         action: "CARRY OUT" },
        { label: "Alternator & Ammeter", action: "CHARGING" },
        { label: "Suction",              action: "REGISTERING" },
        { label: "Magnetos",             action: "DROP, NO STOP" },
        { label: "Instruments",          action: "SET (QNH, DI, AI)" },
        { label: "Radios",               action: "TUNE, CHECK, ATIS, CALL" },
      ]
    },

    power_checks: {
      title: "Power checks",
      subtitle: "Run-up checks",
      items: [
        { label: "Position",       action: "INTO WIND, CLEAR BEHIND" },
        { label: "Parking brake",  action: "ON" },
        { label: "Throttle",       action: "1200RPM" },
        { label: "Fuel",           action: "ON FULLER TANK" },
        { label: "Engine T&P",     action: "IN THE GREEN" },
        { label: "Throttle",       action: "SET 2000RPM, BRAKES HOLDING" },
        { label: "Carb heat",      action: "ON, DROP 75RPM, STEADY, SET COLD" },
        { label: "Magnetos",       action: "L & R, MAX 175RPM, 50RPM MAX DIFF" },
        { label: "Engine T&P",     action: "IN THE GREEN" },
        { label: "Ammeter",        action: "CHARGING" },
        { label: "Suction",        action: "3-5 INCH" },
        { label: "Close throttle", action: "500-700RPM" },
        { label: "Throttle",       action: "RESET 1200RPM" },
      ]
    },

    pre_takeoff: {
      title: "Pre-takeoff",
      subtitle: "Before departure",
      items: [
        { label: "Trim", action: "SET TO" },
        { label: "Throttle friction", action: "SET 'FINGER TIGHT'" },
        { label: "Mixture", action: "RICH" },
        { label: "Magnetos", action: "BOTH" },
        { label: "Pitot Heat", action: "AS REQUIERED" },
        { label: "Fuel", action: "ON, PRIMER LOCKED" },
        { label: "Flaps", action: "AS REQUIRED" },
        { label: "Hatches & Harnesses", action: "SECURE" },
        { label: "Carb Heat", action: "COLD" },
        { label: "Controls", action: "FULL, FREE" },
        { label: "Transponder", action: "SET ALT" },
        { label: "Lights", action: "AS REQUIRED" }
      ]
    },

    after_landing: {
      title: "After landing",
      subtitle: "Clear runway and tidy up",
      items: [
        { label: "Runway vacated", action: "STOP, SET 1200rpm" },
        { label: "Carb heat", action: "COLD" },
        { label: "Pitot heat", action: "OFF" },
        { label: "Flaps", action: "UP" },
        { label: "Trim", action: "NEUTRAL" },
        { label: "Throttle friction", action: "LOOSE" },
        { label: "Electrics", action: "NON-ESSENTIAL OFF" },
        { label: "Transponder", action: "AS REQUIRED" },
        { label: "Radios", action: "NON-ESSENTIAL OFF" },
      ]
    },

    fuelling: {
      title: "Fuelling",
      subtitle: "Engine shutdown for refuelling",
      items: [
        { label: "Throttle", action: "SET 1200 rpm" },
        { label: "Magnetos", action: "CHECK" },
        { label: "Radios", action: "OFF" },
        { label: "Mixture", action: "IDLE CUT OFF" },
        { label: "Magnetos", action: "OFF, KEY OUT" },
        { label: "Electrics", action: "OFF" },
        { label: "Master switch", action: "OFF" },
        { label: "Fuel", action: "OFF" }
      ]
    },

    shutdown: {
      title: "Shutdown",
      subtitle: "Secure aircraft",
      items: [
        { label: "Position", action: "INTO WIND" },
        { label: "Parking brake", action: "AS REQUIRED" },
        { label: "Throttle", action: "SET 1200rpm" },
        { label: "Magnetos", action: "CHECK (NOTE DROP)" },
        { label: "Radios", action: "OFF" },
        { label: "Mixture", action: "IDLE CUT OFF" },
        { label: "Magnetos", action: "OFF, KEY OUT" },
        { label: "Electrics", action: "OFF" },
        { label: "Master switch", action: "OFF" },
        { label: "Fuel", action: "OFF" },
        { label: "Hobbs", action: "NOTE" },
        { label: "Hatches & Harnesses", action: "TIDY & SECURE" },
        { label: "Aircraft", action: "SECURE, CONTROL LOCK" },
      ]
    }
  }
};

const aircraft = localStorage.getItem('current_aircraft') || 'c150';
const CHECKLISTS = ALL_CHECKLISTS[aircraft];

const CHECKLIST_SEQUENCES = {
  c150: ["internal", "start", "power_checks", "pre_takeoff", "after_landing", "fuelling", "shutdown"],
  pa28: ["preflight", "internal", "start", "power_checks", "pre_takeoff", "after_landing", "fuelling", "shutdown"],
};
const CHECKLIST_SEQUENCE = CHECKLIST_SEQUENCES[aircraft] || CHECKLIST_SEQUENCES.c150;

/* =========================
   Helpers
   ========================= */

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function createItem({ label, action }, checklistName, itemIndex) {
  const row = document.createElement("div");
  row.className = "item";

   row.innerHTML = `
     <div class="right">
       <input type="checkbox" aria-label="${label} – ${action}">
     </div>
     <div class="left">
       <div class="label">${label}</div>
       <div class="action">${action}</div>
     </div>
   `;

  const checkbox = row.querySelector("input");

  function sync() {
    row.classList.toggle("done", checkbox.checked);
  }

  checkbox.addEventListener("change", () => {
    sync();
    const key = `checklist_${aircraft}_${checklistName}`;
    const state = JSON.parse(localStorage.getItem(key) || '{}');
    state[itemIndex] = checkbox.checked;
    localStorage.setItem(key, JSON.stringify(state));
  });

  // Tap anywhere on row toggles checkbox
  row.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") return;
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event("change"));
  });

  sync();
  return row;
}

function renderNextLink(currentName) {
  const wrap = document.getElementById("nextWrap");
  if (!wrap) return;

  const idx = CHECKLIST_SEQUENCE.indexOf(currentName);
  if (idx === -1) {
    wrap.innerHTML = "";
    return;
  }

  // Special case: after_landing has two next options (fuelling or shutdown)
  if (currentName === "after_landing") {
    wrap.innerHTML = `
      <a class="card" href="checklist.html?name=fuelling">
        <strong>Next: Fuelling</strong><br/>
        <small>Shutdown for refuelling</small>
      </a>
      <a class="card" href="checklist.html?name=shutdown">
        <strong>Next: Shutdown</strong><br/>
        <small>Secure the aircraft</small>
      </a>
    `;
    return;
  }

  // Special case: fuelling goes to shutdown with "from" parameter
  if (currentName === "fuelling") {
    wrap.innerHTML = `
      <a class="card" href="checklist.html?name=shutdown&from=fuelling">
        <strong>Next: Shutdown</strong><br/>
        <small>Secure the aircraft</small>
      </a>
    `;
    return;
  }

  const nextName = CHECKLIST_SEQUENCE[idx + 1];
  if (!nextName || !CHECKLISTS[nextName]) {
    wrap.innerHTML = `<a class="card" href="checklists.html"><strong>Back to checklists</strong></a>`;
    return;
  }

  const nextTitle = CHECKLISTS[nextName].title;

  wrap.innerHTML = `
    <a class="card" href="checklist.html?name=${encodeURIComponent(nextName)}">
      <strong>Next: ${nextTitle}</strong><br/>
      <small>Continue to the next checklist</small>
    </a>
  `;
}

/* =========================
   Initialise
   ========================= */

const name = qs("name");
const from = qs("from");
const checklist = CHECKLISTS[name];

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const listEl = document.getElementById("checklist");
const resetBtn = document.getElementById("resetBtn");

if (!checklist) {
  titleEl.textContent = "Checklist not found";
  subtitleEl.textContent = "";
  listEl.innerHTML = "<p class='hint'>Unknown checklist.</p>";
} else {
  titleEl.textContent = checklist.title;
  subtitleEl.textContent = checklist.subtitle;

  checklist.items.forEach((item, index) => {
    listEl.appendChild(createItem(item, name, index));
  });

  // Restore saved state, or fall back to fuelling→shutdown pre-population
  const savedState = JSON.parse(localStorage.getItem(`checklist_${aircraft}_${name}`) || '{}');
  const hasSavedState = Object.keys(savedState).length > 0;
  const checkboxes = listEl.querySelectorAll("input[type='checkbox']");

  if (hasSavedState) {
    checkboxes.forEach((cb, i) => {
      if (savedState[i]) {
        cb.checked = true;
        cb.dispatchEvent(new Event("change"));
      }
    });
  } else if (name === "shutdown" && from === "fuelling") {
    const fuellingState = JSON.parse(localStorage.getItem(`checklist_${aircraft}_fuelling`) || '{}');

    const mapping = {
      0: 2,  // Throttle
      1: 3,  // Magnetos CHECK
      2: 4,  // Radios
      3: 5,  // Mixture
      4: 6,  // Magnetos OFF
      5: 7,  // Electrics OFF
      6: 8,  // Master switch
      7: 9   // Fuel
    };

    Object.entries(mapping).forEach(([fuelIdx, shutdownIdx]) => {
      if (fuellingState[fuelIdx]) {
        checkboxes[shutdownIdx].checked = true;
        checkboxes[shutdownIdx].dispatchEvent(new Event("change"));
      }
    });
  }

  renderNextLink(name);
}

resetBtn.addEventListener("click", () => {
  listEl.querySelectorAll("input[type='checkbox']").forEach(cb => {
    cb.checked = false;
    cb.dispatchEvent(new Event("change"));
  });
});
