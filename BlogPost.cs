using System.Collections.Generic;

public class BlogPost
{
    public BlogPost(string title)
    {
        Title = title;
    }

    public int Id { get; set; }
    public string Title { get; set; }
    public string Text { get; set; }

    public IList<BlogComment> Comments { get; set; }
}