---
aliases: []
image_link: <% await tp.system.prompt("Enter the Person Portrait") %>
tags: 
---
Yesterday: <% tp.date.yesterday("YYYY-MM-DD") %> 
Tomorrow: <% tp.date.tomorrow("YYYY-MM-DD") %>


<% await tp.user.generate_Portrait(tp.file.title, tp.frontmatter.image_link)%>