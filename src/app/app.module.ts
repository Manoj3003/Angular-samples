import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';

// ag-grid
import {AgGridModule} from "ag-grid-angular";

// from component
import {DynamicComponent} from "./dynamic.component";
import {ChildMessageComponent} from "./child-message.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AgGridModule.withComponents(
            [
                ChildMessageComponent
            ])
    ],
    declarations: [
        DynamicComponent,
        ChildMessageComponent
    ],
    bootstrap: [DynamicComponent]
})
export class AppModule {
}
