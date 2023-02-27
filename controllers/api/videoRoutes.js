const router = require('express').Router();
const {Video} = require('../../models/Video');
const {Post} = require('../../models/Post');
const withAuth = require('../../utils/auth');

// EXTRACT VIDEO - from end-user post - automatic
// Given a recent post's URL field is true
// Then extract URL and place it in the video page
// proceed to update the video list
// then add to top of the list
router.get('/', async (req, res) => {
    const recentPost = await Post.finAll ({
        include: [
            {
                model: Post,
                attributes: ['url_link'],
            },
        ],
    });
    console.log(recentPost);

    const thePost = postData.map((post) => thePost.get({plain: true}));  // Remove garbage from serialized object
    console.log(thePost);

    res.render('videos', {
        thePost: thePost,
        //login not required
    });
});

// POST VIDEO by end user - NOT automatic
router.post('/video', withAuth, async (req, res) => {
  try {
    const newVideo = await Video.create({
      ...req.body,
      user_id: req.session.post_id,
    });

    res.status(200).json(newVideo);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE VIDEO
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const videoData = await Video.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.post_id,
      },
    });

    if (!videoData) {
      res.status(404).json({message: 'No video found with this id!'});
      return;
    }

    res.status(200).json(videoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
