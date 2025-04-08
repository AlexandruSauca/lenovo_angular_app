let hi: string = 'Hello, TypeScript!';
console.log(hi);


// Enums
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  BadRequest = 400,
}
let nf: StatusCodes = StatusCodes.NotFound;

const recipeNames: string[] = [];