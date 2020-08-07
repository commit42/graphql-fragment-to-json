import graphqlFragmentToJson from "./index";
import fragments from "./fragments.fixture";

describe("graphqlFragmentToJson", () => {
  test("return null if not a fragment", () => {
    expect(graphqlFragmentToJson("not a fragment")).toBe(null);
  });

  test("convert simple fragment", () => {
    expect(
      graphqlFragmentToJson({
        fragmentName: "Simple",
        definitions: fragments.definitions
      })
    ).toEqual({
      name: undefined,
      area_map: undefined
    });
  });

  test("convert simple fragment with personnal default value", () => {
    const simpleFragment = fragments.definitions[0];
    expect(
      graphqlFragmentToJson({
        fragmentName: "Simple",
        definitions: fragments.definitions,
        defaultValue: ""
      })
    ).toEqual({
      name: "",
      area_map: ""
    });
  });

  test("convert complex fragment with recursion", () => {
    expect(
      graphqlFragmentToJson({
        fragmentName: "Complex",
        definitions: fragments.definitions,
        defaultValue: ""
      })
    ).toEqual({
      name: "",
      addressInformation: {
        address: "",
        phone: "",
        email: "",
        postal_code: {
          id: "",
          postal_code: "",
          city: ""
        }
      }
    });
  });

  test("convert fragment with sub fragment", () => {
    expect(
      graphqlFragmentToJson({
        fragmentName: "WithSubFragment",
        definitions: fragments.definitions,
        defaultValue: ""
      })
    ).toEqual({
      name: "",
      sub: {
        name: "",
        area_map: ""
      }
    });
  });
});
