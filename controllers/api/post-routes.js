const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
// POST - NEW POST
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT - UPDATE
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE - 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
        userId: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
      res.redirect('/dashboard');
      console.log("deleted post successfully: I am in Post-routes.js");
    } else {
      res.status(404).end();
      console.log("There's an issue deleting the post: I am in Post-routes.js");
    }
  } catch (err) {
    res.status(500).json(err);
    console.log("There's an 500 error issue deleting the post: I am in Post-routes.js");
  }
});

module.exports = router;
