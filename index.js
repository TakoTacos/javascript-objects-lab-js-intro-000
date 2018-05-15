var recipes = {key: "value"}

function updateObjectWithKeyAndValue(recipes, keys, value) {
  return Object.assign({}, recipes, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign({}, recipes, {key});
  delete newObj.key;

  return recipes
}
