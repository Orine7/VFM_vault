<%* var img_url = await tp.system.prompt("Enter the Person Portrait") -%>
<%* var bornDate = await tp.system.prompt("Enter the date of Birth") -%>
<%* var deathDate = await tp.system.prompt("Enter the date of Death") -%>
<%* var startDate = await tp.system.prompt("Enter the year they started to influence") -%>
<%* var endDate = await tp.system.prompt("Enter the year they ended his influence") -%>
<%* var poptype = await tp.system.prompt("Enter  the poptype") -%>
<%* var occupation = await tp.system.prompt("Enter the occupation") -%>
<%* var state = await tp.system.prompt("Enter the state of birth") -%>
<%* var actingRegion = await tp.system.prompt("Enter the region it influenced") -%>
<%* var traits = await tp.system.prompt("Enter the probable traits") -%>

---
aliases: []
tags: 
- Important/People
---

<% await tp.user.generate_Portrait(tp.file.title, img_url,

bornDate,

deathDate,

startDate,

endDate,

poptype,

occupation,

state,

actingRegion,

traits) %>

History:

Relevant Events:

Relevant Characters:

Other Pertinent Items: