class Comment {
    constructor(
      comment_content,
      comment_likes,
      commentedOn,
      post_id,
      post_content,
      post_likes,
      postedOn,
      title,
      userprofile_id,
      about,
      createdOn,
      gender,
      languages,
      profile_pic_url
    ) {
      this.comment_content = comment_content;
      this.comment_likes = comment_likes;
      this.commentedOn = commentedOn;
      this.post = {
        post_id: post_id,
        post_content: post_content,
        post_likes: post_likes,
        postedOn: postedOn,
        title: title,
        userProfile: {
          userprofile_id: userprofile_id,
          about: about,
          createdOn: createdOn,
          gender: gender,
          languages: languages,
          profile_pic_url: profile_pic_url,
        },
      };
  
      this.userProfile = {
        userprofile_id: userprofile_id,
        about: about,
        createdOn: createdOn,
        gender: gender,
        languages: languages,
        profile_pic_url: profile_pic_url,
      };
    }
  }
  
  export default Comment;