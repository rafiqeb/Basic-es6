

const people = [
    {
        name: 'Rafiq',
        id: 1,
        address:{
            village: 'durlove pur',
            thana: 'harinakunda',
        },
        contact:{
            phone: '01729665802',
            email: 'rafiq@gmail.com',
        }
    },
    {
        name: 'Kona',
        id: 2,
        address:{
            village: 'nitta nanda pur',
            thana: 'harinakunda',
        },
        contact:{
            phone: '01753942594',
            email: 'kona@gmail.com',
        }
    },
    {
        name: 'sova',
        id: 3,
        address:{
            village: 'shekh para',
            thana: 'harinakunda',
        },
        contact:{
            phone: '01725566454',
        }
    },
    {
        name: 'rajib',
        id: 4,
        address:{
            thana: 'shoylokupa',
        },
        contact:{
            email: 'rajib@gmail.com',
        }
    }
]


const peopleList = document.getElementById('people-list')
const personInfo = document.getElementById('person-info')

//    1st
const renderPeopleList = (people) => {
    people.map((person) => {
        
        const li = document.createElement('li')
        li.classList.add("cursor-pointer", "text-bold", "text-blue-500", "p-2")
        li.innerText = person.name

        peopleList.appendChild(li)

        li.addEventListener('click', () => {
            handlePersoneClick(person.id)
        })
    })
}
//   3rd
const displayPerson = (person) => {
    
    personInfo.classList.remove('hidden')
    document.getElementById('no-selection').classList.add('hidden')
    personInfo.innerHTML = `
    <h2 class="text-2xl font-bold mb-2"> ${person.name}</h2>
    <p> Village: ${person?.address?.village || "N/A"}
    <p> Phone: ${person?.contact?.phone || "N/A"}
    <p> Email: ${person?.contact?.email || "N/A"}
    
    `
}
//   2nd
const handlePersoneClick = (id) => {
    const person = people.find((p) => p.id == id)
    displayPerson(person)
}


renderPeopleList(people)
