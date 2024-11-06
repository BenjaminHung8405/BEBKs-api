/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
const createNew = async (req, res ,next) => {
  try {
    console.log('req.body: ',req.body)
    res.status(201).json({ message: 'POST from Controller: API create new board.' })
  } catch (error) {
    console.log(error)
        res.status(500).json({
            errors: error.message
        })
  }
}

export const boardController = {
    createNew
}