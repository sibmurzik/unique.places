import { Directive, ElementRef, inject, input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()',
    '(click)': 'hide()',
  },
})
export class Tooltip implements OnDestroy {

  private element = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private tooltip: HTMLElement | null = null;

  inputText = input('', { alias: 'appTooltip' });

  ngOnDestroy(): void {
    this.hide();
  }

  show() {
    if(!this.inputText) return;
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.inputText()));
    this.renderer.addClass(this.tooltip, 'tooltip');
    this.renderer.appendChild(document.body, this.tooltip);
    const rect = this.element.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltip, 'top', `${rect.top-30}px`)
    this.renderer.setStyle(this.tooltip, 'left', `${rect.left + rect.width/2}px`);
  }

  hide() {
    if(this.tooltip){
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }

  }


}
