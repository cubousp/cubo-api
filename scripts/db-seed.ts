/*tslint:disable */

import { createActivities, createParticipants } from './db-utils'

createActivities([
    {
        title: 'Cirurgia ao vivo: levantamento de seio maxilar (LICOMF)',
        startsAt: '2018-09-17T16:00:00.000Z',
        endsAt: '2018-09-17T17:00:00.000Z',
        kind: 'LECTURE',
        totalVacancies: 20,
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Odontologia veterinária: uma realidade mais do que uma curiosidade',
        startsAt: '2018-09-17T17:00:00.000Z',
        endsAt: '2018-09-17T18:00:00.000Z',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Atuação do cirurgião-dentista militar nas Forças Armadas – Força Aérea: expectativas, realidades e dificuldades',
        startsAt: '2018-09-17T18:00:00.000Z',
        endsAt: '2018-09-17T19:00:00.000Z',
        kind: 'SURGERY',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Toxina Botulínica e suas possibilidade terapêuticas em DTM',
        startsAt: '2018-09-18T13:00:00.000Z',
        endsAt: '2018-09-18T14:00:00.000Z',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
    {
        title: 'Mercado de trabalho em odontologia',
        startsAt: '2018-09-18T14:00:00.000Z',
        endsAt: '2018-09-18T15:00:00.000Z',
        kind: 'LECTURE',
        inscriptionBeginsAt: new Date(2018, 7, 20, 20, 0, 0).toISOString(),
        inscriptionEndsAt: new Date(2018, 8, 16, 23, 59, 59).toISOString(),
    },
])

createParticipants([{
    name: 'Participante teste',
    email: 'participant@test.com',
    authId: 'auth0|5b437a73a177ac1965fbc996',
    role: 'USER'
}, {
    name: 'Admin CUBO',
    email: 'admin@cubo.com.br',
    authId: 'auth0|5b149d7ba76b70216923ed5a',
    role: 'ADMIN'
}])
