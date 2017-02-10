import chai, {expect} from 'chai'
import chaiChange from 'chai-change'
import contains from '../src/contains'



const radArray = [1,2,3,4,5]
describe('#contains()', function() {
  it('should return true when the element is present in the array', function() {
    expect(contains(4, radArray)).to.eql(true)
  });

  it('should return false when the element is not present in the array', function() {
    expect(contains(6, radArray)).to.eql(false)
  });
});

//returns false if the element doesn't exist in the array
//  const array = [1,2,3,4,5]
//    describe.only('#contains()', function() {
//     it('should return false when the object is not present', function() {
//       expect(contains(7, [1,2,3,4,5])).to.eql(3)
//      });
//    });



// contains_.isElement(object)
// Returns true if object is a DOM element.

// _.isElement(jQuery('body')[0]);
// => true
