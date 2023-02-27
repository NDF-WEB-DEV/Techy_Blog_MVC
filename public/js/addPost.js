// This fucntion handles a Blog Post 
const postFormHandler = async  (event)=> {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const postdate = document.querySelector('#postdate').value.trim();
    const content = document.querySelector('#content').value.trim();
    const username = document.querySelector('#username').value.trim();
    // const user_id = document.querySelector('#user_id');
    console.log(title,postdate,content,username);
    const serverResponse =  fetch('/api/posts/discussion', {
        method: 'POST',
        body: JSON.stringify(
        {
            title: title,
            postdate: postdate,
            content: content,
            username: username,
            
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (serverResponse.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add Blog Post');
    }
}

document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);
