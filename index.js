var recipes = {key: "value"}

function updateObjectWithKeyAndValue(recipes, keys, value) {
  return Object.assign({}, recipes, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.key
  return recipe
}
