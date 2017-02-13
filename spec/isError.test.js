import chai, {expect} from 'chai'
import chaiChange from 'chai'
import isAnError from '../src/isAnError'

describe('isAnError()', function() {
  it('should return true if the object returns an error', function(){
    expect(isAnError(errObj)).to.eql(true)
  })
})
