import {Injectable} from "@angular/core";

@Injectable()

export class UserCheckService {

  public checkUserByEmail(email: string, userList: any[]): any {
    const user = userList.filter((user) => user['email'] === email);
    return  user[0];
  }
}
