import { autoinject } from 'aurelia-framework'
import { AuthService } from 'services/firebase/auth'
import { Router } from 'aurelia-router'

@autoinject
export class Top {
  constructor(private router: Router, private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut()
    this.router.navigateToRoute('sign-in')
  }
}
