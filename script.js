// LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

// AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts




// Post Search by query

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName


// Example

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding



fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
.then(res => res.json())
.then(data => console.log(data))


data.forEach(element => {
    
});