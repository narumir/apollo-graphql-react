import {
  SSM,
} from "aws-sdk";
import type {
  GetParametersByPathRequest,
} from "aws-sdk/clients/ssm";
import type {
  StringMap,
} from "src/types";

const ssm = new SSM({ region: "ap-northeast-2" });
const product = "todo";
const stage = process.env.NODE_ENV;
const options: GetParametersByPathRequest = {
  Path: `/${product}/${stage}`,
  WithDecryption: true,
};

export const assignEnvironment = async (): Promise<void> => {
  if (process.env.NODE_ENV === "local") {
    return;
  }
  const {
    Parameters,
  } = await ssm.getParametersByPath(options).promise();
  if (Parameters == null) {
    return;
  }
  const initialValue: StringMap = {};
  const params = Parameters.reduce((p, c) => {
    const name = getParameterName(c.Name ?? "");
    p[name] = c.Value ?? "";
    return p;
  }, initialValue);
  Object.assign(process.env, params);
};

const getParameterName = (
  name: string,
) => {
  const list = name.split("/");
  return list[list.length > 0 ? list.length - 1 : 0];
};
