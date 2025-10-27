function calculerQuiz() {
  const questions = 24; // Total des questions (modifie si nécessaire)
  const lettres = ['A','B','C','D','E','F'];
  let scores = {A:0, B:0, C:0, D:0, E:0, F:0};

  for(let i=1; i<=questions; i++){
    const q = document.querySelector(`input[name=q${i}]:checked`);
    if(q) scores[q.value]++;
  }

  // Trier les scores pour trouver le principal et les deux secondaires
  const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);

  // Profils
  const profils = {
    A: "Pratique",
    B: "Curieux",
    C: "Artistique",
    D: "Social",
    E: "Entreprenant",
    F: "Rigoureux"
  };

  const result = `
    <p>Votre profil principal est : ${profils[sorted[0][0]]} (${sorted[0][0]} = ${sorted[0][1]})</p>
    <p>Votre 1er profil secondaire est : ${profils[sorted[1][0]]} (${sorted[1][0]} = ${sorted[1][1]})</p>
    <p>Votre 2e profil secondaire est : ${profils[sorted[2][0]]} (${sorted[2][0]} = ${sorted[2][1]})</p>
  `;

  document.getElementById('resultat').innerHTML = result;
}

