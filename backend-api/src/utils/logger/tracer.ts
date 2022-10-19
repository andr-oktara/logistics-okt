import rtracer from "cls-rtracer";

export class Tracer {
  public get traceId(): string {
    return rtracer.id() as string;
  }
}
