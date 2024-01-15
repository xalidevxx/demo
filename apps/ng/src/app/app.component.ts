import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'd-root',
	standalone: true,
	template: `<router-outlet />`,
	imports: [RouterOutlet],
})
export class AppComponent {
	title = 'ng'
}
