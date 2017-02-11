import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import sortedIndex from '../src/sortedIndex'


describe('sortedIndex', function(){
	it('should return the index where a value should be', function(){
		expect(sortedIndex([10, 20, 30, 40, 50], 35)).to.eql(3)
  })
})
