export const welcome = (req, res) => {
  res
    .status(200)
    .json({
      messages: [req.t('responses.messages.api.welcome')]
    })
}
