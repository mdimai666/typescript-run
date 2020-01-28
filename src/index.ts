import  moment from 'moment'
import { zz } from './func'
import cheerio from "cheerio";
import fs from "fs";
import path from "path";

console.log('START')

let temp1 = 'file.html'
let html = fs.readFileSync(temp1, { encoding: 'utf-8' })
const $ = cheerio.load(html)

let sRoot = `.mainRow .rCol>.in `
let t1 = `.weather-info .temperature .big`
let v = $(t1, sRoot).text();
console.log(v)


let query: SelItem[] = [

]


// console.log(moment().format('lll'));
// console.log(2**8);



class SelItem {
    selector: string = ''
    attr: string | unknown
    field: string = ''

    /**
     * 
     * @param {SelItem} ss
     */
    constructor(s: Partial<SelItem>) {
        Object.assign(this, s)
    }
}