export class PostModel {

  userId: number;
  id:  number;
  title: string;
  body: string;

  post : any;


  public setIdPost (idData){
    this.id = idData;
  };

  public getPostId (){
    return this.id;
  };

  public setUserId (idUser){
      this.userId = idUser;
  }

  public getUserId(){
    return this.userId;
  }

  public setTitle(title){
    this.title = title;
  }

  public getTitle(){
   return this.title;
  }

  public setBody(body){
    this.body = body;
  }

  public getBody(){
    return this.body;
  }

  public setPost(objectPost){
    this.post = objectPost;
  }

  public getPost(){
    return this.post;
  }

}
