export default function deleteIfFound(
  array: any[],
  predicate: Parameters<Array<any>['findIndex']>[0]
) {
  const elementIndex = array.findIndex(predicate);

  if (elementIndex === -1) return false;

  array.splice(elementIndex, 1);
  return true;
}
