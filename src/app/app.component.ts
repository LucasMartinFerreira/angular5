import { Component } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular 5';
  public isLoadingActive : boolean;

  loadingVisibilityChange: Subject<boolean> = new Subject<boolean>();



  constructor(){
    this.loadingVisibilityChange.subscribe((value) => {
      this.isLoadingActive = value
    });
  }

  /**
   * @description Lanza o detiene el spinner en una petición
   */
  public isSpinnerRunning(){
    this.loadingVisibilityChange.next(this.isLoadingActive);
  }

}
