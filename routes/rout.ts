import { Router } from 'express';


const router = Router();

//rendering page section

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.get('/s', (req, res) => {
  res.send('Helsssssssslo, world!');
});



export default router;