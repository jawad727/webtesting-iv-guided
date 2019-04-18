const db = require('../data/dbConfig.js')
const hobbitsDb = require('./hobbitsModel')

describe('hobits moedl', () => {

    
    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate()
        })
    
        it('should inser the provided hobbits into the db', async () => {
            await hobbitsDb.insert({ name: 'gaffer' })
            await hobbitsDb.insert({ name: 'sam' })

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })


        it('should insert the provided hobbit into the db', async () => {
            let hobbit = await hobbitsDb.insert({ name: 'gaffer' })
            expect(hobbit.name).toBe('gaffer')

            hobbit = await hobbitsDb.insert({ name: 'sam' })
            expect(hobbit.name).toBe('sam')
        })


    })

})