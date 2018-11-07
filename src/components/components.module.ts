import { NgModule } from '@angular/core';
import { WindowScreenComponent } from './window-screen/window-screen';
import { HttpClientModule } from '@angular/common/http';
import { AppserviceProvider } from '../providers/appservice/appservice';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [WindowScreenComponent],
	imports: [HttpClientModule,BrowserModule],
	exports: [WindowScreenComponent],
	providers:[AppserviceProvider]
})
export class ComponentsModule {}
