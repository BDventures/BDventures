/**
 * Use the `addCallback` created in 01-create-callback.
 *
 * The function `useCallback` will be called by the test and given a callback.
 * You are to execute the code from `addCallback` and also return it's value using the
 * callback provided to the function.
 *
 * Verify your changes work:
 *
 * npm run lesson01:b
 *
 */

const { addCallback } = require("./01-create-callback");

function useCallback(x, y, callback) {
  setTimeout(() => {
    addCallback(x,y,callback)
  }, 1000)
  // TODO:
  // (1) call addCallback and pass it x and y.
  // (2) call the callback with the result of addCallback
}

module.exports = {
  useCallback
};
