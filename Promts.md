# Prompts Log - Project 3: Resume Builder
**Internship:** Bharat Space Education Research Centre - GenAI Internship (Week 2)  
**Track:** Section A (Web Tools) - Project 3  

---

### Step 1: Initial Planning & Layout Setup
**Prompt:**
> "Create a fully offline A4 Resume Builder using vanilla HTML, CSS, and JavaScript. The page should feature a split-screen interface: an input sidebar on the left and a live-updating A4 resume preview on the right. Ensure it does not require internet, login, or any external CDNs."

---

### Step 2: Multi-Template Styling & Print Layout
**Prompt:**
> "Add 3 distinct visual templates (Modern Clean, Classic Serif, and Minimal Tech) that can be switched via a dropdown. Configure `@media print` CSS so that clicking 'Export PDF' uses the browser's native print engine to output an exact A4 page with clean breaks and fully selectable, copyable text."

---

### Step 3: Local Offline State Management (JSON Save & Load)
**Prompt:**
> "Implement a local state save and load system without any server or backend. Clicking 'Save Data' should serialize the user's form inputs into a `.json` file and trigger an automatic client-side download using JavaScript Blob API. Provide a file loader using FileReader API to parse and repopulate the form and preview instantly."

---

### Step 4: Verification Against "Done when" Criteria
**Prompt:**
> "Review and test the application against all project acceptance criteria:
> 1. Verified full functionality with Wi-Fi disabled.
> 2. Verified that text in the exported PDF can be highlighted, selected, and copied.
> 3. Verified that loading a previously saved JSON file restores all form values and template selection exactly.
> 4. Verified responsive live-preview updates on every keystroke."