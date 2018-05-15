var recipe = {key: value}

function updateObjectWithKeyAndValue(recipe, key, value) {
  return Object.assign({}, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  recipe[key] = value;
  return recipe
}
