const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('My Functional Test', function () {
    //#1 set timeout because this is asynchrounus
    this.timeout(5000);
    suite('Integration test with chai-http', () => {
        // #1 check respone status 200 and text;
        test('Test GET /hello with no name', (done) => {
            chai
                .request(server)
                .get('/hello')
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.text, 'hello Guest');
                    done();
                });
        });
        // #2 check response from input
        test('Test GET /hello with your name', function (done) {
            chai
                .request(server)
                .get('/hello?name=gilang romadhan')
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.text, 'hello gilang romadhan');
                    done();
                });
        });
        //#3 check response
        test('Send {surname: "Colombo"}', (done) => {
            chai
                .request(server)
                .put('/travellers')
                .send({ surname: "Colombo" })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.type, "application/json");
                    assert.equal(res.body.name, 'Cristoforo');
                    assert.equal(res.body.surname, 'Colombo');
                    done();
                });
        });
        //#4 check 
        test('Send {surname: da Verazzano}', function (done) {
            chai
                .request(server)
                .put('/travellers')
                .send({ surname: 'da Verrazzano' })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    assert.equal(res.type, 'application/json');
                    assert.equal(res.body.name, 'Giovanni');
                    assert.equal(res.body.surname, 'da Verrazzano');
                    done();
                });
        });
    });
});