import { MatDialogRef } from "@angular/material/dialog";

export class BaseDialog<Dialog> {
    constructor(public dialogRef: MatDialogRef<Dialog>) { }
    
    close(): void {
        this.dialogRef.close();
    }
}
