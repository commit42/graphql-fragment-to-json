import graphqlFragmentToJson from "./index";
import fragments from "./fragments.fixture";

describe("graphqlFragmentToJson", () => {
  test("return null if not a fragment", () => {
    expect(graphqlFragmentToJson("not a fragment")).toBe(null);
  });

  test("convert simple fragment", () => {
    const simpleFragment = fragments.definitions[0];
    expect(graphqlFragmentToJson(simpleFragment)).toEqual({
      name: undefined,
      area_map: undefined
    });
  });

  test("convert simple fragment with personnal default value", () => {
    const simpleFragment = fragments.definitions[0];
    expect(graphqlFragmentToJson(simpleFragment, "")).toEqual({
      name: "",
      area_map: ""
    });
  });

  test("convert complex fragment with recursion", () => {
    const complexFragment = fragments.definitions[1];
    expect(graphqlFragmentToJson(complexFragment)).toEqual({
      name: undefined,
      addressInformation: {
        address: undefined,
        phone: undefined,
        email: undefined,
        postal_code: {
          id: undefined,
          postal_code: undefined,
          city: undefined
        }
      }
    });
  });
});
