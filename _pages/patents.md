---
layout: page
permalink: /patents/
title: Patents
description: Patents filed while at Microsoft Research.


years: [2022,2021]

nav: true
nav_order: 2
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f patents -q @*[year={{y}}]* %}
{% endfor %}

</div>
