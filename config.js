var app = new Vue({
  el: '#page',
  data: {
    网页Name: 'Pinhan Chen Resume',
    name: 'Pinhan Chen',
    Phone: '+1 3157265723',
    Email: 'pinhanc@umich.edu',
    personWeb: 'https://cph560.github.io/Resume-cph/',
    Address: 'Ann Arbor',
    Major: 'Software Developer && Mechanical Engineer',
    image: 'images/大头照.JPG',
    
    Contact: [
      {
        type: 'LinkIn',
        web: 'https://www.linkedin.com/in/cph-174174129/'
      },

      {
        type: 'git',
        web: 'https://github.com/cph560'
      },
      {
        type: 'facebook',
        web: 'https://www.facebook.com/pinhan.chen.5/'
      }

    ],
    Aboutmetitle: 'Hi,',
    Aboutmecontent: 'This is Pinhan Chen',

    WorkExp: [
      {
        title: 'Passive safety Intern',
        Company: 'ZF Automotive Technology (Shanghai) Co., Ltd',
        Time: '2021-06 - 2021-08',
        Content: 'Use Power BI to organize data on past projects and establish a database to make it easier and faster for relevant personnel to find what they have done in the past. At the same time, update the new project data on the basis of the original data.'
      },

    ],

    Education: [

      {
        Degree: 'Bechelor',
        School: 'Syracuse Univercity',
        Time: 'Sep 2016 - May 2020',
        College: 'School of Engineering and Computer',

        GPA: "3.7 / 4.0",
        Minor: "Finance",
        Honors_Awards: "Dean's Lists (2017-2020)",
      },
      {
        Degree: 'Master',
        School: 'University of Michigan--Ann Arbor',
        Time: 'Jan 2021 - Dec 2022',
        College: 'Rackham Graduate School',

        GPA: "3.8 / 4.0",
        Minor:"",
        Honors_Awards: "",
      },
    ],

   
    Skills: [
      {
        content: 'Matlab',
        
      },
      {
        content: 'Solidworks',
        
      },
      {
        content: 'Calculus',
        
      },
      {
        content: 'R-studio',
        
      },
      {
        content: 'Python',
        
      },
      {
        content: 'Machine learning',
        
      },
      {
        content: 'Robotic manipulation',
        
      },
      {
        content: 'Heat Transfer',
        
      },
      {
        content: 'dynamic mechanics',
        
      },
      {
        content: 'static mechanics',
        
      },
      
    ],
    
    Projects: [
      {
        Name: 'Material analysis experiment',
        
        Picture: 'images/fracture_1.gif',
        Content: "By mechanically stretching 5 different materials to fracture && recording different material deformation data && Responsible for Matlab code && Complete Experimental report",
      },
      {
        Name: 'Check the spring mass damper system',
        
        Picture: 'images/damper.png',
        Content: 'Test cantilever beam natural frequency (Hz), damping ratio, spring constant (N/m) && Responsible for Matlab code && Complete experimental report'
      },
      {
        Name: 'Wind tunnel experiment',
        
        Picture: 'images/wind.jpg',
        Content: "Simulation of an object's trajectory in high-speed flight by wind tunnel && Responsible for Matlab code && Complete experimental report"
      }, {
        Name: 'Development of unmanned aerial vehicles',
        
        Picture: 'images/s900.jpg',
        Content: 'Use ArduPliot Flight Control and Pixhawk Hardware Board for UAV Control && Responsible for using Mission Planner to configure unmanned aerial vehicles && Responsible for Matlab code && Responsible for some experimental reports'
      }, {
        Name: 'Python Chinese COVID-19 map',
        
        Picture: 'images/Covidmap.JPG',
        Content: 'Store Covid-19 data to local MySQL database && Connect local MySQL database to Python && Develop an HTML file with data visualization && Connect local MySQL database to client-side && Run the application on the Flask framework'
      }, {
        Name: 'Bouncing Simulation for a Polygon',
        
        Picture: 'images/Fallingob.JPG',
        Content: 'Implemented mathematical models (Jacobian, EOM, Inertia, etc.) of freely falling polygons in Python && Designed a data structure to store configs of different polygons && Transferred data to different structures for specific scenarios (ex. Flattening matrix to list for EOM) && Analyzed models with different polygons via Matplotlib modules in Python'
      }
    ]
  },
  mounted () {
    document.title = this.网页Name
  }
})
