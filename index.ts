#!/usr/bin/env bun

import {Command} from "commander";
import {runStart} from "./tui/runStart";

const program = new Command();

program
    .name("deskpilot")
    .version("1.0.0")
    .description("A simple CLI tool for managing your desk")

program
    .command("start")
    .description("Show the banner and pick cli or telegram mode")
    .action(async () =>{
        await runStart();
    }
);

await program.parseAsync(process.argv);