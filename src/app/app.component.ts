import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
</div>`
// <--[(ngModel)] binds the hero.name property to the textbox.
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
}

export class Hero {
  id: number;
  name: string;
}  // hero is converted to a class because it need more propertoes


