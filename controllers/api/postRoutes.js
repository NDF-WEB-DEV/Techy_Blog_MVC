const router = require('express').Router();
const {Post} = require('../../models/index');
const withAuth = require('../../utils/auth');

// Create a new Blog Post
router.post('/discussion', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newPost = await Post.create({     // new postBlog object
      username: req.body.username,
      postdate: req.body.postdate,  // <-- we need to write a function on js file to insert the auto date
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id        // require user ID to post on blog
    });
    console.log(req.body);
    res.status(200).json(newPost);          // successful post
  } catch (err) {
    res.status(400).json(err);
  }
});

//Sending the data to the model and view
router.put('/:id', async (req, res) => {  //makes promise
  try {
    const post = await Post.update (  // Wait until result is resolved to post
      {
        title: req.body.title,        // Creating object of Blog Post
        postdate: req.body.postdate,
        content: req.body.postdate,
        username: req.body.username,
      },
      {
        where: {                      // Where there's a required ID
          id: req.params.id,
        },
      }
    );  
    req.status(200).json(post);  
  } catch (error) {
    res.status(500).json(500);
  }
});

// Delete route
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({  // Destroy becasue deleting
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     console.log(req);
//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;