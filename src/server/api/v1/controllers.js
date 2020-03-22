/**
 * @swagger
 *
 * /api/v1:
 *   get:
 *     description: Welcome API Version 1
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: welcome
 *         schema:
 *           type: object
 *           properties:
 *             messages:
 *               type: string
 *               description: An array of messages
 *           example:
 *             messages: ['Welcome to COVID-19 API Version 1']
 *
*/
export const welcome = (req, res) => {
  res
    .status(200)
    .json({
      messages: [req.t('responses.messages.api.v1.welcome')]
    })
}
