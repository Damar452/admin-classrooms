import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableConfig, TableHeader } from 'src/app/core/models/table.type';

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss']
})
export class GeneralTableComponent implements OnInit {
  @Input() headers: TableHeader[] = [];
  @Input() data!: any[] | null;
  @Input() tableConfig!: TableConfig;
  @Input() addButtonText!: string;

  public searchForm!: FormGroup;

  @Output() onClickAdd: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onClickView: EventEmitter<number> = new EventEmitter<number>();
  @Output() onClickEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() onClickDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initializeSearchForm()
  }

  public clickAdd() {
    this.onClickAdd.emit(true);
  }

  public clickView(id: number) {
    this.onClickView.emit(id);
  }

  public clickEdit(id: number) {
    this.onClickEdit.emit(id);
  }

  public clickDelete(id: number) {
    this.onClickDelete.emit(id);
  }

  public getValueControl(control: string){
    return this.searchForm.get(control)?.value;
  }

  private initializeSearchForm() {
    this.searchForm = this.fb.group({
      key: [this.headers[0].name],
      value: ['']
    });
  }

}
