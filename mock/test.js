export default [
  {
    url: '/api/user',
    method: 'get',
    response: req => {
      return {
        code: 0,
        data: [
          { name: 'tom' },
          { name: 'jerry' }
        ]
      }
    }
  }
]