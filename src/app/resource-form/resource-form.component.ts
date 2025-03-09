import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {
  resource: Resource = {
    ResourceID: Math.floor(Math.random() * 1000000), // Generate a random ID
    Title: '',
    Type: '',
    Content: '',
    UserID: 1 // Default UserID
  };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.resourceService.getResourceById(+id).subscribe({
        next: (data) => {
          this.resource = data;
        },
        error: (err) => {
          console.error('Failed to fetch resource:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.resourceService.updateResource(this.resource.ResourceID!, this.resource).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Failed to update resource:', err);
        }
      });
    } else {
      this.resourceService.createResource(this.resource).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Failed to create resource:', err);
        }
      });
    }
  }
}
