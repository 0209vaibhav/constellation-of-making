import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.1/examples/jsm/controls/OrbitControls.js";

const mount = document.getElementById("scene");

// Filter behavior
const ACTIVE_OPACITY = 1.0;
const FADE_OPACITY = 0.08;
const BASE_OPACITY = 0.35;

const ACTIVE_SCALE = 1.3;
const BASE_SCALE = 1.0;

// ---- EDIT THIS: add your real projects here
const PROJECTS = [

  // ---- PROJECT 01 - LayoutLab ----------------------------------------
  {
    title: "LayoutLab",
    category: "Computation",
    subtitle: "Interactive Computational Floor Planning Tool",
  
    concept: [
      "Computational Planning",
      "Layout Generation",
      "Spatial Optimization",
      "Variant Exploration",
      "Program-Based Design",
      "Interactive Visualization"
    ],
  
    conceptText:
      "Generates spatial layouts enabling rapid exploration of planning strategies.",
  
    methods: [
      "Python Solver",
      "Rectangle Packing",
      "SVG Visualization",
      "Variant Comparison",
      "Parametric Controls",
      "Real-time Metrics"
    ],
  
    methodsText:
      "Python solver produces layout variants visualized through SVG interface.",
  
  },

  // ---- PROJECT 02 - IBEX ----------------------------------------
  {
    title: "IBEX",
    category: "Computation",
    subtitle: "AI-Driven Real Estate & Urban Dev App",
   
    concept: [
      "AI-Driven Design Platform",
      "Computational Design",
      "Urban Development Intelligence",
      "Parametric Masterplanning",
      "Speculative Visualization",
      "Performance Analysis & Financial Reporting"
    ],
  
    conceptText:
      "Parameter-driven AI platform for urban masterplanning.",
  
    methods: [
      "Parametric & Generative Workflows",
      "API Integration",
      "Automated Design Pipelines",
      "AI-Assisted Visual Rendering",
      "Prompt Engineering for reporting",
      "Computational Masterplanning"
    ],
  
    methodsText:
      "Rhino and Grasshopper generate masterplans with automated AI reports.",
  },

  // ---- PROJECT 03 - MEMENTO ----------------------------------------
  {
    title: "MEMENTO",
    category: "Computation",
    subtitle: "Real-time Urban Experiences",
  
    concept: [
      "Participatory Mapping",
      "Real-Time City Interaction",
      "Sensory & Cultural Exploration",
      "Spatial Data Narratives",
      "Gamified Commuting",
      "Urban Experience Design"
    ],
  
    conceptText:
      "Transforms everyday commutes into interactive urban journeys",
  
    methods: [
      "Computational Design",
      "Real-Time Data Visualization",
      "Interactive Web Development",
      "Geospatial Mapping",
      "API & Dataset Integration",
      "Machine Learning Classification"
    ],
  
    methodsText:
      "Geospatial mapping and machine learning personalize urban experiences.",
  
  },

  // ---- PROJECT 04 - ML in MEMENTO ----------------------------------------
  {
    title: "ML in MEMENTO",
    category: "Computation",
    subtitle: "Automated Urban Experience Classification",
  
    concept: [
      "Machine Learning",
      "Web-data Scraping",
      "Urban Analytics",
      "Data Creation",
      "Data Structures",
      "Cloud Computing"
    ],
  
    conceptText:
      "Automates urban content classification using prediction models.",
  
    methods: [
      "Supervised Learning",
      "Data Pipeline Development",
      "Model Training",
      "Feature Engineering",
      "API Integration",
      "Classification Algorithms"
    ],
  
    methodsText:
      "Scikit-learn trains classification models with cloud retraining and integration.",
  
  },
  
  // ---- PROJECT 05 - Studio In Flux ----------------------------------------
  {
    title: "Studio In Flux",
    category: "Computation",
    subtitle: "Spatial configurations and studio movement",
  
    concept: [
      "Responsive Workspace Design",
      "Behavioral Insights",
      "Interaction Mapping",
      "Spatial Configuration",
      "Movement Patterns",
      "Circulation Optimization"
    ],
  
    conceptText:
      "Explores how spatial arrangements influence movement in the studio.",
  
    methods: [
      "Data-Informed Spatial Intervention",
      "Spatial Analysis",
      "Layout Efficiency Metrics",
      "Agent-Based Simulation",
      "Heatmap Visualization",
      "Behavioral Parameter Modeling"
    ],
  
    methodsText:
      "Agent-based simulation and heatmaps evaluate circulation score.",
  },
  
  // ---- PROJECT 06 - The Urban Fringe ----------------------------------------
  {
    title: "The Urban Fringe",
    category: "Computation",
    subtitle: "Where sidewalks meet dining",
  
    concept: [
      "Sidewalk Café Encroachment",
      "Urban Thresholds",
      "Street Life Dynamics",
      "Public-Private Thresholds",
      "Environmental Quality",
      "Pedestrian Experience"
    ],
  
    conceptText:
      "Mapping sidewalk encroachment and pedestrian accessibility.",
  
    methods: [
      "Data Collection & Classification",
      "Typology Mapping",
      "Geospatial Mapping",
      "Radiation & Climate Analysis",
      "Computational Simulation",
      "Spatial Visualization"
    ],
  
    methodsText:
      "Geospatial mapping and analysis identify sidewalk interventions.",
  },

  // ---- PROJECT 07 - BENTO ----------------------------------------
  {
    title: "BENTO",
    category: "Computation",
    subtitle: "Next-Gen Retail Store Management Platform",
  
    concept: [
      "Retail Optimization",
      "Spatial Analytics",
      "Algorithmic Geometry",
      "Data-Driven Design",
      "Layout Optimization",
      "Context-Based Layouts"
    ],
  
    conceptText:
      "Generates adaptive retail layouts using behavioral analytics and computation.",
  
    methods: [
      "Computational Modeling",
      "Algorithmic Geometry",
      "Data Integration",
      "Layout Generation",
      "Performance Analysis",
      "Parametric Modeling"
    ],
  
    methodsText:
      "Rhino and Grasshopper generate layouts informed by behavioral analytics.",
  },

  // ---- PROJECT 08 - Urban Computing ----------------------------------------
  {
    title: "Urban Computing",
    category: "Computation",
    subtitle: "Data-driven urban computational research",
  
    concept: [
      "Spatial Simulation",
      "Computational Modeling",
      "Urban Ecology",
      "Radiation Mapping",
      "Green Interventions",
      "Pedestrian Walkability"
    ],
  
    conceptText:
      "Explores sidewalk dynamics using radiation mapping to improve walkability.",
  
    methods: [
      "Computational Modeling",
      "Environmental Simulation",
      "Data-Driven Design",
      "Radiation Analysis",
      "Green Infrastructure",
      "Walkability Assessment"
    ],
  
    methodsText:
      "Environmental and radiation analysis inform green infrastructure strategies.",
  },

  // ---- PROJECT 09 - Hue Knew ----------------------------------------
  {
    title: "Hue Knew",
    category: "Computation",
    subtitle: "Interactive Film Recognition Game",
  
    concept: [
      "Film Recognition",
      "Data Visualization",
      "API Integration",
      "Film Analysis",
      "User Experience",
      "Performance Analytics"
    ],
  
    conceptText:
      "Film recognition game identifying movies through blurred visuals and analytics.",
  
    methods: [
      "Web Development",
      "API Integration",
      "Data Visualization",
      "Game Design",
      "Performance Tracking",
      "User Analytics"
    ],
  
    methodsText:
      "TMDB API and D3 power film data and performance visualization.",
  },

  // ---- PROJECT 10 - Oblivion to Odyssey ----------------------------------------
  {
    title: "Oblivion to Odyssey",
    category: "Computation",
    subtitle: "Urban disconnection and spatial awareness",
  
    concept: [
      "Urban Engagement",
      "Commuter Experience",
      "Spatial Computing",
      "Gaze Patterns",
      "Interactive Exploration",
      "City-Driven Discovery"
    ],
  
    conceptText:
      "Proposing immersive experiences for disengaged commuters.",
  
    methods: [
      "Behavioral Research",
      "Gaze Tracking",
      "Spatial Computing",
      "Prototype Development",
      "User Testing",
      "Interactive Design"
    ],
  
    methodsText:
      "Spatial computing prototypes analyze commuter engagement behavior.",
  },

  // ---- PROJECT 11 - Gaze Tracker ----------------------------------------
  {
    title: "Gaze Tracker",
    category: "Computation",
    subtitle: "Mapping Attention during OBLIVIAN",
  
    concept: [
      "Attention Mapping",
      "Gaze Tracking",
      "Spatial Awareness",
      "Habit Reformation",
      "Urban Engagement",
      "Real-Time Feedback"
    ],
  
    conceptText:
      "Maps visual attention during commutes for urban re-engagement.",
  
    methods: [
      "Computer Vision",
      "Real-Time Tracking",
      "Mobile Development",
      "Behavioral Analysis",
      "Notification Systems",
      "Data Collection"
    ],
  
    methodsText:
      "Computer vision tracks gaze delivering behavioral nudges via mobile notifications.",
  },

  // ---- PROJECT 12 - Familial Housing ----------------------------------------
  {
    title: "Familial Housing",
    category: "Architecture",
    subtitle: "Scrutinization of the Familial sensitivity",
  
    concept: [
      "Familial Fragility in Redevelopment",
      "Postulation of the Familial",
      "User Participatory Housing",
      "Cohesive community living",
      "Fictive kinship as Strategy",
      "Rethinking Familial Urbanism"
    ],
  
    conceptText:
      "Reclaims Mumbai's communal housing through a bottom-up allocation model.",
  
    methods: [
      "Housing Pattern Mapping",
      "Modular Typology Derivation",
      "User Preference based Allocation",
      "BIM based workflow",
      "Algorithmic Massing Studies",
      "Narratives to pattern language"
    ],
  
    methodsText:
      "Field research and Grasshopper workflows enabled algorithmic massing and planning.",
  },

  // ---- PROJECT 13 - High Performance Center ----------------------------------------
  {
    title: "High Performance Center",
    category: "Architecture",
    subtitle: "Chennai Super Kings Training Facility",
  
    concept: [
      "Monumental Public Architecture",
      "Terraced Massing",
      "Sports Infrastructure",
      "Dynamic Movement Expression",
      "Ramp Driven Circulation",
      "Spatial Spectatorship"
    ],
  
    conceptText:
      "Sports facility wrapping a cricket ground blending movement and spectatorship.",
  
    methods: [
      "Facade Optimization",
      "Program Form Mapping",
      "Parametric Ramp Modeling",
      "Rhino Grasshopper Workflow",
      "Multi Scale Spatial Resolution",
      "Iterative Design Prototyping"
    ],
  
    methodsText:
      "Parametric ramp modeling and facade studies generated hundreds of variations.",
  
  },

  // ---- PROJECT 14 - In Transit Hub ----------------------------------------
  {
    title: "In Transit Hub",
    category: "Architecture",
    subtitle: "Reinvigorating Short Term Housing",
  
    concept: [
      "Spatial Identity through Typologies",
      "Inclusive Urban Living",
      "Public Private Interplay",
      "User Specific Spatial Narratives",
      "Adaptive Housing Ecosystem",
      "Transit Oriented Community"
    ],
  
    conceptText:
      "Layered housing typologies integrating movement, rest, and social interaction.",
  
    methods: [
      "Data Driven Planning",
      "Contextual Site Analysis",
      "Ground Plane Optimization",
      "Iterative Massing",
      "Ethnographic Research",
      "User Segmentation"
    ],
  
    methodsText:
      "Site morphology and occupancy mapping guided massing and typology generation.",
  
  },

  // ---- PROJECT 15 - Administration Building ----------------------------------------
  {
    title: "Administration Building",
    category: "Architecture",
    subtitle: "Dalmia Polypro PET Recycling Plant",
  
    concept: [
      "Spatial Porosity",
      "Corbeled Brick Facade",
      "Contextual Modernism",
      "Courtyard Typology",
      "Corporate Spatial Identity",
      "Stepped Terraces"
    ],
  
    conceptText:
      "Courtyard corporate building with parametric brick facade",
  
    methods: [
      "Facade Optimization",
      "Grasshopper Workflow",
      "Parametric Brick Modulation",
      "Algorithmic Form Finding",
      "Daylight Optimization",
      "Computational Detailing"
    ],
  
    methodsText:
      "Grasshopper generated brick geometries optimized for daylight and ventilation.",
  
  },

  // ---- PROJECT 16 - Multi Functional Entrance Block ----------------------------------------
  {
    title: "Multi Functional Entrance Block",
    category: "Architecture",
    subtitle: "Dalmia Polypro PET Recycling Plant",
  
    concept: [
      "Passive Daylighting Strategy",
      "Inverted Arched Geometry",
      "Alternating Solid Void Composition",
      "Stone Framed Spatiality",
      "Context Blending Form",
      "Programmatic Courtyard Rhythm"
    ],
  
    conceptText:
      "Boundary wall rising into thin arched roof alternating with courtyards.",
  
    methods: [
      "Arched Roof Geometry Optimization",
      "Stone Masonry Detailing",
      "Light and Ventilation Funnel",
      "Section Studies",
      "Courtyard Insertions",
      "Sequential Spatial Narratives"
    ],
  
    methodsText:
      "Rhino and Grasshopper refined arch geometry optimizing daylight and comfort.",
  
  },

  // ---- PROJECT 17 - Eating Space ----------------------------------------
  {
    title: "Eating Space",
    category: "Architecture",
    subtitle: "Dalmia Polypro PET Recycling Plant",
    
    concept: [
      "Industrial Context Integration",
      "Visual Privacy and Porosity",
      "Street Inspired Circulation",
      "Monolithic Exterior Language",
      "Inward Looking Architecture",
      "Light Driven Spatial Design"
    ],
  
    conceptText:
      "Monolithic industrial canteen opening inward to light wells and community.",
  
    methods: [
      "Light Funnel Modeling",
      "User Flow Mapping",
      "Program Form Zoning",
      "Circulation Geometry",
      "Privacy Opening Logic",
      "Facade Composition"
    ],
  
    methodsText:
      "Rhino modeling tested skylight performance circulation and distinct user zoning.",
  
  },

  // ---- PROJECT 18 - Discrete Construction ----------------------------------------
  {
    title: "Discrete Construction",
    category: "Architecture",
    subtitle: "Modular Customizable Housing System",
  
    concept: [
      "Discrete Construction Logic",
      "Micro Unit Flexibility",
      "Modular Architecture",
      "Participatory Architecture",
      "Kit of Parts",
      "Housing Personalization"
    ],
  
    conceptText:
      "Housing assembled from prefabricated modular components to customize space.",
  
    methods: [
      "Housing Typology Prototyping",
      "3D Grid Structuring",
      "Modular Joinery Design",
      "Assembly Mapping",
      "Micro Grid Framework",
      "Modular Grammar"
    ],
  
    methodsText:
      "Grasshopper generated modular units enabling flexible spatial configurations.",
  },

  // ---- PROJECT 19 - Lokal Parklet ----------------------------------------
  {
    title: "Lokal Parklet",
    category: "Architecture",
    subtitle: "Outdoor Restaurant Extension",
  
    concept: [
      "Skyline Facing Pavilion",
      "Wooden Monolithic Form",
      "Dynamic Gable Form",
      "Filtered Light",
      "Waterfront Dining",
      "Parametric Timber Structure"
    ],
  
    conceptText:
      "Parking bay transformed into shaded timber pavilion framing NYC skyline.",
  
    methods: [
      "Sunlight Simulation",
      "Wood Joinery",
      "Shadow Analysis",
      "Site Responsive Form",
      "Modular Fabrication",
      "Parametric Modeling"
    ],
  
    methodsText:
      "Rhino parametric modeling generated modular timber elements optimized for light.",
  
  },
  
  // ---- PROJECT 20 - House of Warp & Weft ----------------------------------------
  {
    title: "House of Warp & Weft",
    category: "Architecture",
    subtitle: "Reimagining Tradition in Kohima",
  
    concept: [
      "Play and Productivity",
      "Terrain and Canopy",
      "Community Bridge",
      "Youth Centric Space",
      "Cultural Revival",
      "Traditional Meets Parametric"
    ],
  
    conceptText:
      "Youth intervention blending recreation and living under warped timber canopy.",
  
    methods: [
      "Parametric Geometry",
      "Programmatic Massing",
      "Grasshopper Roof Generation",
      "Terrain Mapping",
      "Roof Program Integration",
      "Spatial Structural Fusion"
    ],
  
    methodsText:
      "Grasshopper roof geometry integrates terrain massing with cultural.",
  },

  // ---- PROJECT 21 - Objects Institutions Identities ----------------------------------------
  {
    title: "Objects.Institutions.Identities",
    category: "Architecture",
    subtitle: "Kohima Study Trip Documentation",
    
    concept: [
      "Object Based Ethnography",
      "Spatial Anthropology",
      "Khel Based Community Mapping",
      "Cultural Narratives",
      "Institutional Memory",
      "Identity Through Artifacts"
    ],
  
    conceptText:
      "Explores how Kohima village objects shape cultural institutions and identity.",
  
    methods: [
      "Object Trajectory Mapping",
      "Ethnographic Fieldwork",
      "Institutional Analysis",
      "Measured Drawings",
      "Interviews",
      "Spatial Documentation"
    ],
  
    methodsText:
      "Fieldwork and object trajectory mapping created a layered cultural narrative.",
  },

  // ---- PROJECT 22 - Vertical Village ----------------------------------------
  {
    title: "Vertical Village",
    category: "Architecture",
    subtitle: "Urban Rural Housing Model",
  
    concept: [
      "Urban Self Sufficiency",
      "Disintegrated Massing",
      "Social Cohesion",
      "Spatial Porosity",
      "Urban Rural Synergy",
      "Vernacular Reimagined"
    ],
  
    conceptText:
      "Reinterprets rural community living within vertical housing and social clusters.",
  
    methods: [
      "Daylight Analysis",
      "Typology Iteration",
      "Mass Void Modeling",
      "Climatic Optimization",
      "Responsive Facade",
      "Spatial Network Diagrams"
    ],
  
    methodsText:
      "Parametric massing explored ventilation daylight and community interaction typologies.",
  },

  // ---- PROJECT 23 - Membrum Vestigial ----------------------------------------
  {
    title: "Membrum Vestigial",
    category: "Architecture",
    subtitle: "Karigari Workers Cooperative",
   
    concept: [
      "Social Resilience",
      "Worker Cooperative",
      "Craft Culture Revival",
      "Spatial Identity",
      "Urban Marginality",
      "Post Industrial Urbanism"
    ],
  
    conceptText:
      "Supporting craft communities through shared production and gathering.",
  
    methods: [
      "Craft Mapping",
      "Community Mapping",
      "Long Span Structures",
      "Typology Reinterpretation",
      "Program Zoning",
      "Folded Plate Exploration"
    ],
  
    methodsText:
      "Programmatic zoning and folded plate exploration shaped cooperative identity.",
  },

  // ---- PROJECT 24 - Bari in Coexistence ----------------------------------------
  {
    title: "Bari in Coexistence",
    category: "Architecture",
    subtitle: "Flood Resilient Housing",
  
    concept: [
      "Adaptive Living",
      "Post Disaster Housing",
      "Climate Resilience",
      "Floating Architecture",
      "Community Housing",
      "Contextual Design"
    ],
  
    conceptText:
      "Housing coexisting with rising floodwaters through buoyant bamboo foundations.",
  
    methods: [
      "Buoyant Foundation",
      "Local Material Assembly",
      "Modular Planning",
      "Structural Simulation",
      "Climatic Testing",
      "Load Calculations"
    ],
  
    methodsText:
      "Buoyant bamboo foundations and flood-responsive housing modules.",
  
  },

  // ---- PROJECT 25 - Sangam Gully ----------------------------------------
  {
    title: "Sangam Gully",
    category: "Architecture",
    subtitle: "Urban Cultural Regeneration",
  
    concept: [
      "Urban Cultural Regeneration",
      "Heritage Sensitive Housing",
      "Social Reconnection",
      "Old New Fusion",
      "Pol Morphology",
      "Community Urbanism"
    ],
  
    conceptText:
      "Reviving gully continuity in fragmented historic pols.",
  
    methods: [
      "Spatial Insertions",
      "Gully Morphology",
      "Context Analysis",
      "Roof First Strategy",
      "Figure Ground Mapping",
      "Urban Section Studies"
    ],
  
    methodsText:
      "Roof-first generation and figure-ground mapping shaped the regeneration strategy.",
  
  },

  // ---- PROJECT 26 - Fragments of Sidhpur History ----------------------------------------
  {
    title: "Fragments of Sidhpur History",
    category: "Architecture",
    subtitle: "Sidhpur Study Trip Documentation",
  
    concept: [
      "Contextual Evolution",
      "Bohri Architecture",
      "Vernacular Urbanism",
      "Hybrid Typologies",
      "Spatial Continuity",
      "Settlement Morphology"
    ],
  
    conceptText:
      "Typological analysis of Sidhpur's historic architectural fabric.",
  
    methods: [
      "Facade Documentation",
      "Timeline Mapping",
      "Urban Sections",
      "Typological Analysis",
      "Measured Drawings",
      "Material Studies"
    ],
  
    methodsText:
      "Measured drawings, architectural evolution and facade documentation.",
  
  },

  // ---- PROJECT 27 - Fly Man Go ----------------------------------------
  {
    title: "Fly Man Go",
    category: "Architecture",
    subtitle: "Wildlife Tourism Intervention",
  
    concept: [
      "Biomimicry",
      "Wildlife Integration",
      "Modular Structure",
      "Wildlife Tourism",
      "Multi Zone Planning",
      "Experiential Journey"
    ],
  
    conceptText:
      "Translates bird morphology into wildlife cabins designed for sensory immersion.",
  
    methods: [
      "Sustainable Materials",
      "3D Form Exploration",
      "Parametric Modeling",
      "Biomimetic Form Finding",
      "Wildlife Mapping",
      "Sectional Design"
    ],
  
    methodsText:
      "Biomimetic and parametric modeling shaped cabin typologies.",
  
  },

  // ---- PROJECT 28 - Decoding Frei Otto ----------------------------------------
  {
    title: "Decoding Frei Otto",
    category: "Architecture",
    subtitle: "Tensile and Pneumatic Structure",
  
    concept: [
      "Experimental Assembly",
      "Soap Bubble Logic",
      "Fabric Architecture",
      "Pneumatic Structures",
      "Tension Based Form",
      "Frei Otto Principles"
    ],
  
    conceptText:
      "Explores tensile structures through soap film experiments and scale fabrication.",
  
    methods: [
      "Soap Film Modeling",
      "Laser Cutting",
      "Fabric Stitching",
      "Catenary Networks",
      "Digital Fabrication",
      "Physical Prototyping"
    ],
  
    methodsText:
      "Catenary geometries fabricated using laser cutting and membranes.",
  
  },

];

// Colors for each dot type (must exist before buildDotItems / DOT_ITEMS)
const FILTER_COLORS = {
  Title:           new THREE.Color("#000000"),
  Subtitle:        new THREE.Color("#777777"),
  Category:        new THREE.Color("#E63946"),
  Concept:         new THREE.Color("#8BAFD4"),
  Methods:         new THREE.Color("#C9965A"),
  "Concept Text":  new THREE.Color("#3A86FF"),
  "Methods Text":  new THREE.Color("#F4A200")
};

function buildDotItems(projects) {
  const items = [];

  // collect unique categories
  const categories = [...new Set(projects.map(p => p.category).filter(Boolean))];

  // shared category dots — projectIndex -1, -2, etc.
  const categoryDotIndex = {}; // { "Architecture": -1, "Computation": -2 }
  categories.forEach((cat, i) => {
    categoryDotIndex[cat] = -(i + 1);
    items.push({
      projectIndex: -(i + 1),
      projectTitle: cat,
      href: null,
      kind: "Category",
      label: "Category",
      value: cat,
      color: FILTER_COLORS["Category"] || new THREE.Color("#999999"),
      isSharedCategory: true,
      categoryName: cat
    });
  });

  projects.forEach((p, projectIndex) => {
    const add = (label, value, kind) => {
      if (!value) return;
      const colorKey = kind || label;
      items.push({
        projectIndex,
        projectTitle: p.title,
        href: p.href,
        kind: colorKey,
        label,
        value: String(value),
        color: FILTER_COLORS[colorKey] || new THREE.Color("#999999"),
        isSharedCategory: false,
        categoryName: p.category
      });
    };

    add("Title", p.title);
    add("Subtitle", p.subtitle);
    add("Location", p.location);
    add("Scale", p.scale);
    add("Concept Text", p.conceptText);
    add("Methods Text", p.methodsText);

    (p.concept || []).forEach(c => add("Concept", c, "Concept"));
    (p.methods || []).forEach(m => add("Methods", m, "Methods"));
  });

  return items;
}

const DOT_ITEMS = buildDotItems(PROJECTS);
console.log("DOT ITEMS:", DOT_ITEMS.length, DOT_ITEMS);

// cache: categoryName -> dot index in DOT_ITEMS
const categoryDotIdByName = new Map();

function getCategoryDotId(categoryName) {
  if (categoryDotIdByName.has(categoryName)) return categoryDotIdByName.get(categoryName);
  for (let i = 0; i < DOT_ITEMS.length; i++) {
    if (DOT_ITEMS[i].isSharedCategory && DOT_ITEMS[i].categoryName === categoryName) {
      categoryDotIdByName.set(categoryName, i);
      return i;
    }
  }
  return null;
}

// -------------------- FILTER SYSTEM --------------------
// Which filters are currently active
const activeFilters = new Set();

// --- HUB LOOKUP (one hub dot per project: the "Title" dot) ---
const hubDotIdByProject = new Map();

function getHubDotId(projectIndex) {
  if (hubDotIdByProject.has(projectIndex)) return hubDotIdByProject.get(projectIndex);

  // shared category dots are their own hub
  if (projectIndex < 0) {
    for (let i = 0; i < DOT_ITEMS.length; i++) {
      if (DOT_ITEMS[i].projectIndex === projectIndex) {
        hubDotIdByProject.set(projectIndex, i);
        return i;
      }
    }
  }

  // regular project — find Title dot
  for (let i = 0; i < DOT_ITEMS.length; i++) {
    const it = DOT_ITEMS[i];
    if (it.projectIndex === projectIndex && it.label === "Title") {
      hubDotIdByProject.set(projectIndex, i);
      return i;
    }
  }

  // fallback
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
const isMobile = window.innerWidth < 600;
camera.position.set(0, 0, isMobile ? 420 : 260);


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
  camera.position.set(0, 0, isMobile ? 420 : 260);
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
  const k = btn.dataset.kind;
  const col = k && FILTER_COLORS[k];
  if (col) btn.style.setProperty("--filter-accent", "#" + col.getHexString());
});

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
  opacity: 1,
  depthWrite: false
});

// MAIN DOTS MESH (black)
const dots = new THREE.InstancedMesh(dotGeo, dotMat, DOT_COUNT);
dots.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
dots.renderOrder = 1;
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
  new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 })
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
  const label = DOT_ITEMS[i].label;
  const sizeMap = {
    "Title": 1.6,
    "Subtitle": 1.2,
    "Category": 3.0,
    "Concept": 0.8,
    "Methods": 0.8,
    "Concept Text": 0.6,
    "Methods Text": 0.6
  };
  const sizeMultiplier = sizeMap[label] || 1.0;
  const s = DOT_SIZE * sizeMultiplier * (0.9 + Math.random() * 0.2);

  dotPos[i] = p.clone();
  dotVel[i] = new THREE.Vector3(
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02
  );
  dotScaleArr[i] = s;

  dotProjectIndex[i] = DOT_ITEMS[i].projectIndex;

  dummy.position.copy(dotPos[i]);
  dummy.scale.setScalar(s);
  dummy.updateMatrix();

  dots.setMatrixAt(i, dummy.matrix);
  baseMatrix[i] = dummy.matrix.clone();
  dots.setColorAt(i, new THREE.Color("#111111"));
}

if (dots.instanceColor) dots.instanceColor.needsUpdate = true;

// second layer: only the hovered project's dots (full opacity)
const highlightMat = new THREE.MeshBasicMaterial({
  vertexColors: true,
  transparent: true,
  opacity: 1,
  depthWrite: false
});

const highlightDots = new THREE.InstancedMesh(dotGeo, highlightMat, DOT_COUNT);
highlightDots.visible = false;

// force instanceColor buffer allocation
highlightDots.setColorAt(0, new THREE.Color("#ff0000"));
if (highlightDots.instanceColor) highlightDots.instanceColor.needsUpdate = true;

highlightDots.renderOrder = 2;
group.add(highlightDots);


function updateFilterLayers() {

  const anyOn = activeFilters.size > 0;

  // fade base dots instead of hiding
  dotMat.opacity = anyOn ? 0.12 : 0.9;

  for (const kind in filterLayers) {
    filterLayers[kind].visible = activeFilters.has(kind);
    filterLayers[kind].count = 0;
  }

  if (!anyOn) return;

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
  }

  filterDotIds = [];

  for (const kind of activeFilters) {
    if (!filterLayers[kind]) continue;

    for (let i = 0; i < DOT_COUNT; i++) {
      const item = DOT_ITEMS[i];
      if (!item) continue;

      if (item.label === kind) {
        filterDotIds.push(i);
      }
    }
  }
}


// -------------------- NETWORK LINES (Step 4) --------------------
const LINE_TYPES = {
  "cat-title":      { color: 0xE63946, opacity: 0.7  },
  "title-subtitle": { color: 0x000000, opacity: 0.5  },
  "sub-conceptT":   { color: 0x3A86FF, opacity: 0.4  },
  "sub-methodsT":   { color: 0xF4A200, opacity: 0.4  },
  "conceptT-c":     { color: 0x8BAFD4, opacity: 0.3  },
  "methodsT-m":     { color: 0xC9965A, opacity: 0.3  },
  "concept-ring":   { color: 0x8BAFD4, opacity: 0.15 },
  "methods-ring":   { color: 0xC9965A, opacity: 0.15 },
  "cat-hub":        { color: 0xE63946, opacity: 0.6  }
};

const networkLinesByType = {};

for (const [type, cfg] of Object.entries(LINE_TYPES)) {
  const mat = new THREE.LineBasicMaterial({
    color: cfg.color,
    transparent: true,
    opacity: cfg.opacity
  });
  const geo = new THREE.BufferGeometry();
  const mesh = new THREE.LineSegments(geo, mat);
  mesh.visible = false;
  group.add(mesh);
  networkLinesByType[type] = mesh;
}


function hideAllNetworkLines() {
  for (const mesh of Object.values(networkLinesByType)) {
    mesh.visible = false;
  }
}

function commitSegs(type, segs) {
  const mesh = networkLinesByType[type];
  if (!mesh || segs.length === 0) {
    if (mesh) mesh.visible = false;
    return;
  }
  const arr = new Float32Array(segs);
  mesh.geometry.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  mesh.geometry.computeBoundingSphere();
  mesh.frustumCulled = false;
  mesh.visible = true;
}

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

function categorySlug(label) {
  return String(label || "item")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "") || "item";
}

function accentForLabel(label) {
  const c = FILTER_COLORS[label];
  return c ? "#" + c.getHexString() : "#6b7280";
}

function hideTooltipUi() {
  tooltip.style.display = "none";
  tooltip.replaceChildren();
  tooltip.className = "tooltip";
  tooltip.style.removeProperty("--cat-accent");
}

function fillDataBubble(el, item) {
  const slug = categorySlug(item.label);
  el.className = `tooltip tooltip--${slug}`;
  el.style.setProperty("--cat-accent", accentForLabel(item.label));
  el.replaceChildren();

  const rail = document.createElement("span");
  rail.className = "tooltip__rail";
  rail.setAttribute("aria-hidden", "true");

  const inner = document.createElement("span");
  inner.className = "tooltip__inner";

  const valEl = document.createElement("span");
  valEl.className = "tooltip__value";
  valEl.textContent = item.value;

  inner.append(valEl);
  el.append(rail, inner);
}

function fillHoverTooltip(el, item) {
  fillDataBubble(el, item);
}

function fillProjectLabelBubble(el, item) {
  fillDataBubble(el, item);
}

function showTooltipForDot(instanceId) {
  if (instanceId === null || instanceId === undefined) {
    hideTooltipUi();
    return;
  }

  const item = DOT_ITEMS[instanceId];
  if (!item) {
    hideTooltipUi();
    return;
  }

  // If the hovered dot is the Title dot, don't show tooltip (prevents duplicate title)
  if (item.label === "Title") {
    hideTooltipUi();
    return;
  }

  fillHoverTooltip(tooltip, item);

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
  tooltip.style.display = "flex";
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

  // shared category dot — show as category tooltip instead
  if (item.isSharedCategory) {
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

const labelPool = [];

function updateProjectLabels() {
  const connectorsSVG = document.getElementById("connectors");
  connectorsSVG.innerHTML = "";

  // SHOW LABELS WHEN FILTER ACTIVE
  if (activeFilters.size > 0 && hoveredId === null) {
    labelsEl.innerHTML = "";
    const rect = renderer.domElement.getBoundingClientRect();
    const labelData = [];

    for (let i = 0; i < filterDotIds.length; i++) {
      const id = filterDotIds[i];
      const item = DOT_ITEMS[id];
      if (!item) continue;

      const dp = dotPosition[id];
      if (!dp) continue;

      const p = dp.clone();
      group.localToWorld(p);
      p.project(camera);

      const dotX = rect.left + (p.x * 0.5 + 0.5) * rect.width;
      const dotY = rect.top  + (-p.y * 0.5 + 0.5) * rect.height;

      const div = document.createElement("div");
      fillProjectLabelBubble(div, item);
      div.style.left = `${dotX}px`;
      div.style.top  = `${dotY + 6}px`;
      labelsEl.appendChild(div);

      labelData.push({ el: div, x: dotX, y: dotY + 6, dotX, dotY });
    }

    // run collision avoidance
    resolveCollisions(labelData);

    // draw connector lines from label center to dot
    for (const d of labelData) {
      const rb = d.el.getBoundingClientRect();
      const labelCX = rb.left + rb.width / 2;
      const labelCY = rb.top  + rb.height / 2;

      const dist = Math.hypot(labelCX - d.dotX, labelCY - d.dotY);
      if (dist > 20) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", labelCX);
        line.setAttribute("y1", labelCY);
        line.setAttribute("x2", d.dotX);
        line.setAttribute("y2", d.dotY);
        connectorsSVG.appendChild(line);
      }
    }

    return;
  }

  // HOVER STATE
  if (!projectDotIds || projectDotIds.length === 0 || hoveredProjectIndex === null) {
    labelsEl.innerHTML = "";
    return;
  }

  // category super-hub hover — show all project title labels
if (hoveredProjectIndex < 0) {
  labelsEl.innerHTML = "";
  const rect = renderer.domElement.getBoundingClientRect();
  const labelData = [];
  const catName = DOT_ITEMS[hoveredId].categoryName;

  for (let i = 0; i < DOT_COUNT; i++) {
    const item = DOT_ITEMS[i];
    if (item.label !== "Title" || item.categoryName !== catName) continue;

    const dp = dotPosition[i];
    if (!dp) continue;

    const p = dp.clone();
    group.localToWorld(p);
    p.project(camera);

    const dotX = rect.left + (p.x * 0.5 + 0.5) * rect.width;
    const dotY = rect.top  + (-p.y * 0.5 + 0.5) * rect.height;

    const div = document.createElement("div");
    fillProjectLabelBubble(div, item);
    div.style.left = `${dotX}px`;
    div.style.top  = `${dotY + 6}px`;
    labelsEl.appendChild(div);

    labelData.push({ el: div, x: dotX, y: dotY + 6, dotX, dotY });
  }

  resolveCollisions(labelData);

  for (const d of labelData) {
    const rb = d.el.getBoundingClientRect();
    const labelCX = rb.left + rb.width / 2;
    const labelCY = rb.top  + rb.height / 2;
    const dist = Math.hypot(labelCX - d.dotX, labelCY - d.dotY);
    if (dist > 20) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", labelCX);
      line.setAttribute("y1", labelCY);
      line.setAttribute("x2", d.dotX);
      line.setAttribute("y2", d.dotY);
      connectorsSVG.appendChild(line);
    }
  }

  return;
}

  while (labelPool.length < projectDotIds.length) {
    labelPool.push(document.createElement("div"));
  }

  labelsEl.innerHTML = "";
  const rect = renderer.domElement.getBoundingClientRect();
  const labelData = [];
  let k = 0;

  for (let n = 0; n < projectDotIds.length; n++) {
    const id = projectDotIds[n];
    if (id === hoveredId) continue;

    const item = DOT_ITEMS[id];
    if (!item) continue;
    if ((item.label || "").toLowerCase() === "title") continue;

    const dp = dotPosition[id];
    if (!dp) continue;

    const div = labelPool[k++];
    fillProjectLabelBubble(div, item);

    const p = dp.clone();
    group.localToWorld(p);
    p.project(camera);

    const dotX = rect.left + (p.x * 0.5 + 0.5) * rect.width;
    const dotY = rect.top  + (-p.y * 0.5 + 0.5) * rect.height;

    div.style.left = `${dotX}px`;
    div.style.top  = `${dotY + 6}px`;
    labelsEl.appendChild(div);

    labelData.push({ el: div, x: dotX, y: dotY + 6, dotX, dotY });
  }

  // run collision avoidance
  resolveCollisions(labelData);

  // draw connector lines
  for (const d of labelData) {
    const rb = d.el.getBoundingClientRect();
    const labelCX = rb.left + rb.width / 2;
    const labelCY = rb.top  + rb.height / 2;

    const dist = Math.hypot(labelCX - d.dotX, labelCY - d.dotY);
    if (dist > 20) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", labelCX);
      line.setAttribute("y1", labelCY);
      line.setAttribute("x2", d.dotX);
      line.setAttribute("y2", d.dotY);
      connectorsSVG.appendChild(line);
    }
  }

  // category anchor tooltip
  const old = document.getElementById("category-anchor-tooltip");
  if (old) old.remove();

  if (hoveredProjectIndex !== null && hoveredProjectIndex >= 0) {
    const catName = DOT_ITEMS[hoveredId]?.categoryName;
    const catDotId = catName ? getCategoryDotId(catName) : null;
    if (catDotId !== null) showCategoryAnchorTooltip(catDotId);
  }
}

function resolveCollisions(labels, iterations = 5) {
  const padding = 8;

  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < labels.length; i++) {
      const a = labels[i];
      const ra = a.el.getBoundingClientRect();

      for (let j = i + 1; j < labels.length; j++) {
        const b = labels[j];
        const rb = b.el.getBoundingClientRect();

        const overlapX = (ra.left + ra.width / 2) - (rb.left + rb.width / 2);
        const overlapY = (ra.top + ra.height / 2) - (rb.top + rb.height / 2);

        const minDistX = (ra.width + rb.width) / 2 + padding;
        const minDistY = (ra.height + rb.height) / 2 + padding;

        if (Math.abs(overlapX) < minDistX && Math.abs(overlapY) < minDistY) {
          const pushX = (minDistX - Math.abs(overlapX)) / 2 * Math.sign(overlapX) * 0.5;
          const pushY = (minDistY - Math.abs(overlapY)) / 2 * Math.sign(overlapY) * 0.5;

          a.x += pushX;
          a.y += pushY;
          b.x -= pushX;
          b.y -= pushY;

          a.el.style.left = `${a.x}px`;
          a.el.style.top  = `${a.y}px`;
          b.el.style.left = `${b.x}px`;
          b.el.style.top  = `${b.y}px`;
        }
      }
    }
  }
}

function buildAllIdleNetworkLines() {
  const P = dotPos;
  const idleSegs = [];

  for (let i = 0; i < DOT_COUNT; i++) {
    const item = DOT_ITEMS[i];
    if (!item || item.label !== "Title" || item.isSharedCategory) continue;

    const hubP = P[i];
    if (!hubP) continue;

    for (let j = 0; j < DOT_COUNT; j++) {
      if (j === i) continue;
      if (DOT_ITEMS[j].projectIndex !== item.projectIndex) continue;
      const p = P[j];
      if (!p) continue;
      idleSegs.push(hubP.x, hubP.y, hubP.z, p.x, p.y, p.z);
    }
  }

  if (idleSegs.length === 0) return;

  const mesh = networkLinesByType["title-subtitle"];
  mesh.material.color.set(0xaaaaaa);
  mesh.material.opacity = 0.3;
  const arr = new Float32Array(idleSegs);
  mesh.geometry.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  mesh.geometry.computeBoundingSphere();
  mesh.frustumCulled = false;
  mesh.visible = true;
}

function buildNetworkForProject(dotIds, projectIndex) {
  if (!dotIds || dotIds.length < 1 || projectIndex === null) {
    hideAllNetworkLines();
    return;
  }

  const P = dotPos;

  // CASE A — hovering a shared category dot
  if (projectIndex < 0) {
    hideAllNetworkLines();

    const catDotId = getHubDotId(projectIndex);
    if (catDotId === null) return;

    const catP = P[catDotId];
    const catName = DOT_ITEMS[catDotId].categoryName;
    const segs = [];

    for (let i = 0; i < DOT_COUNT; i++) {
      const item = DOT_ITEMS[i];
      if (item.label === "Title" && item.categoryName === catName) {
        const p = P[i];
        if (p) segs.push(catP.x, catP.y, catP.z, p.x, p.y, p.z);
      }
    }

    commitSegs("cat-hub", segs);
    return;
  }

  // CASE B — regular project hover
  hideAllNetworkLines();

  // reset title-subtitle back to hover colors after idle state
  networkLinesByType["title-subtitle"].material.color.set(0x000000);
  networkLinesByType["title-subtitle"].material.opacity = 0.5;

  const titleDot    = dotIds.find(i => DOT_ITEMS[i].label === "Title");
  const subtitleDot = dotIds.find(i => DOT_ITEMS[i].label === "Subtitle");
  const conceptText = dotIds.find(i => DOT_ITEMS[i].label === "Concept Text");
  const methodsText = dotIds.find(i => DOT_ITEMS[i].label === "Methods Text");
  const conceptDots = dotIds.filter(i => DOT_ITEMS[i].label === "Concept");
  const methodsDots = dotIds.filter(i => DOT_ITEMS[i].label === "Methods");

  const makeSeg = (idA, idB) => {
    if (idA === undefined || idA === null) return null;
    if (idB === undefined || idB === null) return null;
    const a = P[idA];
    const b = P[idB];
    if (!a || !b) return null;
    return [a.x, a.y, a.z, b.x, b.y, b.z];
  };

  const push = (segs, seg) => { if (seg) segs.push(...seg); };

  // Category → Title
  const catName = titleDot !== undefined ? DOT_ITEMS[titleDot].categoryName : null;
  const catDotId = catName ? getCategoryDotId(catName) : null;
  const catTitleSegs = [];
  if (catDotId !== null && titleDot !== undefined) {
    push(catTitleSegs, makeSeg(catDotId, titleDot));
  }
  commitSegs("cat-title", catTitleSegs);

  // Title → Subtitle
  const titleSubSegs = [];
  push(titleSubSegs, makeSeg(titleDot, subtitleDot));
  commitSegs("title-subtitle", titleSubSegs);

  // Subtitle → Concept Text
  const subConceptTSegs = [];
  push(subConceptTSegs, makeSeg(subtitleDot, conceptText));
  commitSegs("sub-conceptT", subConceptTSegs);

  // Subtitle → Methods Text
  const subMethodsTSegs = [];
  push(subMethodsTSegs, makeSeg(subtitleDot, methodsText));
  commitSegs("sub-methodsT", subMethodsTSegs);

  // Concept Text → each Concept
  const conceptTSegs = [];
  for (const c of conceptDots) push(conceptTSegs, makeSeg(conceptText, c));
  commitSegs("conceptT-c", conceptTSegs);

  // Methods Text → each Method
  const methodsTSegs = [];
  for (const m of methodsDots) push(methodsTSegs, makeSeg(methodsText, m));
  commitSegs("methodsT-m", methodsTSegs);

  // Concept ring
  const conceptRingSegs = [];
  for (let i = 0; i < conceptDots.length; i++) {
    push(conceptRingSegs, makeSeg(conceptDots[i], conceptDots[(i + 1) % conceptDots.length]));
  }
  commitSegs("concept-ring", conceptRingSegs);

  // Methods ring
  const methodsRingSegs = [];
  for (let i = 0; i < methodsDots.length; i++) {
    push(methodsRingSegs, makeSeg(methodsDots[i], methodsDots[(i + 1) % methodsDots.length]));
  }
  commitSegs("methods-ring", methodsRingSegs);
}

function showCategoryAnchorTooltip(catDotId) {
  if (catDotId === null || catDotId === undefined) return;

  const item = DOT_ITEMS[catDotId];
  if (!item) return;

  const div = document.createElement("div");
  fillProjectLabelBubble(div, item);

  const dp = dotPos[catDotId];
  if (!dp) return;

  const p = dp.clone();
  group.localToWorld(p);
  p.project(camera);

  const rect = renderer.domElement.getBoundingClientRect();
  const x = rect.left + (p.x * 0.5 + 0.5) * rect.width;
  const y = rect.top  + (-p.y * 0.5 + 0.5) * rect.height;

  div.style.left = `${x}px`;
  div.style.top  = `${y + 6}px`;
  div.id = "category-anchor-tooltip";

  labelsEl.appendChild(div);
}

const mouse = new THREE.Vector2();
let hoveredId = null;
let lockedId = null;
let isHovering = false;
let isPointerDown = false;
let isDragging = false;
let moved = false;
let hoveredProjectIndex = null;
let projectDotIds = [];
let mouseDirty = true;
let hoverHoldUntil = 0;
let filterDotIds = [];
const HOVER_HOLD_MS = 160;

// -------------------- FILTER STATE --------------------

function setHover(id) {
  if (hoveredId === id) return;

  hoveredId = id;
  isHovering = (hoveredId !== null);

  if (hoveredId !== null) {
    hoveredProjectIndex = dotProjectIndex[hoveredId];
    projectDotIds = [];

    // CASE A — hovering shared category dot
    if (hoveredProjectIndex < 0) {
      projectDotIds = [hoveredId];
    } else {
      // CASE B — regular project dot
      for (let i = 0; i < DOT_COUNT; i++) {
        if (dotProjectIndex[i] === hoveredProjectIndex) projectDotIds.push(i);
      }
    }

    buildNetworkForProject(projectDotIds, hoveredProjectIndex);

  } else {
    hoveredProjectIndex = null;
    projectDotIds = [];
  }

  if (hoveredId !== null) {

    targetOpacity = hoveredProjectIndex < 0 ? 0.06 : 0.08;

    // reset all filter layers
    for (const kind in filterLayers) {
      filterLayers[kind].count = 0;
      filterLayers[kind].visible = false;
    }

    // force all filter layers off immediately
    for (const kind in filterLayers) {
      filterLayers[kind].instanceMatrix.needsUpdate = true;
    }

    // CASE A — category super-hub hover
    if (hoveredProjectIndex < 0) {
      const catName = DOT_ITEMS[hoveredId].categoryName;

      // collect all dots belonging to this category's projects
      const catProjectIndices = new Set();
      for (let i = 0; i < DOT_COUNT; i++) {
        if (DOT_ITEMS[i].categoryName === catName && !DOT_ITEMS[i].isSharedCategory) {
          catProjectIndices.add(DOT_ITEMS[i].projectIndex);
        }
      }

      // show category dot itself at 1.9x
      dummy.position.copy(dotPos[hoveredId]);
      dummy.scale.setScalar(dotScaleArr[hoveredId] * 1.9);
      dummy.updateMatrix();

      const catLayer = filterLayers["Category"];
      if (catLayer) {
        catLayer.setMatrixAt(0, dummy.matrix);
        catLayer.count = 1;
        catLayer.instanceMatrix.needsUpdate = true;
        catLayer.visible = true;
      }

      // show all Title dots of matching category
      const titleLayer = filterLayers["Title"];
      if (titleLayer) {
        let k = 0;
        for (let i = 0; i < DOT_COUNT; i++) {
          const item = DOT_ITEMS[i];
          if (item.label === "Title" && catProjectIndices.has(item.projectIndex)) {
            dummy.position.copy(dotPos[i]);
            dummy.scale.setScalar(dotScaleArr[i]);
            dummy.updateMatrix();
            titleLayer.setMatrixAt(k, dummy.matrix);
            k++;
          }
        }
        titleLayer.count = k;
        titleLayer.instanceMatrix.needsUpdate = true;
        titleLayer.visible = k > 0;
      }

    // CASE B — regular project hover
    } else {

      // show project dots via filter layers
      for (const kind in filterLayers) {
        const layer = filterLayers[kind];
        let k = 0;
        for (const di of projectDotIds) {
          if (DOT_ITEMS[di].label !== kind) continue;
          dummy.position.copy(dotPos[di]);
          dummy.scale.setScalar(dotScaleArr[di]);
          dummy.updateMatrix();
          layer.setMatrixAt(k, dummy.matrix);
          k++;
        }
        if (k > 0) {
          layer.count = k;
          layer.instanceMatrix.needsUpdate = true;
          layer.visible = true;
        }
      }

      // show shared category dot at 1.4x
      const catName = DOT_ITEMS[hoveredId]?.categoryName;
      const catDotId = catName ? getCategoryDotId(catName) : null;
      if (catDotId !== null) {
        const catLayer = filterLayers["Category"];
        if (catLayer) {
          dummy.position.copy(dotPos[catDotId]);
          dummy.scale.setScalar(dotScaleArr[catDotId] * 1.4);
          dummy.updateMatrix();

          const existingCount = catLayer.count || 0;
          catLayer.setMatrixAt(existingCount, dummy.matrix);
          catLayer.count = existingCount + 1;
          catLayer.instanceMatrix.needsUpdate = true;
          catLayer.visible = true;
        }
      }
    }

    // bump hovered dot
    baseMatrix[hoveredId].decompose(tmpPos, tmpQuat, tmpScale);
    dummy.position.copy(tmpPos);
    dummy.quaternion.copy(tmpQuat);
    dummy.scale.copy(tmpScale).multiplyScalar(1.9);
    dummy.updateMatrix();
    dots.setMatrixAt(hoveredId, dummy.matrix);
    dots.instanceMatrix.needsUpdate = true;

    highlightDots.visible = false;
    hoverDot.visible = false;

    showTooltipForDot(hoveredId);
    showProjectTitle(hoveredId);

  } else {

    targetOpacity = 0.9;

    for (const kind in filterLayers) {
      filterLayers[kind].count = 0;
      filterLayers[kind].visible = false;
    }

    hoverDot.visible = false;
    highlightDots.visible = false;
    highlightDots.count = 0;
    hideAllNetworkLines();

    const old = document.getElementById("category-anchor-tooltip");
    if (old) old.remove();

    showTooltipForDot(null);
    showProjectTitle(null);
  }

  dots.instanceMatrix.needsUpdate = true;

  // update cursor
  if (hoveredId === null) {
    mount.style.cursor = "";
  } else {
    const item = DOT_ITEMS[hoveredId];
    mount.style.cursor = item && item.href ? "pointer" : "crosshair";
  }
}

mount.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch") return; // handled by touch events
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  mouseDirty = true;
});

// ── Touch support ──
let touchStartX = 0;
let touchStartY = 0;
let touchMoved = false;

mount.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  touchMoved = false;
}, { passive: true });

mount.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;
  if (Math.hypot(dx, dy) > 8) touchMoved = true;
}, { passive: true });

mount.addEventListener("touchend", (e) => {
  if (touchMoved) return; // was a pan/rotate gesture, not a tap

  const touch = e.changedTouches[0];
  const rect = renderer.domElement.getBoundingClientRect();

  mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);

  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObject(dots);

  if (hits.length) {
    const tappedId = hits[0].instanceId;

    // tap same dot = unlock
    if (lockedId === tappedId) {
      lockedId = null;
      mount.classList.remove("is-locked");
      setHover(null);
      return;
    }

    // tap new dot = lock it
    setHover(tappedId);
    lockedId = tappedId;
    mount.classList.add("is-locked");

  } else {
    // tap empty space = unlock
    if (lockedId !== null) {
      lockedId = null;
      mount.classList.remove("is-locked");
      setHover(null);
    }
  }
});

mount.addEventListener("click", () => {
  if (moved) return;

  // if locked, clicking empty space unlocks
  if (lockedId !== null && hoveredId === null) {
    lockedId = null;
    setHover(null);
    return;
  }

  // clicking same dot unlocks
  if (lockedId !== null && hoveredId === lockedId) {
    lockedId = null;
    setHover(null);
    return;
  }

  // clicking a new dot while locked — unlock and relock on new dot
  if (lockedId !== null && hoveredId !== null) {
    lockedId = hoveredId;
    return;
  }

  if (hoveredId === null) return;

  // lock the current hover
  lockedId = hoveredId;

  // if dot has a link, open it only if NOT locking (i.e. already locked)
  // we skip link opening on first click — use double click for links instead
});

  //Energetic / expressive
  const JITTER = 0.01 ;
  const DAMP = 0.99;
  const MAX_SPEED = 5; 

// smooth opacity transition for dotMat
let targetOpacity = 1.0;
let currentOpacity = 1.0;
const OPACITY_SPEED = 0.1;

function updateDotOpacity() {
  if (Math.abs(currentOpacity - targetOpacity) < 0.001) {
    currentOpacity = targetOpacity;
  } else {
    currentOpacity += (targetOpacity - currentOpacity) * OPACITY_SPEED;
  }
  dotMat.opacity = currentOpacity;
  dotMat.needsUpdate = true;
}
    
// -------------------- ANIMATE --------------------
let t = 0;

function animate() {
  requestAnimationFrame(animate);
  t += 1;

  controls.update();
  updateDotOpacity();

  const now = performance.now();

  // Only update hover if mouse moved and we're not dragging
  if (!isPointerDown && mouseDirty && lockedId === null) {
    mouseDirty = false;
  
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObject(dots);
  
    if (hits.length) {
      setHover(hits[0].instanceId);
      hoverHoldUntil = now + HOVER_HOLD_MS;
    } else {
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

if (!isHovering && hoveredId === null && activeFilters.size === 0) {
  if (t % 3 === 0) buildAllIdleNetworkLines();
}

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

  // keep filter overlay synced while dots move — but not while hovering
  if (activeFilters.size && (t % 10 === 0) && hoveredId === null) {
    updateFilterLayers();
  }
  
  renderer.render(scene, camera);
}
animate();

// ── Info modal open / close ──
const infoOverlay = document.getElementById("info-overlay");
const btnInfo     = document.getElementById("btn-info");
const infoClose   = document.getElementById("info-close");

btnInfo.addEventListener("click", () => {
  infoOverlay.classList.add("is-open");
});

infoClose.addEventListener("click", () => {
  infoOverlay.classList.remove("is-open");
});

infoOverlay.addEventListener("click", (e) => {
  if (e.target === infoOverlay) infoOverlay.classList.remove("is-open");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    infoOverlay.classList.remove("is-open");
    if (lockedId !== null) {
      lockedId = null;
      setHover(null);
    }
  }
});

// ── Scroll-spy — left nav follows right scroll ──
const infoContent = document.getElementById("info-content");
const navItems    = document.querySelectorAll("#info-nav .nav-item");
const sections = ["s-what","s-why","s-read","s-made","s-who","s-where"]
                   .map(id => document.getElementById(id));

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = document.getElementById(item.dataset.target);
    if (target) {
      infoContent.scrollTo({ top: target.offsetTop - 90, behavior: "smooth" });
    }
  });
});

infoContent.addEventListener("scroll", () => {
  let current = 0;
  sections.forEach((sec, i) => {
    if (sec && sec.offsetTop - infoContent.scrollTop <= 90) current = i;
  });
  navItems.forEach((item, i) => {
    item.classList.toggle("active", i === current);
  });
});