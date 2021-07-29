
class includes {
    constructor(){}
  
    add_object(tag=false ,where, obj){
      if (tag == false){
        document.getElementById(where).appendChild(obj)
      }else{
        document.getElementsByTagName(where).item(0).appendChild(obj)
      }
    }

    inculde_apps(file) { 
      var script  = document.createElement('script'); 
      script.src  = "src/app/"+file; 
      script.type = 'text/javascript';
      this.add_object(false, "imports", script)
    } 
    
    inculde_scripts(file) { 
      var script  = document.createElement('script'); 
      script.src  = "src/script/"+file; 
      script.type = 'text/javascript';
      this.add_object(false, "imports", script)
    } 
    
    inculde_css(file) { 
        var script  = document.createElement('link'); 
        script.rel  = "stylesheet"; 
        script.type = 'text/css'; 
        script.href = "src/css/"+file;
        this.add_object(true, "head", script)
    }



    inculde_apps_pages(file) { 
      var script  = document.createElement('script'); 
      script.src  = "../src/app/"+file; 
      script.type = 'text/javascript';
      this.add_object(false, "imports", script)
    } 
    
    inculde_scripts_pages(file) { 
      var script  = document.createElement('script'); 
      script.src  = "../src/script/"+file; 
      script.type = 'text/javascript';
      this.add_object(false, "imports", script)
    } 
    
    inculde_css_pages(file) { 
        var script  = document.createElement('link'); 
        script.rel  = "stylesheet"; 
        script.type = 'text/css'; 
        script.href = "../src/css/"+file;
        this.add_object(true, "head", script)
    }
}
var inc = new includes();

function IndexPage() {
  inc.inculde_css("root.css")
  inc.inculde_css("clock.css")
  inc.inculde_css("index.css")
  inc.inculde_scripts("timer.js")
}
function SignUpPage() {
  inc.inculde_css("root.css")
  inc.inculde_css("clock.css")
  inc.inculde_css("signup.css")
  inc.inculde_scripts("timer.js")
}
function SignPages(params) {
  inc.inculde_css_pages("root.css")
  inc.inculde_css_pages("clock.css")
  
  inc.inculde_css_pages("signup.css")
  inc.inculde_scripts_pages("timer.js")
}