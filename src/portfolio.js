/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manish Thapa",
  description:
    "Dedicated Software Engineer Driven to Craft End-to-End Solutions for Building Sustainable, Scalable, and Impactful Social and Technical Systems.",
  og: {
    title: "Manish Thapa Portfolio",
    type: "website",
    url: "https://thapamanish.github.io/#/home",
  },
};

//Home Page
const greeting = {
  title: "Manish Thapa",
  logo_name: "Manish Thapa",
  nickname: "Software Engineer",
  subTitle:
    "Dedicated Software Engineer Driven to Craft End-to-End Solutions for Building Sustainable, Scalable, and Impactful Social and Technical Systems.",
  resumeLink:
    "https://drive.google.com/file/d/14wUUMyfRiq2ddJUsck0wVWW1JRP3gA5A/view?usp=sharing",
  portfolio_repository: "https://github.com/Thapamanish",
  githubProfile: "https://github.com/Thapamanish",
};

const socialMediaLinks = [
  /* Social Media Link */
  {
    name: "Github",
    link: "https://github.com/Thapamanish",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manish-thapa-0705aa1a3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:iammanish041@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iammanish041/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/iammanish042",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/thapamanish042",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/thapamanish042",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. Ambedkar Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in Computer Science",
      logo_path: "ait_logo.png",
      alt_name: "Dr. AIT, Bangalore",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Graduated with a Computer Science degree, honored with a gold medal for outstanding achievements, and gained proficiency in programming languages like Java and Python.",
        "⚡ Acquired a comprehensive skill set encompassing operating systems, networking, database management, and software engineering principles.",
        "⚡ This education forms the cornerstone of my accomplishments, empowering me to excel in the field of Computer Science.",
      ],
      website_link: "https://www.drait.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.svg",
      certificate_link:
        "https://coursera.org/share/8ca31cf5db177f3a9b0237c6fc72476b",
      alt_name: "Amazon Web Services",
      color_code: "#fff",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "- University of California, San Diego",
      logo_path: "sandiego_logo.png",
      certificate_link:
        "https://coursera.org/share/b2d15dd198a8a8c5602a29e48fa822f2",
      alt_name: "sandiego University",
      color_code: "#fff",
    },
    {
      title: "Robotics and Embedded Systems Workshop",
      subtitle: "- IIT Delhi",
      logo_path: "robotics_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ndv3ZNBIHry4DuuEqZy93IQYokU7cR_r/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#C8F6ED",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've journeyed through roles as a Web Developer, Backend Engineer, and committed contributor, driven by a passion for cloud domains and Backend Development, all the while cherishing my enduring love for Frontend work. My experiences highlight my versatility and dedication to both the technical and creative aspects of the field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Target",
          company_url: "https://www.target.com//",
          logo_path: "target_logo.png",
          duration: "Mar 2022 - Present",
          location: "Bangalore, Karnataka",
          description:
            "Transitioning from intern to a full-time software developer at Target, I've dedicated a year to refining my craft within the esteemed \"Enterprise Carts and Checkouts\" team. The backdrop of a retail giant has enhanced my technical acumen, especially in Kotlin, Micronaut, and Spring Boot. This role has also evolved into a leadership opportunity, where I've learned to effectively manage stress while maintaining peak performance. With exposure to technologies like Kafka, React, ELK, and Groovy, my toolkit expanded significantly. Guided by agile principles, I've further cultivated my ability to lead and collaborate within a high-stakes environment.",
          color: "#cc0100",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "TII Tech Intern ",
          company: "Target",
          company_url: "https://www.target.com/",
          logo_path: "target_logo.png",
          duration: "Mar 2022 - Aug 2022",
          location: "Bangalore, Karnataka",
          description:
            'During my five-month internship at Target, a retail giant in the US, I embarked on a transformative journey in software development. As a member of the core backend "Add to Carts and Checkouts" team, I immersed myself in languages like Kotlin, Micronaut, and Spring Boot. This exposure not only fortified my technical prowess but also provided me with leadership opportunities. Collaborating within an agile framework, I cultivated a keen understanding of software engineering best practices.',
          color: "#cc0100",
        },
        {
          title: "Programmer Analyst Trainee",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant_logo.png",
          duration: "Jan 2022 - Mar 2022",
          location: "Bangalore, Karnataka",
          description:
            "During this enriching experience, I collaborated closely with industry experts to master Data Warehousing and Data Modeling. My journey involved embracing new, in-demand technologies and showcasing progress through regular assessments. I delved deep into IAAS, SAAS, and PAAS cloud offerings, and applied my knowledge to a real-time project—loading a sample Data Warehouse for an Educational Institution. By analyzing data and generating insightful reports, I actively contributed to decision-making. With hands-on proficiency in tools like IICS, Informatica PowerCenter, and Python, I demonstrated exceptional problem-solving, both independently and within a team. Effective communication and strong work ethics were the driving forces behind consistently surpassing expectations.",
          color: "#3f77ce",
        },
        {
          title: "Web Development Intern",
          company: "Softmantissa Software Solutions",
          company_url: "https://www.softmantissa.com/index.php#portfolio",
          logo_path: "softmantissa_logo.png",
          duration: "Nov 2021 - Dec 2021",
          location: "Bangalore, Karnataka",
          description:
            "I designed, developed, and maintained websites and software applications aligned with client needs and industry standards. Collaborating within cross-functional teams, I resolved conflicts and prioritized tasks for superior deliverables. My adeptness in cutting-edge web applications and programming practices translated into improved user experiences and website performance. Thorough technical analysis ensured project success, while my proficiency in languages like HTML, CSS, JavaScript, and frameworks like React and Node.js delivered efficient solutions. Rigorous testing and effective communication with clients ensured error-free outcomes. My commitment to continuous learning kept me at the forefront of web development trends and technologies.",
          color: "#FDA819",
        },
        {
          title: "Web Development and Design Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "spark_logo.png",
          duration: "Nov 2020 - Dec 2020",
          location: "Bangalore, Karnataka",
          description:
            "I immersed myself in machine learning by applying diverse models using Python libraries like Scikit-learn, TensorFlow, and Keras. Analyzing extensive datasets, I harnessed visualizations to uncover trends and patterns. Hands-on work with data sets enriched my skills in predictive model development. Collaborating with seasoned professionals and fellow interns honed my communication and teamwork abilities. Real-world application of theoretical knowledge nurtured my professional acumen and entrepreneurial mindset. Immensely thankful to The Sparks Foundation for this enriching opportunity that has prepared me for future career endeavors.",
          color: "#000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Contributor/Participant",
          company: "GirlScript Summer of Code",
          company_url: "https://gssoc.girlscript.tech/",
          logo_path: "gssoc_logo.png",
          duration: "Jan 2021 - Jun 2021",
          location: "Bangalore, Karnataka",
          description:
            "I actively advanced an open-source project, collaborating with a dynamic developer team to amplify my skills in Python, Java, and JavaScript. Leveraging Git and GitHub, I embraced version control and project management best practices. Engaging in mentor-led discussions improved my work and teamwork abilities. Within a diverse team, I nurtured communication and collaboration skills. Through this journey, I established a valuable network of tech mentors and peers, fostering future career growth. By supporting diversity and inclusivity in technology, I contributed to a fairer and more equitable tech community.",
          color: "#F9D025",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Say Hi!!",
    profile_image_path: "animated_manish.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Backend, Frontend, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "My first Ever Portfolio",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://manishthapa.herokuapp.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Butwal, Nepal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HxC2UpsXfWwdowdh6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9108390566",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
