/* =========================================================
   CIVICPATH AI
   ========================================================= */


/* ================= INDIA STATES ================= */

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];


/* ================= DEMO ROADMAP DATABASE ================= */

const TASKS = {

  restaurant: [
    {
      title: "Decide business structure",
      description: "Choose whether the business will operate as an individual, partnership, company or another structure.",
      type: "Decision",
      time: "1 day",
      docs: ["Identity proof"],
      deps: []
    },

    {
      title: "Prepare identity and address documents",
      description: "Collect the applicant identity proof, address proof and basic business information.",
      type: "Documents",
      time: "1–2 days",
      docs: ["Aadhaar / ID", "Address proof", "Photograph"],
      deps: [0]
    },

    {
      title: "Obtain local business registration",
      description: "Submit the relevant local business or establishment registration application.",
      type: "Registration",
      time: "3–7 days",
      docs: ["Identity proof", "Address proof", "Business details"],
      deps: [1]
    },

    {
      title: "Prepare food-business documents",
      description: "Prepare the information and documents needed for the applicable food-business permission.",
      type: "Food",
      time: "1–3 days",
      docs: ["Business registration", "Premises details"],
      deps: [2]
    },

    {
      title: "Submit food-business application",
      description: "Submit the applicable food-business application through the relevant authority.",
      type: "Application",
      time: "3–14 days",
      docs: ["Food-business documents"],
      deps: [3]
    },

    {
      title: "Complete local verification",
      description: "Be ready for document or premises verification if requested.",
      type: "Verification",
      time: "2–10 days",
      docs: ["Application acknowledgement"],
      deps: [4]
    },

    {
      title: "Receive approval / certificate",
      description: "Track the application and download or collect the applicable approval.",
      type: "Approval",
      time: "Variable",
      docs: ["Application reference"],
      deps: [5]
    }
  ],


  business: [
    {
      title: "Choose business structure",
      description: "Decide how the shop or business will be legally structured.",
      type: "Decision",
      time: "1 day",
      docs: ["Identity proof"],
      deps: []
    },

    {
      title: "Collect owner documents",
      description: "Prepare identity, address and business-premises documents.",
      type: "Documents",
      time: "1–2 days",
      docs: ["Identity proof", "Address proof"],
      deps: [0]
    },

    {
      title: "Prepare registration application",
      description: "Fill the appropriate business or establishment registration information.",
      type: "Application",
      time: "1 day",
      docs: ["Business details", "Premises details"],
      deps: [1]
    },

    {
      title: "Submit registration",
      description: "Submit the application to the appropriate authority.",
      type: "Submission",
      time: "1–7 days",
      docs: ["Completed form", "Supporting documents"],
      deps: [2]
    },

    {
      title: "Verification",
      description: "Respond to any document or premises verification request.",
      type: "Verification",
      time: "2–10 days",
      docs: ["Application acknowledgement"],
      deps: [3]
    },

    {
      title: "Receive registration",
      description: "Track the application and obtain the applicable registration certificate.",
      type: "Approval",
      time: "Variable",
      docs: ["Application reference"],
      deps: [4]
    }
  ],


  event: [
    {
      title: "Define event details",
      description: "Fix venue, expected attendance, date, timings and event type.",
      type: "Planning",
      time: "1 day",
      docs: ["Event plan"],
      deps: []
    },

    {
      title: "Prepare venue documents",
      description: "Collect venue permission, address and organiser information.",
      type: "Documents",
      time: "1–2 days",
      docs: ["Venue proof", "Organiser ID"],
      deps: [0]
    },

    {
      title: "Prepare safety plan",
      description: "Prepare crowd, emergency, security and basic safety arrangements.",
      type: "Safety",
      time: "1–3 days",
      docs: ["Safety plan"],
      deps: [0]
    },

    {
      title: "Submit event permission",
      description: "Submit the applicable permission request with supporting documents.",
      type: "Application",
      time: "3–10 days",
      docs: ["Event plan", "Venue proof"],
      deps: [1, 2]
    },

    {
      title: "Authority verification",
      description: "Respond to authority questions or verification requirements.",
      type: "Verification",
      time: "Variable",
      docs: ["Application reference"],
      deps: [3]
    },

    {
      title: "Receive event approval",
      description: "Track the request and obtain the applicable approval.",
      type: "Approval",
      time: "Variable",
      docs: ["Application reference"],
      deps: [4]
    }
  ],


  property: [
    {
      title: "Collect property information",
      description: "Collect ownership, address and property identification information.",
      type: "Documents",
      time: "1–2 days",
      docs: ["Ownership proof", "Address proof"],
      deps: []
    },

    {
      title: "Check applicable permission",
      description: "Identify which building or property permission applies to the planned activity.",
      type: "Research",
      time: "1–3 days",
      docs: ["Property details"],
      deps: [0]
    },

    {
      title: "Prepare plans and forms",
      description: "Prepare the applicable plans, forms and supporting documents.",
      type: "Preparation",
      time: "2–7 days",
      docs: ["Plans", "Property documents"],
      deps: [1]
    },

    {
      title: "Submit application",
      description: "Submit the relevant application to the appropriate authority.",
      type: "Application",
      time: "Variable",
      docs: ["Completed application"],
      deps: [2]
    },

    {
      title: "Inspection / verification",
      description: "Complete any authority inspection or document verification.",
      type: "Verification",
      time: "Variable",
      docs: ["Application reference"],
      deps: [3]
    },

    {
      title: "Receive decision",
      description: "Track the application and receive the applicable decision.",
      type: "Approval",
      time: "Variable",
      docs: ["Application reference"],
      deps: [4]
    }
  ],


  trade: [
    {
      title: "Identify required permission",
      description: "Identify the local permission applicable to your activity.",
      type: "Research",
      time: "1 day",
      docs: ["Business details"],
      deps: []
    },

    {
      title: "Prepare documents",
      description: "Collect identity, premises and business documents.",
      type: "Documents",
      time: "1–3 days",
      docs: ["ID proof", "Address proof", "Premises proof"],
      deps: [0]
    },

    {
      title: "Complete application",
      description: "Fill the applicable local permission form.",
      type: "Application",
      time: "1 day",
      docs: ["Supporting documents"],
      deps: [1]
    },

    {
      title: "Submit application",
      description: "Submit the application through the relevant authority.",
      type: "Submission",
      time: "1–7 days",
      docs: ["Completed form"],
      deps: [2]
    },

    {
      title: "Verification",
      description: "Complete any required authority verification.",
      type: "Verification",
      time: "Variable",
      docs: ["Application acknowledgement"],
      deps: [3]
    },

    {
      title: "Receive permission",
      description: "Track and obtain the applicable local permission.",
      type: "Approval",
      time: "Variable",
      docs: ["Application reference"],
      deps: [4]
    }
  ]

};


/* ================= APP STATE ================= */

let currentTask = null;
let selectedState = "";
let completedSteps = new Set();


/* ================= STATE SEARCH ================= */

function renderStates(list = STATES) {

  const menu = document.getElementById("stateMenu");

  if (!menu) return;

  menu.innerHTML = list.map(state => `
    <div class="state-option"
         onclick="selectState('${state.replace(/'/g, "\\'")}')">
      ${state}
    </div>
  `).join("");
}


function toggleStateMenu() {

  document
    .getElementById("stateMenu")
    .classList.toggle("show");

}


function filterStates() {

  const value =
    document
      .getElementById("stateSearch")
      .value
      .toLowerCase();

  const results =
    STATES.filter(
      state => state.toLowerCase().includes(value)
    );

  renderStates(results);

  document
    .getElementById("stateMenu")
    .classList.add("show");

}


function selectState(state) {

  selectedState = state;

  document.getElementById("stateSearch").value = state;

  document
    .getElementById("stateMenu")
    .classList.remove("show");

  document.getElementById("stateHint").innerHTML =
    `✓ ${state} selected — your roadmap will be personalised.`;

}


document.addEventListener("click", function(e) {

  const search = document.querySelector(".state-search");

  if (
    search &&
    !search.contains(e.target)
  ) {

    document
      .getElementById("stateMenu")
      .classList.remove("show");

  }

});


/* ================= EXAMPLE ================= */

function useExample() {

  document.getElementById("naturalTask").value =
    "I want to open a small restaurant in Navi Mumbai";

  document.getElementById("city").value =
    "Navi Mumbai";

  selectState("Maharashtra");

}


/* ================= GENERATE ================= */

function generateRoadmap() {

  const input =
    document
      .getElementById("naturalTask")
      .value
      .toLowerCase();

  let type =
    document.getElementById("taskType").value;


  if (
    input.includes("restaurant") ||
    input.includes("food") ||
    input.includes("cafe") ||
    input.includes("hotel")
  ) {
    type = "restaurant";
  }

  else if (
    input.includes("event") ||
    input.includes("college fest") ||
    input.includes("function")
  ) {
    type = "event";
  }

  else if (
    input.includes("property") ||
    input.includes("building") ||
    input.includes("construction")
  ) {
    type = "property";
  }

  else if (
    input.includes("shop") ||
    input.includes("business") ||
    input.includes("company")
  ) {
    type = "business";
  }


  currentTask = {
    type,
    title: document.getElementById("naturalTask").value ||
           document.getElementById("taskType").selectedOptions[0].text,

    state:
      selectedState ||
      document.getElementById("stateSearch").value ||
      "India",

    city:
      document.getElementById("city").value ||
      "Your city",

    applicant:
      document.getElementById("applicantType").value,

    urgent:
      document.getElementById("urgentMode").checked,

    existing:
      document.getElementById("existingReg").checked,

    steps:
      JSON.parse(JSON.stringify(TASKS[type]))
  };


  completedSteps = new Set();

  renderRoadmap();

  document
    .getElementById("roadmapSection")
    .classList.remove("hidden");

  document
    .getElementById("roadmapSection")
    .scrollIntoView({
      behavior: "smooth"
    });

  updateChatContext();

}


/* ================= RENDER ROADMAP ================= */

function renderRoadmap() {

  const roadmap =
    document.getElementById("roadmap");

  const steps =
    currentTask.steps;


  document.getElementById("roadmapTitle").textContent =
    currentTask.type === "restaurant"
      ? "Restaurant Roadmap"
      : "Your Civic Roadmap";


  document.getElementById("roadmapSubtitle").textContent =
    `${currentTask.city}, ${currentTask.state} · ${currentTask.applicant}`;


  roadmap.innerHTML = steps.map((step, index) => {

    const done =
      completedSteps.has(index);

    const locked =
      step.deps.some(
        dependency =>
          !completedSteps.has(dependency)
      );


    return `
      <article class="step ${done ? "completed" : ""} ${locked ? "locked" : ""}">

        <div class="step-number">
          ${done ? "✓" : index + 1}
        </div>

        <h3>
          ${step.title}
        </h3>

        <p>
          ${step.description}
        </p>

        <div class="step-meta">

          <span>${step.type}</span>
          <span>⏱ ${step.time}</span>

          ${
            locked
              ? `<span>🔒 Prerequisite required</span>`
              : `<span>✓ Ready</span>`
          }

        </div>

        <div class="step-actions">

          <button onclick="whyStep(${index})">
            Why?
          </button>

          <button onclick="showDocuments(${index})">
            Documents
          </button>

          <button onclick="showSource(${index})">
            Official source
          </button>

          ${
            done
              ? `<button onclick="uncomplete(${index})">Undo</button>`
              : `<button class="complete-btn"
                    onclick="completeStep(${index})">
                    ${locked ? "View prerequisite" : "Mark complete"}
                 </button>`
          }

        </div>

      </article>
    `;

  }).join("");


  updateProgress();

}


/* ================= COMPLETE ================= */

function completeStep(index) {

  const step =
    currentTask.steps[index];

  const locked =
    step.deps.some(
      dependency =>
        !completedSteps.has(dependency)
    );


  if (locked) {

    const names =
      step.deps
        .filter(dep => !completedSteps.has(dep))
        .map(dep => currentTask.steps[dep].title)
        .join(", ");

    openModal(`
      <h2>🔒 Complete this first</h2>

      <p>
        Before <b>${step.title}</b>,
        you need to complete:
      </p>

      <div class="modal-list">
        ${names}
      </div>

      <p>
        CivicPath prevents you from accidentally
        skipping important prerequisites.
      </p>
    `);

    return;
  }


  completedSteps.add(index);

  renderRoadmap();

  addBotMessage(
    `Great! You completed <b>${step.title}</b>. Your roadmap has been updated.`
  );

}


function uncomplete(index) {

  completedSteps.delete(index);

  renderRoadmap();

}


/* ================= PROGRESS ================= */

function updateProgress() {

  if (!currentTask) return;

  const total =
    currentTask.steps.length;

  const done =
    completedSteps.size;

  const percentage =
    Math.round(done / total * 100);

  document.getElementById("progressText").textContent =
    percentage + "%";

  document.getElementById("progressRing").textContent =
    percentage + "%";


  const blockers =
    currentTask.steps.filter(
      (step, index) =>
        !completedSteps.has(index) &&
        step.deps.some(
          dep => !completedSteps.has(dep)
        )
    ).length;


  document.getElementById("riskCount").textContent =
    `${blockers} blockers`;


  if (percentage === 100) {

    document.getElementById("riskText").textContent =
      "Your roadmap is complete. Keep your approval documents safely.";

  } else {

    document.getElementById("riskText").textContent =
      `${blockers} step(s) are currently waiting for prerequisites.`;

  }


  document.getElementById("smartInsight").textContent =
    percentage === 0
      ? "Start with the first step. CivicPath will unlock later actions automatically."
      : percentage < 50
        ? "You're making progress. Complete the current prerequisites before submitting later applications."
        : percentage < 100
          ? "Most of the dependency chain is complete. Check the remaining blocked steps."
          : "All roadmap steps are marked complete.";
}


/* ================= MODAL ================= */

function openModal(content) {

  document
    .getElementById("modalContent")
    .innerHTML = content;

  document
    .getElementById("modal")
    .classList.remove("hidden");

}


function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");

}


/* ================= TOOLS ================= */

function checkDocuments() {

  if (!currentTask) {

    openModal(`
      <h2>📄 Document readiness</h2>
      <p>Generate a roadmap first.</p>
    `);

    return;
  }


  const docs = new Set();

  currentTask.steps.forEach(
    step =>
      step.docs.forEach(
        doc => docs.add(doc)
      )
  );


  openModal(`
    <h2>📄 Document Readiness</h2>

    <p>
      Prepare these documents before starting:
    </p>

    <div class="modal-list">
      ${[...docs].map(
        doc => `✓ ${doc}`
      ).join("<br>")}
    </div>

    <p>
      Requirements can vary by authority and application.
      Verify the final list using official sources.
    </p>
  `);

}


function showDocuments(index) {

  const step =
    currentTask.steps[index];

  openModal(`
    <h2>📄 ${step.title}</h2>

    <p>
      Documents commonly associated with this demo step:
    </p>

    <div class="modal-list">
      ${step.docs.map(
        doc => `✓ ${doc}`
      ).join("<br>")}
    </div>
  `);

}


function whyStep(index) {

  const step =
    currentTask.steps[index];

  const deps =
    step.deps.length
      ? step.deps.map(
          d => currentTask.steps[d].title
        ).join(", ")
      : "No previous dependency";


  openModal(`
    <h2>💡 Why this step?</h2>

    <h3>${step.title}</h3>

    <p>
      ${step.description}
    </p>

    <br>

    <b>Depends on:</b>

    <p>
      ${deps}
    </p>

    <br>

    <b>Why CivicPath puts it here:</b>

    <p>
      This step is positioned after its prerequisites
      so the user knows what must be completed first.
    </p>
  `);

}


function showSource(index) {

  const step =
    currentTask.steps[index];

  openModal(`
    <h2>🔗 Official Source</h2>

    <p>
      <b>${step.title}</b>
    </p>

    <p>
      In the production version, this button will open
      the verified government source extracted for this step.
    </p>

    <div class="modal-list">
      ✓ Government portal<br>
      ✓ Department page<br>
      ✓ Application instructions<br>
      ✓ Official form
    </div>

    <p>
      Demo mode intentionally does not invent a government URL.
    </p>
  `);

}


/* ================= DEPENDENCY MAP ================= */

function showDependencyGraph() {

  if (!currentTask) return;

  const list =
    currentTask.steps.map(
      (step, index) => `
        <div style="padding:12px;margin:7px 0;background:#eadff0;border-radius:12px">
          <b>${index + 1}. ${step.title}</b>
          <br>
          <small>
            ${
              step.deps.length
                ? "← " + step.deps.map(
                    d => currentTask.steps[d].title
                  ).join(", ")
                : "← Starting point"
            }
          </small>
        </div>
      `
    ).join("");


  openModal(`
    <h2>🔗 Dependency Map</h2>

    <p>
      Every arrow represents a prerequisite relationship.
    </p>

    ${list}
  `);

}


/* ================= PARALLEL TASKS ================= */

function showParallelTasks() {

  if (!currentTask) return;


  const parallel = [];

  currentTask.steps.forEach(
    (step, index) => {

      if (!step.deps.length) {

        parallel.push(step.title);

      }

    }
  );


  openModal(`
    <h2>⚡ Parallel Opportunities</h2>

    <p>
      These tasks can potentially be prepared together
      because they do not depend on each other in this demo:
    </p>

    <div class="modal-list">
      ${parallel.map(
        x => `✓ ${x}`
      ).join("<br>")}
    </div>
  `);

}


/* ================= BACKWARD FLOW ================= */

function showBackwardFlow() {

  if (!currentTask) return;

  const last =
    currentTask.steps.length - 1;

  openModal(`
    <h2>↩ Trace Prerequisites</h2>

    <p>
      To reach <b>${currentTask.steps[last].title}</b>,
      follow this dependency chain:
    </p>

    <div class="modal-list">
      ${currentTask.steps.map(
        (s, i) =>
          `${i + 1}. ${s.title}`
      ).join("<br>")}
    </div>
  `);

}


/* ================= JARGON ================= */

function translateJargon() {

  openModal(`
    <h2>💬 Plain-language mode</h2>

    <p>
      CivicPath converts complicated government terminology
      into simple actions.
    </p>

    <div class="modal-list">
      <b>Verification</b><br>
      → Government checks your information.
      <br><br>

      <b>Application acknowledgement</b><br>
      → Proof that your application was submitted.
      <br><br>

      <b>Prerequisite</b><br>
      → Something you must finish first.
      <br><br>

      <b>Authority</b><br>
      → Government department responsible for the process.
    </div>
  `);

}


/* ================= WHY ORDER ================= */

function explainOrder() {

  if (!currentTask) return;

  openModal(`
    <h2>🧠 Why this order?</h2>

    <p>
      CivicPath uses a dependency-first approach.
    </p>

    <div class="modal-list">
      1. Understand the task<br>
      ↓<br>
      2. Prepare documents<br>
      ↓<br>
      3. Complete prerequisites<br>
      ↓<br>
      4. Submit applications<br>
      ↓<br>
      5. Verification<br>
      ↓<br>
      6. Approval
    </div>

    <p>
      This prevents users from reaching a step before
      the information required for that step is ready.
    </p>
  `);

}


/* ================= DOWNLOAD ================= */

function downloadPlan() {

  if (!currentTask) return;

  let text =
    "CIVICPATH CIVIC ROADMAP\n\n";

  text +=
    `Task: ${currentTask.title}\n`;

  text +=
    `Location: ${currentTask.city}, ${currentTask.state}\n\n`;


  currentTask.steps.forEach(
    (step, index) => {

      text +=
        `${index + 1}. ${step.title}\n`;

      text +=
        `   ${step.description}\n`;

      text +=
        `   Time: ${step.time}\n\n`;

    }
  );


  const blob =
    new Blob(
      [text],
      {type: "text/plain"}
    );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;
  a.download = "civicpath-roadmap.txt";

  a.click();

  URL.revokeObjectURL(url);

}


/* ================= RESET ================= */

function resetRoadmap() {

  currentTask = null;
  completedSteps.clear();

  document
    .getElementById("roadmapSection")
    .classList.add("hidden");

  document
    .getElementById("naturalTask")
    .value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   CIVICPATH AI CHATBOT
   ========================================================= */


/* OPEN / CLOSE */

function toggleChat() {

  document
    .getElementById("chatPanel")
    .classList.toggle("open");

}


function clearChat() {

  document
    .getElementById("chatMessages")
    .innerHTML = "";

  addBotMessage(
    "Chat cleared. 👋 What civic task would you like help with?"
  );

}


/* CONTEXT */

function updateChatContext() {

  const element =
    document.getElementById("chatContextText");

  if (!currentTask) {

    element.textContent =
      "No roadmap generated yet";

    return;
  }

  element.textContent =
    `${currentTask.type} · ${currentTask.city}, ${currentTask.state}`;

}


/* USER MESSAGE */

function addUserMessage(text) {

  const container =
    document.getElementById("chatMessages");

  container.innerHTML += `
    <div class="user-message">
      <p>${escapeHTML(text)}</p>
    </div>
  `;

  container.scrollTop =
    container.scrollHeight;

}


/* BOT MESSAGE */

function addBotMessage(text) {

  const container =
    document.getElementById("chatMessages");

  container.innerHTML += `
    <div class="bot-message">

      <div class="message-avatar">
        ✦
      </div>

      <div>

        <b>CivicPath AI</b>

        <p>
          ${text}
        </p>

      </div>

    </div>
  `;

  container.scrollTop =
    container.scrollHeight;

}


/* ESCAPE */

function escapeHTML(text) {

  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* SUGGESTIONS */

function askSuggestion(question) {

  document
    .getElementById("chatInput")
    .value = question;

  document
    .getElementById("chatForm")
    .dispatchEvent(
      new Event("submit", {
        bubbles: true,
        cancelable: true
      })
    );

}


/* SEND CHAT */

async function sendChat(event) {

  event.preventDefault();

  const input =
    document.getElementById("chatInput");

  const question =
    input.value.trim();

  if (!question) return;

  addUserMessage(question);

  input.value = "";

  const send =
    document.getElementById("chatSend");

  send.disabled = true;

  send.textContent = "…";


  /*
    IMPORTANT:

    Do NOT put your OpenAI API key here.

    Your frontend calls /api/chat.
    Your backend should store the API key
    inside an environment variable.

    Example backend endpoint:

      POST /api/chat

    Body:
      {
        message: "...",
        context: {...}
      }
  */


  try {

    const response =
      await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          message: question,

          context: getAIContext()

        })

      });


    if (!response.ok) {
      throw new Error("AI server unavailable");
    }


    const data =
      await response.json();


    addBotMessage(
      formatAIResponse(
        data.reply ||
        data.output ||
        "I couldn't generate a response."
      )
    );


  } catch (error) {

    /*
      Local intelligent fallback.

      This means the chatbot still works
      during your hackathon demo even if
      the AI backend is not running.
    */

    setTimeout(() => {

      addBotMessage(
        localAI(question)
      );

    }, 450);

  }


  send.disabled = false;
  send.textContent = "↑";

}


/* ================= AI CONTEXT ================= */

function getAIContext() {

  if (!currentTask) {

    return {
      roadmap: null
    };

  }


  return {

    task: currentTask.title,

    category: currentTask.type,

    state: currentTask.state,

    city: currentTask.city,

    applicant: currentTask.applicant,

    completedSteps:
      [...completedSteps],

    steps:
      currentTask.steps.map(
        (step, index) => ({
          number: index + 1,
          title: step.title,
          description: step.description,
          completed:
            completedSteps.has(index),
          dependencies:
            step.deps
        })
      )

  };

}


/* ================= LOCAL AI ================= */

function localAI(question) {

  const q =
    question.toLowerCase();


  if (!currentTask) {

    if (
      q.includes("what") ||
      q.includes("help")
    ) {

      return `
        I can help you with:<br><br>

        • Creating a civic roadmap<br>
        • Understanding documents<br>
        • Explaining government terms<br>
        • Finding prerequisites<br>
        • Understanding dependencies<br>
        • Planning your next step<br><br>

        First, describe your civic task above and generate a roadmap.
      `;

    }

    return `
      I'd be happy to help! 👋
      First create your CivicPath roadmap so I can answer
      questions specifically about your task.
    `;

  }


  /* DOCUMENTS */

  if (
    q.includes("document") ||
    q.includes("paper") ||
    q.includes("proof")
  ) {

    const docs = new Set();

    currentTask.steps.forEach(
      step =>
        step.docs.forEach(
          doc => docs.add(doc)
        )
    );


    return `
      For your <b>${currentTask.type}</b> roadmap,
      the demo currently identifies these document categories:<br><br>

      ${[...docs].map(
        doc => `✓ ${doc}`
      ).join("<br>")}

      <br><br>
      Keep digital and physical copies ready where appropriate.
      Final requirements should always be checked with the relevant
      government authority.
    `;

  }


  /* NEXT STEP */

  if (
    q.includes("next") ||
    q.includes("what should i do") ||
    q.includes("now")
  ) {

    const next =
      currentTask.steps.findIndex(
        (step, index) =>
          !completedSteps.has(index) &&
          step.deps.every(
            dep => completedSteps.has(dep)
          )
      );


    if (next === -1) {

      return `
        🎉 All roadmap steps are currently marked complete!
        Keep your application references and approval documents safely.
      `;

    }


    return `
      Your next available step is:<br><br>

      <b>${next + 1}. ${currentTask.steps[next].title}</b><br><br>

      ${currentTask.steps[next].description}<br><br>

      Estimated time:
      <b>${currentTask.steps[next].time}</b>
    `;

  }


  /* PARALLEL */

  if (
    q.includes("parallel") ||
    q.includes("together") ||
    q.includes("simultaneously")
  ) {

    const available =
      currentTask.steps.filter(
        (step, index) =>
          !completedSteps.has(index) &&
          step.deps.every(
            dep => completedSteps.has(dep)
          )
      );


    if (!available.length) {

      return `
        There are no newly unlocked parallel tasks right now.
        Complete the current prerequisite first.
      `;

    }


    return `
      Based on the current demo dependency graph,
      these steps are currently available:<br><br>

      ${available.map(
        step => `⚡ ${step.title}`
      ).join("<br>")}
    `;

  }


  /* REJECTION */

  if (
    q.includes("reject") ||
    q.includes("rejection") ||
    q.includes("mistake")
  ) {

    return `
      Common things that can cause delays include:<br><br>

      • Missing documents<br>
      • Incorrect information<br>
      • Expired documents<br>
      • Applying before a prerequisite is complete<br>
      • Missing authority-specific requirements<br><br>

      CivicPath's dependency checks help reduce
      the risk of submitting something too early.
    `;

  }


  /* EXPLAIN */

  if (
    q.includes("explain") ||
    q.includes("simple") ||
    q.includes("understand")
  ) {

    const remaining =
      currentTask.steps.filter(
        (_, index) =>
          !completedSteps.has(index)
      ).length;


    return `
      Sure! 😊<br><br>

      You are working on:
      <b>${currentTask.title}</b><br><br>

      Location:
      <b>${currentTask.city}, ${currentTask.state}</b><br><br>

      You have completed
      <b>${completedSteps.size}</b>
      steps and have
      <b>${remaining}</b>
      remaining.<br><br>

      The basic idea is:
      prepare → submit → verify → receive approval.
    `;

  }


  /* STATUS */

  if (
    q.includes("status") ||
    q.includes("progress") ||
    q.includes("complete")
  ) {

    const percentage =
      Math.round(
        completedSteps.size /
        currentTask.steps.length *
        100
      );


    return `
      Your current CivicPath progress is
      <b>${percentage}%</b>.<br><br>

      Completed:
      <b>${completedSteps.size}</b>
      /
      ${currentTask.steps.length}
      steps.
    `;

  }


  /* DEFAULT */

  return `
    I understand you're asking about
    <b>${currentTask.title}</b>.<br><br>

    I can help with:<br>

    • 📄 Documents<br>
    • 🧭 Next steps<br>
    • 🔗 Dependencies<br>
    • ⚡ Parallel tasks<br>
    • 🛡 Rejection risks<br>
    • 📊 Progress<br><br>

    Try asking:
    <b>"What should I do next?"</b>
  `;

}


/* ================= FORMAT AI ================= */

function formatAIResponse(text) {

  return escapeHTML(text)
    .replaceAll("\n", "<br>")
    .replace(
      /&lt;b&gt;(.*?)&lt;\/b&gt;/g,
      "<b>$1</b>"
    );

}


/* =========================================================
   ADMIN
   ========================================================= */

function openAdmin() {

  const section =
    document.getElementById("adminSection");

  section.classList.remove("hidden");

  document.getElementById("adminSteps").textContent =
    currentTask
      ? currentTask.steps.length
      : "—";

  section.scrollIntoView({
    behavior: "smooth"
  });

}


function closeAdmin() {

  document
    .getElementById("adminSection")
    .classList.add("hidden");

}


function adminFreshness() {

  openModal(`
    <h2>🔎 Source Freshness Scan</h2>

    <p>
      Scan simulation completed.
    </p>

    <div class="modal-list">
      ✓ 92% sources appear healthy<br>
      ⚠ 3 items require review<br>
      ✓ No critical outage detected<br>
      ✓ Review queue created
    </div>
  `);

}


function adminConflicts() {

  openModal(`
    <h2>⚠ Source Conflict Monitor</h2>

    <p>
      Potential conflicting information found in the demo dataset.
    </p>

    <div class="modal-list">
      1. Application timeline<br>
      2. Document requirement<br>
      3. Department ownership
    </div>

    <p>
      An administrator should verify these against the latest
      official government source before publishing.
    </p>
  `);

}


function adminReview() {

  openModal(`
    <h2>✓ Step Validation</h2>

    <p>
      Select a roadmap step from the citizen workflow
      to review its description, dependencies and source.
    </p>

    <div class="modal-list">
      ✓ Description<br>
      ✓ Documents<br>
      ✓ Dependencies<br>
      ✓ Source<br>
      ✓ Last verified date
    </div>
  `);

}


function adminChanges() {

  openModal(`
    <h2>↻ Change Monitor</h2>

    <p>
      Simulated source scan completed.
    </p>

    <div class="modal-list">
      ✓ Government portal reachable<br>
      ⚠ One procedure needs review<br>
      ✓ Dependency structure unchanged<br>
      ✓ Review queue updated
    </div>
  `);

}


/* ================= CHAT ENTER KEY ================= */

document.addEventListener("DOMContentLoaded", () => {

  renderStates();

  const input =
    document.getElementById("chatInput");

  if (input) {

    input.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {

          event.preventDefault();

          document
            .getElementById("chatForm")
            .dispatchEvent(
              new Event("submit", {
                bubbles: true,
                cancelable: true
              })
            );

        }

      }
    );

  }

});
/* =================================
   CIVICPATH AUTHENTICATION
================================= */

function switchAuth(type) {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    document.getElementById("loginError").textContent = "";
    document.getElementById("signupError").textContent = "";

    if (type === "login") {

        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");

        document.getElementById("loginTab").classList.add("active");
        document.getElementById("signupTab").classList.remove("active");

    } else {

        signupForm.classList.remove("hidden");
        loginForm.classList.add("hidden");

        document.getElementById("signupTab").classList.add("active");
        document.getElementById("loginTab").classList.remove("active");

    }
}


/* SIGN UP */

function handleSignup(event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();

    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        document.getElementById("signupError").textContent =
            "Passwords do not match!";
        return;
    }

    if (password.length < 8) {
        document.getElementById("signupError").textContent =
            "Password must contain at least 8 characters.";
        return;
    }

    const users = JSON.parse(localStorage.getItem("civicUsers") || "{}");

    if (users[email]) {
        document.getElementById("signupError").textContent =
            "Account already exists. Please login.";
        return;
    }

    // Demo only: never store plaintext passwords in production.
    users[email] = {
        name: name,
        password: password
    };

    localStorage.setItem("civicUsers", JSON.stringify(users));

    alert("Account created successfully! Please login.");

    document.getElementById("signupForm").querySelector("form").reset();

    switchAuth("login");

    document.getElementById("loginEmail").value = email;
}


/* LOGIN */

function handleLogin(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();

    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("civicUsers") || "{}");

    const user = users[email];

    if (!user || user.password !== password) {

        document.getElementById("loginError").textContent =
            "Invalid email or password. Please try again.";

        return;
    }

    sessionStorage.setItem("civicLoggedIn", "true");
    sessionStorage.setItem("civicUserName", user.name);

    showCivicDashboard(user.name);
}


/* SHOW WEBSITE */

function showCivicDashboard(name) {

    document.getElementById("authPage").classList.add("hidden");

    document.getElementById("appShell").classList.remove("hidden");

    const heading = document.querySelector(".hero h2");

    if (heading) {
        heading.textContent = "Welcome, " + name + "!";
    }

}


/* LOGOUT */

function logoutCivicPath() {

    sessionStorage.removeItem("civicLoggedIn");
    sessionStorage.removeItem("civicUserName");

    location.reload();

}


/* CHECK LOGIN STATUS */

document.addEventListener("DOMContentLoaded", function () {

    const loggedIn = sessionStorage.getItem("civicLoggedIn");

    const name = sessionStorage.getItem("civicUserName");

    if (loggedIn === "true" && name) {

        showCivicDashboard(name);

    }

});
