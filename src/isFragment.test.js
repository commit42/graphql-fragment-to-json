import isFragment from "./isFragment";
import fragments from "./fragments.fixture";

describe("isFragment", () => {
  test("fragment is a fragment", () => {
    expect(isFragment(fragments.definitions[0])).toBe(true);
  });

  test("string is not a fragment", () => {
    expect(isFragment("not a fragment")).toBe(false);
  });

  test("object without FragmentDefinition is not a fragment", () => {
    expect(isFragment({ name: "not a fragment" })).toBe(false);
  });
});
