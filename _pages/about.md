---
layout: about
title: About
permalink: /
subtitle: >
  ML Systems Engineer · <a href="https://cloud.google.com/">Google Cloud</a><br>
  <span class="text-muted" style="font-size: 0.92rem; font-weight: 400;">LLM Serving Architecture · Accelerator Scaling (TPU/GPU) · Hardware-Software Co-Design</span>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Mountain View, CA</p>
    <p><a href="mailto:rahulanandsharma@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a> · <a href="/assets/pdf/rahulanand_resume.pdf" target="_blank"><i class="fa-solid fa-file-pdf"></i> Resume</a></p>

news: false # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: # leave blank to include all the blog posts
---

I am an ML Systems Engineer and Researcher at [Google Cloud](https://cloud.google.com/), working at the intersection of LLM serving architecture, compiler runtimes, and distributed accelerator infrastructure. My work focuses on co-designing serving stacks and multi-node accelerator systems to push the latency–throughput Pareto frontier of frontier models across TPUs and GPUs.

At Google Cloud, I lead inference optimization initiatives for **Gemini** across GPU and TPU fleets—including architecting intra-node disaggregated serving for air-gapped Sovereign Cloud deployments on **Google Distributed Cloud (GDC)**—and drove multi-cube interconnect scaling, collective communication microbenchmarking, and Day-1 model enablement for **TPU v7 (Ironwood)** (*Google Cloud Tech Impact Award, 2026*).

Prior to Google, I was an Applied Scientist at **AWS**, where I architected Generative AI root-cause analysis for Apache Spark at hyperscale ([Amazon Q](https://aws.amazon.com/blogs/big-data/introducing-generative-ai-troubleshooting-for-apache-spark-in-aws-glue-preview/)) and active verification systems for cloud network security. I earned my Ph.D. in Electrical & Computer Engineering from **Carnegie Mellon University** (advised by [Vyas Sekar](https://users.ece.cmu.edu/~vsekar/) and [Anthony Rowe](https://users.ece.cmu.edu/~agr/), CIT Dean's Fellow) and previously built distributed edge-AI and IoT systems at **Microsoft Research** ([FarmBeats](https://www.microsoft.com/en-us/research/project/farmbeats-iot-agriculture/), [DeepEdge](https://www.usenix.org/conference/nsdi19)). My research spans [15+ publications](/publications/) at venues including SIGCOMM, NSDI, and USENIX Security, and [2 US patents](/patents/).

---

#### Production Systems & Technical Scope

<div class="mt-3 mb-4">
  <div class="mb-3 pb-3 border-bottom" style="border-color: var(--global-divider-color) !important;">
    <div class="d-flex justify-content-between align-items-baseline flex-wrap">
      <h6 class="font-weight-bold mb-1" style="font-size: 1rem;">Gemini Serving Architecture & Sovereign Cloud Infrastructure</h6>
      <span class="text-muted" style="font-size: 0.82rem; font-family: monospace;">Google Cloud · 2025–Present</span>
    </div>
    <p class="text-muted small mb-0">
      End-to-end latency, KV-cache efficiency, and runtime bottleneck optimization for Gemini models on GPU and TPU clusters. Spearheaded the intra-node (4:4 split) prefill/decode disaggregated serving architecture on bare-metal nodes for Google Distributed Cloud (GDC), resolving strict memory isolation and control-plane constraints in air-gapped environments.
    </p>
  </div>

  <div class="mb-3 pb-3 border-bottom" style="border-color: var(--global-divider-color) !important;">
    <div class="d-flex justify-content-between align-items-baseline flex-wrap">
      <h6 class="font-weight-bold mb-1" style="font-size: 1rem;">TPU v7 (Ironwood) Multi-Cube Scaling & Day-1 Enablement</h6>
      <span class="text-muted" style="font-size: 0.82rem; font-family: monospace;">Google Cloud · Tech Impact Award 2026</span>
    </div>
    <p class="text-muted small mb-0">
      Architected the NPI microbenchmarking and continuous regression suite bridging internal Borg clusters and Cloud XLA/JAX runtimes. Modeled ICI/DCN collective communication limits across multi-cube topologies and delivered Day-1 third-party model optimization (Llama 3, DeepSeek) for tier-1 frontier AI evaluations.
    </p>
  </div>

  <div class="mb-1">
    <div class="d-flex justify-content-between align-items-baseline flex-wrap">
      <h6 class="font-weight-bold mb-1" style="font-size: 1rem;">Hyperscale Distributed Diagnostics & Network Verification</h6>
      <span class="text-muted" style="font-size: 0.82rem; font-family: monospace;">AWS · 2023–2025</span>
    </div>
    <p class="text-muted small mb-0">
      Architected and launched LLM-driven automated root-cause analysis (<a href="https://aws.amazon.com/blogs/big-data/introducing-generative-ai-troubleshooting-for-apache-spark-in-aws-glue-preview/" target="_blank">Amazon Q</a>) across AWS Glue and EMR, reducing Spark job failure resolution from days to minutes, alongside high-throughput synthetic traffic validation for cloud network ACL compliance.
    </p>
  </div>
</div>
