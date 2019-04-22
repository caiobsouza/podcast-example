const { Router } = require('express');
const spotifyService = require('../services/spotify-service');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const podcasts = await spotifyService.getShows('2RpKnppT6GQLUsGyeOkcY4');
    res.json(podcasts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;