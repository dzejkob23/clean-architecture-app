import {UseCase} from "./UseCase";
import {Result} from "../../model/Result";

/**
 * An abstract class for a UseCase (Interactor in terms of Clean Architecture).
 * This class represents an execution unit for different use cases (this means that any use case
 * within the application should extend this class).
 *
 * This [UseCaseResult] returns [T] wrapped by [Result]
 */
export abstract class UseCaseResult<OutputType extends any, Params> extends UseCase<Result<OutputType>, Params> {
//    There is nothing to add.
}
