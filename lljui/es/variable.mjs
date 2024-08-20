const ClassNamespace = "l";
const ClassCommonSeparator = "-";
const joinClassName = (...list) => {
  return [ClassNamespace, ...list].join(ClassCommonSeparator);
};
export {
  ClassCommonSeparator,
  ClassNamespace,
  joinClassName
};
