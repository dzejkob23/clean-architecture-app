import {UseCase} from "./UseCase";
import {Result} from "../../model/Result";

/**
 * An UseCase class with not parameters.
 *
 * This [UseCaseResultNoParams] returns [OutputType] wrapped by [Result]
 */
export abstract class UseCaseResultNoParams<OutputType extends any> extends UseCase<Result<OutputType>, void> {

    invoke(): Result<OutputType> {
        return super.invoke(undefined)
    }
}
