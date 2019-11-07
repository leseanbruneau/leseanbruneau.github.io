(window["webpackJsonpreact-code-challenge-journal"]=window["webpackJsonpreact-code-challenge-journal"]||[]).push([[0],{15:function(e,a,t){},23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),o=t.n(r),c=(t(28),t(12)),i=t(5),s=t(7),d=t(8),u=t(10),m=t(9),p=t(11),g=l.a.createContext(),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={days:[{id:1,challengeDay:1,date:"20190930",dayNotes:["Installed new Oracle VirtualBox VM","Installed Node, NPM, Visual Studio Code and related software"]},{id:2,challengeDay:2,date:"20191001",dayNotes:["Created React project and initial days page"]},{id:3,challengeDay:3,date:"20191002",dayNotes:["Converted challenge day notes into an array","Added Header and color fonts and background"]},{id:4,challengeDay:4,date:"20191003",dayNotes:["Added Bootstrap to project","Added React Routing to a couple pages","Navbar - included page links to Resources and About","Updated Resources and About pages"]},{id:5,challengeDay:5,date:"20191004",dayNotes:["Context API - how to centralize state data","Move 'Days' array object out of component and into separate js file"]},{id:6,challengeDay:6,date:"20191005",dayNotes:["Changed BrowserRouter to HashRouter for future deployment","First Production Build - npm run build","Deployed to https://leseanbruneau.github.io/"]},{id:7,challengeDay:7,date:"20191006",dayNotes:["Added React Tips and Trick Page","Updated Header section"]},{id:8,challengeDay:8,date:"20191007",dayNotes:["Add Edit button on Days Page","Worked on Days Edit Module"]},{id:9,challengeDay:9,date:"20191008",dayNotes:["Abandoned Edit button on Days Page","Will include Edit buttons in larger React application"]},{id:10,challengeDay:10,date:"20191010",dayNotes:["Create New React Project for larger application","Added React Router - header/navbar"]},{id:11,challengeDay:11,date:"20191012",dayNotes:["Added other pages - Days, Resources and Shortcuts"]},{id:12,challengeDay:12,date:"20191013",dayNotes:["Deployed latest Simple React project to GitHub Pages","Created GitHub Repository for Simple React Project"]},{id:13,challengeDay:13,date:"20191014",dayNotes:["Created new React project for 100 days of code with Agile Sprints","Installed Node packages","Added first few pages in new project"]},{id:14,challengeDay:14,date:"20191016",dayNotes:["Watched preview sections of new Udemy Course","Course:  Node.js API Masterclass With Express & MongoDB","Course Link: https://www.udemy.com/course/nodejs-api-masterclass/?couponCode=OCTOBER999","Set up and ran example programs"]},{id:15,challengeDay:15,date:"20191017",dayNotes:["Attended Minneapolis React Meetup October meeting"]},{id:16,challengeDay:16,date:"20191019",dayNotes:["Reviewed module setup","CSS for background setting"]},{id:17,challengeDay:17,date:"20191020",dayNotes:["Converted Class Based Components to Functional Components","Update Context API from State variable to useState()"]},{id:18,challengeDay:18,date:"20191021",dayNotes:["(JavaScript) Worked on JavaScript examples with callbacks"]},{id:19,challengeDay:19,date:"20191023",dayNotes:["(React) Worked some more on Stateless functional components","(React) Added functional component to React Router "]},{id:20,challengeDay:20,date:"20191026",dayNotes:["(Angular) For horse racing site - added Breeders' Cup page","(Angular) Added Service to retreive Breeders' Cup races"]},{id:21,challengeDay:21,date:"20191027",dayNotes:["(Angular) Formatted added Breeders' Cup page","(Angular) Added Breeders' Cup races to JSON object"]},{id:22,challengeDay:22,date:"20191028",dayNotes:["(Angular) Deployed updated horse racing site with Breeders' Cup page","(Angular) https://landsharkpark.github.io/#/bc"]},{id:23,challengeDay:23,date:"20191030",dayNotes:["Back to React - Created new JSON object for Sprints","Defined Days fields and display within Sprint component"]},{id:24,challengeDay:24,date:"20191102",dayNotes:["Created a separated 'Sprint' component","Updated 'Sprints' component - moved individual sprint component into Sprint component"]},{id:25,challengeDay:25,date:"20191104",dayNotes:["Added a 'Show Detail' button to 'Sprint' component","Added function to hide details of a sprint in the 'Sprint' component"]},{id:26,challengeDay:26,date:"20191105",dayNotes:["Fixed CSS formatting on header line","Added components 'Days' and 'Day'"]},{id:27,challengeDay:27,date:"20191106",dayNotes:["Fixed navbar to top of page","Fixed sprint labels and description format","Update labels for example sprints and days"]}]},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),E=g.Consumer,y=(t(15),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar fixed-top navbar-expand-sm navbar-dark bg-dark"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"/",className:"navbar-brand"},"Code Challenge Day Journal")),l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item px-4"},l.a.createElement(c.b,{to:"/reacthelp",className:"nav-link"},"React Tips")),l.a.createElement("li",{className:"nav-item px-4"},l.a.createElement(c.b,{to:"/resources",className:"nav-link"},"Resources")),l.a.createElement("li",{className:"nav-item px-4"},l.a.createElement(c.b,{to:"/about",className:"nav-link"},"About"))))}}]),a}(n.Component)),b=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement(E,null,(function(e){var a=e.days;return a.sort((function(e,a){return a.challengeDay-e.challengeDay})),l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement("div",{className:"container",key:e.id},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"cardheader"},l.a.createElement("span",null,l.a.createElement("strong",null,"Challenge Day: ")," ",e.challengeDay),l.a.createElement("span",{style:{float:"right"}},l.a.createElement("strong",null,"Date: "),e.date.substring(4,6),"/",e.date.substring(6,8),"/",e.date.substring(0,4))),l.a.createElement("div",{className:"cardbody"},l.a.createElement("strong",null,"Notes:"),l.a.createElement("br",null),l.a.createElement("ul",null,e.dayNotes.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("span",{style:{paddingLeft:"10px"}},e))}))))))})))}))}}]),a}(n.Component);function f(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"display-4"},"About This Project"),l.a.createElement("hr",null),l.a.createElement("div",{className:"display-5"},l.a.createElement("p",null,'Approximately a "70 Days of Code Challenge" - or "Whatever I can get done before the 2019 holidays"'),l.a.createElement("p",null,"Simple Goal:  Learn React by building a web site to journal a 100 Days of Code Challenge."),l.a.createElement("p",null,"This site is a simple React application to journal steps building a larger React application.  This site loads all data at startup using React's Context API."),l.a.createElement("p",null,"The new application with Agile format will start out using React's Context API, and then migrate over to a server database (either Firebase or MongoDB) using Axios npm package.  The new site will make the site easier to maintain, more organized for reading and daily updates.  The end goal is to have the new site ready for an official 100 Days of Challenge in January 2020."),l.a.createElement("p",null,'For "modified" Agile format, I\'m thinking on the following:'),l.a.createElement("ul",null,l.a.createElement("li",null,"10 Sprints for 100 Days of Code Challenge"),l.a.createElement("li",null,"10 Days of Coding per Sprint"),l.a.createElement("li",null,'Each Sprint will have 14 Calendar days - 10 days of code, 4 "off days"'),l.a.createElement("li",null,"Sprint Planning - State high level goal(s) to accomplish during Sprint"),l.a.createElement("li",null,"Sprint Review - Quick notes for lessons learned, accomplishments")),l.a.createElement("p",null,'Note: The added "Agile format" is not meant to distract from coding exercises in the 100 Days of Code Challenge.  Sprint Planing and Review are meant to be short, quick notes.  Agile format would help me set short term goals in addition to formatting and publishing organized journal entries.'),l.a.createElement("p",null,"GitHub repository and sites locations listed below."),l.a.createElement("p",null,l.a.createElement("div",null,l.a.createElement("strong",null,"Starter React Project - simple static web site using Context API")),l.a.createElement("div",{class:"px-4"},"GitHub Repository: ",l.a.createElement("a",{className:"pl-3",href:"https://github.com/leseanbruneau/react-code-challenge-journal.git",target:"_blank",rel:"noopener noreferrer"},"https://github.com/leseanbruneau/react-code-challenge-journal.git")),l.a.createElement("div",{class:"px-4"},"React Website: ",l.a.createElement("a",{className:"pl-3",href:"https://leseanbruneau.github.io/",target:"_blank",rel:"noopener noreferrer"},"https://leseanbruneau.github.io/"))),l.a.createElement("p",null,l.a.createElement("div",null,l.a.createElement("strong",null,"Agile React Project - working project with more web site features")),l.a.createElement("div",{class:"px-4"},"GitHub Repository: ",l.a.createElement("a",{className:"pl-3",href:"https://github.com/leseanbruneau/react-ccja.git",target:"_blank",rel:"noopener noreferrer"},"https://github.com/leseanbruneau/react-ccja.git")),l.a.createElement("div",{class:"px-4"},"React Website: ",l.a.createElement("a",{className:"pl-3",href:"https://ustleseanbruneau.github.io/",target:"_blank",rel:"noopener noreferrer"},"https://ustleseanbruneau.github.io/")))))}function v(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"display-4"},"Good React Training Resources"),l.a.createElement("hr",null),l.a.createElement("p",{className:"display-4"},"Udemy"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.udemy.com/course/react-the-complete-guide-incl-redux/"},"React - The Complete Guide (incl Hooks, React Router, Redux) - Maximillian Schwarzmuller"),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.udemy.com/course/modern-react-front-to-back/"},"React Front To Back 2019 - Brad Traversy"),l.a.createElement("br",null))}function w(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"display-4"},"React Tips and Tricks"),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Deploy React application to GitHub Pages Repository")),l.a.createElement("p",null,"Two separate directories on workstation - React application (%%app_root_directory%%) and GitHub Pages (%%github_repo_directory%%)"),l.a.createElement("p",null,"Linux commands from %%app_root_directory%%"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"npm run build")),l.a.createElement("li",null,l.a.createElement("strong",null,"cp -r build/* %%github_repo_directory%%"))),l.a.createElement("p",null,"Linux commands from %%github_repo_directory%% "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"git status")),l.a.createElement("li",null,l.a.createElement("strong",null,"git add .")),l.a.createElement("li",null,l.a.createElement("strong",null,'git commit -m "Day whatever - be creative with your message"')),l.a.createElement("li",null,l.a.createElement("strong",null,"git push -u origin master"))),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"React - Create new React application")),l.a.createElement("p",null,"Create new React application: "),l.a.createElement("p",{class:"px-4"},l.a.createElement("strong",null,"npx create-react-app %%react-app-name%%")," "),l.a.createElement("p",null,"where %%react-app-name%% is name of new React project."),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Sample - Possible node packages to install")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"npm i bootstrap")),l.a.createElement("li",null,l.a.createElement("strong",null,"npm i react-dom")),l.a.createElement("li",null,l.a.createElement("strong",null,"npm i react-router-dom")),l.a.createElement("li",null,l.a.createElement("strong",null,"npm i axios"))),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"GitHub Pages - Simple Static Website Hosting")),l.a.createElement("p",{class:"px-4"},"Create Repository = ",l.a.createElement("strong",null,"%%github_username%%.github.io")," where %%github_username%% is your GitHub username"),l.a.createElement("p",{class:"px-4"},"Clone your ",l.a.createElement("strong",null,"%%github_username%%.github.io")," repository to your workstation"),l.a.createElement("br",null),l.a.createElement("p",{className:"display-5"},l.a.createElement("strong",null,"Linux Environment Setup")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Virtual Machine Install")),l.a.createElement("a",{href:"https://medium.com/@leseanbruneau/install-and-configure-ubuntu-workstation-virtual-machine-f5443cd83259"},"Oracle VirtualBox - Virtual Machine setup (Ubuntu)"),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Command line / Node / NPM")),l.a.createElement("p",null,'Linux command to fix for that stupid "ENOSPC: System limit for number of file watchers reached" error message:'),l.a.createElement("p",{class:"px-4"},l.a.createElement("strong",null,"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Visual Studio Code")),l.a.createElement("p",null,"Extensions to install"),l.a.createElement("ul",null,l.a.createElement("li",null,"ES7 React/Redux/GraphQL/React-native snippets")),l.a.createElement("br",null))}t(34);var N=function(){return l.a.createElement(h,null,l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(y,null),l.a.createElement("div",{className:"pagetop"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:b}),l.a.createElement(i.a,{exact:!0,path:"/reacthelp",component:w}),l.a.createElement(i.a,{exact:!0,path:"/about",component:f}),l.a.createElement(i.a,{exact:!0,path:"/resources",component:v}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c0fe8b15.chunk.js.map