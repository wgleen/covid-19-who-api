export const notFound = (req, res) => {
  res
    .status(404)
    .json({
      messages: [req.t('responses.messages.notFound')]
    })
}
