import { Injectable } from '@nestjs/common';

interface hello {
  success: boolean,
  message: string,
}

@Injectable()
export class AppService {
  getHello(): hello {
    return {success: true, message: 'Hello World!'};
  }
}
