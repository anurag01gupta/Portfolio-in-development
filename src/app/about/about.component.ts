import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<div class="container about fadeIn">
              <div class="row top-buffer">
                <div class="col-md-6">
                  <h4><em>Hello there,</em> my name is</h4>
                  <h2>Anurag Gupta</h2>
                  <p>I’m a 26 year old enthusiastic UI developer with <span class="abouthighlight">three and half years of IT experience.</span>&nbsp;Specialising in web design, front end code and frameworks of javascripts.</p>
                  <p>Over the years I have found a new love for anything digital and making technology easy to use and accessible to everyone (feels good to do good).</p>
                  <p>Feel free to <a class="highlight" href="mailto:email@anuraggupta.in?Subject=Hello%20Anurag">contact</a> me here.</p>
                </div>
                <div class="col-md-5 offset-1">
                  
                </div>
              </div>
            </div>`
})
export class AboutComponent{

  constructor() { }
}