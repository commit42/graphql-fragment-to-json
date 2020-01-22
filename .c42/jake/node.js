const yarnCmd = "docker-compose run --rm node yarn";
const { asyncTask, execCmdWithParams } = require("./libs/utils");

namespace("node", () => {
  require("./libs/yarn")(yarnCmd);

  desc("Run tests");
  asyncTask("test", (...params) =>
    execCmdWithParams(`${yarnCmd} test`, params)
  );
});
