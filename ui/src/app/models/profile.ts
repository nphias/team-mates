import { Dictionary } from "../helpers/utils";
import { AgentPubKeyB64, HeaderHashB64, EntryHashB64 } from '@holochain-open-dev/core-types';

export interface Profile {
  fields: Dictionary<string>;
  nickname: string;
}

export interface AgentProfile {
  agentPubKey: AgentPubKeyB64;
  profile: Profile | undefined;
}

export interface KeyNick {
  agent_pub_key:string;
  nickname: string
}

export interface KeyValue {
  key:string;
  value: string
}

const default_avatar = "data:image/png;base64,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"


export const mockMyProfile:Profile = {nickname: "thomas",fields:{["avatar"]:""}}

export const mockMyAgentProfile:AgentProfile = {agentPubKey: "12C0kP3Cu8QRxERdKJZIqlI3y_gQuJke5qFp7Ae52L49N-vs", profile: mockMyProfile};


export const mock1Profile:Profile = {nickname: "friend1",fields:{["avatar"]:default_avatar,["age"]:"21",["nationality"]:"afgan"}}

export const mock1AgentProfile:AgentProfile = {agentPubKey: "13C0kP3Cu8QRxERdKJZIqlI3y_gQuJke5qFp7Ae52L49N-ds", profile: mock1Profile};

export const mock2Profile:Profile = {nickname: "friend2",fields:{["avatar"]:default_avatar}}

export const mock2AgentProfile:AgentProfile = {agentPubKey: "13C0kP3Cu8QRxERdKJZIqlI3y_gQuJke5qFp7Ae52L49N-es", profile: mock2Profile};

export const mock3Profile:Profile = {nickname: "friend3",fields:{["avatar"]:default_avatar}}

export const mock3AgentProfile:AgentProfile = {agentPubKey: "13C0kP3Cu8QRxERdKJZIqlI3y_gQuJke5qFp7Ae52L49N-fs", profile: mock3Profile};

export const mock4Profile:Profile = {nickname: "friend4",fields:{["avatar"]:default_avatar}}

export const mock4AgentProfile:AgentProfile = {agentPubKey: "13C0kP3Cu8QRxERdKJZIqlI3y_gQuJke5qFp7Ae52L49N-gs", profile: mock4Profile};

export const mockAgentProfiles:AgentProfile[] = [mock1AgentProfile,mock2AgentProfile,mock3AgentProfile,mock4AgentProfile];

