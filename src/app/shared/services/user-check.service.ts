import {Injectable} from "@angular/core";

@Injectable()

export class UserCheckService {

  public checkUserByEmail(email: string, userList: any[]): boolean {
    return userList.some((user) => user['email'] === email)
  }

}
