const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "https://scanner.automatly.io",
    token: "sqp_03f76ce58d40ba3dd9c4dbe5a578857ec03d8651",
    options: {
      "sonar.projectKey": "NAC-jewellers-Stylori-UI",
      "sonar.sources": "src",
    },
  },
  () => process.exit()
);
