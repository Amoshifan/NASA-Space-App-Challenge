
/* ==========================================
   LUNAR & MARTIAN TIME CAPSULE
   Version 1 - Website functionality
   NASA public Images API - no paid API key
========================================== */

const NASA_IMAGE_API = "https://images-api.nasa.gov/search";

const objects = [
  // MOON OBJECTS
  {
    id: 1,
    name: "Apollo 11 Lunar Laser Ranging Retroreflector",
    planet: "Moon",
    year: "1969",
    mission: "Apollo 11",
    category: "Scientific Instrument",
    query: "Apollo 11 lunar laser ranging retroreflector",
    purpose: "A scientific reflector array deployed on the lunar surface to reflect laser pulses sent from Earth.",
    reason: "It was designed to remain on the Moon as a long-term scientific instrument rather than return to Earth.",
    legacy: "Retroreflectors have supported precise measurements of the Earth-Moon distance and tests of gravitational physics.",
    evidence: "NASA mission documentation identifies the Apollo 11 retroreflector. Confirm the specific observation history and current operational status against current NASA records.",
    source: "https://science.nasa.gov/moon/"
  },
  {
    id: 2,
    name: "Apollo 11 Lunar Module Descent Stage",
    planet: "Moon",
    year: "1969",
    mission: "Apollo 11",
    category: "Landing Hardware",
    query: "Apollo 11 lunar module descent stage Tranquility Base",
    purpose: "The descent stage of the Lunar Module transported astronauts from lunar orbit to the surface.",
    reason: "It remained on the Moon after the ascent stage carried the astronauts back to lunar orbit.",
    legacy: "It is a historic physical remnant of the first crewed lunar landing.",
    evidence: "Apollo 11 mission records document the Lunar Module landing and ascent. The object is included in NASA's lunar human-made material catalogue.",
    source: "https://history.nasa.gov/FINAL%20Catalogue%20of%20Manmade%20Material%20on%20the%20Moon.pdf"
  },
  {
    id: 3,
    name: "Surveyor 3 Lander",
    planet: "Moon",
    year: "1967",
    mission: "Surveyor 3",
    category: "Landing Hardware",
    query: "Surveyor 3 spacecraft lunar surface",
    purpose: "Surveyor 3 investigated the lunar surface and demonstrated technologies needed for future crewed landings.",
    reason: "The lander remained at its landing site after completing its mission.",
    legacy: "Apollo 12 astronauts visited the lander in 1969 and returned selected components to Earth for examination.",
    evidence: "NASA mission history documents the landing and Apollo 12 visit. The returned components should not be confused with hardware that remains on the Moon.",
    source: "https://science.nasa.gov/moon/"
  },
  {
    id: 4,
    name: "Apollo 12 Lunar Module Descent Stage",
    planet: "Moon",
    year: "1969",
    mission: "Apollo 12",
    category: "Landing Hardware",
    query: "Apollo 12 lunar module Intrepid descent stage",
    purpose: "Provided the platform and propulsion system for the crew's descent to the lunar surface.",
    reason: "The ascent stage departed the Moon while the descent stage remained behind.",
    legacy: "It forms part of the surviving hardware associated with the second crewed lunar landing.",
    evidence: "Apollo 12 mission records and the NASA lunar material catalogue provide the research basis.",
    source: "https://history.nasa.gov/FINAL%20Catalogue%20of%20Manmade%20Material%20on%20the%20Moon.pdf"
  },
  {
    id: 5,
    name: "Apollo 14 Lunar Module Descent Stage",
    planet: "Moon",
    year: "1971",
    mission: "Apollo 14",
    category: "Landing Hardware",
    query: "Apollo 14 lunar module Antares descent stage",
    purpose: "Supported the lunar landing and provided the base for the ascent stage.",
    reason: "The ascent stage departed after the mission, leaving the descent stage on the lunar surface.",
    legacy: "It is part of the historical record of human exploration in the Fra Mauro region.",
    evidence: "Mission identity and hardware association are documented in Apollo mission records.",
    source: "https://history.nasa.gov/FINAL%20Catalogue%20of%20Manmade%20Material%20on%20the%20Moon.pdf"
  },
  {
    id: 6,
    name: "Apollo 15 Lunar Module Descent Stage",
    planet: "Moon",
    year: "1971",
    mission: "Apollo 15",
    category: "Landing Hardware",
    query: "Apollo 15 Falcon lunar module descent stage",
    purpose: "Delivered astronauts and equipment to the Hadley-Apennine landing region.",
    reason: "The descent stage remained after the ascent stage departed.",
    legacy: "It is associated with the first Apollo mission to use the Lunar Roving Vehicle.",
    evidence: "Apollo 15 mission records and lunar surface imagery provide supporting evidence.",
    source: "https://history.nasa.gov/alsj/a15/a15.html"
  },
  {
    id: 7,
    name: "Apollo 16 Lunar Module Descent Stage",
    planet: "Moon",
    year: "1972",
    mission: "Apollo 16",
    category: "Landing Hardware",
    query: "Apollo 16 Orion lunar module descent stage",
    purpose: "Supported the crewed landing in the lunar highlands.",
    reason: "It remained on the surface after the ascent stage left.",
    legacy: "It is a surviving remnant of the fifth crewed lunar landing.",
    evidence: "Apollo 16 mission documentation records the landing and Lunar Module operations.",
    source: "https://history.nasa.gov/alsj/a16/a16.html"
  },
  {
    id: 8,
    name: "Apollo 17 Lunar Module Descent Stage",
    planet: "Moon",
    year: "1972",
    mission: "Apollo 17",
    category: "Landing Hardware",
    query: "Apollo 17 Challenger lunar module descent stage",
    purpose: "Provided the landing platform for the final Apollo lunar surface mission.",
    reason: "The ascent stage departed, leaving the descent stage on the lunar surface.",
    legacy: "It is part of the heritage of the last crewed Apollo landing.",
    evidence: "Apollo 17 mission records and NASA's lunar material catalogue document the mission hardware.",
    source: "https://history.nasa.gov/alsj/a17/a17.html"
  },
  {
    id: 9,
    name: "Apollo 15 Lunar Roving Vehicle",
    planet: "Moon",
    year: "1971",
    mission: "Apollo 15",
    category: "Rover",
    query: "Apollo 15 lunar roving vehicle moon",
    purpose: "Transported astronauts across the lunar surface, increasing the range of geological exploration.",
    reason: "The rover was left at the landing site after the mission.",
    legacy: "It demonstrated the value of crewed surface mobility and expanded lunar field exploration.",
    evidence: "Apollo 15 mission records and lunar surface photographs document the rover.",
    source: "https://history.nasa.gov/alsj/a15/a15.html"
  },
  {
    id: 10,
    name: "Apollo 17 Lunar Roving Vehicle",
    planet: "Moon",
    year: "1972",
    mission: "Apollo 17",
    category: "Rover",
    query: "Apollo 17 lunar roving vehicle moon",
    purpose: "Enabled astronauts to travel across a wider area of the Taurus-Littrow region.",
    reason: "It remained at the landing site after the crew returned to lunar orbit.",
    legacy: "Its mission contributed to the geological exploration and sampling of the Moon.",
    evidence: "Apollo 17 mission records document rover operations and the final lunar surface mission.",
    source: "https://history.nasa.gov/alsj/a17/a17.html"
  },

  // MARS OBJECTS
  {
    id: 11,
    name: "Mars Pathfinder Lander",
    planet: "Mars",
    year: "1997",
    mission: "Mars Pathfinder",
    category: "Landing Hardware",
    query: "NASA Mars Pathfinder lander Ares Vallis",
    purpose: "Delivered a lander and the Sojourner rover to Mars to study its surface and demonstrate landing technologies.",
    reason: "The stationary lander remained at its landing site after communications ended.",
    legacy: "Pathfinder demonstrated a successful low-cost Mars landing approach and robotic surface exploration.",
    evidence: "NASA mission records identify the landing site and the mission's surface operations.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    id: 12,
    name: "Sojourner Rover",
    planet: "Mars",
    year: "1997",
    mission: "Mars Pathfinder",
    category: "Rover",
    query: "NASA Sojourner rover Mars Pathfinder",
    purpose: "Investigated Martian rocks and soil as the first successful rover to operate on Mars.",
    reason: "The rover remained on Mars when the Pathfinder mission ended.",
    legacy: "It demonstrated the potential of mobile robotic exploration on another planet.",
    evidence: "NASA's Pathfinder mission history documents Sojourner's design, operations and scientific work.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    id: 13,
    name: "Viking 1 Lander",
    planet: "Mars",
    year: "1976",
    mission: "Viking 1",
    category: "Landing Hardware",
    query: "NASA Viking 1 Mars lander surface",
    purpose: "Conducted imaging, atmospheric observations and biological experiments on Mars.",
    reason: "The lander remained stationary after its mission operations ended.",
    legacy: "It provided some of the earliest detailed observations and experiments conducted on the Martian surface.",
    evidence: "NASA Viking mission records document the landing, experiments and mission operations.",
    source: "https://science.nasa.gov/mission/viking-1/"
  },
  {
    id: 14,
    name: "Viking 2 Lander",
    planet: "Mars",
    year: "1976",
    mission: "Viking 2",
    category: "Landing Hardware",
    query: "NASA Viking 2 Mars lander Utopia Planitia",
    purpose: "Investigated Martian soil, weather and surface conditions.",
    reason: "The lander remained at its landing site after its operational mission.",
    legacy: "It contributed to the first major long-duration surface investigation of Mars.",
    evidence: "NASA Viking mission records identify the lander and its scientific operations.",
    source: "https://science.nasa.gov/mission/viking-2/"
  },
  {
    id: 15,
    name: "Spirit Rover",
    planet: "Mars",
    year: "2004",
    mission: "Mars Exploration Rover",
    category: "Rover",
    query: "NASA Spirit rover Mars Columbia Hills",
    purpose: "Investigated Martian geology, rocks and evidence of past water activity.",
    reason: "The rover became immobilised and later lost communication after an extended mission.",
    legacy: "Spirit provided evidence of ancient water-related processes and greatly exceeded its original planned mission duration.",
    evidence: "NASA's Mars Exploration Rover mission archive documents Spirit's discoveries and mission conclusion.",
    source: "https://science.nasa.gov/mission/mer-spirit/"
  },
  {
    id: 16,
    name: "Opportunity Rover",
    planet: "Mars",
    year: "2004",
    mission: "Mars Exploration Rover",
    category: "Rover",
    query: "NASA Opportunity rover Mars Endeavour crater",
    purpose: "Studied Martian geology and searched for evidence of past water activity.",
    reason: "A global dust storm in 2018 prevented the rover from restoring sufficient power, and the mission was declared complete in 2019.",
    legacy: "Opportunity operated for nearly 15 years and travelled approximately 45 kilometres, far beyond its original planned mission.",
    evidence: "NASA's mission archive documents its discoveries, distance travelled and final communications.",
    source: "https://science.nasa.gov/mission/mer-opportunity/"
  },
  {
    id: 17,
    name: "Perseverance Landing Parachute",
    planet: "Mars",
    year: "2021",
    mission: "Mars 2020 Perseverance",
    category: "Landing Hardware",
    query: "NASA Perseverance Mars parachute landing debris",
    purpose: "Slowed the spacecraft during atmospheric entry and descent.",
    reason: "The parachute was released during the landing sequence and remained on Mars.",
    legacy: "Its deployment and design are part of the engineering record of precision Mars landings.",
    evidence: "NASA's Mars 2020 landing documentation and descent imagery provide evidence of the parachute deployment.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
  },
  {
    id: 18,
    name: "Perseverance Backshell",
    planet: "Mars",
    year: "2021",
    mission: "Mars 2020 Perseverance",
    category: "Landing Hardware",
    query: "NASA Perseverance backshell Mars landing site",
    purpose: "Protected the spacecraft during its journey through the Martian atmosphere and supported the parachute system.",
    reason: "It separated during the descent sequence and landed away from the rover.",
    legacy: "It provides a visible example of the engineering systems required for safe robotic planetary landings.",
    evidence: "NASA landing imagery and mission records document the backshell's role in the descent sequence.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
  },
  {
    id: 19,
    name: "Perseverance Heat Shield",
    planet: "Mars",
    year: "2021",
    mission: "Mars 2020 Perseverance",
    category: "Landing Hardware",
    query: "NASA Perseverance heat shield Mars impact",
    purpose: "Protected the spacecraft from intense heating during atmospheric entry.",
    reason: "It was jettisoned before the parachute and powered descent stages completed the landing sequence.",
    legacy: "It demonstrates the thermal protection engineering required for Mars exploration.",
    evidence: "NASA Mars 2020 mission records and landing sequence imagery document the heat shield.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
  },
  {
    id: 20,
    name: "Perseverance Descent Stage",
    planet: "Mars",
    year: "2021",
    mission: "Mars 2020 Perseverance",
    category: "Mission Infrastructure",
    query: "NASA Perseverance sky crane descent stage Mars",
    purpose: "Used rocket propulsion and the sky crane manoeuvre to lower Perseverance onto the Martian surface.",
    reason: "After lowering the rover, the descent stage flew away and crashed at a distance from the landing site.",
    legacy: "It represents a major engineering achievement in precision robotic landing technology.",
    evidence: "NASA's Mars 2020 landing sequence documents the sky crane manoeuvre. The exact debris location requires separate image-based verification.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
  }
];


/* ==========================================
   PHASE 9.1 — LUNAR LANDING SITE DATA
========================================== */

const moonSites = [
  {
    id: "apollo11",
    name: "Apollo 11 Landing Site",
    mission: "Apollo 11",
    year: 1969,
    latitude: 0.674,
    longitude: 23.473,
    type: "apollo",
    description:
      "Tranquility Base: the site of humanity's first crewed lunar landing.",
    objectIds: [1, 2]
  },
  {
    id: "surveyor3",
    name: "Surveyor 3 Landing Site",
    mission: "Surveyor 3",
    year: 1967,
    latitude: -2.94,
    longitude: -23.42,
    type: "robotic",
    description:
      "The robotic Surveyor 3 lander was later visited by Apollo 12 astronauts.",
    objectIds: [3]
  },
  {
    id: "apollo12",
    name: "Apollo 12 Landing Site",
    mission: "Apollo 12",
    year: 1969,
    latitude: -3.013,
    longitude: -23.422,
    type: "apollo",
    description:
      "The Apollo 12 crew landed near Surveyor 3 in the Ocean of Storms.",
    objectIds: [4]
  },
  {
    id: "apollo14",
    name: "Apollo 14 Landing Site",
    mission: "Apollo 14",
    year: 1971,
    latitude: -3.645,
    longitude: -17.471,
    type: "apollo",
    description:
      "The Antares lunar module landed in the Fra Mauro region.",
    objectIds: [5]
  },
  {
    id: "apollo15",
    name: "Apollo 15 Landing Site",
    mission: "Apollo 15",
    year: 1971,
    latitude: 26.132,
    longitude: 3.634,
    type: "apollo",
    description:
      "The Falcon lunar module landed in the Hadley-Apennine region.",
    objectIds: [6, 9]
  },
  {
    id: "apollo16",
    name: "Apollo 16 Landing Site",
    mission: "Apollo 16",
    year: 1972,
    latitude: -8.973,
    longitude: 15.501,
    type: "apollo",
    description:
      "The Orion lunar module landed in the lunar highlands at Descartes.",
    objectIds: [7]
  },
  {
    id: "apollo17",
    name: "Apollo 17 Landing Site",
    mission: "Apollo 17",
    year: 1972,
    latitude: 20.191,
    longitude: 30.772,
    type: "apollo",
    description:
      "The Challenger lunar module landed in the Taurus-Littrow valley.",
    objectIds: [8, 10]
  }
];

/* ==========================================
   MOON MAP FUNCTIONS
========================================== */

function moonCoordinatesToMap(latitude, longitude) {
  const x = ((longitude + 180) / 360) * 1000;
  const y = ((90 - latitude) / 180) * 500;

  return { x, y };
}

function renderMoonMap() {
  const markerGroup = document.getElementById("moonMarkers");

  if (!markerGroup) return;

  markerGroup.innerHTML = "";

  moonSites.forEach(site => {
    const { x, y } = moonCoordinatesToMap(
      site.latitude,
      site.longitude
    );

    const marker = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );

    marker.setAttribute(
      "class",
      `moon-marker ${site.type}-marker`
    );

    marker.setAttribute("transform", `translate(${x}, ${y})`);
    marker.setAttribute("tabindex", "0");
    marker.setAttribute("role", "button");
    marker.setAttribute("aria-label", site.name);

    marker.innerHTML = `
      <circle class="marker-halo" r="11"></circle>
      <circle class="marker-core" r="5"></circle>
      <text x="14" y="-12">${site.mission}</text>
    `;

    marker.addEventListener("click", () => {
      selectMoonSite(site.id);
    });

    marker.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMoonSite(site.id);
      }
    });

    markerGroup.appendChild(marker);
  });
}

/* =====================================================
   PHASE 9.2 — MARS LANDING SITE DATA
===================================================== */

const marsSites = [
  {
    id: "viking1",
    name: "Viking 1 Landing Site",
    mission: "Viking 1",
    year: 1976,
    region: "Chryse Planitia",
    latitude: 22.269,
    longitude: 312.049,
    type: "robotic",
    description:
      "Viking 1 became the first U.S. spacecraft to complete a fully successful landing on Mars. Its lander studied the Martian surface, atmosphere and environment.",
    objectIds: [13]
  },

  {
    id: "viking2",
    name: "Viking 2 Landing Site",
    mission: "Viking 2",
    year: 1976,
    region: "Utopia Planitia",
    latitude: 47.668,
    longitude: 134.280,
    type: "robotic",
    description:
      "Viking 2 landed in Utopia Planitia and conducted surface imaging, atmospheric measurements and biological experiments.",
    objectIds: [14]
  },

  {
    id: "pathfinder",
    name: "Mars Pathfinder Landing Site",
    mission: "Mars Pathfinder",
    year: 1997,
    region: "Ares Vallis",
    latitude: 19.095,
    longitude: 326.747,
    type: "robotic",
    description:
      "Mars Pathfinder demonstrated a low-cost landing system using airbags. It deployed Sojourner, the first successful wheeled rover to operate on Mars.",
    objectIds: [11, 12]
  },

  {
    id: "spirit",
    name: "Spirit Landing Site",
    mission: "Mars Exploration Rover — Spirit",
    year: 2004,
    region: "Gusev Crater",
    latitude: -14.572,
    longitude: 175.478,
    type: "rover",
    description:
      "Spirit explored Gusev Crater, investigating rocks, soils and geological evidence of past water activity.",
    objectIds: [15]
  },

  {
    id: "opportunity",
    name: "Opportunity Landing Site",
    mission: "Mars Exploration Rover — Opportunity",
    year: 2004,
    region: "Meridiani Planum",
    latitude: -1.948,
    longitude: 354.474,
    type: "rover",
    description:
      "Opportunity explored Meridiani Planum and discovered geological evidence that liquid water had once affected the Martian environment.",
    objectIds: [16]
  },

  {
    id: "perseverance",
    name: "Perseverance Landing Site",
    mission: "Mars 2020 — Perseverance",
    year: 2021,
    region: "Jezero Crater",
    latitude: 18.4,
    longitude: 77.5,
    type: "modern",
    description:
      "Perseverance landed in Jezero Crater to investigate ancient environments and collect samples. Its landing system left several identifiable components across the landing area.",
    objectIds: [17, 18, 19, 20]
  }
];

/* =====================================================
   PHASE 9.3 — INTERACTIVE EQUIPMENT DATA
===================================================== */

const equipmentLayouts = {
  moon: {
    apollo11: [
      {
        objectId: 1,
        label: "Laser reflector",
        x: 32,
        y: 43,
        description: "The Apollo 11 Lunar Laser Ranging Retroreflector."
      },
      {
        objectId: 2,
        label: "Eagle descent stage",
        x: 68,
        y: 62,
        description: "The Apollo 11 Lunar Module descent stage left at Tranquility Base."
      }
    ],

    surveyor3: [
      {
        objectId: 3,
        label: "Surveyor 3",
        x: 50,
        y: 50,
        description: "The robotic Surveyor 3 lander, later visited by Apollo 12 astronauts."
      }
    ],

    apollo12: [
      {
        objectId: 4,
        label: "Intrepid stage",
        x: 50,
        y: 50,
        description: "The Apollo 12 Lunar Module descent stage."
      }
    ],

    apollo14: [
      {
        objectId: 5,
        label: "Antares stage",
        x: 50,
        y: 50,
        description: "The Apollo 14 Lunar Module descent stage."
      }
    ],

    apollo15: [
      {
        objectId: 6,
        label: "Falcon stage",
        x: 32,
        y: 55,
        description: "The Apollo 15 Lunar Module descent stage."
      },
      {
        objectId: 9,
        label: "Lunar rover",
        x: 70,
        y: 40,
        description: "The Apollo 15 Lunar Roving Vehicle."
      }
    ],

    apollo16: [
      {
        objectId: 7,
        label: "Orion stage",
        x: 50,
        y: 50,
        description: "The Apollo 16 Lunar Module descent stage."
      }
    ],

    apollo17: [
      {
        objectId: 8,
        label: "Challenger stage",
        x: 32,
        y: 55,
        description: "The Apollo 17 Lunar Module descent stage."
      },
      {
        objectId: 10,
        label: "Lunar rover",
        x: 70,
        y: 40,
        description: "The Apollo 17 Lunar Roving Vehicle."
      }
    ]
  },

  mars: {
    viking1: [
      {
        objectId: 13,
        label: "Viking 1 lander",
        x: 50,
        y: 50,
        description: "The Viking 1 stationary Mars lander."
      }
    ],

    viking2: [
      {
        objectId: 14,
        label: "Viking 2 lander",
        x: 50,
        y: 50,
        description: "The Viking 2 stationary Mars lander."
      }
    ],

    pathfinder: [
      {
        objectId: 11,
        label: "Pathfinder",
        x: 33,
        y: 52,
        description: "The Mars Pathfinder lander and its landing platform."
      },
      {
        objectId: 12,
        label: "Sojourner",
        x: 70,
        y: 40,
        description: "Sojourner, the first successful wheeled rover to operate on Mars."
      }
    ],

    spirit: [
      {
        objectId: 15,
        label: "Spirit rover",
        x: 50,
        y: 50,
        description: "The Spirit Mars Exploration Rover."
      }
    ],

    opportunity: [
      {
        objectId: 16,
        label: "Opportunity",
        x: 50,
        y: 50,
        description: "The Opportunity Mars Exploration Rover."
      }
    ],

    perseverance: [
      {
        objectId: 17,
        label: "Parachute",
        x: 18,
        y: 25,
        description: "The Perseverance parachute, identified in NASA orbital imagery."
      },
      {
        objectId: 18,
        label: "Backshell",
        x: 30,
        y: 48,
        description: "The Perseverance backshell, separated during atmospheric descent."
      },
      {
        objectId: 19,
        label: "Heat shield",
        x: 78,
        y: 25,
        description: "The Perseverance heat shield, released before powered descent."
      },
      {
        objectId: 20,
        label: "Descent stage",
        x: 75,
        y: 72,
        description: "The powered descent stage that lowered Perseverance onto the Martian surface."
      }
    ]
  }
};


/* =====================================================
   RENDER EQUIPMENT MAP
===================================================== */

function renderEquipmentExplorer(site, planet) {
  const prefix = planet === "moon" ? "moon" : "mars";

  const explorer = document.getElementById(
    `${prefix}EquipmentExplorer`
  );

  const mapContainer = document.getElementById(
    `${prefix}EquipmentMap`
  );

  const infoContainer = document.getElementById(
    `${prefix}EquipmentInfo`
  );

  if (!explorer || !mapContainer || !infoContainer) {
    console.warn(`${prefix} equipment viewer elements are missing.`);
    return;
  }

  const equipment = equipmentLayouts[planet]?.[site.id] || [];

  explorer.hidden = false;
  mapContainer.innerHTML = "";
  infoContainer.textContent = "Select an equipment marker to inspect it.";

  if (equipment.length === 0) {
    mapContainer.textContent = "No equipment markers are available for this site.";
    return;
  }

  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 400 220");
  svg.setAttribute("role", "group");
  svg.setAttribute("aria-label", `${site.name} equipment diagram`);

  const background = document.createElementNS(svgNS, "rect");
  background.setAttribute("width", "400");
  background.setAttribute("height", "220");
  background.setAttribute("fill", "transparent");
  svg.appendChild(background);

  const grid = document.createElementNS(svgNS, "path");
  grid.setAttribute(
    "d",
    "M0 55 H400 M0 110 H400 M0 165 H400 M100 0 V220 M200 0 V220 M300 0 V220"
  );
  grid.setAttribute("class", "equipment-terrain");
  svg.appendChild(grid);

  equipment.forEach(item => {
    const object = objects.find(
      entry => entry.id === item.objectId
    );

    if (!object) return;

    const marker = document.createElementNS(svgNS, "g");

    marker.setAttribute("class", "equipment-marker");
    marker.setAttribute(
      "transform",
      `translate(${item.x * 4}, ${item.y * 2.2})`
    );
    marker.setAttribute("tabindex", "0");
    marker.setAttribute("role", "button");
    marker.setAttribute("aria-label", `Inspect ${object.name}`);

    const halo = document.createElementNS(svgNS, "circle");
    halo.setAttribute("class", "equipment-halo");
    halo.setAttribute("r", "12");

    const core = document.createElementNS(svgNS, "circle");
    core.setAttribute("class", "equipment-core");
    core.setAttribute("r", "5");

    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", "15");
    label.setAttribute("y", "-10");
    label.textContent = item.label;

    marker.append(halo, core, label);

    const selectMarker = () => {
      mapContainer
        .querySelectorAll(".equipment-marker")
        .forEach(element => element.classList.remove("selected"));

      marker.classList.add("selected");

      showEquipmentDetails(object, item, infoContainer);
    };

    marker.addEventListener("click", selectMarker);

    marker.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMarker();
      }
    });

    svg.appendChild(marker);
  });

    mapContainer.appendChild(svg);

  // Automatically select the first equipment marker.
  const firstMarker = svg.querySelector(".equipment-marker");

  if (firstMarker) {
    firstMarker.classList.add("selected");

    const firstItem = equipment[0];
    const firstObject = objects.find(
      entry => entry.id === firstItem.objectId
    );

    if (firstObject) {
      showEquipmentDetails(
        firstObject,
        firstItem,
        infoContainer
      );
    }
  }

  const note = document.createElement("p");

  note.className = "equipment-map-note";
  note.textContent =
    "Schematic arrangement only. Marker positions are illustrative and do not represent verified geographic coordinates.";

  mapContainer.appendChild(note);
}


/* =====================================================
   DISPLAY EQUIPMENT INFORMATION
===================================================== */

function showEquipmentDetails(object, item, container) {
  container.innerHTML = "";

  const title = document.createElement("h4");
  title.textContent = object.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const purpose = document.createElement("p");
  purpose.textContent = object.purpose;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "equipment-action";
  button.textContent = "View full object record";

  button.addEventListener("click", () => {
    openObjectModal(object);
  });

  container.append(title, description, purpose, button);
}

/* =====================================================
   MARS COORDINATE CONVERSION
   Equirectangular projection:
   Longitude: 0–360 degrees east
   Latitude: 90 degrees north to 90 degrees south
===================================================== */

function marsCoordinatesToMap(latitude, longitude) {
  const x = (longitude / 360) * 1000;
  const y = ((90 - latitude) / 180) * 500;

  return { x, y };
}


/* =====================================================
   FORMAT MARS COORDINATES
===================================================== */

function formatMarsCoordinates(latitude, longitude) {
  const latDirection = latitude >= 0 ? "N" : "S";

  // Convert 0–360° east longitude to conventional E/W notation.
  const normalizedLongitude =
    ((longitude % 360) + 360) % 360;

  const lonDirection =
    normalizedLongitude > 180 ? "W" : "E";

  const displayLongitude =
    normalizedLongitude > 180
      ? 360 - normalizedLongitude
      : normalizedLongitude;

  return (
    `${Math.abs(latitude).toFixed(3)}° ${latDirection}, ` +
    `${displayLongitude.toFixed(3)}° ${lonDirection}`
  );
}

/* =====================================================
   RENDER INTERACTIVE MARS MARKERS
===================================================== */

function renderMarsMap() {
  const markerGroup = document.getElementById("marsMarkers");

  if (!markerGroup) return;

  markerGroup.innerHTML = "";

  marsSites.forEach(site => {
    const { x, y } = marsCoordinatesToMap(
      site.latitude,
      site.longitude
    );

    const marker = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );

    marker.setAttribute(
      "class",
      `mars-marker ${site.type}-marker`
    );

    marker.setAttribute("transform", `translate(${x}, ${y})`);
    marker.setAttribute("tabindex", "0");
    marker.setAttribute("role", "button");
    marker.setAttribute("aria-label", site.name);

    const labelAnchor = x > 850 ? "end" : "start";
    const labelOffset = x > 850 ? -14 : 14;

    marker.innerHTML = `
      <circle class="marker-halo" r="11"></circle>
      <circle class="marker-core" r="5"></circle>
      <text x="${labelOffset}" y="-12"
            text-anchor="${labelAnchor}">
        ${site.mission}
      </text>
    `;

    marker.addEventListener("click", () => {
      selectMarsSite(site.id);
    });

    marker.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMarsSite(site.id);
      }
    });

    markerGroup.appendChild(marker);
  });
}


/* =====================================================
   SELECT MARS LANDING SITE
===================================================== */

function selectMarsSite(siteId) {
  const site = marsSites.find(item => item.id === siteId);

  if (!site) return;

  document.querySelectorAll(".mars-marker").forEach(marker => {
    marker.classList.remove("selected");
  });

  const markerIndex = marsSites.findIndex(
    item => item.id === siteId
  );

  document
    .getElementById("marsMarkers")
    ?.children[markerIndex]
    ?.classList.add("selected");

  document.getElementById("marsSiteTitle").textContent =
    site.name;

  document.getElementById("marsSiteDescription").textContent =
    site.description;

  document.getElementById("marsSiteMission").textContent =
    `${site.mission} (${site.year})`;

  document.getElementById("marsSiteRegion").textContent =
    site.region;

  document.getElementById("marsSiteCoordinates").textContent =
    formatMarsCoordinates(site.latitude, site.longitude);

  const objectContainer =
    document.getElementById("marsSiteObjects");

  objectContainer.innerHTML = "";

  site.objectIds.forEach(objectId => {
    const object = objects.find(
      item => item.id === objectId
    );

    if (!object) return;

    const button = document.createElement("button");

    button.className = "mars-object-link";
    button.type = "button";
    button.textContent = object.name;

    button.addEventListener("click", () => {
      openObjectModal(object);
    });

    objectContainer.appendChild(button);
  });

  renderEquipmentExplorer(site, "mars");
}

/* ==========================================
   SELECT LUNAR LANDING SITE
========================================== */

function selectMoonSite(siteId) {
  const site = moonSites.find(item => item.id === siteId);

  if (!site) return;

  document.querySelectorAll(".moon-marker").forEach(marker => {
    marker.classList.remove("selected");
  });

  const markerIndex = moonSites.findIndex(
    item => item.id === siteId
  );

  document.getElementById("moonMarkers")
    ?.children[markerIndex]
    ?.classList.add("selected");

  document.getElementById("moonSiteTitle").textContent =
    site.name;

  document.getElementById("moonSiteDescription").textContent =
    site.description;

  document.getElementById("moonSiteMission").textContent =
    `${site.mission} (${site.year})`;

  document.getElementById("moonSiteCoordinates").textContent =
    `${site.latitude.toFixed(3)}°, ${site.longitude.toFixed(3)}°`;

  const objectContainer =
    document.getElementById("moonSiteObjects");

  objectContainer.innerHTML = "";

  site.objectIds.forEach(objectId => {
    const object = objects.find(item => item.id === objectId);

    if (!object) return;

    const button = document.createElement("button");
    button.className = "moon-object-link";
    button.type = "button";
    button.textContent = object.name;

    button.addEventListener("click", () => {
      openObjectModal(object);
    });

    objectContainer.appendChild(button);
  });

  renderEquipmentExplorer(site, "moon");
}


/* ==========================================
   DOM ELEMENTS
========================================== */

const objectGrid = document.getElementById("objectGrid");
const searchInput = document.getElementById("searchInput");
const planetFilter = document.getElementById("planetFilter");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const modal = document.getElementById("objectModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

document.getElementById("totalObjects").textContent = objects.length;

/* ==========================================
   NASA IMAGE RETRIEVAL
========================================== */

const imageCache = new Map();

async function getNASAImage(query) {
  if (imageCache.has(query)) {
    return imageCache.get(query);
  }

  try {
    const url = `${NASA_IMAGE_API}?q=${encodeURIComponent(query)}&media_type=image&page_size=5`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("NASA image search unavailable");
    }

    const data = await response.json();
    const items = data.collection?.items || [];

    // Find the first result with a preview image.
    for (const item of items) {
      const preview = item.links?.find(link =>
        link.rel === "preview"
      );

      if (preview?.href) {
        const result = {
          image: preview.href,
          title: item.data?.[0]?.title || "NASA image",
          nasaPage: item.href || ""
        };

        imageCache.set(query, result);
        return result;
      }
    }

    imageCache.set(query, null);
    return null;

  } catch (error) {
    console.warn("NASA image could not be loaded:", query, error);
    return null;
  }
}

/* ==========================================
   HERO IMAGE
========================================== */

async function loadHeroImage() {
  const hero = document.getElementById("heroImage");
  const image = await getNASAImage("Apollo lunar surface Moon Mars exploration");

  if (image?.image) {
    hero.style.backgroundImage = `url("${image.image}")`;
  }
}

/* ==========================================
   CREATE OBJECT CARDS
========================================== */

function createObjectCard(item) {
  const card = document.createElement("article");
  card.className = "object-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View ${item.name}`);

  card.innerHTML = `
    <div class="card-image-container">
      <div class="object-image-placeholder">✦</div>
      <img class="object-image"
        data-query="${item.query}"
        alt="${item.name}"
        loading="lazy"
        hidden>
    </div>

    <div class="object-info">
      <span class="object-tag">${item.planet} · ${item.category}</span>
      <h3>${item.name}</h3>
      <p>${item.purpose}</p>

      <div class="object-meta">
        <span>${item.mission} · ${item.year}</span>
        <span class="card-more">Explore ↗</span>
      </div>
    </div>
  `;

  card.addEventListener("click", () => openObjectModal(item));

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openObjectModal(item);
    }
  });

  return card;
}

/* ==========================================
   LOAD CARD IMAGES WHEN VISIBLE
========================================== */

const imageObserver = new IntersectionObserver(entries => {
  entries.forEach(async entry => {
    if (!entry.isIntersecting) return;

    const img = entry.target;
    imageObserver.unobserve(img);

    const query = img.dataset.query;
    const image = await getNASAImage(query);

    if (image?.image) {
      img.src = image.image;
      img.hidden = false;

      const placeholder = img.previousElementSibling;
      if (placeholder) placeholder.hidden = true;
    }
  });
}, {
  rootMargin: "250px"
});

function observeCardImages() {
  document.querySelectorAll(".object-image[data-query]").forEach(img => {
    imageObserver.observe(img);
  });
}

/* ==========================================
   DISPLAY OBJECTS
========================================== */

function displayObjects(list) {
  objectGrid.innerHTML = "";

  list.forEach(item => {
    objectGrid.appendChild(createObjectCard(item));
  });

  resultCount.textContent =
    `${list.length} object${list.length === 1 ? "" : "s"}`;

  emptyState.hidden = list.length !== 0;
  objectGrid.hidden = list.length === 0;

  observeCardImages();
}

/* ==========================================
   SEARCH AND FILTERS
========================================== */

function filterObjects() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedPlanet = planetFilter.value;
  const selectedCategory = categoryFilter.value;

  const filtered = objects.filter(item => {
    const searchableText = [
      item.name,
      item.planet,
      item.mission,
      item.category,
      item.purpose,
      item.legacy
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);
    const matchesPlanet =
      selectedPlanet === "All" || item.planet === selectedPlanet;
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesPlanet && matchesCategory;
  });

  displayObjects(filtered);
}

searchInput.addEventListener("input", filterObjects);
planetFilter.addEventListener("change", filterObjects);
categoryFilter.addEventListener("change", filterObjects);

/* ==========================================
   PLANET QUICK FILTER
========================================== */

document.querySelectorAll("[data-planet-link]").forEach(link => {
  link.addEventListener("click", () => {
    const planet = link.dataset.planetLink;
    planetFilter.value = planet;
    filterObjects();
  });
});

/* ==========================================
   OBJECT DETAILS MODAL
========================================== */

async function openObjectModal(item) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalPlanet").textContent = item.planet;
  document.getElementById("modalCategory").textContent = item.category;
  document.getElementById("modalMission").textContent = item.mission;
  document.getElementById("modalYear").textContent = item.year;
  document.getElementById("modalLocation").textContent = item.planet;
  document.getElementById("modalPurpose").textContent = item.purpose;
  document.getElementById("modalReason").textContent = item.reason;
  document.getElementById("modalLegacy").textContent = item.legacy;
  document.getElementById("modalEvidence").textContent = item.evidence;

  const modalImage = document.getElementById("modalImage");
  modalImage.src = "";
  modalImage.alt = item.name;

  const image = await getNASAImage(item.query);

  // Only update if this is still the currently opened object.
  if (
    document.getElementById("modalTitle").textContent === item.name &&
    image?.image
  ) {
    modalImage.src = image.image;
  }

  document.getElementById("modalSource").href = item.source;

  // PHASE 9.5 — Load scientific evidence for this object.
      // Load evidence when the evidence module is available.
    if (typeof renderScientificEvidence === "function") {
      renderScientificEvidence(item);
    } else {
      const evidenceContainer =
        document.getElementById("modalEvidenceItems");

      if (evidenceContainer) {
        evidenceContainer.textContent =
          "Scientific evidence records are currently unavailable.";
      }

      console.warn(
        "Scientific evidence module has not loaded."
      );
    }

  modalClose.focus();
}

function closeObjectModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeObjectModal);
modalBackdrop.addEventListener("click", closeObjectModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeObjectModal();
  }
});

/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

/* ==========================================
   INITIALISE WEBSITE
========================================== */

displayObjects(objects);
loadHeroImage();

renderMoonMap();
renderMarsMap();


console.log("Lunar & Martian Time Capsule loaded.");
console.log(`${objects.length} initial catalogue entries available.`);


/* =========================================
   PHASE 9.4 — INTERACTIVE MISSION TIMELINE
========================================= */

const missionTimelineData = [
  // MOON MISSIONS
  {
    id: "surveyor-3",
    planet: "Moon",
    mission: "Surveyor 3",
    siteMatch: "Surveyor 3",
    date: "1967-04-20",
    objectIds: [3],
    milestone: "Surveyor 3 successfully landed in Oceanus Procellarum. Its camera and surface-sampling equipment helped investigate the lunar terrain. Apollo 12 later visited the site and recovered selected spacecraft components.",
    source: "https://science.nasa.gov/mission/surveyor-3/"
  },
  {
    id: "apollo-11",
    planet: "Moon",
    mission: "Apollo 11",
    siteMatch: "Apollo 11",
    date: "1969-07-20",
    objectIds: [1, 2],
    milestone: "Apollo 11 achieved the first crewed lunar landing. The Eagle lunar module's descent stage remained on the Moon, and the crew deployed the Lunar Laser Ranging Retroreflector.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html"
  },
  {
    id: "apollo-12",
    planet: "Moon",
    mission: "Apollo 12",
    siteMatch: "Apollo 12",
    date: "1969-11-19",
    objectIds: [4],
    milestone: "Apollo 12 landed in Oceanus Procellarum near Surveyor 3. The astronauts retrieved selected parts of the earlier robotic lander and deployed scientific equipment at the landing site.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html"
  },
  {
    id: "apollo-14",
    planet: "Moon",
    mission: "Apollo 14",
    siteMatch: "Apollo 14",
    date: "1971-02-05",
    objectIds: [5],
    milestone: "Apollo 14 landed in the Fra Mauro region. The crew conducted geological exploration and deployed scientific instruments that remained at the lunar site.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html"
  },
  {
    id: "apollo-15",
    planet: "Moon",
    mission: "Apollo 15",
    siteMatch: "Apollo 15",
    date: "1971-07-30",
    objectIds: [6, 9],
    milestone: "Apollo 15 introduced the first crewed Lunar Roving Vehicle. The rover and lunar module descent stage remained at the Hadley-Apennine landing site, alongside scientific equipment.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html"
  },
  {
    id: "apollo-16",
    planet: "Moon",
    mission: "Apollo 16",
    siteMatch: "Apollo 16",
    date: "1972-04-20",
    objectIds: [7],
    milestone: "Apollo 16 landed in the Descartes Highlands. Its crew used a Lunar Roving Vehicle to explore the surrounding terrain and left scientific instruments and landing hardware behind.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html"
  },
  {
    id: "apollo-17",
    planet: "Moon",
    mission: "Apollo 17",
    siteMatch: "Apollo 17",
    date: "1972-12-11",
    objectIds: [8, 10],
    milestone: "Apollo 17 completed the final crewed Apollo lunar landing. The crew explored the Taurus-Littrow valley using a Lunar Roving Vehicle and deployed scientific equipment.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apolloland.html"
  },

  // MARS MISSIONS
  {
    id: "viking-1",
    planet: "Mars",
    mission: "Viking 1",
    siteMatch: "Viking 1",
    date: "1976-07-20",
    objectIds: [13],
    milestone: "Viking 1 became the first U.S. spacecraft to land successfully on Mars. Its lander photographed the surface, analysed soil samples and conducted experiments investigating the Martian environment.",
    source: "https://science.nasa.gov/mission/viking/"
  },
  {
    id: "viking-2",
    planet: "Mars",
    mission: "Viking 2",
    siteMatch: "Viking 2",
    date: "1976-09-03",
    objectIds: [14],
    milestone: "Viking 2 landed in Utopia Planitia. Its lander continued the programme of surface imaging, weather observations and biological and chemical experiments.",
    source: "https://science.nasa.gov/mission/viking/"
  },
  {
    id: "pathfinder",
    planet: "Mars",
    mission: "Mars Pathfinder",
    siteMatch: "Pathfinder",
    date: "1997-07-04",
    objectIds: [11, 12],
    milestone: "Mars Pathfinder demonstrated an airbag-assisted landing system and delivered Sojourner, the first rover to operate on Mars. The lander, rover and landing-system components remained at the Ares Vallis site.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    id: "spirit",
    planet: "Mars",
    mission: "Mars Exploration Rover — Spirit",
    siteMatch: "Spirit",
    date: "2004-01-03",
    objectIds: [15],
    milestone: "Spirit landed in Gusev Crater. The rover investigated Martian rocks and soils and found strong evidence that water had altered rocks at the site.",
    source: "https://science.nasa.gov/mission/mer-spirit/"
  },
  {
    id: "opportunity",
    planet: "Mars",
    mission: "Mars Exploration Rover — Opportunity",
    siteMatch: "Opportunity",
    date: "2004-01-24",
    objectIds: [16],
    milestone: "Opportunity landed at Meridiani Planum. Its investigations provided important evidence that liquid water had influenced the region's geological history.",
    source: "https://science.nasa.gov/mission/mer-opportunity/"
  },
  {
    id: "perseverance",
    planet: "Mars",
    mission: "Mars 2020 — Perseverance",
    siteMatch: "Perseverance",
    date: "2021-02-18",
    objectIds: [17, 18, 19, 20],
    milestone: "Perseverance landed in Jezero Crater using a sky-crane descent system. Its parachute, backshell, heat shield and descent stage separated during landing and remained as distinct pieces of mission hardware.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
  }
];


// Format landing dates consistently.
function formatTimelineDate(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}


// Find a mission's existing landing-site record.
// Explicit mapping between timeline events and landing sites.
const timelineSiteIds = {
  "surveyor-3": "surveyor3",
  "apollo-11": "apollo11",
  "apollo-12": "apollo12",
  "apollo-14": "apollo14",
  "apollo-15": "apollo15",
  "apollo-16": "apollo16",
  "apollo-17": "apollo17",

  "viking-1": "viking1",
  "viking-2": "viking2",
  "pathfinder": "pathfinder",
  "spirit": "spirit",
  "opportunity": "opportunity",
  "perseverance": "perseverance"
};

function findTimelineSite(event) {
  const sites = event.planet === "Moon"
    ? moonSites
    : marsSites;

  const siteId = timelineSiteIds[event.id];

  return sites.find(site => site.id === siteId) || null;
}

// Generate the timeline cards.
function renderMissionTimeline(filter = "All") {
  const container = document.getElementById("missionTimeline");
  const countLabel = document.getElementById("timelineResultCount");

  if (!container || !countLabel) return;

  const filteredEvents = missionTimelineData
    .filter(event => filter === "All" || event.planet === filter)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  countLabel.textContent =
    `${filteredEvents.length} mission milestones`;

  if (filteredEvents.length === 0) {
    container.innerHTML = `
      <div class="timeline-empty">
        No mission milestones are available for this filter.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredEvents.map(event => {
    const firstObjectId = event.objectIds[0];

    return `
      <article class="timeline-event"
               data-planet="${event.planet}"
               data-event-id="${event.id}">

        <div class="timeline-date">
          ${new Date(event.date + "T00:00:00Z")
            .getUTCFullYear()}
        </div>

        <div class="timeline-card">
          <div class="timeline-card-top">
            <span class="timeline-planet-tag">
              ${event.planet.toUpperCase()} MISSION
            </span>

            <span class="timeline-event-date">
              ${formatTimelineDate(event.date)}
            </span>
          </div>

          <h3>${event.mission}</h3>

          <p>${event.milestone}</p>

          <div class="timeline-actions">
            <button class="timeline-action primary"
                    type="button"
                    data-timeline-site="${event.id}">
              Explore landing site ↗
            </button>

            <button class="timeline-action"
                    type="button"
                    data-timeline-object="${firstObjectId}">
              View associated object
            </button>

            <a class="timeline-action"
               href="${event.source}"
               target="_blank"
               rel="noopener noreferrer">
              NASA mission record ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}


// Filter button interactions.
function initialiseMissionTimeline() {
  const filterButtons = document.querySelectorAll(
    "[data-timeline-filter]"
  );

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.timelineFilter;

      filterButtons.forEach(item => {
        const isActive = item === button;

        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      renderMissionTimeline(selectedFilter);
    });
  });

  // Handle landing-site and object-detail actions.
  const timelineContainer =
    document.getElementById("missionTimeline");

  if (!timelineContainer) return;

  timelineContainer.addEventListener("click", event => {
    const siteButton = event.target.closest("[data-timeline-site]");
    const objectButton = event.target.closest("[data-timeline-object]");

    if (siteButton) {
      const eventId = siteButton.dataset.timelineSite;

      const timelineEvent = missionTimelineData.find(
        item => item.id === eventId
      );

      if (!timelineEvent) return;

      const site = findTimelineSite(timelineEvent);

      if (site) {
        if (timelineEvent.planet === "Moon") {
          selectMoonSite(site.id);
          document.getElementById("moon-explorer")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
       
        } else {
          selectMarsSite(site.id);
          document.getElementById("mars-explorer")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }

        } else {
        const destination = timelineEvent.planet === "Moon"
          ? "moon-explorer"
          : "mars-explorer";

        document.getElementById(destination)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });

        console.warn(
          `No matching landing-site record found for ${timelineEvent.mission}.`
        );
      }
    }

    if (objectButton) {
      const objectId = Number(objectButton.dataset.timelineObject);

      const object = objects.find(
        item => Number(item.id) === objectId
      );

      if (object) {
        openObjectModal(object);
      } else {
        console.warn(`Timeline object ${objectId} was not found.`);
      }
    }
  });

  renderMissionTimeline();
    // Start the interactive mission timeline.
  initialiseMissionTimeline();
}


