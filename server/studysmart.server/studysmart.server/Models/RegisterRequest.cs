namespace studysmart.server.Models;

public class RegisterRequest
{
    public string Username { get; set; } = default!;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}