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

    if (!hasSubSelections) {
      return;
    }

    const isSubFragment = selections?.[0]?.kind === "FragmentSpread";

    if (isSubFragment) {
      _set(
        finalObject,
        completeFieldName,
        convertSubFragment({
          selections,
          definitions,
          defaultValue
        })
      );
      return;
    }

    finalObject = addSubSelection({
      namespace: completeFieldName,
      selection,
      defaultValue,
      finalObject,
      definitions
    });
  });

  return finalObject;
};

const convertSubFragment = ({ selections, definitions, defaultValue }) => {
  const subFragmentName = selections[0].name.value;
  const subSelections = getFragmentSelectionsByFragmentName(
    subFragmentName,
    definitions
  );

  if (!subSelections) {
    return;
  }

  return convertSelectionsToObject({
    selections: subSelections,
    definitions,
    defaultValue
  });
};

const addSubSelection = ({
  namespace,
  selection,
  defaultValue,
  finalObject,
  definitions
}) => {
  const subSelections = selection.selectionSet.selections;
  return convertSelectionsToObject({
    selections: subSelections,
    defaultValue,
    finalObject,
    namespace,
    definitions
  });
};

const getFragmentSelectionsByFragmentName = (name, definitions) =>
  getFragmentSelections(getFragmentByName(name, definitions));

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

  const selections = getFragmentSelectionsByFragmentName(
    fragmentName,
    definitions
  );

  if (!selections) {
    return null;
  }

  return convertSelectionsToObject({ selections, defaultValue, definitions });
};
