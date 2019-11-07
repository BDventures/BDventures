/**
 * Modify the `addCallback` function to work like `add` (it should add),
 * but instead of returning the value, use a callback.
 *
 * The callback should be a node-style callback with error on the left and data on the right.
 *
 * Example:
 * ```javascript
 * (err, data) => {
 *   // code
 * };
 * ```
 * Verify your changes work:
 *
 * npm run lesson01:a
 *
 */

/**
 * adds two numbers
 * @param {Number} x first value to add
 * @param {Number} y second value to add
 */
function add(x, y) {
  return x + y;
}

/**
 * adds two numbers
 * @param {Number} x first value to add
 * @param {Number} y second value to add
 * @param {(any, any) => void} callback callback is called after value is computed
 */
function addCallback(x, y, callback) {
  const err = null
  const data = add
  callback(err, data(x,y))
}

module.exports = {
  add,
  addCallback
};
