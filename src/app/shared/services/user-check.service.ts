import {Injectable} from "@angular/core";
import {User} from "../models/user.model";

@Injectable()

export class UserCheckService {

  public checkUserByEmail(email: string, userList: User[]): User {
    const user: User[] = userList.filter((user: User) => user['email'] === email);
    return  user[0];
  }
}
