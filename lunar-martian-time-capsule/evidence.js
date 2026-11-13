/* =========================================
   PHASE 9.5 — SCIENTIFIC EVIDENCE DATABASE
========================================= */

// References are grouped by the mission or evidence collection.
// A mission-level reference does not automatically verify every
// object coordinate, image, or individual equipment identification.

const evidenceSourceCatalog = {

  lunarCatalogue: {
    type: "NASA historical catalogue",
    title: "Catalogue of Manmade Material on the Moon",
    url: "https://www.nasa.gov/wp-content/uploads/2024/02/final-catalogue-of-manmade-material-on-the-moon.pdf",
    scope: "Documents human-made objects associated with lunar missions and their reported locations."
  },

  apollo: {
    type: "NASA mission history",
    title: "The Apollo Program",
    url: "https://www.nasa.gov/the-apollo-program/",
    scope: "Provides historical context for Apollo lunar missions and their surface exploration activities."
  },

  retroreflector: {
    type: "NASA scientific data",
    title: "NASA Lunar Laser Ranging Data",
    url: "https://data.nasa.gov/dataset/cddis-llr-data",
    scope: "Explains lunar laser ranging and the scientific use of retroreflector arrays deployed on the Moon."
  },

  lunarRover: {
    type: "NASA spacecraft record",
    title: "The Apollo Lunar Roving Vehicle",
    url: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
    scope: "Documents the Apollo 15, 16 and 17 lunar rovers and their surface traverses."
  },

  pathfinder: {
    type: "NASA mission record",
    title: "Mars Pathfinder",
    url: "https://science.nasa.gov/mission/mars-pathfinder/",
    scope: "Documents the Pathfinder lander, Sojourner rover, landing system and mission results."
  },

  viking: {
    type: "NASA mission record",
    title: "Viking Project",
    url: "https://science.nasa.gov/mission/viking/",
    scope: "Documents the Viking 1 and Viking 2 landers, landing dates and surface investigations."
  },

  spirit: {
    type: "NASA mission record",
    title: "Spirit — Mars Exploration Rover",
    url: "https://science.nasa.gov/mission/mer-spirit/",
    scope: "Documents Spirit's surface mission, scientific objectives and mission completion."
  },

  opportunity: {
    type: "NASA mission record",
    title: "Opportunity — Mars Exploration Rover",
    url: "https://science.nasa.gov/mission/mer-opportunity/",
    scope: "Documents Opportunity's surface mission, scientific findings and final communications."
  },

  perseveranceSurface: {
    type: "NASA orbital imaging evidence",
    title: "Perseverance and Mars 2020 Spacecraft Components on the Surface",
    url: "https://science.nasa.gov/resource/perseverance-and-mars-2020-spacecraft-components-on-the-surface/",
    scope: "HiRISE orbital imagery identifies the parachute and backshell, descent stage, rover and heat shield as separate surface components."
  },

  perseveranceEngineering: {
    type: "NASA/JPL engineering documentation",
    title: "Mars 2020 — Getting to Mars",
    url: "https://www.jpl.nasa.gov/news/press_kits/mars_2020/launch/mission/spacecraft/getting_to_mars/",
    scope: "Explains the parachute, heat shield, backshell and powered descent system used during landing."
  }
};


// Evidence records are linked to the existing object IDs.
// These IDs correspond to the current 20-object catalogue.

const scientificEvidenceByObjectId = {

  // MOON — OBJECTS 1–10

  1: {
    claim: "The Apollo 11 retroreflector was deployed to support laser ranging between Earth and the Moon.",
    sources: ["retroreflector"],
    limitation: "The scientific data supports the continuing use of lunar retroreflectors. It does not, by itself, verify the provenance of the local photograph."
  },

  2: {
    claim: "The Apollo 11 lunar module descent stage is part of the documented human-made material left at the lunar landing site.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "A catalogue entry and mission history do not make an orbital image equivalent to a close-up photograph of the descent stage."
  },

  3: {
    claim: "Surveyor 3 is a documented robotic lunar lander. Apollo 12 later visited the Surveyor 3 site and recovered selected components.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "Distinguish the Surveyor 3 lander that remained on the Moon from the selected components returned to Earth by Apollo 12."
  },

  4: {
    claim: "The Apollo 12 lunar module descent stage is included in the historical record of lunar mission hardware.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "Use a separately verified landing-site image or scientific record for claims about the stage's precise present-day appearance or condition."
  },

  5: {
    claim: "Apollo 14 left lunar mission hardware at the Fra Mauro landing site.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "The mission record supports the historical context; it should not be treated as a close-up visual identification of the descent stage."
  },

  6: {
    claim: "Apollo 15 left its lunar module descent stage at the Hadley-Apennine landing site.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "Separate the descent stage from the Lunar Roving Vehicle and other equipment deployed during the mission."
  },

  7: {
    claim: "Apollo 16 left its lunar module descent stage at the Descartes Highlands landing site.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "Mission history establishes the landing and surface activities; precise modern object visibility requires additional imaging evidence."
  },

  8: {
    claim: "Apollo 17 left its lunar module descent stage in the Taurus-Littrow region.",
    sources: ["lunarCatalogue", "apollo"],
    limitation: "Do not confuse the descent stage with the separate Apollo 17 Lunar Roving Vehicle."
  },

  9: {
    claim: "Apollo 15 used a Lunar Roving Vehicle to extend astronaut surface exploration.",
    sources: ["lunarRover", "apollo"],
    limitation: "The rover record documents its use and traverses, not necessarily the precise final parking coordinates shown by an illustrative diagram."
  },

  10: {
    claim: "Apollo 17 used a Lunar Roving Vehicle during its lunar surface exploration.",
    sources: ["lunarRover", "apollo"],
    limitation: "The rover's final location should be supported by a separate location or imaging record if exact coordinates are displayed."
  },


  // MARS — OBJECTS 11–20

  11: {
    claim: "The Mars Pathfinder lander delivered a scientific platform and the Sojourner rover to Ares Vallis in 1997.",
    sources: ["pathfinder"],
    limitation: "Pathfinder and Sojourner are two distinct objects. Their separate identities should be preserved in the catalogue."
  },

  12: {
    claim: "Sojourner was the mobile rover deployed by the Mars Pathfinder lander to investigate Martian rocks and soil.",
    sources: ["pathfinder"],
    limitation: "The Pathfinder mission page supports the rover's identity and mission. It should not be used to infer an exact final rover position without further evidence."
  },

  13: {
    claim: "Viking 1 was a robotic lander that returned surface images and conducted experiments on Mars.",
    sources: ["viking"],
    limitation: "Viking lander camera images are views from the surface; they are not external photographs showing the complete lander."
  },

  14: {
    claim: "Viking 2 landed at Utopia Planitia and conducted surface imaging and scientific experiments.",
    sources: ["viking"],
    limitation: "Distinguish the Viking 2 lander from its companion orbiter. Surface-camera images do not show an external portrait of the lander."
  },

  15: {
    claim: "Spirit was a Mars Exploration Rover that investigated Martian geology and evidence of past water activity.",
    sources: ["spirit"],
    limitation: "The rover's final position is different from its original landing point. Do not treat the two coordinates as interchangeable."
  },

  16: {
    claim: "Opportunity was a Mars Exploration Rover that investigated rocks and soils for evidence of past water activity.",
    sources: ["opportunity"],
    limitation: "Its long-distance movement means the final resting location should not be represented by its original landing coordinates."
  },

  17: {
    claim: "The Mars 2020 landing parachute was a separate component of Perseverance's entry, descent and landing system.",
    sources: ["perseveranceSurface", "perseveranceEngineering"],
    limitation: "The HiRISE image is orbital imagery. It identifies the component on the surface but is not a ground-level close-up."
  },

  18: {
    claim: "The Perseverance backshell was part of the aeroshell system and separated during the landing sequence.",
    sources: ["perseveranceSurface", "perseveranceEngineering"],
    limitation: "The backshell and parachute are associated landing-system components, but they should not be described as the same physical object."
  },

  19: {
    claim: "The Perseverance heat shield protected the spacecraft during atmospheric entry and was jettisoned before touchdown.",
    sources: ["perseveranceSurface", "perseveranceEngineering"],
    limitation: "The heat shield's landing location is distinct from the rover and other discarded landing components."
  },

  20: {
    claim: "The Perseverance descent stage performed the sky-crane manoeuvre and then flew away from the rover before impacting the Martian surface.",
    sources: ["perseveranceSurface", "perseveranceEngineering"],
    limitation: "The descent stage is not the rover. Its separate impact location is visible in the NASA orbital imagery."
  }
};


// Create evidence elements using textContent.
// This prevents source descriptions from being interpreted as HTML.

function createEvidenceElement(tag, className, content) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  element.textContent = content;

  return element;
}


function renderScientificEvidence(object) {

  const container = document.getElementById("modalEvidenceItems");
  const status = document.getElementById("evidenceStatus");
  const imageStatus = document.getElementById("imageEvidenceStatus");

  if (!container || !status || !imageStatus || !object) {
    return;
  }

  container.replaceChildren();

  const objectId = Number(object.id);
  const record = scientificEvidenceByObjectId[objectId];

  if (!record) {
    status.textContent = "No evidence record is currently mapped to this object.";

    container.appendChild(
      createEvidenceElement(
        "p",
        "evidence-record",
        "A source record must be added before this object's claims can be presented as evidence."
      )
    );

    return;
  }

  status.textContent =
    "NASA mission references available — object-level verification still required.";

  // Display the evidence claim.
  const claimCard = document.createElement("article");
  claimCard.className = "evidence-record";

  claimCard.appendChild(
    createEvidenceElement(
      "div",
      "evidence-type",
      "CLAIM SUPPORTED BY THE REFERENCES"
    )
  );

  claimCard.appendChild(
    createEvidenceElement("p", "", record.claim)
  );

  claimCard.appendChild(
    createEvidenceElement(
      "div",
      "evidence-limitation",
      `Scientific limitation: ${record.limitation}`
    )
  );

  container.appendChild(claimCard);


  // Display each reference.
  record.sources.forEach(sourceKey => {

    const source = evidenceSourceCatalog[sourceKey];

    if (!source) return;

    const card = document.createElement("article");
    card.className = "evidence-record";

    const top = document.createElement("div");
    top.className = "evidence-record-top";

    top.appendChild(
      createEvidenceElement(
        "span",
        "evidence-type",
        source.type
      )
    );

    top.appendChild(
      createEvidenceElement(
        "span",
        "evidence-scope",
        "REFERENCE"
      )
    );

    card.appendChild(top);

    card.appendChild(
      createEvidenceElement("h4", "", source.title)
    );

    card.appendChild(
      createEvidenceElement("p", "", source.scope)
    );

    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open original source ↗";

    card.appendChild(link);

    container.appendChild(card);
  });


  // Keep image provenance separate from mission evidence.
  imageStatus.textContent =
    "Image attribution: pending independent verification. " +
    "Confirm the original NASA image record, image title, credit and source URL " +
    "before presenting the local image as NASA imagery.";
}