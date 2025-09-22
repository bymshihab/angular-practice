import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReuseableButtonComponent } from "./components/reusable-components/reuseable-button/reuseable-button.component";
import { PostComponent } from "./components/post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReuseableButtonComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-app';
  buttonText: string = 'Save Data';
  buttonColor: string = 'red';
  generalService: any;


  saveData() {
    console.log('Data Saved');
  }

  fetchData() {
    console.log('Data Fetched');
  }

  getPosts() {
    console.log('Get Posts');
  }
}
