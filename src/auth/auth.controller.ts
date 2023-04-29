import { Controller } from '@nestjs/common';
import { Authservice } from './auth.service';
@Controller()
export class AuthController {
  constructor(private authService: Authservice) {
    this.authService.test();
  }
}
