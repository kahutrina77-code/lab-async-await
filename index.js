// Function to display posts
function displayPosts(posts) {
    // Get the ul element
    const postList = document.getElementById('post-list');
    
    // Loop through the posts list
    posts.forEach(post => {
        // Create a li tag
        const li = document.createElement('li');
        
        // Create a new h1 tag
        const h1 = document.createElement('h1');
        // Add the title as the textContent
        h1.textContent = post.title;
        
        // Create a new p tag
        const p = document.createElement('p');
        // Add the body as the textContent
        p.textContent = post.body;
        
        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);
        
        // Append li to the ul
        postList.appendChild(li);
    });
}

// Create async function to house fetch
async function fetchPosts() {
    try {
        // Apply await to fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Call displayPosts() function after fetch
        displayPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the async function
fetchPosts();
