// LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

// AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts




// Post Search by query

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName


// Example

// PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding



const AllPosts = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json();
    const posts = data.posts;
    console.log(posts)
    displayData(posts)
}



const displayData = (posts) => {
    const authorImage = document.getElementById('author-image');
    authorImage.innerHTML = `
        <img
      src="/images/joinforum.png" />
    `
    const category = document.getElementById('category');
    category.innerText = posts[5].category;
    const author = document.getElementById('author');
    author.innerText = posts[5].author.name;
    const title = document.getElementById('title');
    title.innerText = posts[5].title;
    const description = document.getElementById('description');
    description.innerText = posts[5].description;
    const commentCount = document.getElementById('comment-count');
    commentCount.innerText = posts[5].comment_count;
    const viewCount = document.getElementById('view-count');
    viewCount.innerText = posts[5].view_count;
    const postedTime = document.getElementById('posted-time');
    postedTime.innerText = posts[5].posted_time;
    isActiveCheck(posts[5].isActive)

}


const isActiveCheck = (isActive) => {
    if(isActive === true){
        const isActiveDot = document.getElementById('isActiveDot');
        isActiveDot.classList = ` h-4 w-4 rounded-full bg-[#10B981FF]`
        console.log(isActive)
    }else{
       const isActiveDot = document.getElementById('isActiveDot');
        isActiveDot.classList = ` h-4 w-4 rounded-full bg-[#FF3434]`
        console.log(isActive) 
    }
}


const handleEnvelopeButton = document.getElementById('envelop');
handleEnvelopeButton.addEventListener("click", function(){
    const markAsRead = document.getElementById('mark-as-read');
    markAsRead.innerHTML = `
        <div class="flex gap-3 bg-white p-2 items-center my-4 rounded-lg">
              <p class="max-w-64">10 Kids Unaware of Their Funny Costume</p>
              <p><i class="fa-regular fa-eye cursor-pointer"></i> 1,568</p>
            </div>
    `
})

AllPosts()


