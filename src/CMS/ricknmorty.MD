---
title: Rick and Morty Search
type: project
description: A simple app made with cool stuff
github: https://github.com/danj-O/RicknMortySearch
live: https://danj-o.github.io/RicknMortySearch/
screenshot: rnmsearch.png

---

<div class="project-header">
  <h1> Rick and Morty Search App </h1>
  <p>Find your favorite Rick and Morty characters.</p>
</div>

<div class="list-section">
  <h2 class="tech-head">Tech Used</h2>
  <ul class='tech'>
    <li>React</li>
    <li>Styled components</li>
    <li>RnM API</li>
    <li>GH Pages</li>
  </ul>

</div>

<div class="list-section">
  <h2 class="feature-head">Notable Features</h2>
  <ul class='features'>
    <li>fetches data from RnM API</li>
    <li>searchable results</li>
    <li>Responsive Design</li>
  </ul>
</div>

<div class="par-section">
  <h2>Project Difficulties</h2>
  <p>
    Apps made before this one were all based on data that I already had.  For this project, I needed to fetch data from an API, clearly present the data and make it easily searchable.
  </p> 
</div>

<div class="par-section">
  <h2>Solution</h2>
  <p>
    To fetch from the API, I learned to use promises to take the data, parse it into a JSON, and make it useable in my app.  To make this all searchable, a searchbar was added.  The user input is dynamically saved to state and compared to the data.  As for styling, react components were used because they keep local scope so no class names or ids get overwritten. 
  </p>
</div>
