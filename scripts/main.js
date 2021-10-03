const home = () => {
    return `
    <div class="home-container">
        <div>
            <h1>Hi My name is Mukul Kumar</h1>
            <br>
            <br>
            <p>Software Engineer, Fluent in c++ and Python programming language with 2+ years of</p>
            <p>experince and great problem solving skills. Proud team player focused on achieving project</p>
            <p>objectives with speed and accuracy. Loves challenges and Learning new Technology along the way</p>
        </div>
    </div>
    `;
}

const about = () => {
    return `
    <div>
        <h1>About</h1>
        <img class="profile-image" src="images/pic.jpeg" 
            alt="Profile Image" height="200px" width="200px" />
        <br><br>
        <div class="details">
            <div class="para">
            Hi, My name is Mukul Kumar. I'm born and brought up in Delhi. I am pursuing M.Tech from <a href="https://www.iiit.ac.in/"target="_blank">IIIT Hyderabad</a>.
            I completed my B.Tech from <a href="https://www.jmi.ac.in/"target="_blank">Jamia Millia Islamia</a> passed out in 2019. During my college time, I made up my mind to do M.Tech after having Some experince.
            From July 2019 to September 2021 I was working in 7th largest bank HSBC. I started as Software Engineer. My responsibility include data migration from On-premises system to GCP.
            My strengths are my analytical approach, my communication and presentation skills. In my free time, I enjoy spending time with friends, sometimes cooking, listening to music, reading, traveling, and playing outdoor sports.  
            </div>
        </div>
    </div>
    `;
}
const skill = () => {
    return `
    <div>
    <h1>Main Skills</h1>
    <ul>
    <li><img src="images/c.jpg" height="30px" width="30px" display="block"> C is a general-purpose, procedural computer programming language supporting structured programming.</li><br><br>
    <li><img src="images/c++.jpg" height="30px" width="30px" display="block">  C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".</li><br><br>
    <li><img src="images/databases.jpg" height="30px" width="30px" display="block">  A database is an organized collection of structured information, or data, typically stored electronically in a computer system</li><br><br>
    <li><img src="images/python.jpg" height="30px" width="30px" display="block">  Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale project</li><br><br>
    <li><img src="images/js.jpg" height="30px" width="30px" display="block">JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions</li><br><br>
    <li><img src="images/sd.jpg" height="30px" width="30px" display="block">Google Stackdriver is a cloud computing systems management service offered by Google. It provides performance and diagnostics data to public cloud users. Stackdriver is a multi-cloud solution, providing support for both Google Cloud and AWS cloud environments.</li><br><br>
    </ul>
    <br>
    <h1>Others Skill</h1>
    <style>
        table, th, td 
        {
            border: 1px solid black;
        }
        table
        {
            width: 100%;
        }
    </style>
    <table>
    <tr>
        <th>Category</th>
        <th>Skills</th>
        <th>Efficiency</th>
    </tr>
    <tr>
        <td rowspan="2">OS</td>
        <td>GNU/Linux</td>
        <td>Good</td>
    </tr>
    <tr>
        <td>Window</td>
        <td>Good</td>
    </tr>
    <tr>
        <td rowspan="3">LANGUAGES</td>
        <td>C/C++</td>
        <td>Fair</td>
    </tr>
    <tr>
        <td>Python</td>
        <td>Good</td>
    </tr>
    <tr>
        <td>JavaScript</td>
        <td>Fair</td>
    </tr>
    <tr>
        <td rowspan="3">DATABASES</td>
        <td>MySQL</td>
        <td>Good</td>
    </tr>
    <tr>
        <td>PostgreSQL</td>
        <td>Good</td>
    </tr>
    <tr>
        <td>GCP BQ</td>
        <td>Excelent</td>
    </tr>
    <tr>
        <td rowspan="3">OTHERS</td>
        <td>GCP IAM</td>
        <td>Good</td>
    </tr>
    <tr>
        <td>GIT</td>
        <td>Good</td>
    </tr>
    <tr>
        <td>Stackdriver</td>
        <td>Fair</td>
    </tr>
    </table>
    `;
}

const experience = () => {
    return `
    <div>
    <h1>Experience</h1>
    <img src="images/HSBC.jpg" height="30px" width="100px" display="block">
    <h2>From July 2019 to September 2021</h2>
    <h3>HSBC Software Development India</h3>
    <ul>
    <li>Developed ETL jobs using clean and tested python code for 50+
    countries to load data from ON‐Premise System to GCP BQ post
    data transformations under Data Refinery Project.</li><br>
    <li>Created scripts for automation of work and testing.</li><br>
    <li>Followed agile methodologies and deployed highly scalable
    code successfully to productions.</li><br>
    <li>Worked closely with other business analysts, development
    teams, and infrastructure specialists to deliver high‐availability
    solutions for mission‐critical applications.</li><br>
    <li>Extracted data from REST API to process, cleanse, refine, and
    Manipulate data for analytic to showcase data in the form of
    charts and graphs which helped in the breakdown of various
    fields based on the requirement.</li><br>
    <li>Scheduling and monitoring data loading using control‐M.</li><br>
    <li>Managing tasks in JIRA and Documentation in confluence.</li><br>
    </ul>
    <br>
    </div>
    `;
}

const menuItems = [
    { name: 'HOME', id: 0, callback: home },
    { name: 'ABOUT', id: 1, callback: about },
    { name: 'SKILLS', id: 2, callback: skill },
    { name: 'EXPERIENCE', id: 3, callback: experience }
];

var view = document.getElementById("main");
var nav = document.querySelector(".navbar .nav-item-group");
var dateElem = document.querySelector(".time-container #time");

function onLoad(){
    for(let item of menuItems){
        let node = document.createElement("div");
        node.className = "nav-item";
        node.id = "menu-"+item.id;
        node.addEventListener("click", function (){
            navigateTo(item.id)
        });
        node.innerHTML = item.name;
        nav.appendChild(node);
    }

    navigateTo(0);
    getTime();

}

const getTime = () => {
    setInterval(() => {
        let date = new Date().toString().split(" ");
        let str = "";
        for(let i=0; i<date.length; i++)
            if(i!=5)
                str += date[i] + " ";
        dateElem.innerHTML = str;
    }, 950);
}

const navigateTo = (optn) => {
    let menuList = document.getElementsByClassName("nav-item");
    for(let m of menuList){
        m.className = "nav-item";
    }
    let elem = document.querySelector(".nav-item#menu-"+optn);
    elem.className += " active";

    view.innerHTML = menuItems[optn].callback.call();

    document.title = "Mukul Kumar profile";

    let hem = document.getElementById("hamburger");
    if(hem.className!="fa fa-bars"){
        hamburgerHandler();
    }

    let body = document.getElementsByTagName("body")[0];
    if(optn==0){
        body.className += " home-active";
    }
    else{
        body.className = "";
    }
}
const hamburgerHandler = () => {
    let hem = document.getElementById("hamburger");
    if(hem.className=="fa fa-bars"){
        hem.className = "fa fa-times";
        let menuList = document.getElementsByClassName("nav-item");
        for(let m of menuList){
            m.style.display = "block";
        }
    }
    else{
        hem.className = "fa fa-bars";
        let menuList = document.getElementsByClassName("nav-item");
        for(let m of menuList){
            m.style.display = "none";
        }
    }
}