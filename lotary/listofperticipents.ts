import { Router } from 'express';
import { Lotary } from '../modles/lotary';

const listofperticipents = Router();

// Fetch data from MongoDB
listofperticipents.get('/listofperticipents', async (req, res) => {
  try {
    const list = await Lotary.find(); // Fetch all 
    res.status(200).json(list); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default listofperticipents;
