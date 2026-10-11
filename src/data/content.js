// ─────────────────────────────────────────────────────────────
// All editable content lives here. Empty strings ("") mean
// "not provided yet": the related button is shown as disabled.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Ferdaous Chelbi",
  role: "AI & Data Engineering Student",
  intro:
    "Engineering student in Advanced Technologies, specializing in Digitalization and Data Analysis.",
  description:
    "Passionate about Artificial Intelligence, Machine Learning, Data Analysis and intelligent software solutions.",
  status: "Currently looking for a PFE internship.",
  email: "ferdaouschelbi@gmail.com",
  linkedin: "https://www.linkedin.com/in/chelbi-ferdaous-0366511a9",
  github: "https://github.com/FerdaousChelbi",
  photo: "/ferdaous.webp",
  cvPath: "/cv/Ferdaous_Chelbi_CV.pdf", // file lives in public/cv/
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I am an engineering student in Advanced Technologies – Digitalization and Data Analysis (DAD) at the École Nationale des Sciences et Technologies Avancées de Borj Cédria.",
    "My academic background and projects have allowed me to develop skills in Artificial Intelligence, Machine Learning, Data Analysis, Deep Learning and Web Development.",
    "I am particularly interested in developing intelligent solutions based on data and applying AI to real-world industrial and technical problems.",
    "I am currently looking for a PFE internship in Artificial Intelligence, Machine Learning, Data Science, Data Engineering or AI-based software development.",
  ],
  profile: [
    { label: "Field", value: "Advanced Technologies – Digitalization and Data Analysis" },
    { label: "Location", value: "Tunisia" },
    { label: "Languages", value: "Arabic, French, English" },
    { label: "Availability", value: "PFE Internship" },
  ],
};

export const skills = [
  { category: "Programming", items: ["Python", "JavaScript", "Java", "C", "C++", "MATLAB"] },
  { category: "Web & Development", items: ["HTML", "CSS", "React", "Flask", "Streamlit"] },
  {
    category: "Data & AI",
    items: [
      "Machine Learning", "Deep Learning", "LSTM", "NLP", "LLM (Groq API)",
      "Predictive Maintenance", "Anomaly Detection", "Regression", "Classification",
      "Data Processing", "Data Analysis",
    ],
  },
  { category: "Libraries", items: ["Pandas", "NumPy", "XGBoost"] },
  {
    category: "Databases & Tools",
    items: ["MySQL", "SQLite", "Git/GitHub", "Docker", "VirtualBox", "CATIA", "KiCad"],
  },
  { category: "Methodologies", items: ["Agile", "Scrum"] },
];

export const projects = [
  {
    number: "01",
    period: "2026",
    title: "EduChat AI — Intelligent Educational Chatbot",
    description:
      "AI-based chatbot that helps students understand their courses and get answers to their questions.",
    work: [
      "Design of a simple and intuitive conversational interface",
      "Natural language processing to answer student questions",
    ],
    tech: ["Python", "AI", "NLP"],
    github: "", // add a real repository URL to show the GitHub button
    demo: "", // add a real demo URL to show the Demo button
  },
  {
    number: "02",
    period: "2025 – 2026",
    title: "Intelligent Energy Management and Optimization System for a Low-Power CubeSat",
    description:
      "AI system for the TSURU CubeSat, a low-power nanosatellite in low Earth orbit: an LSTM model predicts the battery state of charge and drives an energy optimization strategy.",
    work: [
      "Preparation and feature engineering of real telemetry data",
      "Hybrid battery state-of-charge estimation (70% Coulomb counting, 30% open-circuit voltage)",
      "LSTM model reaching MAE 1.24% and R² 0.96 on the test set",
      "Four operating modes (nominal to safe) adapting power from 500 mW down to 125 mW",
      "0.502 Wh saved over the test period compared with constant nominal operation",
    ],
    tech: ["Python", "Deep Learning", "LSTM", "Data Analysis"],
    github: "",
    demo: "",
  },
  {
    number: "03",
    period: "2024 – 2025",
    title: "AI-Based Predictive Maintenance",
    description:
      "Hybrid supervised and unsupervised system for fault detection and predictive maintenance, built on industrial sensor data (10,000 readings from a milling machine, public Kaggle dataset).",
    work: [
      "Data exploration, encoding and PCA dimensionality reduction",
      "Class balancing with SMOTE to detect rare failures",
      "Random Forest classifier reaching an F1-score of 0.96 on the failure class",
      "Isolation Forest for anomaly detection",
      "Evaluation with precision, recall, F1-score and AUC-ROC",
    ],
    tech: ["Python", "Machine Learning", "Random Forest", "Isolation Forest", "Pandas", "NumPy"],
    github: "",
    demo: "",
  },
];

export const experiences = [
  {
    company: "SAGEMCOM Tunisie",
    title: "Technician Internship — Gateway card test automation and validation",
    date: "July – August 2026",
    location: "Ezzahra, Tunisia",
    description:
      "Design and development of an intelligent solution to automate and validate the testing of optical Gateway cards (GPON and XGS-PON), replacing a largely manual process.",
    responsibilities: [
      "Python/Flask web application automating Gateway card tests and results management",
      "Automated TX/RX optical power measurements with FiberChekPRO and a VIAVI MP-60 power meter",
      "Web dashboard with real-time progress, operator traceability, history and Excel export",
      "Assistant based on an LLM (Groq) that turns French questions into read-only SQL queries",
    ],
    tech: ["Python", "Flask", "SQLite", "Groq API (LLM)", "Telnet", "HTML/CSS"],
  },
  {
    company: "SATE DRÄXLMAIER",
    title: "Worker Internship — Prüftechnik (electrical control and maintenance)",
    date: "June – July 2025",
    location: "El Jem, Tunisia",
    description:
      "Industrial internship in the electrical control department of a plant producing wiring harnesses for the automotive industry.",
    responsibilities: [
      "Preventive and corrective maintenance of electrical test stations",
      "Functional electrical control of wiring harnesses with the Phoenix test software",
      "Calibration (force and torque measurement) of industrial screwdrivers",
      "Python dashboard (Pandas, Streamlit) analyzing test data to identify the combinations behind long test times or frequent failures",
      "Proposal to migrate the dashboard to Power BI to comply with internal IT policy",
    ],
    tech: ["Python", "Pandas", "Streamlit", "Phoenix"],
  },
];

export const education = [
  {
    title: "Engineering Degree",
    subtitle: "Advanced Technologies – Digitalization and Data Analysis",
    place: "École Nationale des Sciences et Technologies Avancées de Borj Cédria",
    date: "2024 – Present",
  },
  {
    title: "Preparatory Cycle",
    subtitle: "Mathematics & Physics",
    place: "Institut Préparatoire aux Études d'Ingénieurs de Sfax",
    date: "2021 – 2024",
  },
  {
    title: "Baccalaureate",
    subtitle: "Experimental Sciences",
    place: "Lycée Mahmoud Messadi — El Jem",
    date: "2021",
  },
];

export const certifications = [
  {
    issuer: "NVIDIA",
    title: "Applications of AI for Predictive Maintenance",
    date: "November 2025",
    url: "", // add a verification link if you have one
  },
  {
    issuer: "CEFAC",
    title: "ISO 9001:2015 Quality Management System Certification",
    date: "February 2025",
    url: "",
  },
];

// `level` is optional. Add it only when you want it displayed.
export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "" },
  { name: "English", level: "" },
];

export const contact = {
  title: "Let's Build Something Intelligent.",
  text: "I am currently looking for a PFE internship in Artificial Intelligence, Machine Learning, Data Science, Data Analysis or AI-based software development.",
};
