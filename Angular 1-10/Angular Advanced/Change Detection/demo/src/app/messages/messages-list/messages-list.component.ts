import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent{

  private messageService = inject(MessageService);
  messages = this.messageService.allMessages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  // private  cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  // messages$ = this.messageService.messages$;
  
  // ngOnInit(){
  //   const subscription = this.messageService.messages$.subscribe((messages)=>{
  //     this.messages = messages;
  //     // this.cdRef.markForCheck();

  //     this.destroyRef.onDestroy(()=>{
  //       subscription.unsubscribe();
  //     })
  //   })
  // }

}
