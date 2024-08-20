"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ClassNamespace = "l";
const ClassCommonSeparator = "-";
const joinClassName = (...list) => {
  return [ClassNamespace, ...list].join(ClassCommonSeparator);
};
exports.ClassCommonSeparator = ClassCommonSeparator;
exports.ClassNamespace = ClassNamespace;
exports.joinClassName = joinClassName;
