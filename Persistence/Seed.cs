using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context) 
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity> 
            {
                new Activity 
                {
                    Title = "Attended a concert",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "I saw an awesome band play",
                    Category = "music",
                    City = "Boston",
                    Venue = "Club"
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}