// Job data
const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not-applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "not-applied",
  },
  {
    id: 3,
    company: "FinTech Solutions",
    position: "Frontend Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description:
      "Develop scalable web interfaces for financial products. Experience with React and TypeScript required.",
    status: "not-applied",
  },
  {
    id: 4,
    company: "HealthSync",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    salary: "$60/hr",
    description:
      "Design user-centric interfaces for healthcare apps. Strong portfolio in mobile design is a must.",
    status: "not-applied",
  },
  {
    id: 5,
    company: "EduTech Labs",
    position: "Backend Developer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description:
      "Build robust APIs for educational platforms. Node.js and MongoDB experience preferred.",
    status: "not-applied",
  },
  {
    id: 6,
    company: "Green Energy Co",
    position: "Project Manager",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "Lead renewable energy projects. PMP certification and 5+ years experience required.",
    status: "not-applied",
  },
  {
    id: 7,
    company: "RetailX",
    position: "QA Engineer",
    location: "Remote",
    type: "Part-time",
    salary: "$70,000 - $90,000",
    description:
      "Test and ensure quality for e-commerce platforms. Automation experience is a plus.",
    status: "not-applied",
  },
  {
    id: 8,
    company: "TravelGo",
    position: "Full Stack Developer",
    location: "Miami, FL",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    description:
      "Work on travel booking systems. Experience with MERN stack and cloud deployment.",
    status: "not-applied",
  },
];

let jobsState = [...jobs];
let currentTab = "all";

function updateDashboardCounts() {
  const total = jobsState.length;
  const interview = jobsState.filter((j) => j.status === "interview").length;
  const rejected = jobsState.filter((j) => j.status === "rejected").length;
  document.getElementById("total-count").textContent = total;
  document.getElementById("interview-count").textContent = interview;
  document.getElementById("rejected-count").textContent = rejected;
  document.getElementById("jobs-count").textContent =
    `${getTabJobs().length} jobs`;
}

function getTabJobs() {
  if (currentTab === "all") return jobsState;
  return jobsState.filter((j) => j.status === currentTab);
}

function renderJobs() {
  const jobsList = document.getElementById("jobs-list");
  const noJobs = document.getElementById("no-jobs");
  jobsList.innerHTML = "";
  const tabJobs = getTabJobs();
  if (tabJobs.length === 0) {
    jobsList.style.display = "none";
    noJobs.style.display = "flex";
  } else {
    jobsList.style.display = "flex";
    noJobs.style.display = "none";
    tabJobs.forEach((job) => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.innerHTML = `
				<div class="job-header">
					<div>
						<span class="company">${job.company}</span>
						<span class="position"> - ${job.position}</span>
					</div>
					<button class="delete-btn" title="Delete" data-id="${job.id}">&#128465;</button>
				</div>
				<div class="job-meta">
					${job.location} &bull; ${job.type} &bull; ${job.salary}
				</div>
				<div class="job-description">${job.description}</div>
				<div class="status ${job.status === "interview" ? "interview" : job.status === "rejected" ? "rejected" : ""}">
					${job.status === "interview" ? "INTERVIEW" : job.status === "rejected" ? "REJECTED" : "NOT APPLIED"}
				</div>
				<div class="job-actions">
					<button class="interview-btn${job.status === "interview" ? " selected" : ""}" data-id="${job.id}">INTERVIEW</button>
					<button class="rejected-btn${job.status === "rejected" ? " selected" : ""}" data-id="${job.id}">REJECTED</button>
				</div>
			`;
      jobsList.appendChild(card);
    });
  }
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  renderJobs();
  updateDashboardCounts();
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => setTab(btn.dataset.tab));
});

document.getElementById("jobs-list").addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (!id) return;
  const jobIdx = jobsState.findIndex((j) => j.id == id);
  if (e.target.classList.contains("interview-btn")) {
    jobsState[jobIdx].status =
      jobsState[jobIdx].status === "interview" ? "not-applied" : "interview";
    setTab(jobsState[jobIdx].status === "interview" ? "interview" : currentTab);
  } else if (e.target.classList.contains("rejected-btn")) {
    jobsState[jobIdx].status =
      jobsState[jobIdx].status === "rejected" ? "not-applied" : "rejected";
    setTab(jobsState[jobIdx].status === "rejected" ? "rejected" : currentTab);
  } else if (e.target.classList.contains("delete-btn")) {
    jobsState.splice(jobIdx, 1);
    renderJobs();
    updateDashboardCounts();
  }
  updateDashboardCounts();
  renderJobs();
});

// Initial render
renderJobs();
updateDashboardCounts();
