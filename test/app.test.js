import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../server/server';
const sqlite3 = require('sqlite3').verbose();
before(() => {
    process.env.NODE_ENV = 'test';
})

chai.use(chaiHttp);
chai.should();

describe("Products", () => {
    describe("GET /", () => {
        // Test to get all products
        it("should get all products", (done) => {
             chai.request(app)
                 .get('/products/all')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  })
                  
         })    

         it("should add a new product", (done) => {
            chai.request(app)
                .post('/products/create')
                .send({
                    product_name: 'Nike Air Max 90',
                    category: 'test',
                    size: 12,
                    status: 'ready',
                    colour: 'red',
                    customers_initials: 'CG',
                    product_image: 'https://example.com/image.png',
                  })
                .end((err, res) => {
                    console.log(res);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 })
                 
        }) 

        it("should add a new product", (done) => {
            chai.request(app)
                .post('/products/create')
                .send({
                    product_name: 'Nike Air Max 90',
                    category: 'test',
                    size: 12,
                    status: 'ready',
                    colour: 'red',
                    customers_initials: 'CG',
                    product_image: 'https://example.com/image.png',
                  })
                .end((err, res) => {
                    console.log(res);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 })
                 
        }) 
    })
})