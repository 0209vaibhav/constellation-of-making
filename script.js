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
      "LayoutLab is an interactive computational floor planning tool that generates and compares spatial layouts within a defined boundary. It visualizes program areas as configurable blocks, allowing users to explore spatial efficiency, proportions, and alternatives. The system helps designers quickly evaluate planning strategies without relying on traditional CAD workflows or manual layout iteration.",
  
    methods: [
      "Python Solver",
      "Rectangle Packing",
      "SVG Visualization",
      "Variant Comparison",
      "Parametric Controls",
      "Real-time Metrics"
    ],
  
    methodsText:
      "The system combines Python-based layout generation with a web visualization interface. A rectangle packing solver produces layout variants from adjustable program parameters, while SVG rendering enables interactive zoom, comparison, and analysis. Layout metrics and solver configurations are evaluated dynamically, supporting rapid design exploration through configurable geometry, variant comparison, and real-time feedback.",
  },

  // ---- PROJECT 02 - IBEX ----------------------------------------
  {
    title: "IBEX",
    category: "Computation",
    subtitle: "AI-Driven Real Estate & Urban Development Platform",
   
    concept: [
      "AI-Driven Design Platform",
      "Computational Design",
      "Urban Development Intelligence",
      "Parametric Masterplanning",
      "Speculative Visualization",
      "Performance Analysis & Financial Reporting"
    ],
  
    conceptText:
      "IBEX is an AI-driven real estate and urban development platform designed for the Kingdom of Saudi Arabia, enabling users to configure, generate, and evaluate architectural and urban proposals through parameter-driven workflows. The platform integrates site selection, development constraints, and financial inputs to automatically generate masterplans, building geometries, architectural identities, and contextual design outputs. By combining computational design systems with AI-based visualization and reporting, IBEX transforms early-stage planning into an interactive, data-informed design process that bridges architecture, urbanism, and decision-making.",
  
    methods: [
      "Parametric & Generative Workflows",
      "API Integration",
      "Automated Design Pipelines",
      "AI-Assisted Visual Rendering",
      "Prompt Engineering for reporting",
      "Computational Masterplanning"
    ],
  
    methodsText:
      "The workflow combines parametric modeling in Rhino and Grasshopper with backend API integrations to generate low-rise and high-rise building geometry, masterplan massing, and districting strategies. Grasshopper systems produce 19 distinct KSA architectural identity styles, while geometry is prepared for AI-based visualization using Gemini API via Nanobanana. Structured prompt engineering enables automated generation of context-aware reports covering infrastructure, sustainability, mobility, and development strategy. Together, these systems support rapid iteration, scenario testing, and scalable urban design production within a single platform.",
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
      "MEMENTO is a real-time urban experience platform designed to transform monotonous commutes into engaging city journeys. It reframes the city as an interactive playground, encouraging users to capture, discover, and interact with fleeting urban moments—sounds, sights, encounters, and emotions often overlooked in daily routines. By shifting focus from passive screen time to place-based presence, MEMENTO promotes deeper connection with the urban environment. It blends computation, design, and storytelling to resist “oblivion” and foster “odyssey,” making every journey a participatory act of exploration, memory-making, and cultural engagement.",
  
    methods: [
      "Computational Design",
      "Real-Time Data Visualization",
      "Interactive Web Development",
      "Geospatial Mapping",
      "API & Dataset Integration",
      "Machine Learning Classification"
    ],
  
    methodsText:
      "MEMENTO combines computational design, geospatial mapping, and machine learning to curate live urban experiences. The platform integrates Mapbox, Google Maps API, and D3.js for real-time visualization, with Firebase managing dynamic media and location data. Public datasets and scraped city feeds are enriched through multi-label classification models predicting categories, tags, and durations. The workflow—capture, discover, interact—ensures both user-generated and public mementos are mapped, filtered, and recommended in real time. Machine learning pipelines automate classification and personalization, while interactive web-app features foster exploration and engagement, transforming raw urban inputs into structured, discoverable narratives.",
  },

  // ---- PROJECT 04 - ML in MEMENTO ----------------------------------------
  {
    title: "ML in MEMENTO",
    category: "Computation",
    subtitle: "ML Pipeline for Automated Urban Experience Classification",
  
    concept: [
      "Machine Learning",
      "Web-data Scraping",
      "Urban Analytics",
      "Data Creation",
      "Data Structures",
      "Cloud Computing"
    ],
  
    conceptText:
      "The Machine Learning pipeline in MEMENTO automates classification and tagging of public urban content from sources like Secret NYC, Reddit, and more. It uses three models—Category Classification, Tag Prediction, and Duration Estimation—trained with supervised learning. Logistic Regression and Random Forests predict categories and multiple tags, while Decision Trees estimate memento durations. This pipeline transforms raw, unstructured data into structured, semantically rich mementos aligned with MEMENTO’s taxonomy. Automating this process ensures greater consistency, reduces manual effort, and supports scalable growth. It bridges urban storytelling and AI, enriching the user experience by embedding contextual intelligence directly into the platform’s curated dataset.",
  
    methods: [
      "Supervised Learning",
      "Data Pipeline Development",
      "Model Training",
      "Feature Engineering",
      "API Integration",
      "Classification Algorithms"
    ],
  
    methodsText:
      "This project builds a full ML pipeline for urban content classification using Python-based tools like BeautifulSoup, Selenium, and Scikit-learn. After scraping data, it undergoes preprocessing: text cleaning, feature extraction, and label encoding. Three supervised models are trained—Logistic Regression for categories, Random Forest for multi-label tags, and Decision Tree for estimating duration—using annotated training data. Models are evaluated via cross-validation and updated automatically through cloud-based retraining schedules. API endpoints integrate predictions into the live web app. This structured pipeline not only ensures high-quality metadata tagging but also streamlines the inclusion of public mementos into MEMENTO’s evolving experience ecosystem.",
  },
  
  // ---- PROJECT 05 - Studio In Flux ----------------------------------------
  {
    title: "Studio In Flux",
    category: "Computation",
    subtitle: "How spatial configurations influence movement within the Columbia GSAPP Studio",
    
    concept: [
      "Responsive Workspace Design",
      "Behavioral Insights",
      "Interaction Mapping",
      "Spatial Configuration",
      "Movement Patterns",
      "Circulation Optimization"
    ],
  
    conceptText:
      "Studio In Flux explores how the arrangement of spatial elements influences movement and interaction in the Columbia GSAPP Studio. By mapping the studio as a living system, the project reveals how desks, circulation paths, and social zones shape daily activity. Movement patterns and interaction densities are tracked and analyzed to uncover spatial inefficiencies and opportunities for collaboration. The goal is to transform invisible behavioral flows into visible, actionable insights. This data-driven perspective informs responsive workspace design strategies that enhance social engagement, reduce congestion, and support adaptive, collaborative environments for academic and creative work.",
  
    methods: [
      "Data-Informed Spatial Intervention",
      "Spatial Analysis",
      "Layout Efficiency Metrics",
      "Agent-Based Simulation",
      "Heatmap Visualization",
      "Behavioral Parameter Modeling"
    ],
  
    methodsText:
      "The project uses agent-based simulation to replicate real-time circulation in the studio, modeling students, faculty, and visitors as dynamic agents. Behavioral parameters—such as interaction frequency, movement speed, and preferred routes—were defined from onsite observation studies. The simulation generates heatmap visualizations and layout efficiency metrics, identifying high-density interaction areas and bottlenecks. Spatial analysis tools are applied to test iterative layout variations, measuring their impact on circulation smoothness and collaboration potential. Results are validated by comparing simulated patterns with real-world usage. This process creates a feedback loop for data-informed spatial interventions, ensuring design decisions align with observed human behavior.",
  },
  
  // ---- PROJECT 06 - The Urban Fringe ----------------------------------------
  {
    title: "The Urban Fringe",
    category: "Computation",
    subtitle: "Spatial Thresholds Between Public Sidewalk Life and Private Eating Enterprises",
  
    concept: [
      "Sidewalk Café Encroachment",
      "Urban Thresholds",
      "Street Life Dynamics",
      "Public-Private Thresholds",
      "Environmental Quality",
      "Pedestrian Experience"
    ],
  
    conceptText:
      "The Urban Fringe examines the blurred threshold between public sidewalks and private dining, focusing on how sidewalk cafés extend into shared urban space. The project does not critique the idea of cafés themselves but their physical interventions—the boxy enclosures and inconsistent forms that reshape circulation, visibility, and comfort. By mapping Manhattan’s sidewalks and overlaying detailed café data—including placement, type, size, and structure—the research identifies patterns of encroachment and clusters of vulnerability. Selected sites are further analyzed through 3D visualization, radiation exposure, and claustrophobia mapping, revealing how design interventions affect public accessibility. The project advocates for balanced, human-centered urban edges.",
  
    methods: [
      "Data Collection & Classification",
      "Typology Mapping",
      "Geospatial Mapping",
      "Radiation & Climate Analysis",
      "Computational Simulation",
      "Spatial Visualization"
    ],
  
    methodsText:
      "The project began with geospatial mapping of Manhattan sidewalks, clustering them by area, width, and adjacency. Café datasets were layered, recording dimensions, placement (sidewalk/roadway/hybrid), and enclosure type (open, enclosed, or hybrid). This produced geo-plans, timelines, and visual clusters showing areas of high vulnerability. A selected site was modeled in 3D to analyze micro-conditions: radiation mapping exposed heat hotspots, claustrophobia analysis measured compression effects, and tree canopy data highlighted shade gaps. Computational simulations then generated proposed interventions, introducing new trees sized and positioned according to radiation values. This data-driven process demonstrates how analysis can guide equitable, climate-responsive sidewalk design.",
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
      "BENTO is a next-generation platform that bridges spatial design and retail management using data-driven insights. By analyzing customer movement, product interaction, and sales data, it creates adaptive layouts that optimize space utilization and improve shopper experience. The platform leverages algorithmic geometry and real-time NYC Open Data to generate context-specific store arrangements. At its core is an Adjacency Layout Generator powered by computational tools like Rhino and Grasshopper. BENTO transforms static stores into dynamic systems that respond to behavioral patterns, offering layout strategies tailored to each retail setting. It delivers intuitive, high-impact environments that enhance both efficiency and engagement.",
  
    methods: [
      "Computational Modeling",
      "Algorithmic Geometry",
      "Data Integration",
      "Layout Generation",
      "Performance Analysis",
      "Parametric Modeling"
    ],
  
    methodsText:
      "The BENTO system was developed using Rhino and Grasshopper for parametric layout generation. A custom adjacency generator produced spatial configurations based on product categories, flow constraints, and context. NYC Open Data APIs were integrated to adapt layouts to urban conditions. Customer movement data and sales records informed spatial analytics, identifying hotspots and inefficiencies. Iterative simulations generated layout variations, evaluated through metrics like visibility, circulation, and product accessibility. Machine learning refined placement strategies using past performance. This integrated approach allowed BENTO to deliver intelligent, data-responsive retail layouts grounded in both design logic and operational performance.",
  },

  // ---- PROJECT 08 - Urban Computing ----------------------------------------
  {
    title: "Urban Computing",
    category: "Computation",
    subtitle: "Exploratory Research on Data Driven Urban Computational Design",
  
    concept: [
      "Spatial Simulation",
      "Computational Modeling",
      "Urban Ecology",
      "Radiation Mapping",
      "Green Interventions",
      "Pedestrian Walkability"
    ],
  
    conceptText:
      "Building upon the Urban Fringe project, Sidewalk Reclamation delves deeper into the spatial dynamics of sidewalk encroachment, focusing on radiation exposure and claustrophobic zones. By analyzing how environmental factors impact pedestrian experiences, the project identifies key areas where natural interventions, such as green buffers and shade structures, can mitigate heat and enhance walkability. Leveraging computational modeling, the project examines radiation patterns, sunlight distribution, and spatial compression across sidewalk zones. Data-driven simulations inform targeted design solutions, integrating natural elements to not only reduce heat exposure but also create more welcoming and accessible public pathways.",
  
    methods: [
      "Computational Modeling",
      "Environmental Simulation",
      "Data-Driven Design",
      "Radiation Analysis",
      "Green Infrastructure",
      "Walkability Assessment"
    ],
  
    methodsText:
      "Urban Computing utilized computational modeling platforms to simulate environmental conditions and spatial dynamics along urban sidewalks. Radiation analysis tools were used to map sunlight exposure and identify heat-prone areas. Data-driven design methods integrated GIS datasets and pedestrian movement patterns to inform intervention strategies. Environmental simulation software tested the impact of proposed green infrastructure, such as shade trees and buffer zones, on microclimate and walkability. The workflow included iterative scenario modeling, performance evaluation, and visualization of spatial data. The process enabled evidence-based recommendations for improving pedestrian comfort, reducing heat, and enhancing the ecological quality of public pathways.",
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
      "Hue Knew is an interactive film recognition quiz that invites players to identify movies based on blurred visuals, including stills and posters. It challenges users to guess titles, genres, and release years, turning abstraction into insight. The game is powered by the TMDB API, offering a dynamic and constantly refreshed library of cinematic content. Beyond gameplay, Hue Knew features a performance dashboard that visualizes player accuracy, trends by genre, and recognition strengths. This transforms a simple quiz into an engaging cinematic exploration tool—blending entertainment, film literacy, and data analytics to uncover how we recognize and remember visual storytelling.",
  
    methods: [
      "Web Development",
      "API Integration",
      "Data Visualization",
      "Game Design",
      "Performance Tracking",
      "User Analytics"
    ],
  
    methodsText:
      "The quiz was built using HTML, CSS, and JavaScript, with D3.js and Chart.js enabling real-time data visualization. The TMDB API provides up-to-date film assets like posters, release dates, and genres. Custom image processing creates blurred media for gameplay. The system tracks individual player performance, analyzing correct and incorrect responses across various dimensions. A responsive user interface ensures mobile compatibility, while performance metrics populate an interactive dashboard that visualizes user analytics. Data is used to adjust difficulty levels and provide genre-based learning insights. Hue Knew merges game mechanics with user data to enhance engagement and cinematic understanding.",
  
    href: "https://halfward.github.io/DataViz-GroupProj/"
  },

  // ---- PROJECT 10 - Oblivion to Odyssey ----------------------------------------
  {
    title: "Oblivion to Odyssey",
    category: "Computation",
    subtitle: "Understanding the disconnection between people and their urban surroundings",
  
    concept: [
      "Urban Engagement",
      "Commuter Experience",
      "Spatial Computing",
      "Gaze Patterns",
      "Interactive Exploration",
      "City-Driven Discovery"
    ],
  
    conceptText:
      "This research explores the growing disconnection between people and their urban environments, driven by gaze detachment, reduced interaction, and repetitive commuting patterns. Through mapping these behaviors in “Oblivion,” the project reveals how everyday journeys have become passive and disengaged. In contrast, “Odyssey” proposes a speculative reimagination of commutes as immersive explorations. By blending AI-driven personalization with spatial computing, it encourages users to engage more deeply with their surroundings. Streets become interactive landscapes—alive with curiosity, memory, and emotion—transforming routine travel into meaningful discovery. Oblivian to Odyssey invites a shift from unaware drifting to intentional, sensory-driven urban experiences.",
  
    methods: [
      "Behavioral Research",
      "Gaze Tracking",
      "Spatial Computing",
      "Prototype Development",
      "User Testing",
      "Interactive Design"
    ],
  
    methodsText:
      "The study combined behavioral research and computational methods to analyze urban disengagement. Gaze-tracking devices recorded visual focus during commutes, while mobile apps gathered spatial and interaction data. Prototype development involved AR-based experiences that layered digital prompts across cityscapes. Spatial computing tools enabled contextual responses based on user movement and environment. User testing was conducted with diverse commuters to capture feedback on engagement, clarity, and interaction depth. Insights from these sessions refined design decisions and interaction strategies. This iterative approach, grounded in real-time data and user behavior, supported the creation of an adaptive, responsive commuting experience.",
  },

  // ---- PROJECT 11 - Gaze Tracker ----------------------------------------
  {
    title: "Gaze Tracker",
    category: "Computation",
    subtitle: "Mapping and Shaping Attention during OBLIVIAN",
  
    concept: [
      "Attention Mapping",
      "Gaze Tracking",
      "Spatial Awareness",
      "Habit Reformation",
      "Urban Engagement",
      "Real-Time Feedback"
    ],
  
    conceptText:
      "Gaze Tracker addresses screen-induced disengagement during commutes by mapping visual attention across a 3x3 grid. By tracking head position and time spent in each gaze zone, it reveals unconscious habits like persistent downward gazing. The system provides real-time nudges to shift attention outward, reframing the commute as an opportunity for urban engagement. Instead of letting attention drift, Gaze Tracker invites users to reconnect with their surroundings. It transforms passive routines into active awareness, emphasizing that attention is both a trainable habit and a tool for urban discovery—encouraging users to look up, observe, and experience the city intentionally.",
  
    methods: [
      "Computer Vision",
      "Real-Time Tracking",
      "Mobile Development",
      "Behavioral Analysis",
      "Notification Systems",
      "Data Collection"
    ],
  
    methodsText:
      "Gaze Tracker uses computer vision to detect head position and gaze direction via mobile cameras. A 3x3 visual grid categorizes focus zones in real time, while optimized algorithms ensure smooth mobile performance. Notifications gently prompt users to redirect gaze when prolonged downward focus is detected. The app logs attention data, providing users with feedback on their visual habits. Behavioral analytics track long-term patterns, encouraging awareness shifts over time. All components are designed for minimal intrusiveness and energy use, combining spatial sensing with meaningful interaction. The result is a mobile system that subtly reshapes how users engage with the city around them.",
  },

  // ---- PROJECT 12 - Familial Housing ----------------------------------------
  {
    title: "Familial Housing",
    category: "Architecture",
    subtitle: "Scrutinization of the Familial sensitivity in Mumbai",
  
    concept: [
      "Familial Fragility in Redevelopment",
      "Postulation of the Familial",
      "User Participatory Housing",
      "Cohesive community living",
      "Fictive kinship as Strategy",
      "Rethinking Familial Urbanism"
    ],
  
    conceptText:
      "The project reclaims the disappearing familial fabric within Mumbai's housing culture by challenging the limitations of current redevelopment models. Grounded in the emotional, social, and cultural dynamics of communal living, it explores how architecture can restore kinship, shared routines, and spatial bonding. By understanding familial structures not just as units but as social ecosystems, the proposal reframes housing beyond metrics of density and economy. It introduces a bottom-up housing allocation model — 'Form Follows Preference' — allowing residents to co-author their living conditions. This vision integrates modularity, adaptability, and collective identity to redefine housing as a framework of belonging, not just built form.",
  
    methods: [
      "Housing Pattern Mapping",
      "Modular Typology Derivation",
      "User Preference based Allocation",
      "BIM based workflow",
      "Algorithmic Massing Studies",
      "Narratives to pattern language"
    ],
  
    methodsText:
      "The methodology begins with multi-scalar site studies, field research, pattern language generation, and vulnerability mapping across four typologies. BDD Chawls was chosen due to high susceptibility to insensitive redevelopment. The process included household interviews, socio-spatial analysis, site documentation, and critical review of state-led schemes. Form generation evolved from analog sketching to algorithmic modeling using Rhino and Grasshopper for geometry and preference-based permutations. Revit and BIM workflows structured the detailing across masterplan, building, and unit scales. A new allocation model was developed using customizable prefab housing modules, integrated with social, structural, and behavioral parameters to ensure participatory and culturally sensitive outcomes.",
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
      "The High Performance Center for Chennai Super Kings is designed as a cohesive sports facility wrapped around a central cricket ground. The concept stems from three arms enclosing the field—each designated for different programmatic needs like team spaces, sports courts, and F&B. A continuous ramp winds through the form, creating a dynamic relationship between movement, form, and spectatorship. The architecture seeks to blend structure, circulation, and function to craft a spatial identity that's athletic yet civic. The undulating bands wrapping the mass are not just aesthetic—they embed light, movement, and program, turning the building into a symbol of sporting dynamism.",
  
    methods: [
      "Facade Optimization",
      "Program Form Mapping",
      "Parametric Ramp Modeling",
      "Rhino Grasshopper Workflow",
      "Multi Scale Spatial Resolution",
      "Iterative Design Prototyping"
    ],
  
    methodsText:
      "The process began with site and context analysis to place the built mass around the cricket ground. Program zones were mapped into the three arms. Using Rhino and Grasshopper, a parametric system was developed to explore ramp configurations, aligning with height, circulation, and room dimensions. Terracing and sectional fluidity were iteratively tested through both plan and 3D model. Hundreds of ramp and façade variations were prototyped to refine material, structure, and light behaviour. Spatial continuity between inside and out was key—final designs balanced technical constraints with design intent, ensuring seamless transitions, visual hierarchy, and a powerful architectural identity rooted in motion.",
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
      "The IN TRANSIT HUB rethinks short-term housing as a responsive, layered typology for diverse urban dwellers—transit passengers, air crew, short-stay families, and temporary workers. Set within Mumbai's airport colony, the project introduces housing as infrastructure, integrating movement, rest, and social interaction. A continuous ramp system connects elevated dwelling blocks with shared amenities, activating public courtyards and urban edges. Through spatial variation in typology, scale, and façade, the project humanizes the experience of temporary stay. It merges metro access, cultural zones, and living pods into an adaptive housing ecosystem that prioritizes inclusivity, dignity, and urban belonging for a transient population.",
  
    methods: [
      "Data Driven Planning",
      "Contextual Site Analysis",
      "Ground Plane Optimization",
      "Iterative Massing",
      "Ethnographic Research",
      "User Segmentation"
    ],
  
    methodsText:
      "The design process began with an in-depth study of existing site conditions—housing typologies, spatial morphology, daily routines, and lived patterns. This contextual understanding shaped the framing of the core intervention problem. The master site was then analyzed to extract an intervention zone tailored for four distinct target groups. Programmatic zoning followed, organizing public spaces and ground-level interactions. Massing strategies were developed based on occupancy data and temporal usage. Each user group's needs were mapped to craft individualized housing typologies. The final resolution emerged through iterative testing—using mapping, modeling, and spatial simulations—to achieve a sensitive, inclusive housing ecosystem.",
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
      "The Administration Building redefines corporate spatial identity within an industrial context. Designed for Dalmia Polypro PET Recycling Plant, it introduces a courtyard centered layout with stepped terraces that enhance light, ventilation, and interaction. The project departs from enclosed office blocks by creating visual and spatial openness through inward-facing programs. Its locally sourced, computationally crafted brick façade integrates insulation, ventilation, and identity, resulting in a monolithic yet human-scaled presence. The building becomes a functional oasis within the factory campus—bridging utility and expression—while positioning sustainability, contextual sensitivity, and corporate comfort as equal architectural priorities.",
  
    methods: [
      "Facade composition and Optimization",
      "Data-Driven Detailing",
      "Grasshopper Workflow",
      "Parametric Brick Modulation",
      "Corbeled Brick Prototyping",
      "Algorithmic Form-Finding"
    ],
  
    methodsText:
      "Grasshopper workflows generated responsive brick facade geometries optimized for daylight and ventilation.",
  
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
      "The entrance block at the Dalmia Polypro PET Recycling Plant is conceived as a seamless extension of the boundary wall—rising gently into a dynamic, thin arched roof that defines arrival. Strategically placed programs like security, guest waiting, health center, and crèche alternate with green courtyards, creating moments of pause, ventilation, and daylight. These voids not only improve thermal comfort but also encourage interaction and visual permeability. The design responds to its industrial context with a rugged material palette and minimal visibility from the street while expressing lightness and softness within, setting a sensitive threshold for both workers and visitors.",
  
    methods: [
      "Arched Roof Geometry Optimization",
      "Stone Masonry Detailing",
      "Light and Ventilation Funnel",
      "Light & Shadow Section Studies",
      "Modular Courtyard Insertions",
      "Sequential Spatial Narratives"
    ],
  
    methodsText:
      "The process began with contextual analysis to understand how the boundary wall and adjacent road network defined the site's edge. Spatial planning evolved through sectional studies and 3D modelling in Rhino, focusing on inserting courtyards between function-specific blocks. Load-bearing masonry walls and light roof sections were optimized for daylight using splayed opening simulations. Passive cooling, material tactility, and seamless circulation were key drivers. Grasshopper was used to refine arch geometries and window splay angles, ensuring natural light without compromising privacy. Each decision was grounded in the material character of stone, brick, and steel—balancing robustness with spatial delicacy.",
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
      "Designed as an architectural quiet in the noise of an industrial landscape, the canteen block navigates between contextual subtlety and spatial richness. Surrounded by factory sheds and located at a vehicular junction, the intervention avoids visual confrontation by adopting a low-key, monolithic exterior while opening internally to light, ventilation, and social exchange. Carved niches, skewed apertures, and skylit wells shape an inward-looking experience. This threshold between outdoors and indoors becomes a soft space for pause, community, and nourishment—filtered from the harshness of the surrounding powerplant but still very much grounded in its reality.",
  
    methods: [
      "Light & Ventilation Funnel Modeling",
      "User Flow Mapping",
      "Program Form Zoning",
      "Circulation-as-Geometry Strategy",
      "Privacy-Oriented Opening Logic",
      "Facade Composition"
    ],
  
    methodsText:
      "The design process began with detailed site analysis and program distribution across distinct user groups—workers and professionals—followed by zoning of seating and utility blocks. Rhino was used extensively to explore formal massing, test light wells, simulate skylight performance, and resolve curvature-based transitions. Circulation was mapped as an urban street flowing indoors, expressed through paving continuity and controlled openings. Skewed apertures and carved voids were modeled parametrically to optimize daylight and airflow while preserving visual privacy. Material and form were calibrated to offer spatial intimacy within a low-rise industrial fabric, balancing subtle visibility with internal spatial generosity.",
  },

  // ---- PROJECT 18 - Discrete Construction ----------------------------------------
  {
    title: "Discrete Construction",
    category: "Architecture",
    subtitle: "Modular Structural System in Customizable Housing",
  
    concept: [
      "Discrete Construction Logic",
      "Micro Unit Flexibility",
      "Modular Architecture",
      "Participatory Architecture",
      "Kit of Parts Architecture",
      "Housing Personalization"
    ],
  
    conceptText:
      "This project proposes a modular housing system grounded in discrete construction logic, where users actively shape their homes by assembling prefabricated components. A micro-grid layout enables adaptability, allowing families to customize spatial arrangements based on their evolving needs, lifestyles, and household size. The system is democratic and participatory—responding to both physical constraints and personal desires. Rather than adapting to a pre-designed house, the house adapts to the user. By empowering inhabitants with spatial agency, the model offers a sustainable and scalable strategy for family-specific, community-driven housing that remains open-ended and expandable across time.",
  
    methods: [
      "Housing Typology Prototyping",
      "3D Grid Structuring",
      "Modular Joinery Design",
      "Assembly Sequence Mapping",
      "Micro Grid Spatial Framework",
      "Modular Grammar Creation"
    ],
  
    methodsText:
      "Grasshopper parametric systems generated modular units allowing stacking and spatial flexibility.",
  
  },

  // ---- PROJECT 19 - Lokal Parklet ----------------------------------------
  {
    title: "Lokal Parklet",
    category: "Architecture",
    subtitle: "An Outdoor Restaurant Extension Framing Skyline and Shade",
  
    concept: [
      "Skyline Facing Pavilion",
      "Wooden Monolithic Form",
      "Dynamic Gable Form",
      "Filtered Light",
      "Waterfront Dining",
      "Parametric Timber Structure"
    ],
  
    conceptText:
      "Lokal Parklet is an outdoor dining extension designed for a restaurant located along the Hudson River, with an open view of the New York City skyline. The design reimagines a classic gable roof form—distorted as if shaped by wind and context—to create a dynamic, asymmetrical timber canopy. This intervention transforms a small parking bay into a shaded pavilion that filters light, preserves views, and evokes a modern yet nostalgic identity. Alternating wooden box sections generate transparency, ventilation, and visual rhythm, while the LOKAL cut-out at the front frames its identity. It's a warm blend of craft, geometry, and contextual storytelling.",
  
    methods: [
      "Sunlight Simulation",
      "Wood Joinery",
      "Shadow Analysis",
      "Site Responsive Form",
      "Modular Fabrication",
      "Parametric Modeling"
    ],
  
    methodsText:
      "The parklet structure was developed through parametric modeling in Rhino, allowing us to manipulate a traditional roof form into a dynamic, site-responsive pavilion. We studied solar angles and shadow behavior to optimize filtered light and natural ventilation through alternating wooden members. The form was crafted for modular fabrication, using structural wood joinery to create a monolithic assembly. The open skeletal framework not only offers visual permeability but also frames the New York skyline from every seat. The design blends digital form-finding with tactile material expression to create a contextual yet iconic urban intervention.",
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
      "Set in Kohima's T-Khel region, this youth-centric intervention blends recreation, culture, and living into one cohesive experience. Responding to the site's educational surroundings, the program includes food zones, learning pods, gaming areas, and dormitories. Each space is connected under a lightweight timber-steel roof that warps to create spatial variation. Inspired by traditional materials and community life, the project fuses local craft with contemporary geometry. The architecture becomes a space between cheer and calm, enabling spontaneous interaction, cultural continuity, and social belonging through playful form and rooted material expression.",
  
    methods: [
      "Parametric Geometry",
      "Programmatic Massing",
      "Grasshopper Roof Generation",
      "Terrain Mapping",
      "Roof Program Integration",
      "Spatial Structural Fusion"
    ],
  
    methodsText:
      "The design process began with precise 3D terrain modelling to accommodate split-level massing across the site's organic slope. Programmatic blocks were spatially arranged to respond to views, movement, and social overlap. Parametric elements—including bamboo screens, brick perforated walls, and pod facades—were scripted using Grasshopper to achieve optimized, culturally grounded geometries. The warping roof, generated through algorithmic design, stitched together all zones under one expressive form. It not only unified the blocks visually but also responded to each function, creating varying heights, light conditions, and spatial dynamics that enhanced the identity and experiential quality of the intervention.",
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
      "This documentation project explores the interrelationship between everyday objects, cultural institutions, and identity formation within Kohima Village, Nagaland. Divided into four traditional communities called Khels, the village reveals its heritage through seemingly mundane artifacts present in households. Each student group studied one Khel, tracing objects across domestic and community spaces to uncover their material histories, ritual uses, and symbolic meanings. These artifacts—whether ceremonial, utilitarian, or crafted—became entry points into understanding the institutional structures and evolving narratives of Kohima. Through observation, interviews, and spatial mapping, the study builds a layered portrait of how identities are sustained and transformed through objects in space.",
  
    methods: [
      "Object Trajectory Mapping",
      "Ethnographic Fieldwork",
      "Institutional Analysis",
      "Measured Drawings",
      "Interviews",
      "Spatial Documentation"
    ],
  
    methodsText:
      "The research process was rooted in immersive fieldwork during a studio-led trip to Kohima. Students engaged in object-based mapping, selecting everyday or ceremonial items from village homes and tracing their life cycles—how they are made, used, stored, and remembered. These object trajectories revealed networks of institutions—family, religion, craft, and governance. Tools included spatial mapping at multiple geographic scales, ethnographic interviews, typological diagrams, and narrative sketches. A sequence of diagrams was created to trace the village's location and internal divisions (Khels), document the chosen objects, and visualize the institutions and practices they connect to, offering a spatialized anthropology of material identity.",
  
  },

  // ---- PROJECT 22 - Vertical Village ----------------------------------------
  {
    title: "Vertical Village",
    category: "Architecture",
    subtitle: "Exploring the Realm of Urban Rurality Housing",
  
    concept: [
      "Urban Self Sufficiency",
      "Disintegrated Massing",
      "Social Cohesion",
      "Spatial Porosity",
      "Urban Rural Synergy",
      "Vernacular Reimagined"
    ],
  
    conceptText:
      "The project reinterprets the notion of a 'Vertical Village' to address the housing crisis in Mumbai while preserving the values of rural living. Instead of typical repetitive towers, the design explores staggering, terracing, and spatial porosity to replicate the interactive and clustered nature of village life. Inspired by rural homes and courtyards, the architecture encourages community interaction, cross-ventilation, and personal outdoor space at vertical heights. This approach blends the intimacy of ground-level village dynamics with the efficiency of vertical construction, creating a socially sustainable and context-sensitive housing model that balances density, diversity, and a sense of belonging.",
  
    methods: [
      "Daylight & Ventilation Analysis",
      "Typology Iteration",
      "Mass Void Modeling",
      "Climatic Form Optimization",
      "Responsive Facade Design",
      "Spatial Network Diagrams"
    ],
  
    methodsText:
      "A modular design framework guided the formation of ten housing typologies, distributed across a staggered massing system. Computational tools such as Rhino and Grasshopper were used to explore solar studies, natural ventilation, and massing strategies. Parametric iterations helped test visual and climatic performance while optimizing daylight and airflow through internal courtyards and stepped terraces. Detailed spatial diagrams and sectional studies enabled mapping of public-private transitions, shared corridors, and structural grids. These tools, coupled with climate-responsive thinking and participatory housing principles, enabled the project to merge architectural logic with ecological comfort and social coherence at the scale of a vertical community.",
  
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
      "Membrum Vestigial responds to the fading traces of Mumbra's once-vibrant craft culture—particularly the embroidery and pleating traditions now pushed to the margins. The project is a spatial protest and a revival strategy, reflecting on the slow disappearance of artisanship due to urban pressures, loss of livelihood, and policy neglect. Through an architectural cooperative, the project offers dignity, visibility, and ownership to craftspeople. Designed as a hybrid of production, learning, and gathering, it sustains the workers' agency and builds resilience. The brutalist roof form embodies their strength, while open studio typologies echo the informal yet rigorous nature of their practice.",
  
    methods: [
      "Craft Mapping",
      "Community Mapping",
      "Long Span Structures",
      "Typology Reinterpretation",
      "Program Zoning",
      "Folded Plate Exploration"
    ],
  
    methodsText:
      "The project employed precise architectural documentation of eight significant structures within Sidhpur's old city. Each team recorded spatial and structural details—floor plans, ceiling plans, sections, and 3D isometric drawings. Careful attention was paid to joinery techniques, material articulation, façade language, and contextual relationships with adjacent buildings. Street elevations captured the urban rhythm and transitions across typologies. Students also mapped the city's historical development to situate each structure within a broader temporal and urban narrative. The resulting work blends architectural accuracy with anthropological sensitivity—creating a comprehensive visual archive of a town shaped by time, trade, and cultural convergence.",
  },

  // ---- PROJECT 24 - Bari in Coexistence ----------------------------------------
  {
    title: "Bari in Coexistence",
    category: "Architecture",
    subtitle: "Rehabilitation for the Sundarbans houses",
  
    concept: [
      "Adaptive Living",
      "Post Disaster Rehabilitation",
      "Contextual Design Strategy",
      "Climate Resilience",
      "Floating Architecture",
      "Rural Community Housing"
    ],
  
    conceptText:
      "Bari in Coexistence proposes a resilient housing module for the flood-prone Sundarbans, grounded in the philosophy of coexisting with nature rather than resisting it. The dwelling's conical roof and buoyant bamboo base are designed to adapt to rising water levels, enabling vertical displacement during floods. Organized into two blocks—work and living—the modular system supports flexible expansion. The structure integrates local and recycled materials like bamboo, rattan, golpatta leaves, and plastic barrels, combining traditional knowledge with climatic responsiveness. This hybrid system ensures not only structural stability but also social sustainability through communal courtyards, adaptable interiors, and resource-sharing spaces.",
  
    methods: [
      "Buoyant Foundation",
      "Local Material Assembly",
      "Modular Planning",
      "Community-Centric Prototyping",
      "Structural Behavior Simulation",
      "Climatic Performance Testing"
    ],
  
    methodsText:
      "The design was developed through site-responsive analysis and technical prototyping for floating resilience. Calculations of live, dead, and environmental loads informed the use of 88 airtight 200-liter plastic barrels beneath the bamboo raft foundation, enabling safe vertical lift. The form draws from radial geometry, distributing wind loads and facilitating airflow. CAD modeling, iterative sectional studies, and environmental simulation tools were employed to test light, ventilation, and buoyancy. Local construction techniques were integrated using sustainable materials, while flexible programming enabled a dual-block layout for domestic and productive functions—linked by circulation paths that encourage daily interaction and community cohesion.",
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
      "Pol Morphology Revival",
      "Community Based Urbanism"
    ],
  
    conceptText:
      "Sangam Gully reimagines Sidhpur's Lal Doshini Pol, where migration and shifting lifestyles have fractured once-vibrant communal ties. The project proposes an architectural intervention that reconnects fragmented pols by reviving cultural practices and reinterpreting traditional forms. 'Sangam'—meaning union—guides the concept: blending the social spirit of shared Bohra meals, the gully as connective tissue, and adaptive reuse of vernacular roof patterns and brick facades. Rather than imposing blocks, the design begins with the roof, allowing spatial play and cultural continuity. The result is a woven network of old and new, spatially and socially stitching the past into the present.",
  
    methods: [
      "Spatial Insertions",
      "Gully Morphology",
      "Context Analysis",
      "Roof First Strategy",
      "Figure Ground Mapping",
      "Urban Section Studies"
    ],
  
    methodsText:
      "The project adopts a roof-centric design process, beginning with traditional roofing geometries to shape space from the top down. Using figure-ground mapping, the intervention identifies disconnections between adjacent pols and proposes spatial stitching through gully continuity. Intrusion–extrusion operations reinterpret dead facades, transforming them into active social spaces. Otlas and shaded walkways extend the communal spirit, while lifted structures reinstate public passage. Contextual analysis of materiality, typology, and circulation patterns informed the integration of modern design without losing cultural essence. Tools like section studies and physical models helped translate the gully's social rhythm into built form.",
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
      "The study explores the architectural evolution of Sidhpur by dissecting eight unique sites within its old city fabric. Through historical timelines and typological analysis, students uncovered how trade, migration, and religious identity shaped a distinct built language—merging local craftsmanship with colonial influences. Each structure selected reflects a microcosm of Sidhpur's layered past, from narrow pols to merchant mansions. The project goes beyond façade aesthetics to examine how materiality, construction logic, and context inform spatial narratives. This deep-dive into vernacular hybridity helps trace not only architectural shifts, but also the socio-cultural currents embedded in the very bones of the town.",
  
    methods: [
      "Facade & Street-scape Documentation",
      "Timeline Mapping",
      "Urban Sections Analysis",
      "Spatial & Typological Analysis",
      "Measured Drawings",
      "Material Studies"
    ],
  
    methodsText:
      "The project employed precise architectural documentation of eight significant structures within Sidhpur's old city. Each team recorded spatial and structural details—floor plans, ceiling plans, sections, and 3D isometric drawings. Careful attention was paid to joinery techniques, material articulation, façade language, and contextual relationships with adjacent buildings. Street elevations captured the urban rhythm and transitions across typologies. Students also mapped the city's historical development to situate each structure within a broader temporal and urban narrative. The resulting work blends architectural accuracy with anthropological sensitivity—creating a comprehensive visual archive of a town shaped by time, trade, and cultural convergence.",
  },

  // ---- PROJECT 27 - Fly Man Go ----------------------------------------
  {
    title: "Fly Man Go",
    category: "Architecture",
    subtitle: "Wildlife Tourism Intervention",
  
    concept: [
      "Biomimicry",
      "Wildlife Integration",
      "Modular dynamic structure",
      "Wildlife Tourism",
      "Multi Zone Planning",
      "Tactile User Journey"
    ],
  
    conceptText:
      "FLY-MAN-GO is a biomimetic response to wildlife tourism, drawing from the elegance of the Great Egret and Flamingo. The design translates bird-like qualities—feathered rooflines, slender stilt-like supports, and angular silhouettes—into immersive architecture. These observation cabins are not just shelters but sensory extensions of the wetland, allowing filtered light, focused views, and quiet coexistence. Designed for minimal intrusion, the cabins offer multi-level engagement—grounded, raised, and water-bound. Through subtle camouflage and tactility, the architecture dissolves into the landscape, enhancing the user's relationship with nature while honoring the delicate rhythms and visual language of the wild.",
  
    methods: [
      "Sustainable Materials",
      "3D Form Exploration",
      "Parametric Modeling",
      "Nature-Derived Form Finding",
      "Biomimetic Form Translation",
      "Wildlife Movement Mapping"
    ],
  
    methodsText:
      "The design evolved through biomimetic analysis, wildlife behavior mapping, and experiential zoning. Inspired by avian anatomy and movement, forms were developed via sketches, physical models, and parametric tools. Detailed site studies and programmatic overlays shaped three cabin typologies across different immersion levels. Structural systems were resolved using profiling techniques for slender, expressive frames. Sustainable material research guided eco-sensitive choices, while spatial sequencing was informed by habitat transitions and wildlife pathways. The use of sectional design thinking, nature-derived form generation, and modular scalability ensured a dynamic, responsive architectural language integrated into both the natural terrain and the visitor's journey.",
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
      "Pneumatic Exploration",
      "Form Through Tension",
      "Frei Otto Principles"
    ],
  
    conceptText:
      "Bari in Coexistence proposes a resilient housing module for the flood-prone Sundarbans, grounded in the philosophy of coexisting with nature rather than resisting it. The dwelling's conical roof and buoyant bamboo base are designed to adapt to rising water levels, enabling vertical displacement during floods. Organized into two blocks—work and living—the modular system supports flexible expansion. The structure integrates local and recycled materials like bamboo, rattan, golpatta leaves, and plastic barrels, combining traditional knowledge with climatic responsiveness. This hybrid system ensures not only structural stability but also social sustainability through communal courtyards, adaptable interiors, and resource-sharing spaces.",
  
    methods: [
      "Soap Film Modeling",
      "Laser Cutting",
      "Fabric Stitching",
      "Catenary Networks",
      "Digital Fabrication",
      "1:5 Prototyping"
    ],
  
    methodsText:
      "The process began with soap film experiments using thread networks and bamboo sticks to extract catenary geometries. These were interpreted into thread-filled wireframe cubes that acted as modular tension elements. Once composed, the unified form was reinforced with PVC tubes, custom laser-cut discs, and stitched fabric membranes. Rhino 3D was used to model the entire structure digitally, translating it into fabrication files. The team used laser cutting and 3D printing for precision components, while tension cloth was hand-stitched on-site. The final structure stood as a physical testament to pneumatic principles, built at 1:5 scale.",
  
  },

];

// Colors for each dot type (must exist before buildDotItems / DOT_ITEMS)
const FILTER_COLORS = {
  Title:           new THREE.Color("#000000"),
  Subtitle:        new THREE.Color("#777777"),
  Category:        new THREE.Color("#E63946"),
  Concept:         new THREE.Color("#3A86FF"),
  Methods:         new THREE.Color("#F4A200"),
  "Concept Text":  new THREE.Color("#8BAFD4"),
  "Methods Text":  new THREE.Color("#C9965A")
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
    "Title": 2.2,
    "Subtitle": 1.6,
    "Category": 1.8,
    "Concept": 1.0,
    "Methods": 1.0,
    "Concept Text": 0.7,
    "Methods Text": 0.7
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

function buildNetworkForProject(dotIds, projectIndex) {
  if (!dotIds || dotIds.length < 1 || projectIndex === null) {
    networkLines.visible = false;
    return;
  }

  const P = dotPos;
  const segs = [];

  // CASE A — hovering a shared category dot
  if (projectIndex < 0) {
    const catDotId = getHubDotId(projectIndex);
    if (catDotId === null) { networkLines.visible = false; return; }

    const catP = P[catDotId];
    const catName = DOT_ITEMS[catDotId].categoryName;

    // connect category dot -> every Title dot of matching category
    for (let i = 0; i < DOT_COUNT; i++) {
      const item = DOT_ITEMS[i];
      if (item.label === "Title" && item.categoryName === catName) {
        const p = P[i];
        if (p) segs.push(catP.x, catP.y, catP.z, p.x, p.y, p.z);
      }
    }

  // CASE B — hovering a regular project dot
  } else {
    const hubId = getHubDotId(projectIndex);
    if (hubId === null) { networkLines.visible = false; return; }

    const hubP = P[hubId];

    // connect hub -> every other dot in the project
    for (const id of dotIds) {
      if (id === hubId) continue;
      const p = P[id];
      if (p) segs.push(hubP.x, hubP.y, hubP.z, p.x, p.y, p.z);
    }

    // connect hub -> shared category dot
    const catName = DOT_ITEMS[hubId].categoryName;
    const catDotId = getCategoryDotId(catName);
    if (catDotId !== null) {
      const catP = P[catDotId];
      if (catP) segs.push(hubP.x, hubP.y, hubP.z, catP.x, catP.y, catP.z);
    }
  }

  if (segs.length === 0) { networkLines.visible = false; return; }

  const arr = new Float32Array(segs);
  networkLines.geometry.setAttribute("position", new THREE.BufferAttribute(arr, 3));
  networkLines.geometry.computeBoundingSphere();
  networkLines.frustumCulled = false;
  networkLines.visible = true;
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

    dotMat.opacity = hoveredProjectIndex < 0 ? 0.06 : 0.08;
    dotMat.needsUpdate = true;

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

    dotMat.opacity = 0.9;
    dotMat.needsUpdate = true;

    for (const kind in filterLayers) {
      filterLayers[kind].count = 0;
      filterLayers[kind].visible = false;
    }

    hoverDot.visible = false;
    highlightDots.visible = false;
    highlightDots.count = 0;
    networkLines.visible = false;

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
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

  mouseDirty = true; // ADD THIS
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
    
// -------------------- ANIMATE --------------------
let t = 0;

function animate() {
  requestAnimationFrame(animate);
  t += 1;

  controls.update();

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