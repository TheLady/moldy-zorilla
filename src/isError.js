isError_.isError(object)
Returns true if object inherits from an Error.

try {
  throw new TypeError("Example");
} catch (o_O) {
  _.isError(o_O);
}
=> true
