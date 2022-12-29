import githubIcon from "../assets/github.png"
import reactIcon from '../assets/react.png'
import vuejsIcon from '../assets/vuejs.png'
import nodejsIcon from '../assets/nodejs.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import javascriptIcon from '../assets/javascript.png'
import expressIcon from '../assets/express.png'
import gitIcon from '../assets/git.png'
import mysqlIcon from '../assets/mysql.png'
import sequelizeIcon from '../assets/sequelize.png'
import viteIcon from '../assets/vite.png'
import mongodbIcon from '../assets/mongodb.png'
import muiIcon from '../assets/mui.png'
import typescriptIcon from '../assets/typescript.png'
import vscodeIcon from '../assets/vscode.png'


export const user = {
    nom: 'Grondin',
    prenom: 'Kévin',
    mail: "kevin.grdn37800@gmail.com",
    tel: "0672611575",
    permis: "B",
    vehiculePerso: true,
    description: "Ma reconversion dans les métiers du numérique est bien plus qu'une passion, c'est un projet de vie !",
    adresse: {
        rue: "231, rue auguste chevallier",
        ville: "Tours",
        cp: 37000
    },
    experiences: [
        {
            nom: "Développeur Web - Parcours diplômant RNCP - Réalisation de 6 projets professionnels en 9 mois",
            entreprise: "OpenClassrooms",
            lieu: "Tours",
            dateDebut: "Mars 2021",
            dateFin: "Novembre 2021",
            projets: [
                {
                    nom: "Création d'un réseau social d'entreprise",
                    frontend: ["VueJS", "SASS", "Bootstrap", "Javascript"],
                    backend: ["Angular", "NodeJS", "Javascript", "Express (API REST)", "Sequelize (MySQL)"],
                    lien: "MonLien"
                },
                {
                    nom: "Création d'une API sécurisée",
                    frontend: [],
                    backend: ["Angular", "NodeJS", "Javascript", "Express (API REST)", "MongoDB"],
                    lien: "MonLien"
                },
                {
                    nom: "Création d'un site e-commerce ",
                    frontend: ["HTML", "CSS", "SASS", "Bootstrap", "Javascript"],
                    backend: [],
                    lien: "MonLien"
                },
                {
                    nom: "Amélioration du référencement d'un blog ",
                    frontend: ["HTML, CSS"],
                    backend: [],
                    lien: "MonLien"
                },
                {
                    nom: "Dynamisation d'une page web avec des animations",
                    frontend: ["HTML", "CSS", "SASS"],
                    backend: [],
                    lien: "MonLien"
                },
                {
                    nom: "Création d'un site à partir d'une maquette",
                    frontend: ["HTML", "CSS"],
                    backend: [],
                    lien: "MonLien"
                }
            ],
        },
        {
            nom: "Développeur fullstack",
            entreprise: "ASREC Centre",
            lieu: "Tours",
            dateDebut: "Avril 2022",
            dateFin: "Aujourd'hui",
        }
    ],
    formations: [
        {
            nom: "Développeur web",
            dateDebut: "Mars 2021",
            dateFin: "Novembre 2021",
            formateur: "OpenClassrooms",
            lieu: "Tours"
        },
        {
            nom: "Langues étrangères appliquées Anglais-Japonais",
            dateDebut: "Septembre 2017",
            dateFin: "Juin 2018 ",
            formateur: "Université d'Orléans",
            lieu: "Orléans"
        },
        {
            nom: "Licence d'économie",
            dateDebut: "Septembre 2014",
            dateFin: "Juin 2016 ",
            formateur: "Université François Rabelais",
            lieu: "Tours"
        },
        {
            nom: "Baccalauréat Sciences et Technologies de la Gestion",
            dateDebut: "Septembre 2012",
            dateFin: "Juin 2013 ",
            formateur: "Lycée polyvalent François Rabelais",
            lieu: "Chinon"
        }
    ],
    interets: [
        {
            titre: "Boxe",
            description: "J'ai pratiqué la boxe américaine/Full Contact pendant 10 ans également lors de championnats régionnaux et de France. Celà m'a permit de devenir rigoureux et de me dépasser."
        },
        {
            titre: "Japon",
            description: "Je suis un fan de la culture japonaise. Je suis également parti à Tokyo en 2018 pour une durée d'un mois afin d'approfondir ma connaissance sur les traditions japonaises."
        }
    ],
    reseaux: [
        {
            icon: githubIcon,
            url: "lien guy teub",
        },
        {
            icon: "urlIcon2",
            url: "line githuib..."
        }
    ],
    stackTechnique: [
        {
            icon: reactIcon,
            alt: 'react',
        },
        {
            icon: vuejsIcon,
            alt: 'vuejs'
        },
        {
            icon: nodejsIcon,
            alt: 'nodejs',
        },
        {
            icon: htmlIcon,
            alt: 'html',
        },
        {
            icon: cssIcon,
            alt: 'css',
        },
        {
            icon: javascriptIcon,
            alt: 'javascript',
        },
        {
            icon: expressIcon,
            alt: 'express',
        },
        {
            icon: gitIcon,
            alt: 'git',
        },
        {
            icon: githubIcon,
            alt: 'github',
        },
        {
            icon: mysqlIcon,
            alt: 'mysql',
        },
        {
            icon: sequelizeIcon,
            alt: 'sequelize',
        },
        {
            icon: viteIcon,
            alt: 'vite',
        },
        {
            icon: mongodbIcon,
            alt: 'mongodb',
        },
        {
            icon: muiIcon,
            alt: 'mui',
        },
        {
            icon: typescriptIcon,
            alt: 'typescript',
        },
        {
            icon: vscodeIcon,
            alt: 'vscode',
        },
    ]

}