// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  //switch case to link the correct badge to the correct license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";
  //conditional if "None" was selected
  if (license != "None") {
    licenseSect += "## License\n"
    licenseSect += "See " + renderLicenseLink(license) + " for more information on this license\n";
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
  // add title
  let markdown = "# " + data.title + "\n";
  // add license badge
  markdown += renderLicenseBadge(data.license) + "\n";
  // add table of contents
  markdown += "## Table of Contents\n";
  for (let i=0; i<sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";
  // add inputed description
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";
  // add inputed installation
  markdown += "## " + sections[1] + "\n";
  markdown += data.install + "\n";
  // add inputed usage
  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";
  // add inputed contributing
  markdown += "## " + sections[3] + "\n";
  markdown += data.guidelines + "\n";
  // add inputed testing
  markdown += "## " + sections[4] + "\n";
  markdown += data.test + "\n";
  // add rendered license
  markdown += renderLicenseSection(data.license) + "\n";
  // add inputed github and email
  markdown += "## " + sections[6] + "\n";
  markdown += "Github Profile Link: (https://github.com/" + data.username + ")\n";
  markdown += "Email: " + data.email + "\n";
  return markdown;
}

module.exports = generateMarkdown;