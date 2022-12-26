import {Component, OnInit} from '@angular/core';
import {Person} from 'src/app/model/person.model';
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: Person = new Person("", "", "");

  constructor(public personService: PersonService) {
    this.personService.findAll().subscribe(data => {
      this.person = data
    })
  }

  ngOnInit(): void {
    /*this.personService.findAll().subscribe(data => {
      this.person = data
    })*/
  }


}
