import _set from "lodash.set";
import isFragment from "./isFragment";

const DEFAULT_VALUE = undefined;

const convertSelectionsToObject = ({
  selections,
  definitions,
  defaultValue,
  finalObject = {},
  namespace = ""
}) => {
  if (!Array.isArray(selections)) {
    return finalObject;
  }

  selections.forEach(selection => {
    const fieldName = selection?.name?.value;

    if (!fieldName) {
      return false;
    }

    const completeFieldName = namespace.length
      ? `${namespace}.${fieldName}`
      : fieldName;

    _set(finalObject, completeFieldName, defaultValue);
    const selections = getFragmentSelections(selection);
    const hasSubSelections = !!selections;

    if (hasSubSelections) {
      const isSubFragment = selections?.[0]?.kind === "FragmentSpread";

      if (isSubFragment) {
        const fragmentName = selections[0].name.value;
      } else {
        const currentNamespace = completeFieldName;
        const subSelections = selection.selectionSet.selections;
        finalObject = convertSelectionsToObject({
          selections: subSelections,
          defaultValue,
          finalObject,
          namespace: currentNamespace
        });
      }
    }
  });

  return finalObject;
};

const getFragmentByName = (name, definitions) =>
  definitions.find(definition => definition?.name?.value === name);

const getFragmentSelections = fragment => fragment?.selectionSet?.selections;

export default ({
  fragmentName,
  definitions,
  defaultValue = DEFAULT_VALUE
}) => {
  if (!Array.isArray(definitions)) {
    return null;
  }

  const fragment = getFragmentByName(fragmentName, definitions);

  if (!isFragment(fragment)) {
    return null;
  }

  const selections = getFragmentSelections(fragment);

  if (!selections) {
    return null;
  }

  return convertSelectionsToObject({ selections, defaultValue, definitions });
};
