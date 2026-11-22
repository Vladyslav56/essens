import products from '../data/products.json'

export function findProducts(answers) {
  // Try to find products that match all the user's answers
  let matched = products.filter(
    (product) =>
      product.gender === answers.gender &&
      product.type === answers.type &&
      product.occasion === answers.occasion &&
      product.intensity === answers.intensity,
  )

  // Try to find products that match at least one of the user's answers if no exact matches were found
  if (matched.length === 0) {
    matched = products.filter(
      (product) =>
        product.gender === answers.gender &&
        (product.type === answers.type ||
          product.occasion === answers.occasion),
    )
  }

  // If still no matches, return all products
  if (matched.length === 0) {
    matched = products
  }

  // Return 1 to 3 products
  return matched.slice(0, 3)
}
