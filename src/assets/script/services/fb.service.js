class FbService {
    constructor(url) {
        this.url = url
    }

    async savePost(post) {
        try {
            const request = new Request(this.url + 'posts.json', {
                method: 'POST',
                body: JSON.stringify(post)
            })
    
            await fetch(request)
        } catch(e) {
            console.error(e);
        }
        
    }

    async getPosts() {
        try {
            const request =new Request(this.url + 'posts.json', {
                method: 'GET'
            })

            const response = await fetch(request)
            return await response.json()
        } catch(e) {
            console.error(e);
        }
    }

    async getPostById(postId) {
        try {
            const request =new Request(this.url + `posts/${postId}.json`, {
                method: 'GET'
            })

            const response = await fetch(request)
            return await response.json()
        } catch(e) {
            console.error(e);
        }
    }
}

export const fbService = new FbService('https://aktm-js-blog-default-rtdb.firebaseio.com/')