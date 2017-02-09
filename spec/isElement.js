gitimport chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import isElement from '../src/isElement'



 const array = [1,2,3,4,5]
  describe.only('#isElement()', function() {
    it('should return the element when the value is present', function() {
      expect(isElement(4, [1,2,3,4,5])).to.eql(3)
    });
    
  });

//return -1 if the element doesnt exist in the array
 const array = [1,2,3,4,5]
   describe.only('#isElement()', function() {
    it('should return -1 when the value is not present', function() {
      expect(isElement(7, [1,2,3,4,5])).to.eql(3)
     });
   });

//may need to do npm --save -dev