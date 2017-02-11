import chai, {expect} from 'chai'
import chaiChange from 'chai'
import isAnError from '../src/isAnError'

describe('isAnError', function(){
	it('should return true if function is false', function(){
		expect(isAnError(isParent)).to.eql(false)
	}
}