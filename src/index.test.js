import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    })
})

describe('index.html', () => {
    it("should say hello world", (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            if(err) console.log(err); //eslint-disable-line no-console
            const element = window.document.getElementsByTagName('h1')[0]; 
            expect(element.innerHTML).to.equal("Hi kebari wedi haras");
            done();
            window.close();
        })
    })
})