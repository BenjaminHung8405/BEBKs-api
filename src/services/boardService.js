/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { boardModel } from "~/models/boardModel"
import { slugify } from "~/utils/formatters"
const createNew = async (reqBody) => {
  try {
    const newBoard = {
        ...reqBody,
        slug: slugify(reqBody.title)
    }

    const createdBoard = await boardModel.createNew(newBoard)
    console.log(createdBoard)

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    console.log(getNewBoard)

    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
    createNew
}