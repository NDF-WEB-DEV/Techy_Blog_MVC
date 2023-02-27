const router = require('express').Router();
const {User, Post, Video} = require('../models');
const withAuth = require('../utils/auth');
const handleBar = require("../views/homepage.handlebars")

// given a user lands on our page
// HOME PAGE ROUTE - user lands here
router.get('/', async (req, res) => {
  try {  // try looking for latest post

    // technews();


    // this is where we are going to do postdata
    res.render('homepage'); // render a page and send post data
  } catch (err) {
    res.status(500).json(err);  
  }
});
// general resource route here user lands here
router.get('/generalresource', (req, res) => {
  res.render('generalresource')
})

// discussion handlebars route here user lands here
router.get('/discussion', async (req, res) => {
  try {  
    res.render('discussion'); 
  } catch (err) {
    res.status(500).json(err);  
  }
});


// GIVEN a user clicks and is not loged-in, 
// THEN they are redirected to the login page.
// DISCUSSION-POSTS redirect
// Prevent non-logged users from viewing discussion post page
router.get('/postRoutes', withAuth, async (req, res) => {
    try { 
      const users = userData.map((project) => project.get({plain: true}));
      res.render('discussion-posts', {
        users,
        logged_in: req.session.logged_in,   // Pass the logged in flag to the template
      });
    } catch (err) {
      res.status(401).json(err);  //Unauthorized error specifically for use when authentication is required
    }
  });

//If a session exits
//redirect the request to the Discussion Post Page
router.get('/api/users/signup', (req, res) => {
    // If a session exists, redirect the request to the Discussion Post Page
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
    res.render('signup');
  });
  router.get('/profile', (req, res) => {
    // If a session exists, redirect the request to the Discussion Post Page
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
    res.render('profile');
  });

  // const technews = async() => {
  //   let techarray = []
  //   let newtechnews = new Object();          
  //          await fetch('https://hacker-news.firebaseio.com/v0/beststories/.json?print=pretty', {
  //           method: 'GET', //GET is the default.
  //            // include, *same-origin, omit
  //           redirect: 'follow', // manual, *follow, error
  //         })
  //           .then((response) => response.json())
            
  //           .then(function (data) {
  //             for(i = 0; i < 5; i++) {
  //               let id = data[i];
  //               fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
  //                 method: 'GET', //GET is the default.
  //                  // include, *same-origin, omit
  //                 redirect: 'follow', // manual, *follow, error
  //               })
  //                 .then((response) => response.json())
  //                 .then(function (data) {
                    
  //                   // let head = data['title'];
  //                   // let author = data['by'];
  //                   // let datapoint = data['url'];
  //                   // newtechnews = {head,author,datapoint};
  //                   newtechnews.head = data.title;
  //                   newtechnews.author = data.by;
  //                   newtechnews.datapoint = data.url;
  //                   Object.create(newtechnews);
  //               techarray.push(newtechnews);
                
  //             })
  //       }})
  //     }
     
module.exports = router;
