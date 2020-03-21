export const notFound = (req, res) => {
  console.log('res.locals', res.locals)

  res
    .status(404)
    .json({
      messages: [req.t('responses.messages.notFound')]
    })
}
