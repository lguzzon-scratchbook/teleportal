import type { RawReceivedMessage, ServerContext } from "teleportal";

/**
 * Function type for resolving context from a raw message.
 */
export type ContextResolver<Context> = (message: RawReceivedMessage) => Context;

/**
 * Function type for resolving context from a raw message (with ServerContext constraint).
 */
export type ServerContextResolver<Context extends ServerContext> = (
  message: RawReceivedMessage,
) => Context;
