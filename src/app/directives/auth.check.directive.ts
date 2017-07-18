import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Directive({
    selector: '[isAuthenficated]'
})

export class AuthCheckDirective {
    user: any;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        public afAuth: AngularFireAuth
    ) {

    }

    @Input() set isAuthenficated(shouldAdd: boolean) {
        this.user = this.afAuth.authState;
        this.user.subscribe(user => {
            if (user && shouldAdd || !user && !shouldAdd) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }
}