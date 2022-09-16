/**
 * An abstract class for a UseCase (Interactor in terms of Clean Architecture).
 * This class represents an execution unit for different use cases (this means that any use-case
 * within the application should extend this class).
 */
export abstract class UseCase<OutputType, Params> {

    /**
     * Executes appropriate implementation of [UseCase]
     *
     * @param params Set of input parameters.
     * @return type [OutputType] of parameter. In the most common way the [OutputType] is wrapped to a special
     * use-case implementation
     */
    async invoke(params: Params): Promise<OutputType> {
        return this.doWork(params)
    }

    /**
     * Inner business logic of [UseCase]
     *
     * @param params Set of input parameters
     * @return type [OutputType] of parameter. In the most common way the [OutputType] is wrapped to a special
     * use-case implementation.
     */
    abstract doWork(params: Params): Promise<OutputType>

}
