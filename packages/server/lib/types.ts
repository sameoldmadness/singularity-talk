import Photon from "@generated/photon";
import { Request, Response } from "express";

export interface Context {
  request: Request;
  response: Response;
  photon: Photon;
}
