import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'simple-data-grid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  columns: TableColumn[] = [];
  data: any[];

  title = 'simple-data-grid-demo';

  ngOnInit() {

    this.columns = [
      {
        userName: 'Name', sysName: 'name', isSort: true, isView: true, type: 'string',
        filter: {type: 'string', on: true, value: ''}
      },
      {
        userName: 'Type', sysName: 'type', isSort: true, isView: true, type: 'string',
        filter: {type: 'string', on: true, value: ''}
      },
      {
        userName: 'Active', sysName: 'active', isSort: true, isView: true, type: 'boolean',
        filter: {type: 'boolean', on: true, value: ''}
      },
      {
        userName: 'Version', sysName: 'version', isSort: true, isView: true, type: 'number',
        filter: {type: 'string', on: true, value: ''}
      }
    ];

    this.data = [
      {
        id: '1', name: 'Name 1', type: '1', active: true, version: '0'
      },
      {
        id: '2', name: 'Name 2', type: '2', active: false, version: '1'
      },
      {
        id: '3', name: 'Name 3', type: '2', active: true, version: '1'
      },
      {
        id: '4', name: 'Name 4', type: '2', active: false, version: '2'
      },
      {
        id: '5', name: 'Name 5', type: '2', active: false, version: '1'
      },
      {
        id: '6', name: 'Name 6', type: '2', active: true, version: '1'
      },
      {
        id: '7', name: 'Name 7', type: '2', active: true, version: '0'
      },
      {
        id: '8', name: 'Name 7', type: '2', active: true, version: '0'
      },
      {
        id: '9', name: 'Name 9', type: '2', active: true, version: '3'
      },
      {
        id: '10', name: 'Name 10', type: '2', active: true, version: '1'
      },
      {
        id: '11', name: 'Name 11', type: '2', active: false, version: '1'
      },
      {
        id: '12', name: 'Name 12', type: '2', active: false, version: '0'
      },
      {
        id: '13', name: 'Name 12', type: '2', active: false, version: '1'
      }
    ]

  }

  /**
   * Here is your logic
   */
  add() {
    console.log('ADD');
  }

  remove(id: string) {
    console.log('REMOVE', id);
  }

  view(object: any) {
    console.log('VIEW', object);
  }

  edit(object: any) {
    console.log('EDIT', object);
  }

}
