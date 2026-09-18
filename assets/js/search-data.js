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
          description: "Granted US patents on distributed edge AI workload scheduling and sensor telemetry systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae &amp; technical background. Download the PDF version using the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
          section: "News",},{id: "projects-broadcast-sports-ai-research-covered-by-the-washington-post-ndtv-and-the-register",
          title: 'Broadcast sports AI research covered by The Washington Post, NDTV, and The Register....',
          description: "",
          section: "Projects",},{id: "projects-sports-ai-research-featured-by-microsoft-ceo-satya-nadella-in-his-keynote-address",
          title: 'Sports AI research featured by Microsoft CEO Satya Nadella in his Keynote Address....',
          description: "",
          section: "Projects",},{id: "projects-farmbeats-highlighted-by-bill-gates-on-gatesnotes-can-computers-help-feed-the-world",
          title: 'FarmBeats highlighted by Bill Gates on GatesNotes: Can Computers Help Feed the World?...',
          description: "",
          section: "Projects",},{id: "projects-lumos-hidden-device-localization-featured-on-the-front-page-of-the-hacker-news-der-spiegel-and-technical-ly",
          title: 'Lumos hidden device localization featured on the front page of The Hacker News,...',
          description: "",
          section: "Projects",},{id: "projects-aws-official-launch-architected-and-introduced-generative-ai-troubleshooting-for-apache-spark-in-aws-glue-amazon-q",
          title: 'AWS Official Launch: Architected and introduced Generative AI troubleshooting for Apache Spark in...',
          description: "",
          section: "Projects",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%68%75%6C%61%6E%61%6E%64%73%68%61%72%6D%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rahul-anand", "_blank");
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
          window.open("/assets/pdf/rahulanand_resume.pdf", "_blank");
        },
      },];
