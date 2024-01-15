import { IMAGE_CONFIG } from '@angular/common'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
	providers: [
		provideClientHydration(),
		provideHttpClient(withFetch()),
		provideRouter(routes, withPreloading(PreloadAllModules)),
		provideAnimations(),
		{
			provide: IMAGE_CONFIG,
			useValue: {
				disableImageSizeWarning: true,
				disableImageLazyLoadWarning: true,
			},
		},
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
		{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 20000 } },
	],
}
