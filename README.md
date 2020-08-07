# Graphql Fragment to JSON

Convert a graphql fragment to json object

## Install

```bash
npm install graphql-fragment-to-json

# OR

yarn add graphql-fragment-to-json
```

## Quick start

```js
import graphqlFragmentToJson from "graphql-fragment-to-json";
import gql from "graphql-tag";

const UserFragment = gql`
  fragment UserFragment on User {
    username
    first_name
    last_name
    addressInformation {
      address
      postal_code {
        id
        postal_code
        city
      }
    }
  }
`;

console.log(graphqlFragmentToJson({
  fragmentName: "UserFragment",
  definitions: UserFragment.definitions
}));
/* output
  username: undefined
  first_name: undefined
  last_name: undefined
  addressInformation:
    address: undefined
    postal_code:
      id: undefined
      postal_code: undefined
      city: undefined
*/

// You can choose a default value other than undefined like this
console.log(graphqlFragmentToJson({
  fragmentName: "UserFragment",
  definitions: UserFragment.definitions,
  defaultValue: ""
}));
/* output
  username: ""
  first_name: ""
  last_name: ""
  addressInformation:
    address: ""
    postal_code:
      id: ""
      postal_code: ""
      city: ""
*/
```

## Contributing

## Commits

This project use [Commitizen](http://commitizen.github.io/cz-cli/), to commit to the project you can run the command :

```shell
yarn commit
```

## Install and run

### With docker (recommended)

#### Install in local env

```bash
yarn && yarn c42 install
```

#### Run tests

```bash
yarn c42 node:test
```

### Without docker

require node 12 (node 10 is probably compatible)

#### Install in local env

```bash
yarn

# or

npm install
```

#### Run tests

```bash
yarn test

# or

npm run test
```
