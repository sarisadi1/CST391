import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.resourceService.getAllResources().subscribe({
      next: (data) => {
        this.resources = data;
        console.log("Resources loaded: ", this.resources);
      },
      error: (err) => {
        console.error('Failed to fetch resources:', err);
      }
    });
  }

  deleteResource(id: number): void {
    if (id == null) return;
    this.resourceService.deleteResource(id).subscribe({
      next: () => {
        this.resources = this.resources.filter(resource => resource.ResourceID !== id);
      },
      error: (err) => {
        console.error('Failed to delete resource:', err);
      }
    });
  }
}