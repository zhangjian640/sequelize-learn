const { User, Blog } = require('./model')
// 创建
!(async function () {
  const delBlogRes = await Blog.destroy(
    {
      where: {
        id: 4
      }
    }
  )

  console.log('delBlogRes:', delBlogRes)

  const delUser = await User.destroy({
    where: {
      id: 1
    }
  })
  console.log('delUser:', delUser)
})()
