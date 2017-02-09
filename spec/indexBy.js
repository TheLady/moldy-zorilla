import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import indexBy from '../src/indexBy'

let dopeArray = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  describe.only('indexBy()', function() {
    it('should return -1 when the value is not present', function() {
      expect(indexBy({name: 'moe' , age: 40})).to.equal(0 , 0)
    });
  });