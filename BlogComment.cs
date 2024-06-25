using System;

public class BlogComment
{
    public int Id { get; set; }
    public string Text { get; set; }

    public BlogComment(string text, DateTime createdDate, string userName)
    {
        Text = text;
        CreatedDate = createdDate;
        UserName = userName;
    }

    public DateTime CreatedDate { get; set; }

    public BlogPost BlogPost { get; set; }
    public int BlogPostId { get; set; }
        
    public string UserName { get; set; }
}