export const defaultStroke = (className: string): string =>
  new RegExp("stroke-*", "g").test(className) ? "" : "stroke-2 stroke-skin-dark"
