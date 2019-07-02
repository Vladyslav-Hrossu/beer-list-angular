export class AuthService {

  private isAuthorized: boolean = false;

  login(): void {
    this.isAuthorized = true;
  }

  logout(): void {
    this.isAuthorized = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthorized;
  }
  
}
