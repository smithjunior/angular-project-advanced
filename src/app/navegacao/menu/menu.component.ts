import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'sobre',
      exact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'produtos',
      exact: false,
      admin: false
    },
    {
      link: '/admin',
      name: 'admin',
      exact: false,
      admin: true
    },
    {
      link: '/filmes',
      name: 'filmes',
      exact: false,
      admin: false
    },
    {
      link: '/bar',
      name: 'bar',
      exact: false,
      admin: false
    },
    {
      link: '/todo',
      name: 'todo',
      exact: false,
      admin: false
    }
  ]
}

interface Nav{
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}
