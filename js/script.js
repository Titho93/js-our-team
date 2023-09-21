// 1. Creare un array con all'interno più oggetti
// 2. per ogni oggetto specificare il valore
// 3. ciclare tramite ciclo for of ogni membro
// 4. in console.log mostrare le informazioni di ogni singolo membro
// 5. stampo in html cioò che mi ha mostrato il console.log, con un template literal

const membersTeam = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
  }
]

const cards = document.querySelector('.cards');

for(member of membersTeam) {
  console.log(member)
  console.log(member.name)
  console.log(member.role)
  console.log(member.photo)

  cards.innerHTML += `<div class= card> <img src="img/${member.photo}" alt=""> ${member.name} <br>
  ${member.role} <br>
  </div>`
}

