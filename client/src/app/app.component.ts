
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly message = new FormGroup({
    message: new FormControl<string>('', Validators.required),
  });
  private readonly messageService = inject(MessageService);

  sendMessage() {
    const messageContent = this.message.value.message?.trim();
    if(messageContent)
    this.messageService.message(messageContent);

    }
  }
