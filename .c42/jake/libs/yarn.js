const { asyncTask, execCmdWithParams } = require("./utils");

module.exports = (baseCmd = "yarn") => {
  desc("yarn");
  asyncTask("yarn", (...params) => execCmdWithParams(baseCmd, params));

  namespace("yarn", () => {
    desc("yarn install");
    asyncTask("install", (...params) =>
      execCmdWithParams(`${baseCmd} install`, params)
    );

    desc("yarn upgrade");
    asyncTask("upgrade", (...params) =>
      execCmdWithParams(`${baseCmd} upgrade`, params)
    );

    desc("Add a package : yarn:add[packageName]");
    asyncTask("add", (...params) =>
      execCmdWithParams(`${baseCmd} add`, params)
    );

    desc("Add a dev package : yarn:add[packageName]");
    asyncTask("addDev", (...params) => {
      params.unshift("-D");
      execCmdWithParams(`${baseCmd} add`, params);
    });

    desc("yarn:remove[packageName]");
    asyncTask("remove", (...params) =>
      execCmdWithParams(`${baseCmd} remove`, params)
    );

    desc("yarn build");
    asyncTask("build", (...params) =>
      execCmdWithParams(`${baseCmd} build`, params)
    );
  });
};
