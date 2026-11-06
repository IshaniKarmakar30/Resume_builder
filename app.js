document.addEventListener("DOMContentLoaded", () => {
  // Input elements
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPhone = document.getElementById("inputPhone");
  const inputLinks = document.getElementById("inputLinks");
  const inputSummary = document.getElementById("inputSummary");
  const inputSkills = document.getElementById("inputSkills");
  const inputProjects = document.getElementById("inputProjects");
  const inputEducation = document.getElementById("inputEducation");

  // Output elements
  const previewName = document.getElementById("previewName");
  const previewEmail = document.getElementById("previewEmail");
  const previewPhone = document.getElementById("previewPhone");
  const previewLinks = document.getElementById("previewLinks");
  const previewSummary = document.getElementById("previewSummary");
  const previewSkills = document.getElementById("previewSkills");
  const previewProjects = document.getElementById("previewProjects");
  const previewEducation = document.getElementById("previewEducation");

  const resumeSheet = document.getElementById("resumeSheet");
  const templateSelect = document.getElementById("templateSelect");
  const exportPdfBtn = document.getElementById("exportPdfBtn");
  const saveJsonBtn = document.getElementById("saveJsonBtn");
  const loadJsonInput = document.getElementById("loadJsonInput");

  // 1. Live Update Preview
  function updatePreview() {
    previewName.textContent = inputName.value.trim() || "Your Full Name";
    previewEmail.textContent = inputEmail.value.trim() || "email@example.com";
    previewPhone.textContent = inputPhone.value.trim() || "+91 0000000000";
    previewLinks.textContent = inputLinks.value.trim() || "GitHub | LinkedIn";
    previewSummary.textContent = inputSummary.value.trim() || "Add professional overview here.";
    previewSkills.textContent = inputSkills.value.trim() || "Skills listed here.";
    previewProjects.textContent = inputProjects.value.trim() || "Projects detail listed here.";
    previewEducation.textContent = inputEducation.value.trim() || "Education details listed here.";
  }

  // Bind input listeners
  const inputs = [
    inputName, inputEmail, inputPhone, inputLinks,
    inputSummary, inputSkills, inputProjects, inputEducation
  ];
  inputs.forEach((elem) => elem.addEventListener("input", updatePreview));

  // 2. Switch Templates
  templateSelect.addEventListener("change", (e) => {
    resumeSheet.className = `a4-sheet ${e.target.value}`;
  });

  // 3. Export as PDF (Text remains selectable via browser print)
  exportPdfBtn.addEventListener("click", () => {
    window.print();
  });

  // 4. Save State as JSON File
  saveJsonBtn.addEventListener("click", () => {
    const data = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      links: inputLinks.value,
      summary: inputSummary.value,
      skills: inputSkills.value,
      projects: inputProjects.value,
      education: inputEducation.value,
      template: templateSelect.value
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(inputName.value.trim() || "resume").toLowerCase().replace(/\s+/g, "_")}_data.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // 5. Load State from JSON File
  loadJsonInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        inputName.value = data.name || "";
        inputEmail.value = data.email || "";
        inputPhone.value = data.phone || "";
        inputLinks.value = data.links || "";
        inputSummary.value = data.summary || "";
        inputSkills.value = data.skills || "";
        inputProjects.value = data.projects || "";
        inputEducation.value = data.education || "";

        if (data.template) {
          templateSelect.value = data.template;
          resumeSheet.className = `a4-sheet ${data.template}`;
        }

        updatePreview();
      } catch (err) {
        alert("Invalid JSON file selected.");
      }
    };
    reader.readAsText(file);
  });
});