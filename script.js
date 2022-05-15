// Journey===============================================================
const journeyArr = [
  {
    image: "./assets/learning.svg",
    period: "Jan'22 - Apr'22",
    designation: "Embedded System Engineer Intern at Deserve Industrial Automation",
    description: [
      "As I have been always passionated about computers, I started exploring & learning web development.",
    ],
  },
  {
    image: "./assets/learning.svg",
    period: "Aug'20 - Jan'21",
    designation: "IoT Engineer Intern at Pie Infosys",
    description: [
      "As I have been always passionated about computers, I started exploring & learning web development.",
    ],
  },
  {
    image: "./assets/construction.svg",
    period: "Aug'18 - May'22",
    designation: "Electronics & Communications Engineering",
    description: [
      "Completed Bechelor of Engineerng in Electronics & Communications with 6.79 CGPA at Gujarat Technological University, Gujarat, India.",
    ],
  },
];

document.getElementById("journey-single").innerHTML = journeyArr
  .map(
    ({ image, period, designation, description }) =>
      `
        <div class="journey">
            <div class="journey-left">
                <img src=${image} alt="" >
            </div>
            <div class="journey-right">
              <div class="journey-title">
                <div>
                  <h4>${period}</h4>
                  <h3>${designation}</h3>
                </div>
                <img src=${image} alt="" >
              </div>
              ${description
                .map(
                  (desc) => `
                  <p style="margin-bottom: 20px">${desc}</p>
                `
                )
                .join("")}
            </div>
        </div>
    `
  )
  .join("");


  // Project===============================================================

// Left side
const projectLeftArr = [
    {
        title: 'YelpCamp on Heroku',
        description: 'Web Development',
        techs: ['NodeJs', 'ExpresJs', 'MongoDB'],
        image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Restaurant Management System',
        description: 'Front-End Development',
        techs: ['Angular 6+', 'Angular Animations', 'Firebase'],
        image: 'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Auction System',
        description: 'Web Development, E-Commerce',
        techs: ['C#, .Net', 'WebRTC, SignalR', 'MVC5'],
        image: 'https://image.freepik.com/free-vector/man-stand-leading-auction-hold-gavel_102902-161.jpg'
    },
]

document.getElementById('project-left').innerHTML = projectLeftArr.map(project =>
    `
    <div class="project">
        <div class="descreption">
            <div class="title">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <!-- <a href='#' target='_blank'><span>Source Code</span></a> -->
            </div>
            <div class="tech">
                ${project.techs.map(tech =>
        `<p>${tech}</p>`
    ).join('')
    }
            </div>
        </div>
        <img src=${project.image} alt="">
    </div> 
    `
).join('')

// Right side
const projecRightArr = [
    {
        title: 'Distance Learning',
        description: 'Web Development',
        techs: ['C#, .Net', 'WebRTC, SignalR', 'MVC5'],
        image: 'https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Event Management',
        description: 'Web Development',
        techs: ['NodeJs', 'GraphQL', 'MongoDB'],
        image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        title: 'Personal Portfolio',
        description: 'Website Design',
        techs: ['HTML', 'CSS', 'JavaScript'],
        image: './assets/portfolio-pic.jpg'
    },
]

document.getElementById('project-right').innerHTML = projecRightArr.map(project =>
    `
    <div class="project">
        <div class="descreption">
            <div class="title">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <!-- <a href='#' target='_blank'><span>Source Code</span></a> -->
            </div>
            <div class="tech">
                ${project.techs.map(tech =>
        `<p>${tech}</p>`
    ).join('')
    }
            </div>
        </div>
        <img src=${project.image} alt="">
    </div> 
    `
).join('')