namespace studysmart.server.Controllers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using studysmart.server.Services;
using studysmart.server.Models;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IJwtTokenService _jwtService;
    
    public AuthController(
        UserManager<IdentityUser> userManager,
        SignInManager<IdentityUser> signInManager,
        IJwtTokenService jwtService)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _jwtService = jwtService;
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var user = new IdentityUser
        {
            UserName = request.Username, // ✅ Use provided username
            Email = request.Email
        };

        var result = await _userManager.CreateAsync(user, request.Password);

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok("User registered");
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        // 1. Get user by email
        var user = await _userManager.FindByNameAsync(request.Username);
        if (user == null)
            return Unauthorized("Invalid credentials");

        // 2. Use the correct UserName in the login check
        var result = await _signInManager.PasswordSignInAsync(
            user.UserName, request.Password, false, false);

        if (!result.Succeeded)
            return Unauthorized("Invalid credentials");

        // 3. Generate JWT
        var token = _jwtService.CreateToken(user);
        return Ok(new AuthResponse { Token = token });
    }
    
    [HttpGet("all")]
    public IActionResult GetAllUsers()
    {
        var users = _userManager.Users
            .Select(u => new {
                u.Id,
                u.UserName,
                u.Email
            })
            .ToList();

        return Ok(users);
    }
}