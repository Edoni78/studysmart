namespace studysmart.server.Services;
using Microsoft.AspNetCore.Identity;

public interface  IJwtTokenService
{
    string CreateToken(IdentityUser user);
}