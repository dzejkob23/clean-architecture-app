import {container} from "tsyringe";
import {GetUserLocallyUseCase} from "../domain/feature/user/use_case/GetUserLocallyUseCase";
import {SetUserUseCase} from "../domain/feature/user/use_case/SetUserUseCase";
import {GetUserFromCloudUseCase} from "../domain/feature/user/use_case/GetUserFromCloudUseCase";

/**
 * Registers domain layer injectable objects.
 */
export function initModuleDomain() {

    container.register(GetUserLocallyUseCase, {useClass: GetUserLocallyUseCase})
    container.register(SetUserUseCase, {useClass: SetUserUseCase})
    container.register(GetUserFromCloudUseCase, {useClass: GetUserFromCloudUseCase})

}