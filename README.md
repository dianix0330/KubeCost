# Kubecost Fontend Project
This project is designed to assess your current abilities as a frontend engineer and to guide discussion during a technical interview. The instructions are intentionally vague because we want to see what you build for a simple app. In order to keep you from going too deep with architecture or UI, we recommend time boxing this exercise to 2-4 hours and adding notes on anything else you would have done with more time.

Please create a GitHub repository and share it with teevans and nealormsbee once completed.

## Instructions:

Using this sample backend, we want you to build a React app that starts on a screen of posts where each post has the title and body visible. A boring microblog clone a la Mastodon. 
You can use this API to pull posts https://jsonplaceholder.typicode.com/posts. 
Clicking on a post should show a new screen that is like a detail screen for that post.
It can include comments for that post from this route https://jsonplaceholder.typicode.com/posts/1/comments. 
Also include a way to view more posts by the same author somewhere on the screen. 
Clicking in can take you to a new screen similar to the first screen but only for the selected author. 
These screens can be nested as much as you want. For example, click on a post, click on more posts by that author, click on a post, etc.

If you need imagery anywhere you can use this endpoint https://source.unsplash.com/random/900x900?architecture-interior (the size URI segment and query string is configurable).

## Things we're looking for:
- Code well separated into reusable components. You can use any architectural pattern you want as long as you can explain it to us. Don't feel the need to over-architect this, it's a simple app, but your code should be clean and maintainable.
- An understanding of when to use a library or dependency versus building something yourself. Using dependencies is fine as long as you can speak to why it was the right choice.
- Use of modern Javascript and React patterns.
- Keep in mind we're assessing your technical skill level in HTML, CSS, and JavaScript.