import {UseCaseNoParams} from "./core/UseCaseNoParams";
import {DataRepository} from "./DataRepository";

export class GetDataUseCase extends UseCaseNoParams<number> {

    private dataRepository: DataRepository;

    constructor(
        dataRepository: DataRepository
    ) {
        super();
        this.dataRepository = dataRepository
    }

    doWork(params: void): number {
        return this.dataRepository.getData();
    }
}

// FIXME - Declaration example of the parameters definition
// namespace GetDataUseCase {
//     export class Params {
//         constructor() {
//             // TODO - fill it with some data
//         }
//     }
// }
