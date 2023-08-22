import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  todo: any[] = [];
  filteredTodo: any[] = [];
  selectedFilter: string = 'option1';

  constructor(public dialog: MatDialog) {}

  onFilterChange(filterValue: string) {
    this.selectedFilter = filterValue;
    this.filterTasks();
  }

  onCheckChange(task: any) {
    task.status = task.status === 'Complete' ? 'Incomplete' : 'Complete';
    this.filterTasks();
  }

  filterTasks() {
    if (this.selectedFilter === 'option1') {
      this.filteredTodo = this.todo;
    } else if (this.selectedFilter === 'option2') {
      this.filteredTodo = this.todo.filter(
        (task) => task.status !== 'Complete'
      );
    } else if (this.selectedFilter === 'option3') {
      this.filteredTodo = this.todo.filter(
        (task) => task.status === 'Complete'
      );
    }
  }

  openDialog(taskToEdit?: any): void {
    const data = taskToEdit
      ? { ...taskToEdit }
      : { title: '', status: 'Incomplete' };

    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '300px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        if (taskToEdit) {
          const index = this.todo.findIndex(
            (item) => item.id === taskToEdit.id
          );
          if (index !== -1) {
            this.todo[index] = result;
          }
        } else {
          result.id = this.todo.length + 1;
          this.todo.push(result);
        }

        this.filterTasks();
      }
    });
  }

  onDelete(id: number) {
    this.todo = this.todo.filter((item: { id: number }) => item.id !== id);
    console.log('Task with ID ' + id + ' deleted.');
    this.filterTasks();
  }
}
