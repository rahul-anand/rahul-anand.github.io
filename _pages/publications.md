---
layout: page
permalink: /publications/
title: Publications
description: An up-to-date list is available on <a target='_blank' href='https://scholar.google.com/citations?user=gQBsCpsAAAAJ&hl=en'>Google Scholar</a>


years: [2022,2021,2020,2019,2018,2017,2016,2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
