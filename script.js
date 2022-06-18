// Journey===============================================================
const journeyArr = [
  {
    image: "./assets/VFD.svg",
    period: "Jan'22 - Mar'22",
    designation: "Embedded System Engineer Intern at Deserve Industrial Automation",
    description: [
      "As my curiosity is related to Automation and Technologies so I took experience in Industrial Automation Company and on this Internship period i particularly focus in VFD and It's configuration  .",
    ],
  },
  {
    image: "./assets/AI.svg",
    period: "Aug'20 - Jan'21",
    designation: "IoT Engineer Intern at Pie Infosys",
    description: [
      "As I have been always passionated about Smart Devices, I started exploring & learning about Intenet of Things as Intern.",
    ],
  },
  {
    image: "./assets/Education.svg",
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
        title: 'Capcha Recognition',
        description: 'Solving boring capcha Automatically using machine learning',
        techs: ['Python', 'Google colab', 'Github'],
        image: './Img/AI.jpg'
    },
    {
        title: 'Smart Parking System',
        description: 'Making a system which works through real time data collection and helps user to find vacant parking spots',
        techs: ['Arduino', 'NodeMCU', 'Sensors'],
        image: './Img/SPS.jpg'
    },
    {
        title: 'Bluetooth Controlled Robot',
        description: 'A robotic car can controlled by Mobile application through Bluetooth Connectivity',
        techs: ['Arduino', 'Bluetooth' , 'Motors'],
        image: './Img/BTcar.jpg'
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
        title: 'Gesture Controlled Robot',
        description: 'A robotic car or any robotic part can move and control with simple hand gesture',
        techs: ['Motion sensor', 'NodeMCU', 'Hardware'],
        image: './Img/GC.jpg'
    },
    {
        title: 'Home Automation',
        description: 'System that can monitor and control home systems or appliances using Mobile, Desktop interface and Personal Assistant.',
        techs: ['NodeMCU', 'Relay', 'Cloud API'],
        image: './Img/SH.jpg'
    },
    {
        title: 'Consumable item info and management webpage',
        description: 'Create database of consumable item’s record in MySQL database and provided facility to Update, edit, add, and delete record.',
        techs: ['HTML', 'CSS', 'JavaScript'],
        image: './Img/WT.jpg'
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
