// -----------------------
// SCHOLARSHIP DATABASE
// -----------------------
let scholarships = [
    { title: "NSP - Post Matric Scholarship", category: "SC", gender: "Any", state: "All India", eligibility: "Class 11 to PG", qualification: "Inter", desc: "Financial assistance for SC students.", deadline: "31 March 2025", link: "https://scholarships.gov.in" },
    { title: "PMSSS - J&K Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "UG students", qualification: "UG", desc: "For students of J&K and Ladakh.", deadline: "10 April 2025", link: "https://aicte-india.org" },
    { title: "Jagananna Vidya Deevena", category: "Any", gender: "Any", state: "Andhra Pradesh", eligibility: "UG & PG students", qualification: "UG", desc: "Full fee reimbursement scheme.", deadline: "Open Throughout", link: "https://navasakam.ap.gov.in" },
    { title: "Post Matric Scholarship ST AP", category: "ST", gender: "Any", state: "Andhra Pradesh", eligibility: "UG & PG", qualification: "UG", desc: "Scholarship for ST students in AP.", deadline: "31 May 2025", link: "https://scholarships.gov.in" },
    { title: "Post Matric Scholarship OBC AP", category: "OBC", gender: "Any", state: "Andhra Pradesh", eligibility: "UG & PG", qualification: "UG", desc: "Scholarship for OBC students in AP.", deadline: "30 June 2025", link: "https://scholarships.gov.in" },
    { title: "SC Scholarship Telangana", category: "SC", gender: "Any", state: "Telangana", eligibility: "UG", qualification: "UG", desc: "Scholarship for SC students in Telangana.", deadline: "31 July 2025", link: "#" },
    { title: "OBC Fee Reimbursement AP", category: "OBC", gender: "Any", state: "Andhra Pradesh", eligibility: "UG", qualification: "UG", desc: "Fee reimbursement for OBC students.", deadline: "Open", link: "#" },
    { title: "EBC Fee Reimbursement Telangana", category: "EWS", gender: "Any", state: "Telangana", eligibility: "UG", qualification: "UG", desc: "Fee reimbursement for EWS students.", deadline: "Open", link: "#" },
    { title: "Merit Scholarship for Girls", category: "General", gender: "Female", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "Merit-based scholarship for girls.", deadline: "30 September 2025", link: "#" },
    { title: "National Talent Search Exam", category: "Any", gender: "Any", state: "All India", eligibility: "Class 10 students", qualification: "10th", desc: "Scholarship for talented students.", deadline: "15 October 2025", link: "#" },
    { title: "Pre-Matric Scholarship SC", category: "SC", gender: "Any", state: "All India", eligibility: "Class 9 & 10", qualification: "10th", desc: "For SC students in school.", deadline: "30 September 2025", link: "#" },
    { title: "Pre-Matric Scholarship ST", category: "ST", gender: "Any", state: "All India", eligibility: "Class 9 & 10", qualification: "10th", desc: "For ST students in school.", deadline: "30 September 2025", link: "#" },
    { title: "Minority Post Matric Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "For minority community students.", deadline: "31 August 2025", link: "#" },
    { title: "Central Sector Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "Class 12 passed", qualification: "Inter", desc: "Merit-based scholarship for top students.", deadline: "15 August 2025", link: "#" },
    { title: "ST Post Matric Telangana", category: "ST", gender: "Any", state: "Telangana", eligibility: "UG & PG", qualification: "UG", desc: "Scholarship for ST students in Telangana.", deadline: "31 July 2025", link: "#" },
    { title: "OBC Post Matric Telangana", category: "OBC", gender: "Any", state: "Telangana", eligibility: "UG", qualification: "UG", desc: "Scholarship for OBC students in Telangana.", deadline: "30 June 2025", link: "#" },
    { title: "EWS Merit Scholarship AP", category: "EWS", gender: "Any", state: "Andhra Pradesh", eligibility: "UG", qualification: "UG", desc: "Merit-based scholarship for EWS.", deadline: "30 September 2025", link: "#" },
    { title: "Prime Minister Scholarship Scheme", category: "General", gender: "Any", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "For wards of defense personnel.", deadline: "31 December 2025", link: "#" },
    { title: "PG Scholarship SC", category: "SC", gender: "Any", state: "All India", eligibility: "PG students", qualification: "PG", desc: "Postgraduate scholarship for SC students.", deadline: "31 January 2025", link: "#" },
    { title: "PG Scholarship ST", category: "ST", gender: "Any", state: "All India", eligibility: "PG students", qualification: "PG", desc: "Postgraduate scholarship for ST students.", deadline: "31 January 2025", link: "#" },
    { title: "NSP Fee Reimbursement AP", category: "SC", gender: "Any", state: "Andhra Pradesh", eligibility: "UG & PG", qualification: "UG", desc: "Fee reimbursement under NSP.", deadline: "30 June 2025", link: "#" },
    { title: "NSP Fee Reimbursement Telangana", category: "ST", gender: "Any", state: "Telangana", eligibility: "UG & PG", qualification: "UG", desc: "Fee reimbursement under NSP.", deadline: "30 June 2025", link: "#" },
    { title: "Scholarship for Girls in AP", category: "Any", gender: "Female", state: "Andhra Pradesh", eligibility: "UG", qualification: "UG", desc: "Financial support for girls.", deadline: "30 July 2025", link: "#" },
    { title: "Scholarship for Girls in Telangana", category: "Any", gender: "Female", state: "Telangana", eligibility: "UG", qualification: "UG", desc: "Financial support for girls.", deadline: "30 July 2025", link: "#" },
    { title: "Top Talent Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "UG", qualification: "UG", desc: "Merit-based top talent award.", deadline: "31 October 2025", link: "#" },
    { title: "J&K Merit Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "UG", qualification: "UG", desc: "For students from J&K.", deadline: "30 November 2025", link: "#" },
    { title: "Minority Girls Scholarship", category: "General", gender: "Female", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "Scholarship for minority girls.", deadline: "31 December 2025", link: "#" },
    { title: "SC Girls Scholarship AP", category: "SC", gender: "Female", state: "Andhra Pradesh", eligibility: "UG", qualification: "UG", desc: "Support for SC girls.", deadline: "30 September 2025", link: "#" },
    { title: "ST Girls Scholarship Telangana", category: "ST", gender: "Female", state: "Telangana", eligibility: "UG", qualification: "UG", desc: "Support for ST girls.", deadline: "30 September 2025", link: "#" },
    {title: "National Means-cum-Merit Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "Class 10 passed", qualification: "10th", desc: "Financial support for meritorious students from low-income families.", deadline: "2025-08-31", link: "#" },
    { title: "Kishore Vaigyanik Protsahan Yojana", category: "Any", gender: "Any", state: "All India", eligibility: "Class 11 & 12", qualification: "Inter", desc: "Scholarship for science students to pursue research.", deadline: "2025-09-15", link: "#" },
    { title: "INSPIRE Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "Class 12 passed", qualification: "Inter", desc: "Scholarship for top science talent.", deadline: "2025-10-10", link: "#" },
    { title: "AICTE Pragati Scholarship", category: "Female", gender: "Female", state: "All India", eligibility: "Diploma or UG", qualification: "UG", desc: "Scholarship for girls in technical education.", deadline: "2025-11-30", link: "#" },
    { title: "AICTE Saksham Scholarship", category: "Female", gender: "Female", state: "All India", eligibility: "Differently-abled girls", qualification: "UG", desc: "Support for differently-abled female students.", deadline: "2025-12-31", link: "#" },
    { title: "State Merit Scholarship AP", category: "Any", gender: "Any", state: "Andhra Pradesh", eligibility: "UG students", qualification: "UG", desc: "Merit-based scholarship for top students in AP.", deadline: "2025-09-30", link: "#" },
    { title: "State Merit Scholarship Telangana", category: "Any", gender: "Any", state: "Telangana", eligibility: "UG students", qualification: "UG", desc: "Merit-based scholarship for top students in Telangana.", deadline: "2025-09-30", link: "#" },
    { title: "Minority Girls Scholarship AP", category: "General", gender: "Female", state: "Andhra Pradesh", eligibility: "UG & PG", qualification: "UG", desc: "Support for minority girls in AP.", deadline: "2025-08-31", link: "#" },
    { title: "Minority Girls Scholarship Telangana", category: "General", gender: "Female", state: "Telangana", eligibility: "UG & PG", qualification: "UG", desc: "Support for minority girls in Telangana.", deadline: "2025-08-31", link: "#" },
    { title: "Kasturba Gandhi Balika Vidyalaya Scholarship", category: "Female", gender: "Female", state: "All India", eligibility: "Class 6-12", qualification: "10th", desc: "Scholarship for girls from disadvantaged groups.", deadline: "2025-09-15", link: "#" },
    { title: "Centrally Sponsored Post Matric Scholarship", category: "SC/ST", gender: "Any", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "Scholarship for SC/ST students after matric.", deadline: "2025-10-31", link: "#" },
    { title: "Merit-cum-Means Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "UG students", qualification: "UG", desc: "Merit-based scholarship with financial need consideration.", deadline: "2025-11-30", link: "#" },
    { title: "Scholarship for Children of Ex-Servicemen", category: "General", gender: "Any", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "Financial support for children of defense personnel.", deadline: "2025-12-15", link: "#" },
    { title: "National Fellowship for SC/ST", category: "SC/ST", gender: "Any", state: "All India", eligibility: "PG & Research", qualification: "PG", desc: "Fellowship for higher studies and research.", deadline: "2025-12-31", link: "#" },
    { title: "PG Scholarship Minority Communities", category: "General", gender: "Any", state: "All India", eligibility: "PG students", qualification: "PG", desc: "Scholarship for minority students pursuing PG.", deadline: "2025-11-30", link: "#" },
    { title: "Central Sector Top Class Scholarship", category: "General", gender: "Any", state: "All India", eligibility: "UG students", qualification: "UG", desc: "For top-class students from financially weak families.", deadline: "2025-10-15", link: "#" },
    { title: "Rajiv Gandhi National Fellowship", category: "SC/ST", gender: "Any", state: "All India", eligibility: "PG Research", qualification: "PG", desc: "Fellowship for research scholars from SC/ST.", deadline: "2025-12-31", link: "#" },
    { title: "Post Matric Scholarship Minority", category: "General", gender: "Any", state: "All India", eligibility: "UG & PG", qualification: "UG", desc: "Scholarship for minority students.", deadline: "2025-11-30", link: "#" },
    { title: "Merit Scholarship for Differently Abled", category: "Any", gender: "Any", state: "All India", eligibility: "UG students", qualification: "UG", desc: "Support for differently-abled students.", deadline: "2025-12-31", link: "#" },
    { title: "National Fellowship for OBC Students", category: "OBC", gender: "Any", state: "All India", eligibility: "PG & Research", qualification: "PG", desc: "Fellowship for OBC students pursuing research.", deadline: "2025-12-31", link: "#" }
];


// -----------------------
// RENDER SCHOLARSHIPS
// -----------------------
function renderScholarships() {
    if (!document.getElementById("scholarship-list")) return;

    let search = document.getElementById("search").value.toLowerCase();
    let fstate = document.getElementById("filter-state").value;
    let fcat = document.getElementById("filter-category").value;
    let fgen = document.getElementById("filter-gender").value;

    let html = "";

    scholarships.forEach(s => {
        if (
            s.title.toLowerCase().includes(search) &&
            (fstate === "" || s.state === fstate) &&
            (fcat === "" || s.category === fcat) &&
            (fgen === "" || s.gender === fgen)
        ) {
            html += `
                <div class="card" onclick='openPopup(${JSON.stringify(s)})'>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                </div>
            `;
        }
    });

    document.getElementById("scholarship-list").innerHTML = html;
}
renderScholarships();

// -----------------------
// POPUP FUNCTIONS
// -----------------------
function openPopup(s) {
    document.getElementById("p-title").innerText = s.title;
    document.getElementById("p-desc").innerText = s.desc;
    document.getElementById("p-eligibility").innerText = s.eligibility;
    document.getElementById("p-state").innerText = s.state;
    document.getElementById("p-category").innerText = s.category;
    document.getElementById("p-gender").innerText = s.gender;
    document.getElementById("p-deadline").innerText = s.deadline;
    document.getElementById("p-link").href = s.link;

    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// -----------------------
// RECOMMENDATION SYSTEM
// -----------------------
function recommend() {
    let gender = document.getElementById("r-gender").value;
    let category = document.getElementById("r-category").value;
    let state = document.getElementById("r-state").value;
    let qual = document.getElementById("r-qualification").value;

    let results = scholarships.filter(s =>
        (gender === "" || s.gender === gender || s.gender === "Any") &&
        (state === "" || s.state === state) &&
        (category === "" || s.category === category || s.category === "Any") &&
        (qual === "" || s.qualification === qual)
    );

    let html = "";

    results.forEach(s => {
        html += `
            <div class="card">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <a href="${s.link}" target="_blank">Apply</a>
            </div>
        `;
    });

    document.getElementById("recommend-results").innerHTML = html;
}

// -----------------------
// CHATBOT
// -----------------------
function toggleChat() {
    let box = document.getElementById("chatbot-box");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function chatbotSend(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chatbot-input").value;
        let box = document.getElementById("chatbot-messages");

        box.innerHTML += `<p><b>You:</b> ${input}</p>`;

        let reply = "I didn't understand that.";

        if (input.includes("eligible")) reply = "Eligibility varies per scheme.";
        if (input.includes("documents")) reply = "Aadhaar, income certificate, caste certificate are common.";
        if (input.includes("apply")) reply = "Click 'Apply Now' in the scholarship details.";

        box.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
        document.getElementById("chatbot-input").value = "";
    }
}
function downloadCSV() {
    let csv = "Title,Category,Gender,State,Eligibility,Qualification,Deadline,Documents\n";
    scholarships.forEach(s => {
        let docs = s.documents.join(" | ");
        csv += `"${s.title}","${s.category}","${s.gender}","${s.state}","${s.eligibility}","${s.qualification}","${s.deadline}","${docs}"\n`;
    });

    let blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "scholarships.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

