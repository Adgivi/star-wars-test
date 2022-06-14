const matchNumericRegex = (
  path: string
): [RegExpMatchArray | null, (s: string) => number] => {
  const regex: RegExp = /\/[0-9]+\//g;
  return [path.match(regex), (s) => Number(s.slice(1, -1))];
};

function getNumericParamFromPath(path: string): number {
  const [match, clean] = matchNumericRegex(path);

  if (!match) {
    throw Error("numeric params in the url not found");
  }
  if (match.length > 1) {
    throw Error("more then one numeric params in the url");
  }

  return clean(match[0]);
}

function findNumericParamFromPath(path: string): number | void {
  const [match, clean] = matchNumericRegex(path);

  if (!match) {
    return;
  }
  if (match.length > 1) {
    return;
  }

  return clean(match[0]);
}

export { getNumericParamFromPath, findNumericParamFromPath };
