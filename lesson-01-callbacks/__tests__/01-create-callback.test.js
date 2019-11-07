import { addCallback } from "../01-create-callback";

describe("lesson-01/01-create-callback", () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const total = x + y;

  test("addCallback returns undefined", done => {
    expect.assertions(1);
    const actual = addCallback(x, y, () => {});
    expect(actual).toBeUndefined();
    done();
  });

  test("addCallback error is null", done => {
    expect.assertions(1);
    addCallback(x, y, err => {
      expect(err).toBeNull();
      done();
    });
  });

  test("addCallback data returns value", done => {
    expect.assertions(1);
    const expected = total;
    addCallback(x, y, (_, data) => {
      expect(data).toBe(expected);
      done();
    });
  });
});
