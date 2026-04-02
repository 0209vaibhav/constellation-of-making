import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.1/examples/jsm/controls/OrbitControls.js";

const mount = document.getElementById("scene");

// ---- EDIT THIS: add your real projects here
const PROJECTS = [

  // ---- PROJECT 01 - LayoutLab ----------------------------------------
  {
    title: "LayoutLab",
    category: "Computation",
    subtitle: "Interactive Computational Floor Planning Tool",
  
    tags: [
      "Computational Planning",
      "Layout Generation",
      "Spatial Optimization",
      "Variant Exploration",
      "Program-Based Design",
      "Interactive Visualization"
    ],
  
    methods: [
      "Python Solver",
      "Rectangle Packing",
      "SVG Visualization",
      "Variant Comparison",
      "Parametric Controls",
      "Real-time Metrics"
    ],
  
    description:
      "LayoutLab is an interactive computational floor planning tool that generates and compares spatial layouts within a defined boundary. It visualizes program areas as configurable blocks, allowing users to explore spatial efficiency, proportions, and alternatives. The system helps designers quickly evaluate planning strategies without relying on traditional CAD workflows or manual layout iteration.",
  
    href: "https://0209vaibhav.github.io/layoutlab/"
  },

  // ---- PROJECT 02 - IBEX ----------------------------------------
  {
  title: "IBEX",
  category: "Computation",
  subtitle: "AI-Driven Real Estate & Urban Development Platform",

  tags: [
    "AI-Driven Design Platform",
    "Computational Design",
    "Urban Development Intelligence",
    "Parametric Masterplanning",
    "Speculative Visualization",
    "Performance Analysis & Financial Reporting"
  ],

  methods: [
    "Parametric & Generative Workflows",
    "API Integration",
    "Automated Design Pipelines",
    "AI-Assisted Visual Rendering",
    "Prompt Engineering for reporting",
    "Computational Masterplanning"
  ],

  description:
    "IBEX is an AI-driven real estate and urban development platform designed for the Kingdom of Saudi Arabia, enabling users to configure, generate, and evaluate architectural and urban proposals through parameter-driven workflows. The platform integrates site selection, development constraints, and financial inputs to automatically generate masterplans, building geometries, architectural identities, and contextual design outputs.",

  href: ""
  },

  // ---- PROJECT 03 - MEMENTO ----------------------------------------
  {
    title: "MEMENTO",
    category: "Computation",
    subtitle: "Real-time Urban Experiences",
  
    tags: [
      "Participatory Mapping",
      "Real-Time City Interaction",
      "Sensory & Cultural Exploration",
      "Spatial Data Narratives",
      "Gamified Commuting",
      "Urban Experience Design"
    ],
  
    methods: [
      "Computational Design",
      "Real-Time Data Visualization",
      "Interactive Web Development",
      "Geospatial Mapping",
      "API & Dataset Integration",
      "Machine Learning Classification"
    ],
  
    description:
      "MEMENTO is a real-time urban experience platform designed to transform monotonous commutes into engaging city journeys. It reframes the city as an interactive playground, encouraging users to capture, discover, and interact with fleeting urban moments.",
  
    href: "https://0209vaibhav.github.io/Memento/"
  },

  // ---- PROJECT 04 - ML in MEMENTO ----------------------------------------
  {
    title: "ML in MEMENTO",
    category: "Computation",
    subtitle: "ML Pipeline for Automated Urban Experience Classification",
  
    tags: [
      "Machine Learning",
      "Web-data Scraping",
      "Urban Analytics",
      "Data Creation",
      "Data Structures",
      "Cloud Computing"
    ],
  
    methods: [
      "Supervised Learning",
      "Data Pipeline Development",
      "Model Training",
      "Feature Engineering",
      "API Integration",
      "Classification Algorithms"
    ],
  
    description:
      "The Machine Learning pipeline in MEMENTO automates classification and tagging of public urban content. It transforms raw, unstructured data into structured, semantically rich urban experiences.",
  
    href: "https://0209vaibhav.github.io/Machine-Learning_MEMENTO/"
  },
  
  // ---- PROJECT 05 - Studio In Flux ----------------------------------------
  {
    title: "Studio In Flux",
    category: "Computation",
    subtitle: "How spatial configurations influence movement within the Columbia GSAPP Studio",
  
    tags: [
      "Responsive Workspace Design",
      "Behavioral Insights",
      "Interaction Mapping",
      "Spatial Configuration",
      "Movement Patterns",
      "Circulation Optimization"
    ],
  
    methods: [
      "Data-Informed Spatial Intervention",
      "Spatial Analysis",
      "Layout Efficiency Metrics",
      "Agent-Based Simulation",
      "Heatmap Visualization",
      "Behavioral Parameter Modeling"
    ],
  
    description:
      "Studio In Flux explores how the arrangement of spatial elements influences movement and interaction in the Columbia GSAPP Studio through simulation and behavioral mapping.",
  
    href: "https://0209vaibhav.github.io/Studio-In-Flux/"
  },
  
  // ---- PROJECT 06 - The Urban Fringe ----------------------------------------
  {
    title: "The Urban Fringe",
    category: "Computation",
    subtitle: "Spatial Thresholds Between Public Sidewalk Life and Private Eating Enterprises",
  
    tags: [
      "Sidewalk Café Encroachment",
      "Urban Thresholds",
      "Street Life Dynamics",
      "Public-Private Thresholds",
      "Environmental Quality",
      "Pedestrian Experience"
    ],
  
    methods: [
      "Data Collection & Classification",
      "Typology Mapping",
      "Geospatial Mapping",
      "Radiation & Climate Analysis",
      "Computational Simulation",
      "Spatial Visualization"
    ],
  
    description:
      "The Urban Fringe examines the blurred threshold between public sidewalks and private dining, mapping spatial encroachments and proposing human-centered urban edges.",
  
    href: "https://0209vaibhav.github.io/The-Urban-Fringe/"
  },

  // ---- PROJECT 07 - BENTO ----------------------------------------
  {
    title: "BENTO",
    category: "Computation",
    subtitle: "Next-Gen Retail Store Management Platform",
  
    tags: [
      "Retail Optimization",
      "Spatial Analytics",
      "Algorithmic Geometry",
      "Data-Driven Design",
      "Layout Optimization",
      "Context-Based Layouts"
    ],
  
    methods: [
      "Computational Modeling",
      "Algorithmic Geometry",
      "Data Integration",
      "Layout Generation",
      "Performance Analysis",
      "Parametric Modeling"
    ],
  
    description:
      "BENTO is a next-generation platform that bridges spatial design and retail management using data-driven insights. It analyzes customer movement, product interaction, and sales data to create adaptive store layouts.",
  
    href: "https://medium.com/design-intelligence-course/bento-an-application-for-the-retail-store-of-the-next-generation-2d2251144d83"
  },

  // ---- PROJECT 08 - Urban Computing ----------------------------------------
  {
    title: "Urban Computing",
    category: "Computation",
    subtitle: "Exploratory Research on Data Driven Urban Computational Design",
  
    tags: [
      "Spatial Simulation",
      "Computational Modeling",
      "Urban Ecology",
      "Radiation Mapping",
      "Green Interventions",
      "Pedestrian Walkability"
    ],
  
    methods: [
      "Computational Modeling",
      "Environmental Simulation",
      "Data-Driven Design",
      "Radiation Analysis",
      "Green Infrastructure",
      "Walkability Assessment"
    ],
  
    description:
      "Urban Computing explores spatial dynamics of sidewalks through radiation mapping and environmental simulation to improve walkability and pedestrian comfort.",
  
    href: ""
  },

  // ---- PROJECT 09 - Hue Knew ----------------------------------------
  {
    title: "Hue Knew",
    category: "Computation",
    subtitle: "Interactive Film Recognition Game",
  
    tags: [
      "Film Recognition",
      "Data Visualization",
      "API Integration",
      "Film Analysis",
      "User Experience",
      "Performance Analytics"
    ],
  
    methods: [
      "Web Development",
      "API Integration",
      "Data Visualization",
      "Game Design",
      "Performance Tracking",
      "User Analytics"
    ],
  
    description:
      "Hue Knew is an interactive film recognition quiz that invites players to identify movies from blurred visuals while tracking performance analytics.",
  
    href: "https://halfward.github.io/DataViz-GroupProj/"
  },

  // ---- PROJECT 10 - Oblivion to Odyssey ----------------------------------------
  {
    title: "Oblivion to Odyssey",
    category: "Computation",
    subtitle: "Understanding the disconnection between people and their urban surroundings",
  
    tags: [
      "Urban Engagement",
      "Commuter Experience",
      "Spatial Computing",
      "Gaze Patterns",
      "Interactive Exploration",
      "City-Driven Discovery"
    ],
  
    methods: [
      "Behavioral Research",
      "Gaze Tracking",
      "Spatial Computing",
      "Prototype Development",
      "User Testing",
      "Interactive Design"
    ],
  
    description:
      "This research explores the disconnection between people and their urban environments and proposes AI-driven commuting experiences.",
  
    href: "https://gsapp-cdp.github.io/colloquium-2-2024/work/vaibhav/"
  },

  // ---- PROJECT 11 - Gaze Tracker ----------------------------------------
  {
    title: "Gaze Tracker",
    category: "Computation",
    subtitle: "Mapping and Shaping Attention during OBLIVION",
  
    tags: [
      "Attention Mapping",
      "Gaze Tracking",
      "Spatial Awareness",
      "Habit Reformation",
      "Urban Engagement",
      "Real-Time Feedback"
    ],
  
    methods: [
      "Computer Vision",
      "Real-Time Tracking",
      "Mobile Development",
      "Behavioral Analysis",
      "Notification Systems",
      "Data Collection"
    ],
  
    description:
      "Gaze Tracker maps visual attention during commutes and nudges users to reconnect with their urban surroundings.",
  
    href: "https://0209vaibhav.github.io/Meta-Tool_INTERNAL/Vaibhav/Attentional%20Theory/index.html"
  },

  // ---- PROJECT 12 - Familial Housing ----------------------------------------
  {
    title: "Familial Housing",
    category: "Architecture",
    subtitle: "Scrutinization of the Familial sensitivity in Mumbai",
  
    tags: [
      "Familial Fragility in Redevelopment",
      "Postulation of the Familial",
      "User Participatory Housing",
      "Cohesive community living",
      "Fictive kinship as Strategy",
      "Rethinking Familial Urbanism"
    ],
  
    methods: [
      "Housing Pattern Mapping",
      "Modular Typology Derivation",
      "User Preference-based Allocation",
      "BIM-based workflow",
      "Algorithmic Massing Studies",
      "Narratives to pattern language"
    ],
  
    description:
      "The project reclaims the disappearing familial fabric within Mumbai's housing culture by challenging redevelopment models and proposing participatory housing frameworks.",
  
    href: ""
  },

  // ---- PROJECT 13 - High Performance Center ----------------------------------------
  {
    title: "High Performance Center",
    category: "Architecture",
    subtitle: "Chennai Super Kings Sports Facility",
  
    tags: [
      "Monumental Public Architecture",
      "Terraced Massing",
      "Sports Infrastructure",
      "Dynamic Movement Expression",
      "Ramp-Driven Circulation",
      "Spatial Spectatorship"
    ],
  
    methods: [
      "Facade Optimization Techniques",
      "Program–Form Mapping",
      "Parametric Ramp Modeling",
      "Rhino + Grasshopper Workflows",
      "Multi-Scale Spatial Resolution",
      "Iterative Design Prototyping"
    ],
  
    description:
      "A cohesive sports facility organized around a central cricket ground using ramp-driven circulation and terraced massing.",
  
    href: ""
  },

  // ---- PROJECT 14 - In Transit Hub ----------------------------------------
  {
    title: "In Transit Hub",
    category: "Architecture",
    subtitle: "Reinvigorating short term housing",
  
    tags: [
      "Spatial Identity through Typologies",
      "Inclusive Urban Living",
      "Public-Private Interplay",
      "User-Specific Spatial Narratives",
      "Adaptive Housing Ecosystem",
      "Transit-Oriented Community"
    ],
  
    methods: [
      "Visual and Data-Driven Planning",
      "Contextual Site Analysis",
      "Ground Plane Optimization",
      "Iterative Massing Development",
      "Ethnographic User Research",
      "Target Group Segmentation"
    ],
  
    description:
      "Short-term housing infrastructure integrating movement, rest, and social interaction within Mumbai's airport colony.",
  
    href: ""
  },

  // ---- PROJECT 15 - Administration Building ----------------------------------------
  {
    title: "Administration Building",
    category: "Architecture",
    subtitle: "Dalmia Polypro PET Recycling Plant Corporate Office",
  
    tags: [
      "Spatial Porosity & Visual Connectivity",
      "Corbeled Brick Facade",
      "Contextual Modernism",
      "Inward-Looking Courtyard Typology",
      "Rethinking Corporate Spaces",
      "Cascading Stepped Terraces"
    ],
  
    methods: [
      "Facade composition and Optimization",
      "Data-Driven Detailing",
      "Grasshopper Workflow",
      "Parametric Brick Modulation",
      "Corbeled Brick Prototyping",
      "Algorithmic Form-Finding"
    ],
  
    description:
      "Corporate office building using courtyard typology and parametric brick facade to create a contextual industrial campus intervention.",
  
    href: ""
  },

  // ---- PROJECT 16 - Multi Functional Entrance Block ----------------------------------------
  {
    title: "Multi Functional Entrance Block",
    category: "Architecture",
    subtitle: "Dalmia Polypro PET Recycling Plant",
  
    tags: [
      "Passive Daylighting Strategy",
      "Inverted Arched Geometry",
      "Alternating Solid Void Composition",
      "Stone Framed Spatiality",
      "Context Blending Form",
      "Programmatic Courtyard Rhythm"
    ],
  
    methods: [
      "Arched Roof Geometry Optimization",
      "Stone Masonry Detailing",
      "Light and Ventilation Funnel",
      "Light and Shadow Section Studies",
      "Modular Courtyard Insertions",
      "Sequential Spatial Narratives"
    ],
  
    description:
      "Entrance block designed as an extension of the industrial boundary wall, integrating courtyards, passive daylighting, and sequential spatial experiences.",
  
    href: ""
  },

  // ---- PROJECT 17 - Eating Space ----------------------------------------
  {
    title: "Eating Space",
    category: "Architecture",
    subtitle: "Dalmia Polypro PET Recycling Plant",
  
    tags: [
      "Industrial Context Integration",
      "Visual Privacy and Porosity",
      "Street Inspired Circulation",
      "Monolithic Exterior Language",
      "Inward Looking Architecture",
      "Light Driven Spatial Design"
    ],
  
    methods: [
      "Light and Ventilation Funnel Modeling",
      "User Flow Mapping",
      "Program Form Zoning",
      "Circulation as Geometry Strategy",
      "Privacy Oriented Opening Logic",
      "Facade Composition"
    ],
  
    description:
      "Industrial canteen building designed as an inward looking architectural space providing light, ventilation and social interaction.",
  
    href: ""
  },

  // ---- PROJECT 18 - Discrete Construction ----------------------------------------
  {
    title: "Discrete Construction",
    category: "Architecture",
    subtitle: "Modular Structural System in Family Specific Customizable Housing",
  
    tags: [
      "Discrete Construction Logic",
      "Micro Unit Flexibility",
      "Modular Architecture",
      "Participatory Architecture",
      "Kit of Parts Architecture",
      "Housing Personalization"
    ],
  
    methods: [
      "Housing Typology Prototyping",
      "3D Grid Structuring",
      "Modular Joinery Design",
      "Assembly Sequence Mapping",
      "Micro Grid Spatial Framework",
      "Modular Grammar Creation"
    ],
  
    description:
      "Modular housing system allowing users to customize homes using prefabricated discrete components.",
  
    href: ""
  },

  // ---- PROJECT 19 - Lokal Parklet ----------------------------------------
  {
    title: "Lokal Parklet",
    category: "Architecture",
    subtitle: "Outdoor Restaurant Extension",
  
    tags: [
      "Skyline Facing Pavilion",
      "Wooden Monolithic Mass",
      "Classic to Modern Dynamic Form",
      "Filtered Light",
      "Waterfront Dining",
      "Parametric Wooden Structure"
    ],
  
    methods: [
      "Sunlight and Ventilation Simulation",
      "Structural Wood Joinery",
      "Shadow Behavior Analysis",
      "Site Responsive Form Development",
      "Modular Assembly Techniques",
      "Parametric Modeling"
    ],
  
    description:
      "Outdoor dining pavilion designed along Hudson River with parametric wooden structure framing skyline views.",
  
    href: ""
  },
  
  // ---- PROJECT 20 - House of Warp & Weft ----------------------------------------
  {
    title: "House of Warp & Weft",
    category: "Architecture",
    subtitle: "Reimagining Tradition through Recreation Learning and Living in Kohima",
  
    tags: [
      "Play and Productivity",
      "Sectional Sandwich of Terrain and Canopy",
      "Architecture as Community Bridge",
      "Youth Centric Public Space",
      "Cultural Revival through Design",
      "Traditional Meets Parametric"
    ],
  
    methods: [
      "Parametric Geometry Design",
      "Programmatic Massing",
      "Grasshopper Roof Generation",
      "3D Terrain Mapping",
      "Roof Program Integration",
      "Spatial Structural Fusion"
    ],
  
    description:
      "Youth centric cultural and recreational intervention in Kohima integrating local craft with parametric architectural geometry.",
  
    href: ""
  },

  // ---- PROJECT 21 - Objects Institutions Identities ----------------------------------------
  {
    title: "Objects Institutions Identities",
    category: "Architecture",
    subtitle: "Kohima Study Trip Documentation",
  
    tags: [
      "Object Based Ethnography",
      "Spatial Anthropology",
      "Khel Based Community Mapping",
      "Cultural Narratives",
      "Institutional Memory",
      "Identity Through Artifacts"
    ],
  
    methods: [
      "Object Trajectory Mapping",
      "Ethnographic Fieldwork",
      "Institutional Analysis",
      "Measured Drawings",
      "Interviews and Conversations",
      "Spatial Documentation"
    ],
  
    description:
      "Documentation project exploring cultural identity through everyday objects and institutional structures in Kohima village.",
  
    href: ""
  },

  // ---- PROJECT 22 - Vertical Village ----------------------------------------
  {
    title: "Vertical Village",
    category: "Architecture",
    subtitle: "Exploring the Realm of Urban Rurality Housing",
  
    tags: [
      "Urban Self Sufficiency",
      "Disintegrated Massing",
      "Social Cohesion in Housing",
      "Spatial Porosity",
      "Urban Rural Synergy",
      "Vernacular Reimagined"
    ],
  
    methods: [
      "Daylight and Ventilation Analysis",
      "Typology Iteration",
      "Mass Void Modeling",
      "Climatic Form Optimization",
      "Responsive Facade Design",
      "Spatial Network Diagrams"
    ],
  
    description:
      "Vertical housing model inspired by village typologies integrating social cohesion and climate responsive design.",
  
    href: ""
  },

  // ---- PROJECT 23 - Membrum Vestigial ----------------------------------------
  {
    title: "Membrum Vestigial",
    category: "Architecture",
    subtitle: "Karigari Workers Cooperative Association",
  
    tags: [
      "Social Resilience",
      "Worker Centered Cooperative",
      "Revival of Craft Culture",
      "Spatial Identity",
      "Urban Marginality",
      "Post Industrial Urbanism"
    ],
  
    methods: [
      "Craft Production Mapping",
      "Community Mapping",
      "Long Span Structural Design",
      "Typology Reinterpretation",
      "Programmatic Zoning",
      "Folded Plate Form Exploration"
    ],
  
    description:
      "Architectural cooperative supporting craft workers and reviving disappearing artisanal culture.",
  
    href: ""
  },

  // ---- PROJECT 24 - Bari in Coexistence ----------------------------------------
  {
    title: "Bari in Coexistence",
    category: "Architecture",
    subtitle: "Rehabilitation for the Sundarbans houses",
  
    tags: [
      "Adaptive Living",
      "Post Disaster Rehabilitation",
      "Contextual Design Strategy",
      "Climate Resilience",
      "Floating Architecture",
      "Rural Community Housing"
    ],
  
    methods: [
      "Buoyant Foundation Engineering",
      "Local Material Assembly",
      "Modular Spatial Planning",
      "Community Centric Prototyping",
      "Structural Behavior Simulation",
      "Climatic Performance Testing"
    ],
  
    description:
      "Flood resilient housing system for Sundarbans using buoyant bamboo foundation and modular construction.",
  
    href: ""
  },

  // ---- PROJECT 25 - Sangam Gully ----------------------------------------
  {
    title: "Sangam Gully",
    category: "Architecture",
    subtitle: "Using the Old to Create New",

    tags: [
      "Urban Cultural Regeneration",
      "Heritage Sensitive Housing",
      "Social Reconnection through Space",
      "Old New Fusion",
      "Pol Morphology Revival",
      "Community Based Urbanism"
    ],

    methods: [
      "Spatial Insertion Techniques",
      "Gully Morphology",
      "Contextual Analysis",
      "Roof First Design Strategy",
      "Figure Ground Mapping",
      "Urban Section Studies"
    ],

    description:
      "Community housing intervention reconnecting fragmented historic pol neighborhoods in Sidhpur.",

    href: ""
  },

  // ---- PROJECT 26 - Fragments of Sidhpur History ----------------------------------------
  {
    title: "Fragments of Sidhpur History",
    category: "Architecture",
    subtitle: "Sidhpur Study Trip Documentation",
  
    tags: [
      "Contextual Evolution",
      "Bohri Architecture",
      "Vernacular Urbanism",
      "Hybrid Architectural Typologies",
      "Spatial Continuity",
      "Settlement Morphology"
    ],
  
    methods: [
      "Facade Documentation",
      "Timeline Mapping",
      "Urban Section Analysis",
      "Typological Analysis",
      "Measured Drawings",
      "Material Studies"
    ],
  
    description:
      "Architectural documentation project analyzing vernacular typologies in Sidhpur.",
  
    href: ""
  },

  // ---- PROJECT 27 - Fly Man Go ----------------------------------------
  {
    title: "Fly Man Go",
    category: "Architecture",
    subtitle: "Trail through all encompassing experience",
  
    tags: [
      "Biomimicry",
      "Wildlife Camouflage",
      "Modular Dynamic Structure",
      "Wildlife Tourism",
      "Multi Zone Planning",
      "Tactile User Journey"
    ],
  
    methods: [
      "Sustainable Material Research",
      "3D Form Exploration",
      "Parametric Modeling",
      "Nature Derived Form Finding",
      "Biomimetic Design",
      "Wildlife Movement Mapping"
    ],
  
    description:
      "Biomimetic wildlife observation cabins inspired by bird anatomy and wetland ecosystems.",
  
    href: ""
  },

  // ---- PROJECT 28 - Decoding Frei Otto ----------------------------------------
  {
    title: "Decoding Frei Otto",
    category: "Architecture",
    subtitle: "Tensile and Pneumatic Structure",
  
    tags: [
      "Experimental Assembly",
      "Soap Bubble Logic",
      "Fabric Architecture",
      "Pneumatic Exploration",
      "Form Through Tension",
      "Frei Otto Principles"
    ],
  
    methods: [
      "Soap Film Modeling",
      "Laser Cutting",
      "Fabric Stitching",
      "Catenary Network",
      "Digital Fabrication",
      "Physical Prototyping"
    ],
  
    description:
      "Experimental tensile structure derived from soap film and pneumatic form finding principles.",
  
    href: ""
  },

];

function buildDotItems(projects) {
  const items = [];

  projects.forEach((p, projectIndex) => {
    const add = (label, value, kind = "field") => {
      if (!value) return;
      items.push({
        projectIndex,
        projectTitle: p.title,
        href: p.href,
        kind,          // "field" or "tag"
        label,         // e.g. "Location", "Tag"
        value: String(value)
      });
    };

    // one dot per field
    add("Title", p.title);
    add("Subtitle", p.subtitle);
    add("Location", p.location);
    add("Area", `${p.area_sqm} m²`);
    add("Scale", p.scale);
    add("Category", p.category);
    add("Description", p.description);

    // one dot per tag
    (p.concept || []).forEach(c => {
      add("Concept", c, "tag");
    });
    
    (p.methods || []).forEach(m => {
      add("Method", m, "tag");
    });
  });

  return items;
}

const DOT_ITEMS = buildDotItems(PROJECTS);
console.log("DOT ITEMS:", DOT_ITEMS.length, DOT_ITEMS);

// -------------------- FILTER SYSTEM --------------------

// Which filters are currently active
const activeFilters = new Set();

// Colors for each dot type
const FILTER_COLORS = {
  Title:       new THREE.Color(0x000000),
  Subtitle:    new THREE.Color(0x000000),
  Location:    new THREE.Color(0x000000),
  Area:        new THREE.Color(0x000000),
  Scale:       new THREE.Color(0x000000),
  Description: new THREE.Color(0x000000),
  Category:    new THREE.Color(0x000000),
  Concept:     new THREE.Color(0x000000),
  Method:      new THREE.Color(0x000000),
};

// --- HUB LOOKUP (one hub dot per project: the "Title" dot) ---
const hubDotIdByProject = new Map();

function getHubDotId(projectIndex) {
  if (hubDotIdByProject.has(projectIndex)) return hubDotIdByProject.get(projectIndex);

  // Find the dot whose label is "Title" for this project
  for (let i = 0; i < DOT_ITEMS.length; i++) {
    const it = DOT_ITEMS[i];
    if (it.projectIndex === projectIndex && it.label === "Title") {
      hubDotIdByProject.set(projectIndex, i);
      return i;
    }
  }

  // fallback: first dot that matches project
  for (let i = 0; i < DOT_ITEMS.length; i++) {
    if (DOT_ITEMS[i].projectIndex === projectIndex) {
      hubDotIdByProject.set(projectIndex, i);
      return i;
    }
  }

  return null;
}


// -------------------- THREE SETUP --------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
mount.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 2000);
camera.position.set(0, 0, 260);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

controls.enablePan = true;
controls.enableZoom = true;
controls.enableRotate = true;

controls.rotateSpeed = 0.9;
controls.zoomSpeed = 1.0;
controls.panSpeed = 0.9;

controls.minDistance = 0.5;
controls.maxDistance = 5000;

controls.target.set(0, 0, 0);
controls.update();

renderer.domElement.addEventListener("pointerdown", () => {
  isPointerDown = true;
  moved = false;
});


window.addEventListener("pointerup", () => {
  isPointerDown = false;
});

controls.addEventListener("start", () => {
  isDragging = true;
});

controls.addEventListener("end", () => {
  isDragging = false;
});


function zoomByFactor(factor) {
  const dir = new THREE.Vector3().subVectors(camera.position, controls.target);
  dir.multiplyScalar(factor);
  camera.position.copy(controls.target).add(dir);

  const dist = camera.position.distanceTo(controls.target);
  if (dist < controls.minDistance) {
    camera.position.copy(controls.target).add(dir.setLength(controls.minDistance));
  }
  if (dist > controls.maxDistance) {
    camera.position.copy(controls.target).add(dir.setLength(controls.maxDistance));
  }

  controls.update();
}

function recenterView() {
  controls.target.set(0, 0, 0);
  camera.position.set(0, 0, 260);
  controls.update();
}

const group = new THREE.Group();
scene.add(group);

// -------------------- UI BUTTONS --------------------
  document.getElementById("btnZoomIn").addEventListener("click", () => zoomByFactor(0.85));
  document.getElementById("btnZoomOut").addEventListener("click", () => zoomByFactor(1.18));
  document.getElementById("btnRecenter").addEventListener("click", () => recenterView());
    
// -------------------- FILTER UI --------------------
const filterBtns = [...document.querySelectorAll("#filters .f")];

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const kind = btn.dataset.kind;
    if (!kind) return; // <-- ADD THIS GUARD

    if (activeFilters.has(kind)) {
      activeFilters.delete(kind);
      btn.classList.remove("is-on");
    } else {
      activeFilters.add(kind);
      btn.classList.add("is-on");
    }

    updateFilterLayers();
  });
});


// -------------------- DOT SPHERE --------------------
const SPHERE_RADIUS = 90;
const DOT_COUNT = DOT_ITEMS.length;
const DOT_SIZE = 0.9;


function randomPointsInSphere(n, radius) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      // uniform direction
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
  
      // uniform radius in volume (cuberoot)
      const rr = radius * Math.cbrt(Math.random());
  
      const sinPhi = Math.sin(phi);
      const x = rr * sinPhi * Math.cos(theta);
      const y = rr * sinPhi * Math.sin(theta);
      const z = rr * Math.cos(phi);
  
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }
  

const dotGeo = new THREE.SphereGeometry(1, 10, 10);
const dotMat = new THREE.MeshBasicMaterial({
  vertexColors: true,
  transparent: true,
  opacity: 0.9
});

// MAIN DOTS MESH (black)
const dots = new THREE.InstancedMesh(dotGeo, dotMat, DOT_COUNT);
dots.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
group.add(dots);

// -------------------- FILTER OVERLAY DOTS (one layer per type) --------------------
const filterLayers = {}; // { Title: InstancedMesh, Location: InstancedMesh, ... }

for (const [kind, hex] of Object.entries(FILTER_COLORS)) {
  const mat = new THREE.MeshBasicMaterial({
    color: hex,
    transparent: true,
    opacity: 1
  });

  const mesh = new THREE.InstancedMesh(dotGeo, mat, DOT_COUNT);
  mesh.visible = false;
  mesh.count = 0;

  filterLayers[kind] = mesh;
  group.add(mesh);
}

// Highlight dot (separate mesh so it stays crisp when others fade)
const hoverDot = new THREE.Mesh(
  dotGeo,
  new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1 })
);
hoverDot.visible = false;
group.add(hoverDot);


const dummy = new THREE.Object3D();
const tmpPos = new THREE.Vector3();
const tmpQuat = new THREE.Quaternion();
const tmpScale = new THREE.Vector3();
const tmpScale2 = new THREE.Vector3();
const tmpN = new THREE.Vector3();

const pts = randomPointsInSphere(DOT_COUNT, SPHERE_RADIUS);
const baseMatrix = new Array(DOT_COUNT);

function setPreview(item) {
  if (!item) {
    preview.style.display = "none";
    return;
  }

  // Project context (top line)
  pt.textContent = item.projectTitle || "";

  // What this dot represents (middle line)
  pm.textContent = item.label || "";

  // Value (bottom line)
  pd.textContent = item.value || "";

  preview.style.display = "block";
}

const dotProjectIndex = new Array(DOT_COUNT);

// --- dynamic motion state (free drift) ---
const dotPos = new Array(DOT_COUNT);        // current position
const dotVel = new Array(DOT_COUNT);        // current velocity
const dotScaleArr = new Array(DOT_COUNT);   // constant scale per dot

// dotPosition is what labels/network use — point it at live positions
const dotPosition = dotPos;

for (let i = 0; i < DOT_COUNT; i++) {
  const p = pts[i];
  const s = DOT_SIZE * (0.8 + Math.random() * 0.5);

  dotPos[i] = p.clone();
  dotVel[i] = new THREE.Vector3(
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02
  );
  dotScaleArr[i] = s;

  // map dot -> project
  dotProjectIndex[i] = DOT_ITEMS[i].projectIndex;

  dummy.position.copy(dotPos[i]);
  dummy.scale.setScalar(s);
  dummy.updateMatrix();

  dots.setMatrixAt(i, dummy.matrix);
  baseMatrix[i] = dummy.matrix.clone();
}

// second layer: only the hovered project's dots (full opacity)
const highlightMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1 });
const highlightDots = new THREE.InstancedMesh(dotGeo, highlightMat, DOT_COUNT);
highlightDots.visible = false;
group.add(highlightDots);


function updateFilterLayers() {
  const anyOn = activeFilters.size > 0;
  dots.visible = !anyOn;

  for (const kind in filterLayers) {
    filterLayers[kind].visible = activeFilters.has(kind);
    filterLayers[kind].count = 0;
  }

  if (!anyOn) return;

  for (const kind of activeFilters) {
    const layer = filterLayers[kind];
    let k = 0;

    for (let i = 0; i < DOT_COUNT; i++) {
      const item = DOT_ITEMS[i];
      if (!item) continue;

      if (item.label === kind) {
        layer.setMatrixAt(k, baseMatrix[i]);
        k++;
      }
    }

    layer.count = k;
    layer.instanceMatrix.needsUpdate = true;
  }
}



// -------------------- NETWORK LINES (Step 4) --------------------
const lineMat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 });
const lineGeo = new THREE.BufferGeometry();
const networkLines = new THREE.LineSegments(lineGeo, lineMat);
networkLines.visible = false;
group.add(networkLines);

// -------------------- RESIZE --------------------
function resize() {
  const w = mount.clientWidth || innerWidth;
  const h = mount.clientHeight || innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
addEventListener("resize", resize);
resize();


// -------------------- HOVER / CLICK (Raycaster) --------------------
const raycaster = new THREE.Raycaster();

const tooltip = document.getElementById("tooltip");
const labelsEl = document.getElementById("labels");
const projectTitleEl = document.getElementById("project-title");


function showTooltipForDot(instanceId) {
  if (instanceId === null || instanceId === undefined) {
    tooltip.style.display = "none";
    return;
  }

  const item = DOT_ITEMS[instanceId];
  if (!item) {
    tooltip.style.display = "none";
    return;
  }
  
  // If the hovered dot is the Title dot, don't show tooltip (prevents duplicate title)
  if (item.label === "Title") {
    tooltip.style.display = "none";
    return;
  }
  

  // show ONLY the dot text
  tooltip.textContent = item.value;

  // get dot position in world space
  baseMatrix[instanceId].decompose(tmpPos, tmpQuat, tmpScale);
  const worldPos = tmpPos.clone();
  group.localToWorld(worldPos);

  // project to screen space
  worldPos.project(camera);
  const rect = renderer.domElement.getBoundingClientRect();

  const x = rect.left + (worldPos.x * 0.5 + 0.5) * rect.width;
  const y = rect.top  + (-worldPos.y * 0.5 + 0.5) * rect.height;

  // place tooltip slightly below the dot
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y + 6}px`;
  tooltip.style.transform = "translateX(-50%)";
  tooltip.style.display = "block";
}

function showProjectTitle(dotId) {
  if (!projectTitleEl) return;

  if (dotId === null || dotId === undefined) {
    projectTitleEl.style.display = "none";
    return;
  }

  const item = DOT_ITEMS[dotId];
  if (!item) {
    projectTitleEl.style.display = "none";
    return;
  }

  projectTitleEl.textContent = item.projectTitle || "";
  projectTitleEl.style.display = "block";
}

function positionProjectTitleForProject(projectIndex) {
  if (!projectTitleEl) return;
  if (projectIndex === null || projectIndex === undefined) return;
  if (projectTitleEl.style.display === "none") return;

  const hubId = getHubDotId(projectIndex);
  if (hubId === null || hubId === undefined) return;

  // Use current drift positions if available
  let worldPos;

  if (typeof dotPos !== "undefined" && dotPos[hubId]) {
    worldPos = dotPos[hubId].clone(); // group-local
    group.localToWorld(worldPos);
  } else {
    baseMatrix[hubId].decompose(tmpPos, tmpQuat, tmpScale);
    worldPos = tmpPos.clone();
    group.localToWorld(worldPos);
  }

  worldPos.project(camera);
  const rect = renderer.domElement.getBoundingClientRect();

  const x = rect.left + (worldPos.x * 0.5 + 0.5) * rect.width;
  const y = rect.top  + (-worldPos.y * 0.5 + 0.5) * rect.height;

  projectTitleEl.style.left = `${x}px`;
  projectTitleEl.style.top  = `${y + 6}px`;
  projectTitleEl.style.transform = "translateX(-50%)";

}


// reuse DOM nodes so we don't create/delete every frame
const labelPool = [];

function updateProjectLabels() {
  // hide everything if not hovering a project
  if (!projectDotIds || projectDotIds.length === 0 || hoveredProjectIndex === null) {
    labelsEl.innerHTML = "";
    return;
  }

  // ensure we have enough label divs
  while (labelPool.length < projectDotIds.length) {
    const div = document.createElement("div");
    div.className = "project-label";
    labelPool.push(div);
  }

  // clear container and re-append only what we need
  labelsEl.innerHTML = "";

  const rect = renderer.domElement.getBoundingClientRect();

  let k = 0; // ✅ NEW counter for visible labels only

  for (let n = 0; n < projectDotIds.length; n++) {
    const id = projectDotIds[n];
    if (id === hoveredId) continue;
  
    const item = DOT_ITEMS[id];
    if (!item) continue;
    if ((item.label || "").toLowerCase() === "title") continue;    
  
    const dp = dotPosition[id];
    if (!dp) continue;
  
    const div = labelPool[k++]; // ✅ IMPORTANT CHANGE
    div.textContent = item.value;
  
    const p = dp.clone();
    group.localToWorld(p);
    p.project(camera);
  
    const x = rect.left + (p.x * 0.5 + 0.5) * rect.width;
    const y = rect.top  + (-p.y * 0.5 + 0.5) * rect.height;
  
    div.style.left = `${x}px`;
    div.style.top = `${y + 6}px`;
  
    labelsEl.appendChild(div);
  }
  
}

function updateFilters() {
  // hide all layers first
  for (const kind of Object.keys(filterLayers)) {
    filterLayers[kind].visible = false;
    filterLayers[kind].count = 0;
  }

  if (activeFilters.size === 0) return;

  // build each active layer
  for (const kind of activeFilters) {
    const layer = filterLayers[kind];
    if (!layer) continue;

    let k = 0;
    for (let i = 0; i < DOT_COUNT; i++) {
      const item = DOT_ITEMS[i];
      if (!item) continue;

      if (item.label === kind) {
        layer.setMatrixAt(k, baseMatrix[i]);
        k++;
      }
    }

    layer.count = k;
    layer.instanceMatrix.needsUpdate = true;
    layer.visible = true;
  }
}



function buildNetworkForProject(dotIds, projectIndex) {
  // hide if not enough points
  if (!dotIds || dotIds.length < 2 || projectIndex === null) {
    networkLines.visible = false;
    return;
  }

  const hubId = getHubDotId(projectIndex);
  if (hubId === null) {
    networkLines.visible = false;
    return;
  }

  const segs = [];

  // IMPORTANT:
  // use your CURRENT dot positions array.
  // If your moving system uses dotPos[], use dotPos.
  // If you use dotPosition[], keep dotPosition.
  const P = (typeof dotPos !== "undefined") ? dotPos : dotPosition;

  const hubP = P[hubId];
  if (!hubP) {
    networkLines.visible = false;
    return;
  }

  // Connect hub -> every other dot in the project
  for (const id of dotIds) {
    if (id === hubId) continue;

    const p = P[id];
    if (!p) continue;

    segs.push(hubP.x, hubP.y, hubP.z, p.x, p.y, p.z);
  }

  const arr = new Float32Array(segs);
  networkLines.geometry.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  networkLines.geometry.computeBoundingSphere();
  networkLines.frustumCulled = false;
  networkLines.visible = true;
  
}

const mouse = new THREE.Vector2();
let hoveredId = null;
let isHovering = false;
let isPointerDown = false;
let isDragging = false;
let moved = false;
let hoveredProjectIndex = null;
let projectDotIds = [];
let mouseDirty = true;
let hoverHoldUntil = 0;
const HOVER_HOLD_MS = 160; // keep hover for 160ms even if raycast misses

// -------------------- FILTER STATE --------------------

function setHover(id) {
  if (hoveredId === id) return;

  // reset previously hovered dot
  if (hoveredId !== null) {
    dots.setMatrixAt(hoveredId, baseMatrix[hoveredId]);
  }

  hoveredId = id;
  isHovering = (hoveredId !== null);

  if (hoveredId !== null) {
    hoveredProjectIndex = dotProjectIndex[hoveredId];
    projectDotIds = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      if (dotProjectIndex[i] === hoveredProjectIndex) projectDotIds.push(i);
    }
    buildNetworkForProject(projectDotIds, hoveredProjectIndex);
  } else {
    hoveredProjectIndex = null;
    projectDotIds = [];
  }

  if (hoveredId !== null) {
    // fade all dots
    dotMat.opacity = 0.08;

    // decompose hovered dot matrix
    baseMatrix[hoveredId].decompose(tmpPos, tmpQuat, tmpScale);

    // highlight dot (crisp)
    hoverDot.position.copy(tmpPos);
    hoverDot.scale.setScalar(2.4);
    hoverDot.visible = true;

    // bump hovered instanced dot
    const bump = 1.9;
    dummy.position.copy(tmpPos);
    dummy.quaternion.copy(tmpQuat);
    dummy.scale.copy(tmpScale).multiplyScalar(bump);
    dummy.updateMatrix();
    dots.setMatrixAt(hoveredId, dummy.matrix);

    // show all dots belonging to this project in the highlight layer
    let k = 0;
    for (const di of projectDotIds) {
      highlightDots.setMatrixAt(k, baseMatrix[di]);
      k++;
    }
    highlightDots.count = k;
    highlightDots.instanceMatrix.needsUpdate = true;
    highlightDots.visible = true;


    showTooltipForDot(hoveredId);
    showProjectTitle(hoveredId);
  } else {
    dotMat.opacity = 0.9;
    hoverDot.visible = false;
    showTooltipForDot(null);
    showProjectTitle(null);
  
    highlightDots.visible = false;
    highlightDots.count = 0;
  
    networkLines.visible = false;
  }
  
  dots.instanceMatrix.needsUpdate = true;
  dotMat.needsUpdate = true;
}


mount.addEventListener("pointermove", (e) => {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

  mouseDirty = true; // ADD THIS
});


mount.addEventListener("click", () => {
  if (moved) return; // 👈 THIS IS THE KEY LINE

  if (hoveredId === null) return;
  const item = DOT_ITEMS[hoveredId];
  if (!item || !item.href) return;
  window.open(item.href, "_blank", "noopener,noreferrer");
});


  // --- free random drift (Brownian-ish), stays inside the sphere

  //Calm / ambient
  /*
  const JITTER = 0.002;
  const DAMP = 0.99;
  const MAX_SPEED = 0.06;
  */

  //Natural / organic
  /*  
  const JITTER = 0.0035;
  const DAMP = 0.985;
  const MAX_SPEED = 0.10;
  */

  //Energetic / expressive
  const JITTER = 0.05;
  const DAMP = 1;
  const MAX_SPEED = 1;
    
// -------------------- ANIMATE --------------------
let t = 0;

function animate() {
  requestAnimationFrame(animate);
  t += 1;

  controls.update();

  const now = performance.now();

  // Only update hover if mouse moved and we're not dragging
  if (!isPointerDown && mouseDirty) {
    mouseDirty = false;
  
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObject(dots);
  
    if (hits.length) {
      setHover(hits[0].instanceId);
      hoverHoldUntil = now + HOVER_HOLD_MS;
    } else {
      // if we recently had a hover, keep it alive briefly
      if (hoveredId !== null && now < hoverHoldUntil) {
        // keep current hover
      } else {
        setHover(null);
      }
    }
  } 

// --- free random drift (Brownian motion)
const speedScale = isHovering ? 0.25 : 1.0;

if (!isHovering && !isPointerDown) {
  
  for (let i = 0; i < DOT_COUNT; i++) {
  // random acceleration (scaled)
  dotVel[i].x += (Math.random() - 0.5) * JITTER * speedScale;
  dotVel[i].y += (Math.random() - 0.5) * JITTER * speedScale;
  dotVel[i].z += (Math.random() - 0.5) * JITTER * speedScale;

  // damping
  dotVel[i].multiplyScalar(DAMP);

  // speed cap
  if (dotVel[i].length() > MAX_SPEED) {
    dotVel[i].setLength(MAX_SPEED);
  }

  // integrate position
  dotPos[i].add(dotVel[i]);

  // keep inside sphere
  if (dotPos[i].length() > SPHERE_RADIUS) {
    dotPos[i].setLength(SPHERE_RADIUS);
    dotVel[i].multiplyScalar(-0.6);
  }

  // update instanced mesh
  dummy.position.copy(dotPos[i]);
  dummy.scale.setScalar(dotScaleArr[i]);
  dummy.updateMatrix();

  dots.setMatrixAt(i, dummy.matrix);
  baseMatrix[i].copy(dummy.matrix);
}

dots.instanceMatrix.needsUpdate = true;
updateFilterLayers();

}

  // keep tooltip + project labels positioned
  if (hoveredId !== null) {
    showTooltipForDot(hoveredId);
    positionProjectTitleForProject(hoveredProjectIndex);
  }
  
  updateProjectLabels();
  
  if (hoveredId !== null && projectDotIds.length && hoveredProjectIndex !== null) {
    buildNetworkForProject(projectDotIds, hoveredProjectIndex);
  } 

  // keep filter overlay synced while dots move
  if (activeFilters.size && (t % 10 === 0)) {
    updateFilters();
  }
  
  renderer.render(scene, camera);
}
animate();