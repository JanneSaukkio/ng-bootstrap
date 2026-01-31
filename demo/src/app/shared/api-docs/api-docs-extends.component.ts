import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'ngbd-api-docs-extends',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	template: `
		@if (classNames()?.length) {
			<p class="text-body-secondary">
				<span>Extends </span>
				@for (className of classNames()!; track className) {
					<a routerLink="." [fragment]="className">{{ className }}</a>
					@if (!$last) {
						<span>, </span>
					}
				}
			</p>
		}
	`,
})
export class NgbdApiDocsExtends {
	readonly classNames = input<string[] | undefined>([]);
}
