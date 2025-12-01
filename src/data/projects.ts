import type { ProjectType } from "../types/ProjectType";

export const projects: ProjectType[] = [
  {
    img: "/images/chat app.png",
    title: {
      en: "Zaajel - Real-time Chat App",
      ar: "زاجل - تطبيق دردشة في الوقت الحقيقي",
    },
    description: {
      en: "Real-time chat application with user authentication, private messaging, and group chats using Firebase.",
      ar: "تطبيق دردشة في الوقت الحقيقي مع مصادقة المستخدم، الرسائل الخاصة، والدردشات الجماعية باستخدام Firebase.",
    },
    liveDemoLink: "https://zaajel.vercel.app/",
    githubLink: "",
    finished: false,
  },
  {
    img: "/images/postify.png",
    title: {
      en: "Postify - Social Media App",
      ar: "Postify - تطبيق وسائل التواصل الاجتماعي",
    },
    description: {
      en: "Modern social media app with real-time updates, user authentication, and interactive features.",
      ar: "تطبيق وسائل تواصل اجتماعي حديث مع تحديثات في الوقت الحقيقي، مصادقة المستخدم، وميزات تفاعلية.",
    },
    liveDemoLink: "https://postify-lyart.vercel.app/",
    githubLink: "https://github.com/mostafaelfawal/Postify",
    finished: false,
  },
  {
    img: "/images/dot-note.png",
    title: {
      en: "Dot Note – Full-Stack Notes Application",
      ar: "Dot Note – تطبيق ملاحظات كامل",
    },
    description: {
      en: "Full-stack notes app with auth, CRUD, search, tags, validation, and notifications using Next.js and MongoDB.",
      ar: "تطبيق ملاحظات متكامل يدعم التسجيل والدخول، CRUD، البحث، الوسوم، التحقق من المدخلات، والإشعارات باستخدام Next.js وMongoDB.",
    },
    liveDemoLink: "https://dot-note-front.vercel.app/",
    githubLink: "https://github.com/mostafaelfawal/my-note",
    finished: true,
  },
  {
    img: "/images/todos.png",
    title: {
      en: "ToDoList – Animated Productivity App",
      ar: "ToDoList - تطبيق ادارة مهام",
    },
    description: {
      en: "Interactive To-Do app with cartoon UI, filters, animations, sounds, themes, and progress tracking using Next.js and MongoDB.",
      ar: "تطبيق مهام تفاعلي بواجهة كرتونية، يدعم الفلترة، الأنيميشن، الأصوات، الثيمات، وتتبع التقدّم باستخدام Next.js وMongoDB.",
    },
    liveDemoLink: "https://store-hub-iota.vercel.app/",
    githubLink: "https://github.com/mostafaelfawal/StoreHub",
    finished: true,
  },
  {
    img: "/images/E-commerce.png",
    title: {
      en: "StoreHub - E-commerce & Admin Dashboard",
      ar: "StoreHub - تجارة إلكترونية و لوحة إدارة",
    },
    description: {
      en: "Modern shopping experience with React and Tailwind integration.",
      ar: "تجربة تسوق حديثة باستخدام React و Tailwind.",
    },
    liveDemoLink: "https://store-hub-iota.vercel.app/",
    githubLink: "https://github.com/mostafaelfawal/StoreHub",
    finished: true,
  },
  {
    img: "/images/Estate landing page.png",
    title: {
      en: "Amjaad - Estate landing page",
      ar: "امجاد - صفحة هبوط للعقارات",
    },
    description: {
      en: "Responsive real estate landing page with smooth animations and modern UI.",
      ar: "صفحة هبوط للعقارات متجاوبة مع رسوم متحركة سلسة وتصميم حديث.",
    },
    liveDemoLink: "https://amjaad-estate-lading.vercel.app/",
    githubLink: "https://github.com/mostafaelfawal/Amjaad-Lading-Page",
    finished: true,
  },
];
