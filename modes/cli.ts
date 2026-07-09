import chalk from "chalk";
import {select, isCancel} from "@clack/prompts";
import { runAgentMode } from "./agent/orchestrator";

export async function runCliMode() {
    while(true){
        const mode = await select({
            message : "Choose CLI mode",
            options : [
                {value : "agent" , label : "Agent Mode"},
                {value : "plan" , label : "Plan Mode"},
                {value : "ask" , label : "Ask Mode"},
                {value : "back" , label : "Back to main menu"}
            ],
        });
        if(isCancel(mode) || mode === "back") return;

        if(mode === "agent"){
            await runAgentMode();
        }
        if(mode === "plan"){
            console.log(chalk.dim("\nStarting plan mode...\n"));
        }
        if(mode === "ask"){
            console.log(chalk.dim("\nStarting ask mode...\n"));
        }

        if(mode !== "agent" && mode !== "plan" && mode !== "ask"){
            console.log(chalk.yellow("\nInvalid mode selected. Please try again.\n"));
        }
    }
}