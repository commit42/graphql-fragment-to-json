const execConfig = { interactive: true };

const asyncTask = (cmd, callback) => {
  task(cmd, { async: true }, callback);
};

const buildCmd = (cmd, params = "") => {
  if (Array.isArray(params)) {
    params = params.join(" ");
  }
  return cmd + (params && params.length ? ` ${params}` : "");
};

const execCmdWithParams = (cmd, params) => {
  jake.exec(buildCmd(cmd, params), () => complete(), execConfig);
};

module.exports = {
  asyncTask,
  buildCmd,
  execCmdWithParams,
  execConfig
};
