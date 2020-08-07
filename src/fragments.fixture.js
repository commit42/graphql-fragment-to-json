export default {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "Simple"
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "Office"
        }
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "name"
            },
            arguments: [],
            directives: []
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "area_map"
            },
            arguments: [],
            directives: []
          }
        ]
      }
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "Complex"
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "Office"
        }
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "name"
            },
            arguments: [],
            directives: []
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "addressInformation"
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "address"
                  },
                  arguments: [],
                  directives: []
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "phone"
                  },
                  arguments: [],
                  directives: []
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "email"
                  },
                  arguments: [],
                  directives: []
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "postal_code"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "id"
                        },
                        arguments: [],
                        directives: []
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "postal_code"
                        },
                        arguments: [],
                        directives: []
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "city"
                        },
                        arguments: [],
                        directives: []
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: "FragmentDefinition",
      name: {
        kind: "Name",
        value: "WithSubFragment"
      },
      typeCondition: {
        kind: "NamedType",
        name: {
          kind: "Name",
          value: "Office"
        }
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "name"
            },
            arguments: [],
            directives: []
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "sub"
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "Simple"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ],
  loc: {
    start: 0,
    end: 198
  }
};
