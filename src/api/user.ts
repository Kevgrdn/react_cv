import githubIcon from "../assets/github.png"

export const user = {
    nom: 'Pignolet',
    prenom: 'Dylan',
    mail: 'dylan.pignolet2@gmail.com',
    tel: "0751688392",
    adresse: {
        rue: "1 carrefour des poètes",
        ville: "Monts",
        cp: 37260
    },
    permis: "B",
    vehiculePerso: true,
    description: "",
    experiences: [
        {
            nom: 'Technicien Helpdesk',
            entreprise: 'Econocom',
            lieu: 'Tours',
            dateDebut: 'Juin 2022',
            dateFin: "Aujourd'hui",
            description: "Prise d'appels, communication client, résolution d'incidents informatique."
        },
        {
            nom: 'Développeur web',
            entreprise: 'OpenClassrooms',
            lieu: 'Tours',
            dateDebut: 'Août 2021',
            dateFin: "Mars 2022",
            projets: [
                {
                    nom: "Création d'un réseau social d'entreprise",
                    frontend: ["VueJS", "Vuetify", "Javascript"],
                    backend: ["NodeJS", "Javascript", "Express", "Sequelize", "MySQL"],
                    lien: "lien"
                },
                {
                    nom: "Création d'une API sécurisée",
                    frontend: [],
                    backend: ["Angular", "NodeJS", "Javascript", "Express", "MongoDB"],
                    lien: "lien"
                },
                {
                    nom: "Création d'un site e-commerce",
                    frontend: ["HTML", "CSS", "Javascript"],
                    backend: [],
                    lien: "lien"
                },
                {
                    nom: "Amélioration du référencement d'un site web",
                    frontend: ["HTML", "CSS"],
                    backend: [],
                    lien: "lien"
                },
                {
                    nom: "Dynamisation d'une page web avec des animations",
                    frontend: ["HTML", "CSS", "SASS"],
                    backend: [],
                    lien: "lien"
                },
                {
                    nom: "Création d'un site à partir d'une maquette",
                    frontend: ["HTML", "CSS"],
                    backend: [],
                    lien: "lien"
                }
            ]
        },
        {
            nom: "Professeur d'anglais stagiaire",
            entreprise: 'Education Nationale',
            lieu: 'Lycée Emile Zola - Châteaudun',
            dateDebut: 'Septembre 2019',
            dateFin: "Août 2020",
            description: "En charge de deux classes de Seconde. Préparation de cours, réunions parents-professeurs et conseils de classe."
        },
        {
            nom: 'Agent de production',
            entreprise: 'Thales',
            lieu: 'Tours',
            dateDebut: '2013',
            dateFin: "2019",
            description: "Inventaire, préparation de commande, conditionnement."
        }
    ],
    formations: [
        {
            nom: "Fomartion Développeur Web",
            dateDebut: "Août 2021",
            dateFin: "Mars 2022",
            formateur: "OpenClassrooms",
            lieu: "Tours"
        },
        {
            nom: "Master 2 Métiers de l'enseignement, de l'éducation et de la formation - Anglais",
            dateDebut: "Septembre 2019",
            dateFin: "Août 2020",
            formateur: "Université François Rabelais",
            lieu: "Tours"
        },
        {
            nom: "Master 1 Métiers de l'enseignement, de l'éducation et de la formation - Anglais",
            dateDebut: "Septembre 2018",
            dateFin: "Août 2019",
            formateur: "Université François Rabelais",
            lieu: "Tours"
        },
        {
            nom: "Licence LLCE Anglais",
            dateDebut: "2014",
            dateFin: "2018",
            formateur: "Université François Rabelais",
            lieu: "Tours"
        },
    ],
    interets: [
        {
            titre: "Sport",
            description: ""
        },
        {
            titre: "Cinéma",
            description: ""
        },
        {
            titre: "Jeux vidéos",
            description: ""
        },
        {
            titre: "High tech",
            description: ""
        },
        {
            titre: "Jeux de sociétés",
            description: ""
        },
    ],
    reseaux: [
        {
            icon: githubIcon,
            url: "lien"
        },
        {
            icon: "iconlinkdin",
            url: "lien"
        },
    ]
}