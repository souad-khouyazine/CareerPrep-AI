// ===== Mock CV Generator =====
document.getElementById("mockCVForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("mockName").value;
  const education = document.getElementById("mockEducation").value;
  const skills = document.getElementById("mockSkills").value;
  const experience = document.getElementById("mockExperience").value;

  document.getElementById("mockCVOutput").innerText = `
🧠 AI Generated CV

Name: ${name}
Education: ${education}

Skills: ${skills.split(",").map(s => s.trim()).join(", ")}

Experience:
${experience}

Tip: Highlight your strongest skills at the top.
  `;
});

// ===== Mock Interview Coach =====
document.getElementById("mockInterviewForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const job = document.getElementById("mockJob").value;
  const answer = document.getElementById("mockAnswers").value.toLowerCase();
  const output = document.getElementById("mockInterviewOutput");

  let feedback = "🙂 Good answer. Try to add examples.";
  if(answer.includes("team")) feedback = "✅ Great! Recruiters love teamwork examples.";
  else if(answer.includes("experience")) feedback = "👍 Mentioning experience is strong.";

  output.innerText = `
🧠 AI Feedback for ${job}:
${feedback}

AI Tip: Be confident, structured, and clear.
  `;
});
