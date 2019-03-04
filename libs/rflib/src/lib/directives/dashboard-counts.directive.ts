import { Directive, ElementRef, Input, Renderer2, OnInit , OnChanges, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[rFDashboardCounts],[DashboardCounts]'
})


export class DashboardCountsDirective implements OnInit, OnChanges{


    @Input() rFDashboardCounts: string;
    @Input() DashboardCounts: Array<any>;
    

  constructor(private elem: ElementRef, private renderer: Renderer2,private container : ViewContainerRef,private template: TemplateRef<any>) { 
   
  }


  ngOnInit() {
  
    this.container.createEmbeddedView(this.template);

  }

  ngOnChanges() {
    
    this.container.clear();

    for (const input of this.DashboardCounts) {
      this.container.createEmbeddedView(this.template,  {
        $implicit: input,
        index: this.DashboardCounts.indexOf(input),
       });
    }

  }

}
