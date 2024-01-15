import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { IPost } from '@demo/interfaces'
import { finalize } from 'rxjs'
import { PostService } from '../../core/services/post.service'

@Component({
	selector: 'd-home',
	standalone: true,
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatProgressSpinnerModule],
})
export class HomeComponent implements OnInit {
	loader = signal<boolean>(false)
	posts = signal<IPost[]>([])

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.getPosts()
	}

	getPosts(): void {
		this.loader.set(true)
		this.postService
			.getPosts()
			.pipe(finalize(() => this.loader.set(false)))
			.subscribe((res: IPost[]) => {
				this.posts.set(res)
			})
	}
}
