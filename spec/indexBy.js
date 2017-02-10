import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import indexBy from '../src/indexBy'

const stoogesArray = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
describe('indexBy()', function(){
  it('should return name and age of stooges', function(){
	expect(indexBy(stoogesArray, 'age')).to.eql({
	  "40": {name: 'moe', age: 40},
	  "50": {name: 'larry', age: 50},
	  "60": {name: 'curly', age: 60}
	})
  })
})
