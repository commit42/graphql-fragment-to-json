const { asyncTask, execCmdWithParams } = require("./utils");
const dc = "docker-compose";

namespace("docker", () => {
  desc("Lance docker-compose build");
  asyncTask("build", (...params) => execCmdWithParams(`${dc} build`, params));

  desc("Lance docker-compose up");
  asyncTask("run", (...params) => execCmdWithParams(`${dc} up -d`, params));

  desc("Lance docker-compose restart");
  asyncTask("restart", (...params) =>
    execCmdWithParams(`${dc} restart`, params)
  );
});
