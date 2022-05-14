---
aliases: []
image_link: <% await tp.system.prompt("Enter the Person Portrait") %>
tags: 
---
<% await tp.user.generate_Portrait(tp.file.title, tp.frontmatter.image_link) %>