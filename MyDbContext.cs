using System.Data.Common;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

public class MyDbContext : DbContext
{
    private static SqliteConnection _connection;
    public DbSet<BlogPost> BlogPosts { get; set; }
    public DbSet<BlogComment> BlogComments { get; set; }

    public MyDbContext(ILoggerFactory loggerFactory) : base(new DbContextOptionsBuilder<MyDbContext>()
        .UseSqlite(CreateInMemoryDatabase())
        .UseLoggerFactory(loggerFactory)
        .Options)
    {
    }

    private static DbConnection CreateInMemoryDatabase()
    {
        _connection = new SqliteConnection("Filename=:memory:");
        _connection.Open();
        return _connection;
    }

    public override void Dispose() => _connection.Dispose();
}