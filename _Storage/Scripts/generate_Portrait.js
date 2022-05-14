function timeCalculation(startDate, enddate) {
  var startDate = new Date(startDate)
  var enddate = new Date(enddate)
  var age = enddate.getFullYear() - startDate.getFullYear()
  var m = enddate.getMonth() - startDate.getMonth()
  if (m < 0 || (m === 0 && enddate.getDate() < startDate.getDate())) {
    age--
  }
  return age
}

function generatePortrait(
  name,
  img,
  birthDate,
  deathDate,
  startDate,
  endDate,
  poptype,
  occupation,
  state,
  actingRegion,
  traits,
) {
  return `<table width=100% style="border-collapse: collapse; border: none;" >
          <tbody>
          <tr style="border: none;">
              <td width=50% style="border: none;">Name: ${name} </td>
              <td rowspan="6" width=50% style="border: none;">
                  <img src="${img}" style="max-height: 400px; max-width: 400px;" >
              </td>
          </tr>
          <tr>
            <td>
              Lifetime: ${birthDate} - ${deathDate} ${timeCalculation(
    bornDate,
    deathDate,
  )} Years
            <br>
              Acting Years: ${startDate} - ${endDate} ${timeCalculation(
    startDate,
    endDate,
  )}
            </td>
          </tr>
          <tr>
            <td>Pop Type: ${poptype} </td>
          </tr>
          <tr>
            <td>Occupation: ${occupation} </td>
          </tr>
          <tr>
            <td>State of Birth: ${state} <br>
            Acting Region: ${actingRegion} </td>
          </tr>
          <tr>
            <td>Traits: ${traits} </td>
          </tr>
          </tbody>
      </table>`
}

module.exports = generatePortrait
