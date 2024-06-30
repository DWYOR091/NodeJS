import { error } from "console";
import process from "process";

process.report.reportOnUncaughtException = true
process.report.reportOnSignal = true
process.report.reportOnFatalError = true
process.report.filename = "report.json"

function sampleError() {
    throw new Error("Ups")
}

sampleError()