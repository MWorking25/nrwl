import { Directive, ElementRef, Input, Renderer2, OnInit , OnChanges, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[rFDashboardCounts], [primarybg], [accentbg]'
})


export class DashboardCountsDirective implements OnInit, OnChanges{


    @Input() rFDashboardCounts: string;
    @Input() primarybg: string;
    @Input() accentbg: string;
    @Input() appShadowX: string;
    @Input() appShadowY: string;
    @Input() appShadowBlur: string;

    @Input() DashboardCounts: Array<any>;


  constructor(private elem: ElementRef, private renderer: Renderer2) { 
   // renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
  }


  ngOnInit() {
    let bgcolor = `${ this.rFDashboardCounts }`;
    let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.rFDashboardCounts }`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', bgcolor);

    let primarybgcolor = `${ this.primarybg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', primarybgcolor);

    let accentbgcolor = `${ this.accentbg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', accentbgcolor);


  }

  ngOnChanges() {
    // for (const input of this.DashboardCounts) {
    //   this.container.createEmbeddedView(this.template);
    // }
    let primarybgcolor = `${ this.primarybg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', primarybgcolor);

    let accentbgcolor = `${ this.accentbg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', accentbgcolor);

  }

}
