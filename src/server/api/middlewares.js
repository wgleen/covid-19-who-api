export const notFound = (_, res) => {
  res
    .status(404)
    .json({
      messages: ['Not Found']
    })
}
