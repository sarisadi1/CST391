import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-detail',
  imports: [CommonModule],
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  resource: Resource | null = null;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
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
}