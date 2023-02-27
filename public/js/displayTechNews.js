const newsbutton = document.getElementById('newnews');
const technewsdis = document.getElementById("technewscontent");

const technews = async() => {

    let newtechnews = new Object();          
           await fetch('https://hacker-news.firebaseio.com/v0/beststories/.json?print=pretty', {
            method: 'GET', //GET is the default.
             // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
          })
            .then((response) => response.json())
            
            .then(function (data) {
              for(i = 0; i < 10; i++) {
                let id = data[i];
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
                  method: 'GET', //GET is the default.
                   // include, *same-origin, omit
                  redirect: 'follow', // manual, *follow, error
                })
                  .then((response) => response.json())
                  .then(function (data) {
                    
                    // let head = data['title'];
                    // let author = data['by'];
                    // let datapoint = data['url'];
                    // newtechnews = {head,author,datapoint};
                    newtechnews.head = data.title;
                    newtechnews.author = data.by;
                    newtechnews.datapoint = data.url;
                    var node = document.createElement('ul');
                    var nodelink = document.createElement('a');
                  
                    var textnode = document.createTextNode(newtechnews.head);
                    var nodelinktext = document.createTextNode( 'url');
                    nodelink.href = newtechnews.datapoint;
                    
                    
                    
                    
                    node.appendChild(textnode);
                    nodelink.append(nodelinktext);
                 
                  
                
                      
                  
                // Set the title.
                   
                  
                // Set the href property.
                
                    // var textnode2 = document.createTextNode(newtechnews.author);
                    // node2.appendChild(textnode2);
                    // node.appendChild(node2);
                    
                    // var textnode3 = document.createTextNode(newtechnews.url);
                    // node3.appendChild(textnode3);
                    // node.appendChild(node3);
                    
                    technewsdis.appendChild(node);
                    technewsdis.appendChild(nodelink);
                    
                
              })
        }})
   
}
newsbutton.addEventListener('click', technews);

