# Resume_builder
🌟 OverviewMost online resume tools require user logins, paid subscriptions at download time, or send private personal details to third-party cloud servers.This project solves that problem:100% Offline & Private: No APIs, no logins, no backend. All data stays strictly on your laptop.Live A4 Preview: Real-time synchronized split-screen editing on an exact A4 canvas.Selectable PDF Export: Exports clean, standard A4 PDFs using the browser's native print engine, ensuring all text remains selectable and copyable.3 Visual Templates: Switch seamlessly between Modern Clean, Classic Serif, and Minimal Tech designs.State Save & Load: Saves resume progress locally as a .json file and restores it anytime with zero data loss.

🚀 Features & ImplementationFeatureDescriptionLive SynchronizationInputs update the resume preview instantaneously across all sections.Multiple TemplatesDynamic class switching for Modern, Classic Serif, and Minimal Tech typography and layouts.Print-to-PDFStrict @media print rules for margin handling, page breaking, and removing editor sidebars.JSON Export (Save Data)Employs JavaScript Blob and virtual download triggers to save inputs as JSON.JSON Import (Load Data)Uses JavaScript FileReader API and JSON.parse to repopulate data into form fields.

📂 Project Structureresume-builder/
│
├── index.html        # Main interface & split-screen layout
├── styles.css        # A4 paper sizing, @media print setup, and template themes
├── app.js            # Input binding, template switcher, and JSON save/load logic
├── prompts.md        # Prompt log documenting the build process
└── README.md         # Project documentation

🛠️ How to Run 
LocallyClone or download this repository:git clone https://github.com/<your-username>/resume-builder.git

Navigate into the folder:cd resume-builder

Open index.html directly in any modern web browser (Google Chrome, Edge, Brave, Firefox).Note: Disconnect your Wi-Fi or turn on Airplane Mode—everything runs completely offline.

✅ "Done When" Verification Checklist[x] Runs Offline: Fully functional with Wi-Fi turned off; requires no external CDNs or network requests.[x] Selectable Text in PDF: Exported PDF retains vector fonts; words can be highlighted, selected, and copied.[x] Data Restore: Loading a saved .json file cleanly repopulates all text fields and template choices.[x] A4 Page Layout: Pre-configured print layout ensuring standard A4 margins.

👤 AuthorDeveloper: Ishani KarmakarInternship: GenAI Internship (Week 2) — Bharat Space Education Research Centre
