// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "An up-to-date list is available on Google Scholar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-patents",
          title: "Patents",
          description: "Patents filed while at Microsoft Research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-finished-my-ms-by-research-from-iiit-hyderabad",
          title: 'Finished my MS by research from IIIT Hyderabad',
          description: "",
          section: "News",},{id: "news-started-as-a-research-fellow-at-microsoft-research-india-on-farmbeats",
          title: 'Started as a Research Fellow at Microsoft Research, India on Farmbeats',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-at-carnegie-mellon",
          title: 'Started my Ph.D. at Carnegie Mellon',
          description: "",
          section: "News",},{id: "news-presented-glitter-at-ipsn-2020-virtual",
          title: 'Presented GLITTER at IPSN 2020 (Virtual)',
          description: "",
          section: "News",},{id: "news-interned-with-networking-research-group-at-microsoft-research-redmond",
          title: 'Interned with networking research group at Microsoft Research, Redmond',
          description: "",
          section: "News",},{id: "news-passed-my-ph-d-qualification-exams-officially-a-ph-d-candidate-now",
          title: 'Passed my Ph.D. qualification exams. Officially a Ph.D. candidate now',
          description: "",
          section: "News",},{id: "news-media-coverage-of-lumos-by-der-spiegel-hackernews-blog1-and-blog2",
          title: 'Media coverage of  Lumos           by  Der Spiegel,   Hackernews             ,                Blog1, and Blog2',
          description: "",
          section: "News",},{id: "news-presented-lumos-at-the-usenix-security-conference-in-boston",
          title: 'Presented Lumos at the USENIX Security conference in Boston',
          description: "",
          section: "News",},{id: "news-lumen-accepted-at-conext-2022",
          title: 'Lumen accepted at CoNEXT 2022',
          description: "",
          section: "News",},{id: "news-joined-aws",
          title: 'Joined AWS',
          description: "",
          section: "News",},{id: "news-introducing-generative-ai-troubleshooting-for-apache-spark-in-aws-glue",
          title: 'Introducing generative AI troubleshooting for Apache Spark in AWS Glue',
          description: "",
          section: "News",},{id: "projects-cricket-annotation-work-by-washington-post-ndtv-stack-and-register",
          title: 'Cricket Annotation work by                            Washington Post,                 NDTV,                Stack, and                                Register',
          description: "",
          section: "Projects",},{id: "projects-satya-nadella-talking-about-our-work-on-cricket-annotation",
          title: 'Satya Nadella talking about our work on  Cricket Annotation',
          description: "",
          section: "Projects",},{id: "projects-bill-gates-talking-about-farmbeats-on-gatesnotes",
          title: 'Bill Gates talking about FarmBeats on  GatesNotes',
          description: "",
          section: "Projects",},{id: "projects-lumos-by-der-spiegel-hackernews-technical-ly-and-trak-in",
          title: 'Lumos           by  Der Spiegel,   Hackernews             ,                Technical.ly, and Trak.in',
          description: "",
          section: "Projects",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%68%75%6C%61%6E%61%6E%64%73%68%61%72%6D%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rahulanandsharma", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gQBsCpsAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/rahul_ans", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("assets/pdf/rahul_resume.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
