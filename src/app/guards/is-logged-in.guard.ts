import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem("token");
  if(token != null ) {
    let router = inject(Router);
    router.navigateByUrl("/books/list");
    return false;
  }
  return true;
};
