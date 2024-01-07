const app = require('../app')
const request = require('supertest')

// test('should be return all data on todos', (done) => {
//         request(app)
//         .get('/todos')
//         .expect(200)
//         .then(response => {
//             expect(response.body.message).toBe("Buy groceries")
//             done()
//         })
//         .catch(done)
        
//         })

describe('Todo Routes', () => {
    it ('Should be return data on todos', (done)=> {
        request(app)
        .get('/todos')
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe('Buy groceries')
        done()
        })
        .catch(done)
    })
    it('Should be create new data on todos', (done) => {
        request(app)
        .post('/todos')
        .send({
            title: 'Clean the house',
            status : 'Active'
        })
        .expect(201)
        .then(response => {
            expect(response.body.title).toBe('Clean the house')
            expect(response.body.status).toBe('Active')
            done()
        })
        .catch(done)
    })
    // it('Should be update data on todos', (done) => {
    //     const {id} = 1
    //     const updateTodo = {
    //         status : 'inactive'
    //     }
    //     request (app)
    //     .put(`/todos/${id}`)
    //     .send(updateTodo)
    //     .expect(201)
    //     .then(response => {
    //         expect(response.body.data).toHaveProperty('status', 'inactive')
    //         expect(response.body.message).toBe('Todo Deleted')
    //         done()
    //     })
    //     .catch(done)
    // })

})