﻿import { Component, ViewChild } from '@angular/core';
import { SpService } from '../../sharepoint/sharepoint.service';
import { DataTable } from 'primeng/primeng';
import { TemplateComponent } from '../form.template';

@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent extends TemplateComponent {
    @ViewChild(DataTable) dataTable: DataTable;

    constructor(private spservice: SpService) {
        super(spservice,
            {
                listName: 'List15',
                listTitle: 'Заказчики',
                viewName: 'Все элементы'
            });
       
    }

    onRowSelect(event) {
        this.updateDM(event.data);
        
        super.onRowSelect(event);
    }
    
}