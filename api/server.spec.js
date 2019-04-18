const server = require('./server.js')
const request = require('supertest')

describe('server.js', () => {

    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe("GET /", () => {

        it('should return 200 OK', () => {
            return request(server)
            .get('/')
            .then(res => {
                console.log(res.status)
                expect(res.status).toBe(200)
            })
        })
    
      it('should return JSON', () => {
          return request(server)
        .get('/')
        .then(res => {
            expect(res.type).toBe('application/json')
        })
      })
    
    })
})