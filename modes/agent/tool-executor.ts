import fs from "node:fs";
import path from "node:path";
import {homedir} from "node:os";
import {spawnSync} from "node:child_process";
import type {AgentConfig, ActionLog} from "./types";
import {ActionTracker} from "./action-tracker";

export async function ToolExecutor(){};