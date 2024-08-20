export const ClassNamespace = 'l'
export const ClassCommonSeparator = '-'
export const ClassStatePrefix = 'is-'
export const joinClassName = (...list: string[]) => {
  return [ClassNamespace, ...list].join(ClassCommonSeparator)
}
