const execConfig = { interactive: true };

const synchronousTasks = require("jake-synchronoustasks");
require("./.c42/jake/libs/docker");
require("./.c42/jake/node");

desc("Jake");
task("default", () => {
  jake.exec("yarn c42 --tasks", execConfig);
});

desc("Installation du projet");
task("install", () => {
  synchronousTasks([
    jake.Task["docker:build"],
    jake.Task["node:yarn:install"],
    jake.Task["docker:run"]
  ]);
});

desc("Build app");
task("build", () => {
  synchronousTasks([
    jake.Task["docker:build"],
    jake.Task["node:yarn:install"],
    jake.Task["node:yarn:build"]
  ]);
});
