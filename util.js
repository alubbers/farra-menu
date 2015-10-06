/**
 * This file contains utility methods
 */

/**
 * arrayToCs returns a string representation of the given array as a
 * list of comma separated values.
 *
 * @param array  An array to format
 * @param endWithAnd  A boolean. If true, the last element of the formatted
 *        string will be separated with ", and " instead of just ", "
 */

function arrayToCsv(array, endWithAnd) {
  if (array.length == 0) {
    return "";
  }

  if (array.length == 1) {
    return array[0];
  }

  var result = _.first(array);
  _.forIn( _.slice(array, 1, array.length - 1), function(item) {
    result = result + ', ' + item;
  });

  result = result + ', ';
  if (endWithAnd) {
    result = result + 'and ';
  }
  result = result + _.last(array);

  return result;
}
