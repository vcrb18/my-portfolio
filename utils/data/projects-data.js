// import ayla from '/public/image/ayla.jpg';
import crefin from "/public/image/crefin.jpg";
// import realEstate from '/public/image/real-estate.jpg';
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Aplicación de Finanzas Personales",
    description:
      "Inicié un proyecto personal de aplicación de finanzas para gestionar mis finanzas, que luego presenté en un curso de desarrollo de software formado por un equipo de 7 personas. Lideré el frontend en React Native y Expo, realizando el diseño en Figma con un enfoque amigable y profesional. Apliqué buenas prácticas de desarrollo siguiendo la metodología Scrum. Posteriormente, desplegué la aplicación en la App Store mediante TestFlight, logrando que 20 usuarios probaran la aplicación.",
    tools: [
      "Expo",
      "React Native",
      "Typescript",
      "Figma",
      "OpenAI API",
      "EC2",
      "Nginx",
      "Django",
      "PostgreSQL",
      "Render",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Plataforma para Fundación de Mascotas",
    description:
      "Lideré el desarrollo frontend en Typescript y React para una fundación de mascotas (Mascotalerta). Coordiné eficazmente con el equipo backend y el administrador del proyecto, mientras organizaba a mi equipo para implementar las funcionalidades acordadas con el cliente. El proyecto fue desplegado en AWS utilizando S3y CloudFront.",
    tools: [
      "React",
      "TypeScript",
      "Bootstrap",
      "PostgreSQL",
      "Google Maps",
      "MySQL",
      "AWS S3",
      "AWS Cloudfront",
    ],
    role: "Líder de Frontend",
    code: "",
    demo: "",
    image: travel,
  },
  // Sacar
  // {
  //     id: 3,
  //     name: 'AI Powered Real Estate',
  //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
  //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
  //     code: '',
  //     role: 'Full Stack Developer',
  //     demo: '',
  //     image: realEstate,
  // },
  // {
  //     id: 4,
  //     name: 'Newsroom Management',
  //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  // }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
