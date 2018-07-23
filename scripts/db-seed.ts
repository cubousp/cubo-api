/*tslint:disable */

import { createActivities, createParticipants } from './db-utils'

createActivities([
    {
        title: 'Cirurgia ao vivo: levantamento de seio maxilar (LICOMF)',
        startsAt: '2018-09-19T8:00:00-03:00',
        endsAt: '2018-09-19T9:00:00-03:00',
        kind: 'LECTURE',
        totalVacancies: 20,
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Odontologia veterinária: uma realidade mais do que uma curiosidade',
        startsAt: '2018-09-19T9:00:00-03:00',
        endsAt: '2018-09-19T10:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Atuação do cirurgião-dentista militar nas Forças Armadas – Força Aérea: expectativas, realidades e dificuldades',
        startsAt: '2018-09-19T10:00:00-03:00',
        endsAt: '2018-09-19T11:00:00-03:00',
        kind: 'SURGERY',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Toxina Botulínica e suas possibilidade terapêuticas em DTM',
        startsAt: '2018-09-19T13:00:00-03:00',
        endsAt: '2018-09-19T14:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Mercado de trabalho em odontologia',
        startsAt: '2018-09-20T14:00:00-03:00',
        endsAt: '2018-09-20T15:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    }, {
        title: 'Acupuntura na Odontologia',
        startsAt: '2018-09-20T8:00:00-03:00',
        endsAt: '2018-09-20T9:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Relaçeõs atuais da infecção endodêntica',
        startsAt: '2018-09-20T9:00:00-03:00',
        endsAt: '2018-09-20T10:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    }, {
        title: 'Odontologia social: boas ações despertam sorrisos',
        startsAt: '2018-09-20T10:00:00-03:00',
        endsAt: '2018-09-20T11:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Diagnóstico por imagem do tecido ósseo alveolar para implantodontia',
        startsAt: '2018-09-20T13:00:00-03:00',
        endsAt: '2018-09-20T14:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    }, {
        title: 'Leadership: Transformando dentistas em líderes',
        startsAt: '2018-09-21T8:00:00-03:00',
        endsAt: '2018-09-21T9:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Fundamentos de marketing aplicados na Odontologia',
        startsAt: '2018-09-21T9:00:00-03:00',
        endsAt: '2018-09-21T10:00:00-03:00',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
])

createParticipants([{
    name: 'Admin CUBO',
    email: 'admin@cubo.com.br',
    authId: 'auth0|5b149d7ba76b70216923ed5a',
    role: 'ADMIN'
}, {
    name: 'Participante teste',
    email: 'participant@test.com',
    authId: 'auth0|5b437a73a177ac1965fbc996',
    role: 'USER'
}, {
    name: 'Participante teste 2',
    email: 'participant2@test.com',
    authId: 'participant2@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 3',
    email: 'participant3@test.com',
    authId: 'participant3@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 4',
    email: 'participant4@test.com',
    authId: 'participant4@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 5',
    email: 'participant5@test.com',
    authId: 'participant5@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 6',
    email: 'participant6@test.com',
    authId: 'participant6@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 7',
    email: 'participant7@test.com',
    authId: 'participant7@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 8',
    email: 'participant8@test.com',
    authId: 'participant8@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 9',
    email: 'participant9@test.com',
    authId: 'participant9@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 10',
    email: 'participant10@test.com',
    authId: 'participant10@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 11',
    email: 'participant11@test.com',
    authId: 'participant11@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 12',
    email: 'participant12@test.com',
    authId: 'participant12@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 13',
    email: 'participant13@test.com',
    authId: 'participant13@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 14',
    email: 'participant14@test.com',
    authId: 'participant14@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 15',
    email: 'participant15@test.com',
    authId: 'participant15@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 16',
    email: 'participant16@test.com',
    authId: 'participant16@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 17',
    email: 'participant17@test.com',
    authId: 'participant17@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 18',
    email: 'participant18@test.com',
    authId: 'participant18@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 19',
    email: 'participant19@test.com',
    authId: 'participant19@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 20',
    email: 'participant20@test.com',
    authId: 'participant20@test.com',
    role: 'USER'
}, {
    name: 'Participante teste 21',
    email: 'participant21@test.com',
    authId: 'participant21@test.com',
    role: 'USER'
},])
