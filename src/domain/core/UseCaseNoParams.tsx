import {UseCase} from "./UseCase";

/**
 * An UseCase class with not parameters.
 */
export abstract class UseCaseNoParams<OutputType> extends UseCase<OutputType, void> {

    /**
     * Executes appropriate implementation of [UseCaseNoParams]
     */
    invoke(): OutputType {
        return super.invoke(undefined)
    }
}
