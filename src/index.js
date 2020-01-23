import _set from "lodash.set";
import isFragment from "./isFragment";

const DEFAULT_VALUE = undefined;

const convertSelectionsToObject = (
  selections,
  defaultValue,
  finalObject = {},
  namespace = ""
) => {
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

    const hasSubSelections = !!selection?.selectionSet?.selections;

    if (hasSubSelections) {
      const currentNamespace = completeFieldName;
      const subSelections = selection.selectionSet.selections;
      finalObject = convertSelectionsToObject(
        subSelections,
        defaultValue,
        finalObject,
        currentNamespace
      );
    }
  });

  return finalObject;
};

export default (fragment, defaultValue = DEFAULT_VALUE) => {
  if (!isFragment(fragment)) {
    return null;
  }

  const selections = fragment?.selectionSet?.selections;

  if (!selections) {
    return null;
  }

  return convertSelectionsToObject(selections, defaultValue);
};
