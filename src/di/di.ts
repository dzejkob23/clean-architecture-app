import {initModuleApp} from "./moduleApp";
import {initModuleDomain} from "./moduleDomain";
import {initModuleData} from "./moduleData";

/**
 * Contains registration of injectable objects cross all layers.
 * This needs to be called as a first thing before the app starts.
 * The file that calls this method also needs to import \"reflect-metadata\".
 */
export function initDi() {
    initModuleApp()
    initModuleDomain()
    initModuleData()
}