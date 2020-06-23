import type {
  Request,
  Response,
} from "express"

const check = async (
  req: Request,
  res: Response,
) => {
  return res.status(200).send();
}

export const HealthController = {
  check,
};
