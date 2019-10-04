import { autoinject } from 'aurelia-framework'
import { AuthService } from 'services/firebase/auth'
import { NavigationInstruction, Next, Redirect, NextCompletionResult } from 'aurelia-router'
import { getLogger } from 'aurelia-logging'

@autoinject
export class AuthorizeStep {
  private readonly logger = getLogger(AuthService.name)

  constructor(private auth: AuthService) {}

  run(instruction: NavigationInstruction, next: Next): Promise<void | NextCompletionResult<any>> {
    this.logger.debug('Current User:', this.auth.auth.currentUser, instruction.fragment)

    if (this.auth.auth.currentUser === null && instruction.fragment !== '/sign-in') {
      return next.cancel(new Redirect('sign-in'))
    }

    return next()
  }
}
