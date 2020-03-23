const IMAGE_KEY_REGEXP = /\/(.*)\.svg$/
const req = require.context('../assets/images', true, /^(.*\.svg$)[^.]*$/)

export default req.keys().reduce((acc, fileRef) => {
  const file = req(fileRef)
  const key = fileRef.match(IMAGE_KEY_REGEXP)[1]
  acc[key] = file.default

  return acc
}, {})
