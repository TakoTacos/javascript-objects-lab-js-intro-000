var recipes = {key: "value"}

function updateObjectWithKeyAndValue(recipes, keys, value) {
  return Object.assign({}, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes
}
