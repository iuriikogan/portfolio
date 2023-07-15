(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),o=(t(13),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi! I'm ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.phoneNum),l.a.createElement("br",null),l.a.createElement("span",null,e.emailId)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:" bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"LinkedIn:"," "+e.linkedinId),l.a.createElement("h4",null,"Email:"," "+e.emailId),l.a.createElement("h4",null,"Phone:"," "+e.phoneNum)))))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={imagebaseurl:"https://media-exp1.licdn.com/dms/image/C4D03AQHZ4Iwsfu2MIQ/profile-displayphoto-shrink_200_200/0/1581049913153?e=1615420800&v=beta&t=pr0JJHSX4Z4fqplVXqR-TMdBw5QzOF9Ar4vKFaDtPIA",name:"Iurii Ungureanu Kogan",role:"Kubernetes Engineer, Liflong Learner, Diver, Dog Lover",linkedinId:"http://www.linkedin.com/in/iuriikogan",skypeid:"koganiurii",emailId:"koganiurii@gmail.com",phoneNum:"+40725026232",roleDescription:"Results-driven Presales System Engineer with a strong focus on implementing complex cloud data management strategies. Certified Kubernetes Administrator (CKA) and Certified Kubernetes Application Developer (CKAD) with expertise in building microservices using Golang, Node.js, and React. Well-versed in hyperscaler platforms, including AWS, Azure, and GCP. Skilled in application migration and pipelines architecture design, and providing disaster recovery and business continuity recommendations.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/iuriikogan/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/iuriikogan/",className:"fa fa-github"}],aboutme:"I am currently a currently a Kasten (kubernetes-native datam management) product presales specialist for our parent company, Veeam. I write code in my free time. I'm always looking for opportunies to connect or to contribute, Please contact me if you have any questions or feedback!",address:"Bucharest Romania",website:"https://www.github.com/iuriikogan",work:[{CompanyName:"Kasten by Veeam",specialization:"Product Presales Specialist",MonthOfLeaving:"Currently Employed",MonthOfStarting:"August",YearOfStarting:2021},{CompanyName:"Loginworks Softwares",specialization:"Account Executive",MonthOfStarting:"January",YearOfStarting:2020,MonthOfLeaving:"May",YearOfLeaving:2021},{CompanyName:"NexThoughts Software",specialization:"Dir. of Business Development",MonthOfStarting:"October",YearOfStarting:2018,MonthOfLeaving:"October",YearOfLeaving:2020},{CompanyName:"eCourtDate",specialization:"Dir. of Business Development",MonthOfStarting:"January",YearOfStarting:2017,MonthOfLeaving:"July",YearOfLeaving:2018,Achievements:""}],skillsDescription:"Your skills here",skills:[{skillname:"Kubernetes"},{skillname:"Kubernetes Application Development"},{skillname:"Managed Kubernetes Services (AKS, EKS, GKE)"},{skillname:"Infrastructure as Code (Terraform, Pulumi)"},{skillname:"Kubernetes Data Management, Backup and Disaster Recovery"},{skillname:"Cloud Native Storage (CSI, Rook, Longhorn)"},{skillname:"Cloud Native Observability (Prometheus, Grafana, Jaeger)"},{skillname:"Cloud Native Authenication and Authorization (OIDC, OPA, RBAC, CertManger/LetsEncrypt)"},{skillname:"Continuous Integration and Continuous Delivery (GitOps, ArgoCD, Flux)"},{skillname:"Development (Golang, Node.js, React)"},{skillname:"Cloud Platforms (AWS, Azure, GCP)"},{skillname:"Databases (PostgreSQL, MongoDB, Redis)"}]},g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:v}),l.a.createElement(p,{resumeData:v}),l.a.createElement(h,{resumeData:v}),l.a.createElement(f,{resumeData:v}),l.a.createElement(E,{resumeData:v}))}}]),a}(n.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/portfolio","/service-worker.js");b?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(a,e)})}}()},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.a3d7e637.chunk.js.map