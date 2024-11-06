/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from 'express'
import { boardValidation } from '~/validations/boardValidation'
import { boardController } from '~/controllers/boardController'

const Router = express.Router()

Router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: 'Note: API get list boards.' })
    })
    .post(boardValidation.createNew, boardController.createNew)

export const boardRouter = Router