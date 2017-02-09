Candida and Briana
# moldy-zorilla
NPM Module for common utility Javascript functions
## Description

Create a library of commonly used JavaScript/JQuery/Lodash/Underscore methods with documentation and commenting using ES2015. Publish the code as a package to NPM.
## Context

This goal is important for:
- learning JavaScript
- understanding how developer write higher-level code for others to use
- understanding ES2015

This code will be used by other developers to make their jobs easier.

The questions that this project will raise are:
- how do we write packages that are easy to understand and simple to use out of the box?
- how to publish a package to NPM?
## Specifications
### Required
- [x] Includes a list of commonly used methods to rewrite in ES2015.

  ## Functions

 ### Objects

[ ] isElement
(isElement_.isElement(object)
Returns true if object is a DOM element.

_.isElement(jQuery('body')[0]);
=> true
)

[ ] isFunction
isFunction_.isFunction(object)
Returns true if object is a Function.

_.isFunction(alert);
=> true

[ ] isNumber
isNumber_.isNumber(object)
Returns true if object is a Number (including NaN).

_.isNumber(8.4 * 5);
=> true

[ ] isError
isError_.isError(object)
Returns true if object inherits from an Error.

try {
  throw new TypeError("Example");
} catch (o_O) {
  _.isError(o_O);
}
=> true

[ ] isArray
isArray_.isArray(object)
Returns true if object is an Array.

(function(){ return _.isArray(arguments); })();
=> false
_.isArray([1,2,3]);
=> true

[ ] isArguments
isArguments_.isArguments(object)
Returns true if object is an Arguments object.

(function(){ return _.isArguments(arguments); })(1, 2, 3);
=> true
_.isArguments([1,2,3]);
=> false


### Collections

[ ] Contains
contains_.contains(list, value, [fromIndex]) Alias: includes
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

_.contains([1, 2, 3], 3);
=> true

Arrays

- [ ] sortedIndex
sortedIndex_.sortedIndex(list, value, [iteratee], [context])
Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. The iteratee may also be the string name of the property to sort by (eg. length).

_.sortedIndex([10, 20, 30, 40, 50], 35);
=> 3

var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
_.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
=> 1

Function

- [ ] wrap
wrap_.wrap(function, wrapper)
Wraps the first function inside of the wrapper function, passing it as the first argument. This allows the wrapper to execute code before and after the function runs, adjust the arguments, and execute it conditionally.

var hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, function(func) {
  return "before, " + func("moe") + ", after";
});
hello();
=> 'before, hello: moe, after'

utility

- [ ] results
result_.result(object, property, [defaultValue])
If the value of the named property is a function then invoke it with the object as context; otherwise, return it. If a default value is provided and the property doesn't exist or is undefined then the default will be returned. If defaultValue is a function its result will be returned.

var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
_.result(object, 'cheese');
=> "crumpets"
_.result(object, 'stuff');
=> "nonsense"
_.result(object, 'meat', 'ham');
=> "ham"


- [x] Includes a README that describes each method and provides an example of use.
- [x] Package is published with NPM.
- [x] Includes tests for all methods described.
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).
### Optional
- [ ] Showcases methods in a simple website app.

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
