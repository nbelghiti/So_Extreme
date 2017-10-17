import { NgModule } from '@angular/core';
import { DecodeHtmlEntitiesPipe } from './decode-html-entities/decode-html-entities';
import { DecodeHtmlBalisePipe } from './decode-html-balise/decode-html-balise';
import { SafePipe } from './safe/safe';
@NgModule({
	declarations: [DecodeHtmlEntitiesPipe,
    DecodeHtmlBalisePipe,
    SafePipe],
	imports: [],
	exports: [DecodeHtmlEntitiesPipe,
    DecodeHtmlBalisePipe,
    SafePipe]
})
export class PipesModule {}
