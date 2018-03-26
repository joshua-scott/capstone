import slugify from 'slugify'

function slug (str) {
  return slugify(str, {
    lower: true,
    remove: /[$*_+~.()'"!\-:@]/g
  })
}

export default slug
