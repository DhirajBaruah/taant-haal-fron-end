import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    /***
     * 
     * 
    Side nav animation
    *
    *
    ***/
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'translateX(50px)',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(0px)',
          opacity: 1,
        })
      ),
      transition('open => closed', [animate('0.8s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),

    /***
     * 
     * 
    Hamburger animation
    *
    *
    ***/
    trigger('hamburger-line1', [
      state(
        'open',
        style({
          transform: 'rotate(-45deg) translate(-5px,6px)',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),

    trigger('hamburger-line2', [
      state(
        'closed',
        style({
          opacity: 1,
        })
      ),
      state(
        'open',
        style({
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),

    trigger('hamburger-line3', [
      state(
        'open',
        style({
          transform: 'rotate(45deg) translate(-5px,-6px)',
        })
      ),
      transition('open => closed', [animate('0.8s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],

  /***
     * 
     * 
    Side nav animation with staggered
    *
    *
    ***/
  // animations:[
  //   trigger('openClose',[
  //     transition('* => *',[
  //       query('open', style({opacity:0, transform:'translateX(50px)'}),{optional:true}),
  //       query('closed', stagger('0.5s',[
  //         animate('1s ease-in', keyframes([
  //           style({opacity:0, transform:'translateX(50px)'}),
  //           style({opacity:1, transform:'translateX(0px)'}),
  //         ]))
  //       ]),{optional:true})
  //     ])
  //   ])
  // ]
})


export class MenuComponent implements OnInit {
  sideMenuToggle: boolean = false;

  menuLinks: any = [
    { name: 'About' },
    { name: 'Profile' },
    { name: 'My Stock' },
    { name: 'Wishlist' },
    { name: 'Logout' },
    { name: 'Login' },
    { name: 'Signup' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onclickBurger() {             // Menu toggle bool
    this.sideMenuToggle = !this.sideMenuToggle;
    console.log(this.menuLinks.length);
  }
}
