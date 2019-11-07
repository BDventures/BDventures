import { addCallback } from "../01-create-callback";
import { useCallback } from "../02-use-callback";

jest.mock("../01-create-callback", () => ({
  addCallback: jest.fn((x, y, callback) => {
    callback(null, x + y);
  })
}));

describe("lesson-01/02-use-callback", () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const total = x + y;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("useCallback returns undefined", () => {
    expect.assertions(1);
    const expected = undefined;
    const actual = useCallback(x, y, () => {});
    expect(actual).toBe(expected);
  });

  test("err is null", done => {
    expect.assertions(1);
    const expected = null;
    useCallback(x, y, err => {
      expect(err).toBe(expected);
      done();
    });
  });

  test("data is computed", done => {
    expect.assertions(1);
    const expected = total;
    useCallback(x, y, (err, data) => {
      expect(data).toBe(expected);
      done();
    });
  });

  test("addCallback is called", done => {
    expect.assertions(1);
    useCallback(x, y, () => {
      expect(addCallback).toBeCalledTimes(1);
      done();
    });
  });
});
