import Router from "express";

const router = Router();

router.get('/user', (req, res) => {
    res.send('test!')
    console.log("hi")
})
export default router;