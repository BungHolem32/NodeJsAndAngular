/**
 * Created by ilanv on 19/01/2017.
 */
import {Component} from '@angular/core';
import {TaskService} from "./services/task.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: `templates/app.template.html`,
    providers:[TaskService]
})
export class AppComponent {
    name = 'Angular';
}