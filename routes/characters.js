import express from 'express';
import routes from '@controllers/characters';

const router = express.Router();

router.get('/', (req, res) => { res.json(routes.getCharacters); });
router.get('/:id', (req, res) => { res.json(routes.getOneCharacter(req)); });

module.exports = router;
