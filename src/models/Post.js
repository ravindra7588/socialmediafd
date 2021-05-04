class Post {
    constructor(post_content, post_likes, postedOn, title, userprofile_id, about, createdOn,gender,languages,profile_pic_url) {
        this.post_content = post_content;
      this.post_likes = post_likes;
      this.postedOn = postedOn;
      this.title = title;
      
      this.userProfile = { "userprofile_id": userprofile_id, "about": about, "createdOn": createdOn,"gender":gender,"languages":languages,"profile_pic_url":profile_pic_url};
    }
  }
  
  export default Post;