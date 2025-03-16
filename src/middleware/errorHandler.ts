import { Request, Response } from 'express'


const errorHandler = (err: Error, _req: Request, res: Response,) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
}

export default errorHandler
